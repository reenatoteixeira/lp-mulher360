import type { ButtonSize, ButtonStyle, ButtonState, ButtonIconPosition } from './Button.types';
import clsx from 'clsx';

export default function getButtonStyle(
  size: ButtonSize,
  style: ButtonStyle,
  state: ButtonState,
  iconPosition?: ButtonIconPosition,
  fullWidth: boolean = false,
) {
  const isIconAlone = iconPosition === 'alone',
    baseClasses = `transition-all duration-200 rounded-md flex items-center justify-center gap-1.5 ${fullWidth ? 'w-full' : ''}`;

  const sizeClasses = {
    sm: isIconAlone ? 'p-2' : 'px-2.5 py-1.5 text-sm',
    md: isIconAlone ? 'p-2' : 'px-3 py-2 text-base',
    lg: isIconAlone ? 'p-2' : 'px-4 py-3 text-lg',
    xl: isIconAlone ? 'p-2' : 'px-5 py-4 text-2xl',
  };

  const iconSizeMap = {
    sm: 18,
    md: 20,
    lg: 22,
    xl: 24,
  };

  const styleClasses = {
    primary: 'text-stone-50 bg-brown-500 border-2 border-brown-500',
    secondary: 'text-brown-700 bg-brown-100 border-2 border-brown-100',
    action: 'text-brown-500 border-2 border-brown-500',
  };

  const hoverClasses = {
    primary: 'hover:bg-brown-400 hover:border-brown-400',
    secondary: 'hover:bg-brown-200 hover:border-brown-200',
    action: 'hover:bg-brown-100',
  };

  const stateClasses = {
    enabled: clsx('cursor-pointer opacity-100', hoverClasses[style]),
    disabled: 'cursor-not-allowed opacity-50',
  };

  const buttonStyle = clsx(baseClasses, styleClasses[style], sizeClasses[size], stateClasses[state]),
    iconSize = iconSizeMap[size];

  return { buttonStyle, iconSize };
}
