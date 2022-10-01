import { Button, Container, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../styles/themes/theme";
import NativeImage from "../general/NativeImage";

const Showcase = ({ showcaseContent }) => {
    return (
        <Box sx={{ background: theme.palette.background.accent }}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ padding: { xs: "2rem", md: "6rem" } }}>
                            <NativeImage
                                maxSize={2000}
                                image={showcaseContent.image}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: { xs: "center", md: "start" },
                                gap: ".5em",
                                padding: "2rem 0",
                            }}
                        >
                            <Typography variant="h5">
                                {showcaseContent.subTitle}
                            </Typography>
                            <Typography variant="h2">
                                {showcaseContent.title}
                            </Typography>
                            <Typography sx={{ maxWidth: "45ch" }}>
                                {showcaseContent.description}
                            </Typography>
                            <Box
                                sx={{
                                    borderLeft: "1px solid black",
                                    marginTop: ".5em",
                                    padding: ".5em 1em",
                                    maxWidth: "45ch",
                                    fontStyle: "italic",
                                }}
                            >
                                <Typography>{showcaseContent.quote}</Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "1em",
                                    marginTop: "1em",
                                    flexWrap: "wrap",
                                }}
                            >
                                {showcaseContent.buttons.map(
                                    (button, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                href={button.href}
                                            >
                                                <Button
                                                    variant={button.variant}
                                                    size="large"
                                                    color="secondary"
                                                >
                                                    {button.text}
                                                </Button>
                                            </Link>
                                        );
                                    }
                                )}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Showcase;
