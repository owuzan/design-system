import classNames from "classnames";
import React, { useCallback, useMemo } from "react";
import { IconType } from "react-icons";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export interface ButtonProps<T extends React.ElementType> {
  as?: T | React.ElementType;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  hierarchy?: "primary" | "secondary" | "error";
  icon?: IconType;
  iconPosition?: "left" | "right";
  loading?: boolean;
  block?: boolean;
}

const Button = <T extends React.ElementType = "button">(
  props: ButtonProps<T> &
    Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    as: Component = "button",
    children,
    size = "md",
    hierarchy = "primary",
    icon,
    iconPosition = "left",
    loading,
    block,
    disabled,
    ...rest
  } = props;

  const isOnlyIcon = useMemo((): boolean => {
    return !children && !!icon;
  }, [children, icon]);

  const className = classNames(
    [
      !loading && !disabled && "transition",
      "relative flex-none flex-nowrap items-center justify-center font-medium border rounded-lg shadow",
      "focus:outline-none focus:ring-4",
      "disabled:ring-0 disabled:cursor-not-allowed",
    ],
    [block && "flex w-full", !block && "inline-flex"],
    [
      isOnlyIcon && "!px-0",
      size === "sm" && ["text-sm px-3.5 h-9 space-x-2", isOnlyIcon && "w-9"],
      size === "md" && ["text-sm px-4 h-10 space-x-2", isOnlyIcon && "w-10"],
      size === "lg" && [
        "text-base px-4.5 h-11 space-x-2",
        isOnlyIcon && "w-11",
      ],
      size === "xl" && ["text-base px-5 h-12 space-x-2", isOnlyIcon && "w-12"],
      size === "2xl" && ["text-lg px-7 h-15 space-x-3", isOnlyIcon && "w-15"],
    ],
    [
      hierarchy === "primary" && [
        "text-white bg-primary-600 border-primary-600",
        "hover:bg-primary-700 hover:border-primary-700",
        "focus:ring-primary-100",
        "disabled:bg-primary-200 disabled:border-primary-200",
      ],
      hierarchy === "secondary" && [
        "text-gray-700 bg-white border-gray-300",
        "hover:bg-gray-50 hover:border-gray-300",
        "focus:ring-gray-100",
        "disabled:text-gray-300 disabled:bg-white disabled:border-gray-200",
      ],
      hierarchy === "error" && [
        "text-white bg-error-600 border-error-600",
        "hover:bg-error-700 hover:border-error-700",
        "focus:ring-error-100",
        "disabled:text-white disabled:bg-error-200 disabled:border-error-200",
      ],
    ]
  );

  const Icon = useMemo(() => icon, [icon]);

  const Children = useCallback(() => {
    if (!Icon) {
      return children;
    }
    if (!children) {
      return <Icon />;
    }
    return (
      <span className="flex items-center space-x-3">
        {iconPosition === "left" && <Icon className="flex-none" />}
        <span>{children}</span>
        {iconPosition === "right" && <Icon className="flex-none" />}
      </span>
    );
  }, [children, iconPosition, Icon]);

  const Loading = useCallback(() => {
    if (!loading) return null;

    const loadingIconClasses = classNames("text-inherit text-lg animate-spin", [
      size === "sm" && "text-base",
      size === "md" && "text-base",
      size === "lg" && "text-lg",
      size === "xl" && "text-xl",
      size === "2xl" && "text-2xl",
    ]);

    return (
      <span className="absolute inset-0 inline-flex items-center justify-center !ml-0">
        <AiOutlineLoading3Quarters className={loadingIconClasses} />
      </span>
    );
  }, [loading]);

  if (!icon && !children) return null;
  return (
    <Component className={className} disabled={disabled || loading} {...rest}>
      <span className={!!loading && "invisible"}>
        <Children />
      </span>
      <Loading />
    </Component>
  );
};

export default Button;
