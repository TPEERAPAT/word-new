import type { FC } from 'react';

interface TooltipsProps {
  top: string;
  left: string;
  color: string;
  label: string | undefined;
  text: string;
  style?: string;
}

const Tooltips: FC<TooltipsProps> = ({
  top,
  left,
  color,
  label,
  text,
  style,
}) => {
  const BackgroundColor = `bg-${color}`;

  return (
    <div
      className={`absolute z-20 min-h-[30px] min-w-[70px] rounded bg-white px-[6px] ${style}`}
      style={{
        boxShadow:
          '-4px 4px 6px -1px rgb(0 0 0 / 0.1), 4px 0px 4px -2px rgb(0 0 0 / 0.1)',
        top,
        left,
      }}
    >
      <div className="flex items-center ">
        <div className={`h-1 w-1 rounded-[50%] ${BackgroundColor}`}></div>
        <p className="ml-1 text-[10px] font-semibold">{label}</p>
      </div>
      <p className="text-[8px]">{text}</p>
      <span
        className=" absolute left-[44.5%] h-0 w-0"
        style={{
          borderLeft: '4px solid transparent',
          borderRight: '4px solid transparent',
          borderTop: '5px solid #FFF',
        }}
      ></span>
    </div>
  );
};

export default Tooltips;
