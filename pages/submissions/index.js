import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import TextSubmissionsForm from "../../components/submissions/TextSubmissionsForm";
import ImageSubmissionsForm from "../../components/submissions/ImageSubmissionsForm";
import { imageSubmissionsConfig, textSubmissionsConfig } from "../../siteInfo";

const index = () => {
    return (
        <PageLayout name="Submissions">
            <Container className="section">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextSubmissionsForm
                            config={textSubmissionsConfig}
                            folder="storysubmissions"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ImageSubmissionsForm
                            config={imageSubmissionsConfig}
                            folder="imagesubmissions"
                        />
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;
