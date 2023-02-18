import 'styled-components';
interface IPalette {
    main: string
    contrastText: string
}
declare module 'styled-components' {
    export interface DefaultTheme {
        bgColor: string;
        textColor: string;
        textHoverColor: string;
        mainBg: string;
        bodyColor: string;
        borderColor: String
    }
}