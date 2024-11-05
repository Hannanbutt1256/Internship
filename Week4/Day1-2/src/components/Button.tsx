export enum bsize {
  small = "w-24 h-10",
  medium = "w-32 h-12",
  large = "w-40 h-14",
}
interface Button {
  label: string;
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  size?: bsize;
  type?: "button" | "submit" | "reset";
}
const Button = (props: Button) => {
  return (
    <div>
      <button
        type={props.type || "button"}
        disabled={props.disabled}
        onClick={props.onclick}
        className={` ${props.size || bsize.medium} ${
          props.disabled ? "cursor-not-allowed " : ""
        }${
          props.variant === "primary"
            ? "bg-blue-500 text-white hover:bg-blue-600 "
            : "bg-gray-500 text-white hover:bg-gray-600 "
        } `}
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
