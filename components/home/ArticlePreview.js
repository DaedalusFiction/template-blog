import { Box, Divider, Fade, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ArticlePreview = ({ item, category, hideImage }) => {
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9
    const [isLoaded, setIsLoaded] = useState(false);
    const handleLoaded = (naturalWidth, naturalHeight) => {
        setRatio(naturalWidth / naturalHeight);
        setIsLoaded(true);
    };
    const itemHref = "/publications/articles/" + item.fields[0].value;
    const authorHref = "/contributors/" + item.fields[1].value;
    return (
        <Box>
            {!hideImage && (
                <Link href={itemHref}>
                    <Fade in={isLoaded}>
                        <div>
                            <Image
                                className="link link-image"
                                src={item.URLs[0]}
                                blurDataURL={item}
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
                                alt={item.description}
                            />
                        </div>
                    </Fade>
                </Link>
            )}
            <Box
                sx={{
                    margin: ".5rem 0",
                }}
            >
                <Box sx={{ display: "flex", gap: ".25em", flexWrap: "wrap" }}>
                    {item.subCategories.map((subCategory, index) => {
                        return (
                            <Typography key={index} variant="caption">
                                [{subCategory}]
                            </Typography>
                        );
                    })}
                </Box>
                <Typography
                    variant="h4"
                    className="link"
                    sx={{ fontSize: "1.5rem", textTransform: "uppercase" }}
                >
                    <Link href={itemHref}>{item.fields[0].value}</Link>
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ margin: ".25rem 0", fontSize: "1rem" }}
                >
                    {item.fields[2].value}
                </Typography>
                <Typography className="link" variant="h6">
                    <Link href={authorHref}>{item.fields[1].value}</Link>
                </Typography>
            </Box>
            <Divider variant="inset" sx={{ margin: "1rem 0 1.5rem 0" }} />
        </Box>
    );
};

export default ArticlePreview;
