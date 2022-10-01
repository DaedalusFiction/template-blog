import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArticlePreview from "../home/ArticlePreview";

const PreviewsSidebar = ({ sidebarItems, sidebarCategory }) => {
    return (
        <Box sx={{ position: "relative" }}>
            <Typography variant="h5">Suggested {sidebarCategory}</Typography>
            <Divider sx={{ margin: ".5rem 0 1rem 0" }} />
            {sidebarItems &&
                sidebarItems.map((item, index) => {
                    return (
                        <ArticlePreview
                            hideImage
                            category={sidebarCategory}
                            item={item}
                            key={index}
                        />
                    );
                })}
        </Box>
    );
};

export default PreviewsSidebar;
