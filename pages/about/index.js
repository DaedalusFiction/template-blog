import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SizedImage from "../../components/general/SizedImage";
import { aboutContent, pages, secondaryProfiles } from "../../siteInfo";
import PageLayout from "../../components/layout/PageLayout";
import AboutNavbar from "../../components/about/AboutNavbar";

const index = () => {
    return (
        <PageLayout name="ABOUT">
            <AboutNavbar />
            <Box className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <SizedImage
                            height="30rem"
                            width="100%"
                            image={aboutContent.image}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">
                            {aboutContent.name}
                        </Typography>
                        <br />
                        <Typography sx={{ whiteSpace: "pre-wrap" }}>
                            {aboutContent.content}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "1em",
                                marginTop: "3rem",
                            }}
                        >
                            {aboutContent.buttons.map((button, index) => {
                                return (
                                    <Link key={index} href={button.href}>
                                        <Button
                                            size="large"
                                            variant="contained"
                                        >
                                            {button.text}
                                        </Button>
                                    </Link>
                                );
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;
