import type { LucideIcon } from 'lucide-react';

export type ButtonStyle = 'primary' | 'secondary' | 'action';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonIconPosition = 'left' | 'right' | 'alone';
export type ButtonState = 'enabled' | 'disabled';

export interface ButtonProps {
  label?: string;
  ariaLabel?: string;
  size?: ButtonSize;
  style?: ButtonStyle;
  icon?: LucideIcon;
  fullWidth?: boolean;
  iconPosition?: ButtonIconPosition;
  state?: ButtonState;
  onClick?: () => void;
}
