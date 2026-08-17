import {
  Zap,
  RefreshCw,
  Wrench,
  Cable,
  Network,
  Home,
  Factory,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "../lib/services";

const ICONS: Record<IconName, LucideIcon> = {
  Zap,
  RefreshCw,
  Wrench,
  Cable,
  Network,
  Home,
  Factory,
};

export function ServiceIcon({
  name,
  size = 24,
  strokeWidth = 1.5,
  className,
  style,
}: {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const Cmp = ICONS[name];
  return <Cmp size={size} strokeWidth={strokeWidth} className={className} style={style} />;
}
