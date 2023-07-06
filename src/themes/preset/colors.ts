import {definePreset} from "@pandacss/dev";

export default definePreset({
    theme: {
        tokens: {
            colors: {
                blue: {
                    50: {value: "#e8eeff"},
                    100: {value: "#c1cef2"},
                    200: {value: "#9bade4"},
                    300: {value: "#748cd8"},
                    400: {value: "#4d6ccb"},
                    500: {value: "#3452b2"},
                    600: {value: "#27408b"},
                    700: {value: "#1b2e64"},
                    800: {value: "#0e1b3f"},
                    900: {value: "#03091b"}
                },
                orange: {
                    50: {value: "#fff1e0"},
                    100: {value: "#ffd6af"},
                    200: {value: "#febd7f"},
                    300: {value: "#fda24f"},
                    400: {value: "#fb881e"},
                    500: {value: "#e16e04"},
                    600: {value: "#b05601"},
                    700: {value: "#7e3c00"},
                    800: {value: "#4d2400"},
                    900: {value: "#1f0900"}
                }
            },
        },
    }
});