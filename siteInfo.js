// Table of Contents:
// 1. Meta
// 2. Layout
// 3. Home
// 4. Services
// 5. Projects
// 6. Studio
// 7. About
// 8. Social Media
// 9. The Process
// 10. Contact

import lightTheme from "./styles/themes/theme";

// 1. Meta

const siteName = "MAGAZINE";
// const siteName = "Cosima Hewes";

// 2. Layout

const navbar = {
    buttonOne: {
        text: "Subscribe",
        href: "/subscribe",
        variant: "outlined",
    },
};

const header = {
    buttonOne: {
        text: "Contact",
        href: "/contact",
        variant: "outlined",
    },
};
// 3. Home

const heroContent = {
    image: { url: "/images/hero.webp", alt: "alt hero text" },
    title: "YOUR NAME",
    highlights: [
        "This is the first highlight.",
        "This is the second highlight",
        "This is the third highlight",
        "This is the fourth highlight",
    ],
    buttons: [
        { variant: "contained", href: "/curriculumvitae", text: "View cv" },
        {
            variant: "contained",
            href: "/publications",
            text: "View publications",
        },
    ],
};

const homeGalleryContent = {
    images: [
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    ],
};

const servicesContent = [
    {
        title: "Service One!",
        price: "$200",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        button: { text: "Book Now!", href: "/contact" },
        features: [
            {
                primaryText: "Feature One",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Two",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Three",
                secondaryText: "Feature Description",
            },
        ],
    },
    {
        title: "Service Two",
        price: "$400-800",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        button: { text: "Book Now!", href: "/contact" },
        features: [
            {
                primaryText: "Feature One",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Two",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Three",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Four",
                secondaryText: "Feature Description",
            },
        ],
    },
    {
        title: "Service Three",
        price: "Custom",
        description:
            "This is the sample description for the service. It is a very good description and a very good service",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        button: { text: "Book Now!", href: "/contact" },
        features: [
            {
                primaryText: "Feature One",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Two",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Three",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Four",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Five",
                secondaryText: "Feature Description",
            },
            {
                primaryText: "Feature Six",
                secondaryText: "Feature Description",
            },
        ],
    },
];

const blockTextOne = {
    backgroundColor: "white",
    title: "BLOCK TEXT ONE",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimo!",
};
const blockTextTwo = {
    backgroundColor: "white",
    title: "BLOCK TEXT TWO",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimo!",
};
const blockTextThree = {
    backgroundColor: lightTheme.palette.background.accentLight,
    title: "BLOCK TEXT THREE",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, expedita veniam. Magni explicabo dignissimo!",
};

const mosaicSectionContentOne = {
    backgroundColor: lightTheme.palette.background.accentLight,
    title: "Mosaic Section One",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    ],
};
const mosaicSectionContentTwo = {
    backgroundColor: "white",
    title: "Mosaic Section Two",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    ],
};
const mosaicSectionContentThree = {
    backgroundColor: "white",
    title: "Mosaic Section Three",
    content:
        "This is the mosaic section content. Here you can describe whatever you like about your service and the button below can link to any page in this website or any external site.",
    button: {
        text: "learn more",
        href: "/about",
        variant: "contained",
    },
    images: [
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    ],
};

const blockPhotoContentOne = {
    background: lightTheme.palette.background.accentLight,
    title: "BLOCK PHOTO TITLE",
    content: "Block Photo One",
    button: {
        text: "Button Text",
        href: "/about",
        variant: "contained",
    },
    image: {
        url: "/images/novelists.webp",
        alt: "Michael hoberman speaking with two novelists",
    },
};
const blockPhotoContentTwo = {
    background: lightTheme.palette.background.accentLight,
    title: "BLOCK PHOTO TITLE",
    content: "Block Photo Two",
    button: {
        text: "Button Text",
        href: "/about",
        variant: "contained",
    },
    image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
};

const showcaseContentOne = {
    title: "Cool Book Title",
    subTitle: "Coming Soon",
    image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    quote: "Uncle Michael is so cool, he won a game of connect four in three moves",
    description:
        "This is the showcase description. This is where you can talk about what you're showcasing and tell people why they should be interested.",
    buttons: [
        { variant: "contained", href: "https://google.com", text: "Preorder" },
        { variant: "contained", href: "/work", text: "View publications" },
    ],
};

// 4. Services
// 5. Projects

