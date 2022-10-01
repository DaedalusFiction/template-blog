import { Box, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import useGetImages from "../../hooks/useGetImages";
import theme from "../../styles/themes/theme";
import FirestoreListingItem from "./FirestoreListingItem";

const FirestoreListing = ({
    folder,
    config,
    updateCounter,
    setUpdateCounter,
}) => {
    const [images] = useGetImages(updateCounter, folder);
    const [shownImages, setShownImages] = useState([]);

    const handleSearchChange = (e) => {
        if (e.target.value === "") {
            setShownImages([]);
            return;
        }
        let newShownImages = images.filter((image) =>
            image.data().id.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setShownImages(newShownImages);
    };

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.accent,
                padding: "1em",
                borderRadius: "5px",
                height: "100%",
            }}
        >
            <Typography variant="h3">
                Update or delete item in {folder}.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "end", gap: ".5em" }}>
                <Typography>Search by image title:</Typography>
                <Input
                    color="secondary"
                    type="text"
                    onChange={handleSearchChange}
                />
            </Box>
            <br />
            {shownImages &&
                shownImages.length > 0 &&
                shownImages.map((image, index) => {
                    return (
                        <FirestoreListingItem
                            folder={folder}
                            key={index}
                            image={image}
                            updateCounter={updateCounter}
                            setUpdateCounter={setUpdateCounter}
                            setShownImages={setShownImages}
                        />
                    );
                })}
            {shownImages && shownImages.length === 0 && (
                <Typography>Nothing to show.</Typography>
            )}
        </Box>
    );
};

export default FirestoreListing;
