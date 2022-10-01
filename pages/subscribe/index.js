import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ContactForm from "../../components/contact/ContactForm";
import PageLayout from "../../components/layout/PageLayout";
import { subscribeConfig } from "../../siteInfo";

const index = () => {
    return (
        <PageLayout name="SUBSCRIBE">
            <Container maxWidth="sm" className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Typography variant="h3">Get Updates</Typography>
                        <br />
                        <Typography>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ipsum quos delectus, accusamus tempore
                            reiciendis ducimus, ex temporibus quam dolor
                            voluptas at nostrum rerum autem ullam odio nisi,
                            maxime praesentium magni.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <ContactForm config={subscribeConfig} />
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;
