import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SizedImage from "../../components/general/SizedImage";
import PageLayout from "../../components/layout/PageLayout";
import { publicationsContent } from "../../siteInfo";

const index = () => {
    return (
        <PageLayout name="Publications">
            <Box className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <SizedImage
                            height="30rem"
                            width="100%"
                            image={publicationsContent.image}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">
                            {publicationsContent.title}
                        </Typography>
                        <br />
                        <Typography sx={{ whiteSpace: "pre-wrap" }}>
                            {publicationsContent.body}
                        </Typography>
                        <Box
                            sx={{
                                marginTop: "2rem",
                                display: "flex",
                                gap: "1em",
                            }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                href="/publications/books"
                            >
                                view books
                            </Button>
                            <Button
                                variant="contained"
                                size="large"
                                href="/publications/articles"
                            >
                                view articles
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;
