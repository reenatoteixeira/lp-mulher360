import type { ButtonLinkProps } from './ButtonLink.types';
import getButtonLinkStyle from './ButtonLink.styles';

const Button = ({
  label = 'Label',
  ariaLabel = 'Default button',
  size = 'md',
  style = 'primary',
  icon: Icon,
  iconPosition = 'left',
  state = 'enabled',
  fullWidth = false,
  pill = false,
  href,
}: ButtonLinkProps) => {
  const disabled = state === 'disabled',
    { buttonLinkStyle, iconSize } = getButtonLinkStyle(size, style, state, iconPosition, fullWidth, pill);

  return (
    <a
      href={disabled ? undefined : href}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      className={buttonLinkStyle}
    >
      {Icon && iconPosition === 'left' && <Icon size={iconSize} data-testid="icon" />}
      {iconPosition !== 'alone' && label}
      {Icon && iconPosition === 'right' && <Icon size={iconSize} data-testid="icon" />}
      {Icon && iconPosition === 'alone' && <Icon size={iconSize} data-testid="icon" />}
    </a>
  );
};

export default Button;
