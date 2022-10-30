import classNames from "classnames";
import React from "react";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType;
  title?: string;
  _style?: "gray" | "primary" | "error" | "warning" | "success" | "blue";
  size?: "sm" | "md" | "lg";
}
type Props = Omit<ParagraphProps, "className" | "style">;

const Badge = (props: Props) => {
  const {
    children,
    as: Element = "p",
    title,
    _style = "gray",
    size = "sm",
    ...rest
  } = props;

  const className = classNames(
    [
      "inline-flex items-center flex-nowrap font-medium transition rounded-full",
    ],
    [
      size === "sm" && "text-xs",
      size === "md" && "text-sm",
      size === "lg" && "text-sm",
    ],
    [
      _style === "gray" && [
        "bg-gray-100 text-gray-900",
        Element === "a" && "!bg-gray-50 hover:!bg-gray-100 focus:!bg-gray-50",
      ],
      _style === "primary" && [
        "bg-primary-50 text-primary-700",
        Element === "a" && "hover:!bg-primary-100 focus:!bg-primary-50",
      ],
      _style === "error" && [
        "bg-error-50 text-error-700",
        Element === "a" && "hover:",
      ],
      _style === "warning" && [
        "bg-warning-50 text-warning-700",
        Element === "a" && "hover:",
      ],
      _style === "success" && [
        "bg-success-50 text-success-700",
        Element === "a" && "hover:",
      ],
      _style === "blue" && [
        "bg-blue-50 text-blue-700",
        Element === "a" && "hover:",
      ],
    ]
  );

  const textClasses = classNames([
    size === "sm" && "mx-2 my-0.5",
    size === "md" && "mx-2.5 my-0.5",
    size === "lg" && "mx-3 my-1",
  ]);

  return (
    <Element className={className} {...rest}>
      {title && <span className="m-1 bg-white rounded-full p-1">{title}</span>}
      <span className={textClasses}>{children}</span>
    </Element>
  );
};

export default Badge;
