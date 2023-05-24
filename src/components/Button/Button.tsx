import SpinLoading from '@assets/Util/spinLoading.svg';
import type { FC } from 'react';

interface ButtonProps {
  type?: 'contained' | 'contained-red' | 'outlined' | 'text' | 'text-red';
  size?: 'sm' | 'md' | 'lg' | 'full';
  bold?: boolean;
  shadow?: boolean;
  border?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  text?: string;
  onClick?: Function;
  className?: string;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  type = 'contained',
  text = '',
  size = 'md',
  bold = false,
  shadow = false,
  border = false,
  startIcon,
  endIcon,
  onClick = () => {},
  className = '',
  isLoading = false,
}) => {
  const buttonWidth = () => {
    switch (size) {
      case 'sm':
        return 'w-[188px]';
      case 'md':
        return 'w-[271px]';
      case 'lg':
        return 'w-[580px]';
      case 'full':
        return 'w-full';
      default:
        return 'w-[271px]';
    }
  };

  const buttonType = () => {
    switch (type) {
      case 'contained':
        return isLoading
          ? 'bg-blueOcare/50 text-white'
          : 'bg-blueOcare text-white hover:bg-blueOcare/80 active:bg-blueOcare';
      case 'contained-red':
        // return 'bg-redOcare text-white hover:bg-redOcare/80 active:bg-redOcare';
        return isLoading
          ? 'bg-redOcare/50 text-white'
          : 'bg-redOcare text-white hover:bg-redOcare/80 active:bg-redOcare';
      case 'outlined':
        // return 'bg-white text-blueOcare border-solid border-blueOcare border-[1px] hover:bg-blueOcare/10 active:bg-blueOcare/20';
        return isLoading
          ? 'bg-white text-blueOcare border-solid border-blueOcare border-[1px]'
          : 'bg-white text-blueOcare border-solid border-blueOcare border-[1px] hover:bg-blueOcare/10 active:bg-blueOcare/20';
      case 'text':
        return 'bg-white text-blueOcare hover:underline underline-offset-2 active:no-underline active:text-blueOcare/50';
      case 'text-red':
        return 'bg-transperent text-redOcare hover:underline underline-offset-2 active:no-underline active:text-redOcare/50';
      default:
        return 'bg-blueOcare text-white hover:bg-blueOcare/80 active:bg-blueOcare';
    }
  };

  const fontWeight = bold ? 'font-semibold' : 'font-light';
  const borderStyle = border ? 'border border-solid border-blueOcare' : '';

  return (
    <>
      <div
        className={`
          flex
          justify-center
          ${buttonType()}
          ${buttonWidth()}
          ${borderStyle}
          h-[40px]
          rounded-lg
          text-center
          ${!isLoading ? 'cursor-pointer' : 'cursor-wait'}
          transition
          ${className}
          ${shadow ? 'shadow-lg' : ''}
        `}
        onClick={
          isLoading
            ? () => {}
            : () => {
                onClick();
              }
        }
      >
        <div className={`text-sm ${fontWeight} flex items-center gap-3`}>
          {isLoading ? (
            <SpinLoading height={25} width={25} />
          ) : (
            <>
              {startIcon && (
                <div className="flex items-center">{startIcon}</div>
              )}
              {text}
              {endIcon && <div className="flex items-center">{endIcon}</div>}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Button;
