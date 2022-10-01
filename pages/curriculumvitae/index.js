import { Container } from "@mui/system";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";

const index = () => {
    return (
        <PageLayout name="Curriculum Vitae">
            <Container maxWidth="lg" className="section">
                <iframe
                    src="/images/cv.pdf"
                    width="100%"
                    height="1000px"
                ></iframe>
            </Container>
        </PageLayout>
    );
};

export default index;
