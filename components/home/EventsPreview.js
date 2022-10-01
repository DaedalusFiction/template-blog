import { Box } from "@mui/system";
import React from "react";
import useGetEvents from "../../hooks/useGetEvents";
import theme from "../../styles/themes/theme";
import EventItem from "../Events/EventItem";

const EventsPreview = () => {
    const [events] = useGetEvents("events");
    return (
        <Box
            className="section"
            sx={{ background: theme.palette.background.accent }}
        >
            {events && (
                <EventItem
                    isPreview
                    fields={events[0].data().fields}
                    image={events[0].data().URLs[0]}
                />
            )}
        </Box>
    );
};

export default EventsPreview;
