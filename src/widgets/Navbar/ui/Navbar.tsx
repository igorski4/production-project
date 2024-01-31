import { useTranslation } from "react-i18next";
import s from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface Navbar {
    className?: string;
}

export const Navbar = ({ className }: Navbar) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <div className={s.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
                    {t("Главная")}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    {t("О сайте")}
                </AppLink>
            </div>
        </div>
    );
};
