import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NativeImage from "../general/NativeImage";

const BookItem = ({ book, isReversed }) => {
    return (
        <Grid
            className="section"
            container
            spacing={8}
            direction={isReversed ? "wrap" : "row-reverse"}
        >
            <Grid item xs={12} md={8}>
                <Box
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: ".25em",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="caption"
                        sx={{ textAlign: !isReversed ? "right" : "left" }}
                    >{`${book.publisher}, ${book.date}`}</Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            marginBottom: ".25em",
                            textAlign: !isReversed ? "right" : "left",
                        }}
                    >
                        {book.title}
                    </Typography>

                    <Typography
                        sx={{ textAlign: !isReversed ? "right" : "left" }}
                    >
                        {book.description}
                    </Typography>
                    <Box
                        sx={{
                            marginTop: "2rem",
                            display: "flex",
                            justifyContent: !isReversed ? "right" : "left",
                        }}
                    >
                        <Button
                            variant="contained"
                            color={book.button.color}
                            href={book.button.href}
                        >
                            {book.button.text}
                        </Button>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: ".25em",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <NativeImage image={book.image} maxSize={600} />
                </Box>
            </Grid>
        </Grid>
    );
};

export default BookItem;
