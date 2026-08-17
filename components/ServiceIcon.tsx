import {
  Zap,
  Lightbulb,
  Wrench,
  Cable,
  Network,
  Home,
  Factory,
  type LucideProps,
} from "lucide-react";

const ICON_MAP = { Zap, Lightbulb, Wrench, Cable, Network, Home, Factory };

export type IconName = keyof typeof ICON_MAP;

export function ServiceIcon({
  name,
  ...props
}: { name: IconName } & LucideProps) {
  const Icon = ICON_MAP[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
