import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonType = "primary" | "default" | "error" | "warning" | "success";
export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "children" | "disabled"> & {
  type?: ButtonType;
  size?: ButtonSize;
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
};
