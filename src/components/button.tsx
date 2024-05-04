import { FC } from "react";

interface ButtonProps {
  px: number;
  py: number;
  text: string;
  active?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button: FC<ButtonProps> = ({
  px = 4,
  py = 2,
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
      bg-primary px-${px} py-${py} text-[14px] md:text-[16px]
      ${active ? 'border-secondary drop-shadow-button' : ''}`}
      type={type ? type : 'button'}
    >
      {text}
    </button>
  )
};

export default Button;