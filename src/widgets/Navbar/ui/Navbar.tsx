import s from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface Navbar {
    className?: string;
}

export const Navbar = ({ className }: Navbar) => {
    return (
        <div className={classNames(s.navbar, {}, [className])}>
            <div className={s.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
