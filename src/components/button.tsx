import { FC } from "react";

interface ButtonProps {
  width: number;
  height: number;
  text: string;
  active?: boolean;
};

const Button: FC<ButtonProps> = ({
  width,
  height,
  text,
  active = false
}) => {
  return (
    <button
      className={`flex justify-center border-4
      items-center text-textSecondary
      rounded-full border-button font-semibold
    hover:border-secondary hover:drop-shadow-button
      transition-all ease-in-out duration-500 
      bg-primary
      ${active ? 'border-secondary drop-shadow-button' : ''}`}
      style={{width: `${width}px`, height: `${height}px`}}
    >
      {text}
    </button>
  )
};

export default Button;