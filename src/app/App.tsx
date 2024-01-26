import { Suspense } from "react";
import { Link } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>Toggle theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <AppRouter />
            </Suspense>
        </div>
    );
};
