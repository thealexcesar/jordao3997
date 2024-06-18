export function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    const isLight = currentTheme === 'light';
    const themeAttr = isLight ? 'dark' : 'light';

    root.setAttribute('data-theme', themeAttr);
    localStorage.setItem('data-theme', themeAttr);
    console.log(isLight)
}
export function setThemeFromLocalStorage() {
    if (typeof document !== 'undefined') {
        const preferredTheme = localStorage.getItem('data-theme');
        const root = document.documentElement;
        console.log(preferredTheme)

        if (preferredTheme === null) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
            root.setAttribute('data-theme', prefersDark.matches ? 'dark' : 'light');
        } else {
            root.setAttribute('data-theme', preferredTheme);
        }
    }
}