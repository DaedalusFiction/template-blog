import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import lightTheme from "../../styles/themes/theme";
import { pages, siteName, heroContent } from "../../siteInfo";
import NativeImage from "../general/NativeImage.js";

const Hero = () => {
    return (
        <Box className="section" sx={{ marginTop: { xs: "none", md: "4rem" } }}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                height: "100%",
                                padding: "6rem 0",
                            }}
                        >
                            <Box
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1em",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography variant="h1">
                                    {heroContent.title}
                                </Typography>
                                <Box>
                                    {heroContent.highlights.map(
                                        (highlight, index) => {
                                            return (
                                                <Typography
                                                    key={index}
                                                    sx={{
                                                        marginBottom: ".5em",
                                                    }}
                                                >
                                                    {highlight}
                                                </Typography>
                                            );
                                        }
                                    )}
                                </Box>
                                <Box sx={{ display: "flex", gap: "1em" }}>
                                    {heroContent.buttons.map(
                                        (button, index) => {
                                            return (
                                                <Link
                                                    key={index}
                                                    href={button.href}
                                                >
                                                    <Button
                                                        variant={button.variant}
                                                        size="large"
                                                    >
                                                        {button.text}
                                                    </Button>
                                                </Link>
                                            );
                                        }
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <NativeImage
                                maxSize={2000}
                                image={heroContent.image}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
