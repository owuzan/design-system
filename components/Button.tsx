import classNames from "classnames";
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  _size?: "sm" | "md" | "lg" | "xl" | "2xl";
  _hierarchy?: "primary" | "secondary" | "error";
  _icon?: IconType;
}
type Props = Omit<ButtonProps, "className">;

const Button = (props: Props) => {
  const {
    children,
    _size = "sm",
    _hierarchy = "primary",
    _icon,
    ...rest
  } = props;
  const classes = classNames(
    [
      [
        "inline-flex flex-nowrap items-center font-medium border rounded-lg focus:outline-none focus:ring-4 shadow transition",
        "disabled:ring-0 disabled:cursor-not-allowed",
      ],
    ],
    [
      _size === "sm" && "text-sm px-3.5 py-2 space-x-2",
      _size === "md" && "text-sm px-4 py-2.5 space-x-2",
      _size === "lg" && "text-base px-4.5 py-2.5 space-x-2",
      _size === "xl" && "text-base px-5 py-3 space-x-2",
      _size === "2xl" && "text-lg px-7 py-4 space-x-3",
    ],
    [
      _hierarchy === "primary" && [
        "text-white bg-primary-600 border-primary-600",
        "hover:bg-primary-700 hover:border-primary-700",
        "focus:ring-primary-100",
        "disabled:bg-primary-200 disabled:border-primary-200",
      ],
      _hierarchy === "secondary" && [
        "text-gray-700 bg-white border-gray-300",
        "hover:bg-gray-50 hover:border-gray-300",
        "focus:ring-gray-100",
        "disabled:text-gray-300 disabled:bg-white disabled:border-gray-200",
      ],
      _hierarchy === "error" && [
        "text-white bg-error-600 border-error-600",
        "hover:bg-error-700 hover:border-error-700",
        "focus:ring-error-100",
        "disabled:text-white disabled:bg-error-200 disabled:border-error-200",
      ],
    ]
  );
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
