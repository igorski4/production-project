type Mods = Record<string, string | boolean>;

export const classNames = (
    cls: string,
    mods: Mods,
    additional: string[]
): string => {
    console.log(Object.keys(mods).filter((key) => mods[key]));

    return [
        cls,
        ...additional,
        ...Object.keys(mods).filter((key) => mods[key]),
    ].join(" ");
};
