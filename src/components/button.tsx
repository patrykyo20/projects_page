import { FC } from "react";

interface ButtonProps {
  width: number;
  height: number;
  text: string;
};

const Button: FC<ButtonProps> = ({
  width,
  height,
  text
}) => {
  return (
    <button
      className="flex justify-center border-4
      items-center text-textSecondary
      rounded-full border-button bg-primary
      font-semibold hover:border-secondary
      hover:drop-shadow-button transition-all
      ease-in-out duration-500"
      style={{width: `${width}px`, height: `${height}px`}}
    >
      {text}
    </button>
  )
};

export default Button;