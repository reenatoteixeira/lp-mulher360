import type { LucideIcon } from 'lucide-react';

export type ButtonLinkStyle = 'primary' | 'secondary' | 'action';
export type ButtonLinkSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonLinkIconPosition = 'left' | 'right' | 'alone';
export type ButtonLinkState = 'enabled' | 'disabled';

export interface ButtonLinkProps {
  label?: string;
  ariaLabel?: string;
  size?: ButtonLinkSize;
  style?: ButtonLinkStyle;
  icon?: LucideIcon;
  fullWidth?: boolean;
  iconPosition?: ButtonLinkIconPosition;
  state?: ButtonLinkState;
  href: string;
}
