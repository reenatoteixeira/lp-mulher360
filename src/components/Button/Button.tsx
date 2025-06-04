import type { ButtonProps } from './Button.types';
import getButtonStyle from './Button.styles';

const Button = ({
  label = 'Label',
  ariaLabel = 'Default button',
  size = 'md',
  style = 'primary',
  icon: Icon,
  iconPosition = 'left',
  state = 'enabled',
  fullWidth = false,
  onClick,
}: ButtonProps) => {
  const { buttonStyle, iconSize } = getButtonStyle(size, style, state, iconPosition, fullWidth);

  return (
    <button onClick={onClick} className={buttonStyle} disabled={state === 'disabled'} aria-label={ariaLabel}>
      {Icon && iconPosition === 'left' && <Icon size={iconSize} data-testid="icon" />}
      {iconPosition !== 'alone' && label}
      {Icon && iconPosition === 'right' && <Icon size={iconSize} data-testid="icon" />}
      {Icon && iconPosition === 'alone' && <Icon size={iconSize} data-testid="icon" />}
    </button>
  );
};

export default Button;
