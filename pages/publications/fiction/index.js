import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import StoryPreview from "../../../components/home/StoryPreview";
import PageLayout from "../../../components/layout/PageLayout";
import { db } from "../../../firebase";

const index = ({ fiction }) => {
    return (
        <PageLayout name="Fiction">
            <Grid className="section" container spacing={3}>
                {fiction.map((story, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} md={3}>
                            <StoryPreview story={story} />
                        </Grid>
                    );
                })}
            </Grid>
        </PageLayout>
    );
};

export const getStaticProps = async (context) => {
    const publicationsRef = collection(db, "publications");
    const fictionQuery = query(
        publicationsRef,
        where("categories", "array-contains", "fiction")
    );

    const fictionSnapshot = await getDocs(fictionQuery);

    let fiction = [];
    fictionSnapshot.docs.forEach((doc, index) => {
        fiction = [...fiction, doc.data()];
    });

    return {
        props: {
            fiction,
        },
    };
};

export default index;
