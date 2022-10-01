import { Box, Divider, Fade, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const StoryPreview = ({ story }) => {
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9
    const [isLoaded, setIsLoaded] = useState(false);
    const handleLoaded = (naturalWidth, naturalHeight) => {
        setRatio(naturalWidth / naturalHeight);
        setIsLoaded(true);
    };

    const storyHref = "/publications/fiction/" + story.fields[0].value;
    const authorHref = "/contributors/" + story.fields[1].value;

    return (
        <Box>
            <Box>
                <Link href={storyHref}>
                    <Fade in={isLoaded}>
                        <div>
                            <Image
                                className="link link-image"
                                src={story.URLs[0]}
                                blurDataURL={story}
                                placeholder="blur"
                                //has to be unoptimized to work with firebase storage, apparently
                                unoptimized
                                width="100"
                                height={100 / ratio}
                                onLoadingComplete={({
                                    naturalWidth,
                                    naturalHeight,
                                }) => handleLoaded(naturalWidth, naturalHeight)}
                                layout="responsive"
                                alt={story.description}
                            />
                        </div>
                    </Fade>
                </Link>
            </Box>
            <Box
                sx={{
                    margin: ".5rem 0",
                }}
            >
                <Box sx={{ display: "flex", gap: ".25em", flexWrap: "wrap" }}>
                    {story.subCategories.map((subCategory, index) => {
                        return (
                            <Typography key={index} variant="caption">
                                [{subCategory}]
                            </Typography>
                        );
                    })}
                </Box>
                <Typography
                    className="link"
                    variant="h3"
                    sx={{ textTransform: "uppercase" }}
                >
                    <Link href={storyHref}>{story.fields[0].value}</Link>
                </Typography>
                <Typography variant="body2" sx={{ margin: ".25rem 0" }}>
                    {story.fields[2].value}
                </Typography>
                <Typography className="link" variant="h6">
                    <Link href={authorHref}>{story.fields[1].value}</Link>
                </Typography>
            </Box>
            <Divider variant="inset" sx={{ margin: "1rem 0 1.5rem 0" }} />
        </Box>
    );
};

export default StoryPreview;