const galleryStylesCategories = [
    {
        name: "Black and White",
        href: "/gallery/styles/black%20and%20white",
        image: {
            url: "/images/placeholder.webp",
            alt: "alt gallery image text",
        },
    },
    {
        name: "Mixed Media",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
    },
    {
        name: "Acrylic",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
    },
    {
        name: "Watercolor",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
    },
];

const galleryCategories = [
    {
        name: "fiction",
        href: "/publications/fiction",
        image: {
            url: "/images/placeholder.webp",
            alt: "alt gallery image text",
        },
        subCategories: [
            {
                name: "short story",
                href: "/publications/fiction/shortstories",
                image: {
                    url: "/images/placeholder.webp",
                    alt: "alt gallery image text",
                },
            },
            {
                name: "flash fiction",
                href: "/publications/fiction/flash",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "novella",
                href: "/publications/fiction/novellas",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
        ],
    },
    {
        name: "poetry",
        href: "/publications/poetry",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [],
    },
    {
        name: "article",
        href: "/publications/articles",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [
            {
                name: "editorial",
                href: "/publications/articles/editorials",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "letter",
                href: "/publications/articles/letters",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "opinion",
                href: "/publications/articles/letters",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
        ],
    },
];

const galleryConfig = {
    categories: [],
    subCategories: [],
    fields: [
        { name: "Title", type: "text", value: "" },
        { name: "Author", type: "text", value: "" },
        {
            name: "Hook",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        { name: "Published", type: "number", value: "" },
        { name: "Artist", type: "text", value: "" },
    ],
};

const subscribeConfig = {
    website: "magazine-template",
    category: "contact",
    fields: [{ name: "Name", type: "text", value: "" }],
};

// 7. About

// 7a. About

const aboutContent = {
    image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    name: "About Us",
    buttons: [
        {
            text: "Button Text",
            href: "/about/masthead",
            variant: "contained",
        },
        {
            text: "Button Text",
            href: "/about/missionstatement",
            variant: "contained",
        },
    ],
    content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n\nQuibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda. Laboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque.\n\nDolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.\n\nLorem ipsum, dolor sit amet consectetur adipisicing elit.\n\nQuibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda. Laboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque.\n\nDolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
};

const leadProfile = {
    image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    name: "Artist Name",
    content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n\nQuibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda. Laboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque.\n\nDolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.\n\nLorem ipsum, dolor sit amet consectetur adipisicing elit.\n\nQuibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda. Laboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque.\n\nDolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
};

const secondaryProfiles = [
    {
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        name: "Designer One",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n\nQuibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque.",
    },
    {
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        name: "Designer Two",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
    },
    {
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        name: "Designer Three",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.\n\nDolore ipsa sed asperiores voluptatibus nam modi.",
    },
];

// 7b. Studio

const studioContent = {
    imageOne: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    imageTwo: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    imageThree: {
        url: "/images/placeholder.webp",
        alt: "alt placeholder text",
    },
    header: "This is what we believe",
    content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
};

// 7c. Work

const workContent = {
    imageOne: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    imageTwo: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    imageThree: {
        url: "/images/placeholder.webp",
        alt: "alt placeholder text",
    },
    header: "Work Header",
    content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
};

// 8. Social Media

// 9. Process
// 10. Contact

const processSteps = [
    {
        title: "Step Title",
        name: "STEP ONE",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        reverse: false,
    },
    {
        title: "Step Title",
        name: "STEP TWO",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        reverse: true,
    },
    {
        title: "Step Title",
        name: "STEP THREE",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.\n\nDolore ipsa sed asperiores voluptatibus nam modi.",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        reverse: false,
    },
    {
        title: "Step Title",
        name: "STEP FOUR",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.",
        image: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
        reverse: true,
    },
];

const eventConfig = {
    categories: [],
    subCategories: [],
    fields: [
        { name: "Title", type: "text", value: "" },
        { name: "Start Date", type: "date", value: "" },
        { name: "End Date", type: "date", value: "" },
        { name: "Venue", type: "text", value: "" },
        { name: "Time", type: "text", value: "" },
        {
            name: "Description",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        { name: "Venue Website", type: "text", value: "" },
    ],
    timeUploaded: new Date(),
};
const contributorConfig = {
    categories: [],
    subCategories: [],
    fields: [
        { name: "Name", type: "text", value: "" },
        {
            name: "Description",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
    ],
    timeUploaded: new Date(),
};

const textSubmissionsConfig = {
    fields: [
        { name: "Name", type: "text", value: "" },
        { name: "Genre", type: "text", value: "" },
        { name: "Previously Published", type: "text", value: "" },
        {
            name: "Comment",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
    ],
    timeUploaded: new Date(),
};
const imageSubmissionsConfig = {
    fields: [
        { name: "Name", type: "text", value: "" },
        { name: "Genre", type: "text", value: "" },
        { name: "Previously Published", type: "text", value: "" },
        {
            name: "Comment",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
    ],
    timeUploaded: new Date(),
};

const pages = [
    // {
    //     name: "issues",
    //     href: "/issues",
    //     subPages: [
    //         { name: "Latest", href: "/issues/latest" },
    //         { name: "Archive", href: "/issues/archive" },
    //     ],
    // },
    {
        name: "fiction",
        href: "/publications/fiction",
        subPages: [],
    },
    {
        name: "poetry",
        href: "/publications/poetry",
        subPages: [],
    },
    {
        name: "articles",
        href: "/publications/articles",
        subPages: [],
    },
    {
        name: "contributors",
        href: "/contributors",
        subPages: [],
    },
    {
        name: "about",
        href: "/about",
        subPages: [
            { name: "Masthead", href: "/about/masthead" },
            {
                name: "Mission Statement",
                href: "/about/missionstatement",
            },
        ],
    },
    { name: "submissions", href: "/submissions", subPages: [] },
];

const videos = [
    {
        title: "Video One",
        description: "Video Description",
        date: "January 1, 1969",
        href: "https://www.youtube.com/embed/CzNjdaXleEM",
    },
];

const books = [
    {
        title: "Book One",
        publisher: "Name of publisher",
        date: "2003",
        description:
            "This is the description of the book. It contains many interesting facts and entertaining anecdotes. The book I mean, not this description.",
        button: {
            href: "https://google.com",
            variant: "contained",
            color: "secondary",
            text: "view listing",
        },

        image: { url: "/images/hundred.webp", alt: "alt placeholder text" },
    },
    {
        title: "Book Two",
        publisher: "Name of publisher",
        date: "2003",
        description:
            "This is the description of the book. It contains many interesting facts and entertaining anecdotes. The book I mean, not this description.",
        button: {
            href: "https://google.com",
            variant: "contained",
            color: "secondary",
            text: "view listing",
        },
        image: { url: "/images/israel.webp", alt: "alt placeholder text" },
    },
    {
        title: "Book Three",
        publisher: "Name of publisher",
        date: "2003",
        description:
            "This is the description of the book. It contains many interesting facts and entertaining anecdotes. The book I mean, not this description.",
        button: {
            href: "https://google.com",
            variant: "contained",
            color: "secondary",
            text: "view listing",
        },
        image: { url: "/images/strange.webp", alt: "alt placeholder text" },
    },
];

const articles = [
    { title: "Article one", href: "https://google.com", date: "Jan 1, 2022" },
    { title: "Article two", href: "https://google.com", date: "Jan 1, 2022" },
    { title: "Article three", href: "https://google.com", date: "Jan 1, 2022" },
    { title: "Article four", href: "https://google.com", date: "Jan 1, 2022" },
    { title: "Article five", href: "https://google.com", date: "Jan 1, 2022" },
];

const publicationsContent = {
    title: "Books and Articles by Your Name",
    body: "This is the body of the page. It can be as long or as short as you like",
    image: { url: "/images/strange.webp", alt: "alt placeholder text" },
};

export {
    siteName,
    pages,
    navbar,
    header,
    videos,
    books,
    articles,
    galleryCategories,
    galleryStylesCategories,
    galleryConfig,
    eventConfig,
    subscribeConfig,
    contributorConfig,
    textSubmissionsConfig,
    imageSubmissionsConfig,
    heroContent,
    homeGalleryContent,
    blockTextOne,
    blockTextTwo,
    blockTextThree,
    blockPhotoContentOne,
    blockPhotoContentTwo,
    showcaseContentOne,
    mosaicSectionContentOne,
    mosaicSectionContentTwo,
    mosaicSectionContentThree,
    servicesContent,
    aboutContent,
    leadProfile,
    secondaryProfiles,
    studioContent,
    workContent,
    processSteps,
    publicationsContent,
};
