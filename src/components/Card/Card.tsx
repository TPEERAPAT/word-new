import type { FC } from 'react';
import { createElement } from 'react';

interface CardProps {
  color?: string;
  shadow?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Card: FC<CardProps> = ({
  color = 'white',
  shadow = false,
  className = '',
  children = createElement('div'),
}) => {
  const BackgroundColor = `bg-${color}`;

  return (
    <div
      className={`
          ${className}
          ${BackgroundColor}
          h-full
          w-full
          rounded-xl
          ${shadow ? 'shadow-lg' : ''}
        `}
    >
      {children}
    </div>
  );
};

export default Card;
