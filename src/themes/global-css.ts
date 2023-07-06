import {defineGlobalStyles} from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
    body: {
        backgroundColor: 'colors.gray.50',
        color: 'colors.gray.900',
        fontFamily: 'var(--lato), sans-serif',
        flexGrow: '1',
    },
});
