# ─────────────────────────────────────────────
# Stage 1: Dependency installer
# ─────────────────────────────────────────────
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --prefer-offline

# ─────────────────────────────────────────────
# Stage 2: Builder
#
# NEXT_PUBLIC_* változók build time-ban sülnek
# bele a bundle-be. A SMTP_* és egyéb szerver-
# oldali envek NEM kellenek build-kor — azokat
# csak runtime olvassa az API route (nodemailer).
#
# A NEXT_PUBLIC_GA_ID már hardcode-ban van a
# layout.tsx-ben, ezért build arg sem kell hozzá.
# Ha mégis env-alapú kellene, ide vehető fel:
#   ARG NEXT_PUBLIC_GA_ID
#   ENV NEXT_PUBLIC_GA_ID=$NEXT_PUBLIC_GA_ID
# ─────────────────────────────────────────────
FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Dummy szerver env-ek, hogy a Next.js build ne panaszkodjon
# (ezek runtime-ban felülíródnak a Portainer által adott értékekkel)
ENV SMTP_HOST=placeholder
ENV SMTP_PORT=587
ENV SMTP_SECURE=false
ENV SMTP_USER=placeholder
ENV SMTP_PASS=placeholder
ENV SMTP_FROM=placeholder
ENV SIROVILL_ADMIN_EMAIL=placeholder

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# ─────────────────────────────────────────────
# Stage 3: Runner (produkciós image)
#
# Szerver env-ek (SMTP_*, SIROVILL_ADMIN_EMAIL)
# Portainerben vannak beállítva és runtime töltődnek
# be — NEM kellenek image build-kor.
# ─────────────────────────────────────────────
FROM node:20-alpine AS runner
RUN apk add --no-cache libc6-compat
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Nem root user a biztonság kedvéért
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Standalone output + public mappa + static fájlok
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# A standalone build server.js-t generál
CMD ["node", "server.js"]
