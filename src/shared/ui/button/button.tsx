import { twMerge } from "tailwind-merge";
import type { ButtonProps } from "./button.types";
import "./button.css";

export function Button(props: ButtonProps) {
  const {
    type = "default",
    size = "medium",
    children,
    disabled = false,
    loading = false,
    className,
    ...buttonProps
  } = props;
  const isDisabled = disabled || loading;

  return (
    <button
      {...buttonProps}
      type="button"
      disabled={isDisabled}
      className={twMerge("button", `button--${type}`, `button--${size}`, className)}
    >
      {loading && <span className="button__spinner" />}
      <span>{children}</span>
    </button>
  );
}
