import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { doc, getDoc } from "firebase/firestore";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { db } from "../../firebase";

const page = ({ contributor }) => {
    return (
        <PageLayout name={contributor.name}>
            <Container maxWidth="md" className="section">
                <Typography>{contributor.bio}</Typography>
            </Container>
        </PageLayout>
    );
};

export const getServerSideProps = async (context) => {
    const docSnap = await getDoc(doc(db, `contributors/${context.params.id}`));
    let contributor = docSnap.data();

    return {
        props: {
            contributor,
        },
    };
};

export default page;
