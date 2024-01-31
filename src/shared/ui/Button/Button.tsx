import { classNames } from "shared/lib/classNames/classNames";
import s from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    ...rest
}) => {
    return (
        <button className={classNames(s.button, {}, [className, s[theme]])} {...rest}>
            {children}
        </button>
    );
};
