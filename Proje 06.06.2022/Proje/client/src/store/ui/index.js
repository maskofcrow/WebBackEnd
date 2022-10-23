const colorThemes = ["red", "blue", "black", "green"];

export const UIModule = {
    state: () => ({
        theme: "theme-dark",
        colorTheme: "theme-red",
    }),
    mutations: {
        themeLight(state) {
            state.theme = "theme-light";
            document.documentElement.setAttribute("data-theme", "light");
        },
        themeDark(state) {
            state.theme = "theme-dark";
            document.documentElement.setAttribute("data-theme", "dark");
        },
        colorTheme(state, theme) {
            state.colorTheme = "theme-" + theme;
        },
    },
    actions: {
        changeTheme(context) {
            if (context.state.theme == "theme-dark") {
                context.commit("themeLight");
            } else if (context.state.theme == "theme-light") {
                context.commit("themeDark");
            }
        },
        changeColorTheme(context, theme) {
            if (colorThemes.includes(theme)) {
                context.commit("colorTheme", theme);
            }
        },
    },
    namespaced: true,
};