import { FC } from "react";

interface ButtonProps {
  width: number;
  height: number;
  text: string;
  active?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button: FC<ButtonProps> = ({
  width,
  height,
  text,
  active = false,
  type,
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
      type={type ? type : 'button'}
    >
      {text}
    </button>
  )
};

export default Button;