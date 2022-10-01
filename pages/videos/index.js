import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { videos } from "../../siteInfo";
const index = () => {
    return (
        <PageLayout name="Videos">
            <Container maxWidth="lg">
                {videos.map((video, index) => {
                    return (
                        <Box key={index}>
                            <Grid className="section" container spacing={2}>
                                <Grid item xs={12} md={5}>
                                    <Box
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: ".25em",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Typography variant="caption">
                                            {video.date}
                                        </Typography>
                                        <Typography variant="h3">
                                            {video.title}
                                        </Typography>
                                        <Typography>
                                            {video.description}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={7}>
                                    <Box className="video-wrapper">
                                        <iframe
                                            width="560"
                                            height="315"
                                            src={video.href}
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen
                                        ></iframe>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Divider
                                sx={{ maxWidth: "30rem", margin: "0 auto" }}
                            />
                        </Box>
                    );
                })}
            </Container>
        </PageLayout>
    );
};

export default index;
