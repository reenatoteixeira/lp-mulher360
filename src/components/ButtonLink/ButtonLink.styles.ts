import type { ButtonLinkSize, ButtonLinkStyle, ButtonLinkState, ButtonLinkIconPosition } from './ButtonLink.types';
import clsx from 'clsx';

export default function getButtonLinkStyle(
  size: ButtonLinkSize,
  style: ButtonLinkStyle,
  state: ButtonLinkState,
  iconPosition?: ButtonLinkIconPosition,
  fullWidth: boolean = false,
  pill: boolean = false
) {
  const isIconAlone = iconPosition === 'alone',
    baseClasses = `transition-all duration-200 flex items-center justify-center gap-1.5 ${fullWidth ? 'w-full' : ''} ${pill ? 'rounded-full' : 'rounded-lg'} focus:ring-brown-300 focus:ring-2 focus:outline-none`;

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

  const buttonLinkStyle = clsx(baseClasses, styleClasses[style], sizeClasses[size], stateClasses[state]),
    iconSize = iconSizeMap[size];

  return { buttonLinkStyle, iconSize };
}
