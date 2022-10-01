import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { db } from "../../firebase";

const index = ({ contributors }) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    return (
        <PageLayout name="Contributors">
            <Container className="section">
                <Grid container spacing={4}>
                    {alphabet.map((letter) => {
                        return (
                            <Grid key={letter} item xs={6} md={4}>
                                <Typography variant="h2">{letter}</Typography>
                                <Divider />
                                {contributors.map((contributor, index) => {
                                    return (
                                        <Box key={index}>
                                            {contributor.name.split("")[0] ===
                                                letter && (
                                                <Typography
                                                    className="link"
                                                    variant="h6"
                                                    sx={{ margin: ".5em 0" }}
                                                >
                                                    <Link
                                                        href={`/contributors/${contributor.name}`}
                                                    >
                                                        {contributor.name}
                                                    </Link>
                                                </Typography>
                                            )}
                                        </Box>
                                    );
                                })}
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </PageLayout>
    );
};

export const getStaticProps = async (context) => {
    const contributorsRef = collection(db, "contributors");

    const contributorsSnapshot = await getDocs(contributorsRef);

    let contributors = [];
    contributorsSnapshot.docs.forEach((doc, index) => {
        contributors = [...contributors, doc.data()];
    });

    return {
        props: {
            contributors,
        },
    };
};

export default index;
