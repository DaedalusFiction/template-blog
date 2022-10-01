import { createTheme } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#3B3B58",
            // main: "#cbbbbe",
            // main: "#FFBA49",
            // main: "#fefefe",
            off: "#FBFFF1",
        },
        secondary: {
            // main: "#1B998B",
            // main: "#4b36e9",
            main: "#DC965A",
            // main: "#3B3B58",
            // main: "#6c5ddd",
        },
        background: {
            default: "#fefefe",
            accent: "#ffeccd",
            dark: "#ffeccd",
        },
        custom: {
            dark: "#272D2D",
            darkMuted: "#757575",
            light: "#F6F8FF",
            lightMuted: "#cacaca",
        },
        text: {
            primary: "#272D2D",
            primaryMuted: "#757575",
            secondary: "#F6F8FF",
            secondaryMuted: "#cacaca",
        },
    },
});

theme = createTheme(theme, {
    border: `1px solid ${theme.palette.custom.dark}`,
    custom: {
        spacing: {
            paragraph: "2rem",
            quote: "3rem",
        },
    },
    typography: {
        h1: {
            // fontFamily: "Raleway",
            fontFamily: "Playfair Display",
            color: theme.palette.custom.primary,
            // color: theme.palette.primary.off,
            fontWeight: "400",
            lineHeight: ".85em",
            fontSize: "clamp(3.5rem, 5vw, 7rem)",
        },
        h2: {
            color: theme.palette.custom.primary,
            fontFamily: "Playfair Display",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
            fontSize: "clamp(3rem, 4vw, 10rem)",
        },
        h3: {
            color: theme.palette.custom.primary,
            fontFamily: "Playfair Display",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
        },
        h4: {
            color: theme.palette.custom.primary,
            fontFamily: "Playfair Display",
            fontSize: "1.75rem",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
        },
        h5: {
            // color: theme.palette.custom.primary,
            fontFamily: "Raleway",
            fontSize: "1.25rem",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
        },
        h6: {
            fontWeight: "500",
            fontSize: "1rem",
        },

        subtitle1: {
            fontFamily: "Raleway",
            fontWeight: "400",
            color: theme.palette.custom.primaryMuted,
            fontSize: "1.25rem",
        },
        subtitle2: {
            fontFamily: "Raleway",
            fontWeight: "400",
            fontSize: "1.25rem",
            color: theme.palette.custom.primaryMuted,
        },
        body1: {
            fontFamily: "Raleway",
            fontWeight: "400",
            fontSize: "1.25rem",
            lineHeight: "1.25rem",
            color: theme.palette.custom.primaryMuted,
            // fontFamily: darkTheme.typography.darkTheme.main,
        },
        body2: {
            fontFamily: "Raleway",
            fontWeight: "400",
            fontSize: "1.25rem",
            lineHeight: "1.5rem",
            color: theme.palette.custom.darkMuted,
            // fontFamily: darkTheme.typography.darkTheme.decorative,
        },
        caption: {
            color: theme.palette.custom.darkMuted,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0",
                    whiteSpace: "nowrap",
                    minWidth: "max-content",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.custom.dark,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    // fontFamily: theme.typography.theme.accent,
                    fontSize: "1rem",
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    // fontFamily: theme.typography.theme.accent,
                    color: theme.palette.secondary.main,
                },
            },
        },
    },
});

export default theme;
