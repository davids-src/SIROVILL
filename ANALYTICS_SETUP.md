# ANALYTICS_SETUP.md — SIROVILL GA4 Configuration Reference

> **Important:** This document describes what must be configured in the GA4 Admin interface.
> The code-side event firing is already implemented in `lib/analytics.ts`, `components/KapcsolatForm.tsx`, and `components/Analytics.tsx`.
> No CRM or database is used. No PII is sent to GA4.

---

## 1. Consent Mode v2 Status

The site uses **Consent Mode v2** managed entirely through `components/CookieBanner.tsx` and `components/Analytics.tsx`.

- Before consent: `analytics_storage: denied`, `ad_storage: denied` (default state)
- After user accepts via the banner: `analytics_storage: granted`, `ad_storage: granted`, `ad_user_data: granted`, `ad_personalization: granted`
- GA4 is **not loaded at all** before consent (no script injected)
- Attribution data is stored first-party in `localStorage` only — not sent to any external party before consent

---

## 2. Key Event (Conversion)

| GA4 Key Event | Trigger | Notes |
|---|---|---|
| `generate_lead` | Successful server-side form submission (`res.ok && json.success === true`) | Must be marked as a **Key event** in GA4 Admin → Events |

**Never** fire `generate_lead` on form click or client-side validation pass — only after the Nodemailer API returns `{ success: true }`.

---

## 3. Custom Events (Behaviour Tracking)

| Event Name | Trigger |
|---|---|
| `form_start` | First interaction (focus/change) on any form field |
| `form_error` | Validation failure or API error |
| `phone_click` | Click on any `tel:` link |
| `email_click` | Click on any `mailto:` link |
| `cta_click` | Click on any business CTA button/link |
| `request_type_select` | Dropdown value change for `request_type` |
| `customer_type_select` | Dropdown value change for `customer_type` |
| `service_select` | Dropdown value change for `munka` (service type) |
| `outbound_click` | Click towards other SIROTECH division domains |

---

## 4. Parameters Sent with `generate_lead`

| Parameter | Example Value | Description |
|---|---|---|
| `lead_source` | `hero`, `megoldas-uj-epites` | The `?forras=` button param |
| `form_type` | `kapcsolat_form` | Form identifier |
| `customer_type` | `Cég / Vállalkozás (B2B)` | B2B or B2C |
| `request_type` | `Új építés` | Nature of the project |
| `project_type` | `Ipari csarnok` | Property/building type |
| `service` | `Kábelezés építkezéskor` | Service dropdown selection |
| `region` | `Székesfehérvár` | Municipality text from form |
| `cta_location` | `kapcsolat_oldal` | Where on the page the form was submitted |
| `source_site` | `sirovill.hu` | Always `sirovill.hu` |
| `landing_page` | `/megoldasok/uj-epites` | First pathname in this session |

---

## 5. Custom Dimensions to Create in GA4 Admin

Navigate to: **GA4 Admin → Data display → Custom definitions → Create custom dimension**

| Dimension Name (as in GA4) | Scope | Parameter Name |
|---|---|---|
| Customer Type | Event | `customer_type` |
| Request Type | Event | `request_type` |
| Project Type | Event | `project_type` |
| Service | Event | `service` |
| Region | Event | `region` |
| CTA Location | Event | `cta_location` |
| Source Site | Event | `source_site` |
| Form Type | Event | `form_type` |

---

## 6. First-Party Attribution Storage

Stored in `localStorage` under key `sirovill_attr_data`. Contains:

```json
{
  "first_touch": {
    "utm_source": "google",
    "utm_medium": "cpc",
    "utm_campaign": "villanyszereles-bp",
    "utm_content": null,
    "utm_term": null,
    "gclid": "...",
    "gbraid": null,
    "wbraid": null,
    "landing_page": "/megoldasok/uj-epites",
    "referrer": "https://www.google.hu/",
    "timestamp": "2026-09-23T09:40:00.000Z"
  },
  "last_touch": {
    "utm_source": "direct",
    "utm_medium": null,
    ...
    "landing_page": "/kapcsolat",
    "timestamp": "2026-09-23T12:01:00.000Z"
  }
}
```

- `first_touch` is written **once** and never overwritten.
- `last_touch` is updated on every session entry that contains marketing parameters (`utm_*`, `gclid`, `gbraid`, `wbraid`, `forras`).
- Both objects are included as `body.attribution.first_touch` and `body.attribution.last_touch` in the Nodemailer email payload.
- **No personal data is stored** in localStorage.

---

## 7. Recommended GA4 Explorations

After setting up custom dimensions, the following Exploration reports are most useful:

1. **Lead Source Funnel:** `form_start` → `generate_lead` grouped by `lead_source`
2. **Customer Type Split:** `generate_lead` by `customer_type` (B2B vs B2C)
3. **Project Type Distribution:** `generate_lead` by `project_type` + `request_type`
4. **CTA Performance:** `cta_click` by `cta_location` + `cta_label`
5. **Page Contribution:** `generate_lead` by `landing_page`

---

## 8. GA4 Measurement ID

The GA4 Measurement ID is configured in `app/layout.tsx` as a hardcoded script.
To make it environment-variable driven, move it to `NEXT_PUBLIC_GA_ID` and update the script tags accordingly.

Current ID in codebase: `G-FGW9SLHR8Q` (verify with the Analytics account owner).

---

## 9. Facebook Pixel (Optional)

If `NEXT_PUBLIC_FB_PIXEL_ID` is set in `.env.local`, the Facebook Pixel is loaded after consent and fires `Lead` on `generate_lead` automatically. No extra configuration needed.
