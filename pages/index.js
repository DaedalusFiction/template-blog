import { Box, Divider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import PoemPreview from "../components/home/PoemPreview";
import StoryPreview from "../components/home/StoryPreview";
import ArticlePreview from "../components/home/ArticlePreview";
import { db } from "../firebase";

export default function Home({ poems, fiction, articles }) {
    return (
        <Container maxWidth="xl" sx={{ paddingTop: "8rem" }}>
            <Grid container>
                <Grid item xs={12} md={2.75}>
                    {poems &&
                        poems.map((poem, index) => {
                            return <PoemPreview poem={poem} key={index} />;
                        })}
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Divider orientation="vertical" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    {fiction &&
                        fiction.map((story, index) => {
                            return <StoryPreview story={story} key={index} />;
                        })}
                </Grid>
                <Grid item xs={12} md={0.25}>
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Divider orientation="vertical" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={2.75}>
                    <Typography variant="h5">Articles</Typography>
                    <Divider sx={{ margin: ".5rem 0 1rem 0" }} />
                    {articles &&
                        articles.map((article, index) => {
                            return (
                                <ArticlePreview
                                    hideImage
                                    category="articles"
                                    item={article}
                                    key={index}
                                />
                            );
                        })}
                </Grid>
            </Grid>
        </Container>
    );
}

export const getStaticProps = async (context) => {
    const publicationsRef = collection(db, "publications");
    const poetryQuery = query(
        publicationsRef,
        where("categories", "array-contains", "poetry"),
        orderBy("dateUploaded", "desc"),
        limit(5)
    );
    const fictionQuery = query(
        publicationsRef,
        where("categories", "array-contains", "fiction"),

        orderBy("dateUploaded", "desc"),
        limit(3)
    );
    const articlesQuery = query(
        publicationsRef,
        where("categories", "array-contains", "article"),

        orderBy("dateUploaded", "desc"),
        limit(7)
    );

    const poetrySnapshot = await getDocs(poetryQuery);
    const fictionSnapshot = await getDocs(fictionQuery);
    const articlesSnapshot = await getDocs(articlesQuery);
    let poems = [];
    poetrySnapshot.docs.forEach((doc, index) => {
        poems = [...poems, doc.data()];
    });
    let fiction = [];
    fictionSnapshot.docs.forEach((doc, index) => {
        fiction = [...fiction, doc.data()];
    });
    let articles = [];
    articlesSnapshot.docs.forEach((doc, index) => {
        articles = [...articles, doc.data()];
    });

    return {
        props: {
            poems,
            fiction,
            articles,
        },
    };
};
