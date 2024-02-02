import { classNames } from "shared/lib/classNames/classNames";
import s from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [
                className,
            ])}
        >
            <button onClick={onToggle}>{t("Переключатель")}</button>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
