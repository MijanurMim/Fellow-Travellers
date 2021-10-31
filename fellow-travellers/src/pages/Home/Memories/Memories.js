import { Container, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React from "react";
import "./Memories.css";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const itemData = [
  {
    img: "https://image.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://image.freepik.com/free-photo/tourist-from-mountain-top-sun-rays-man-wear-big-backpack-against-sun-light_1150-9129.jpg",
    title: "Burger",
  },
  {
    img: "https://image.freepik.com/free-photo/couple-tourists-with-backpacks-mountain_1150-7520.jpg",
    title: "Camera",
  },
  {
    img: "https://image.freepik.com/free-photo/woman-walking-kelingking-beach-nusa-penida-island-bali-indonesia_335224-337.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://image.freepik.com/free-photo/young-man-arms-outstretched-by-sea-sunrise-enjoying-freedom-life-people-travel-wellbeing-concept_169160-68.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://image.freepik.com/free-photo/silhouette-happy-family-walking-meadow-sunset-mother-father-child-son-having-fun-outdoors-enjoying-time-together-family-love-mental-health-happy-lifestyle-concept_169160-634.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://image.freepik.com/free-photo/successful-hiker-hiking-mountain-peak_169160-606.jpg",
    title: "Basketball",
  },
  {
    img: "https://image.freepik.com/free-photo/handsome-man-with-backpack-taking-selfie-outdoor-young-hiker-travel-mountains-smiling-camera_169160-605.jpg",
    title: "Fern",
  },
  {
    img: "https://image.freepik.com/free-photo/couple-travelers-pointing-directions_23-2147643192.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://image.freepik.com/free-photo/tourist-from-mountain-top-sun-rays-man-wear-big-backpack-against-sun-light_1150-9121.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://image.freepik.com/free-photo/hiker-stand-camping-front-orange-tent-backpack-mountains_1150-9163.jpg",
    title: "Sea star",
  },
  {
    img: "https://as2.ftcdn.net/v2/jpg/02/25/68/93/500_F_225689306_ykYjusbN3wikbNucYu6vi398rner6Qku.jpg",
    title: "Bike",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "a",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Cc",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Cofg",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hdgffhdgh",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "sfdgsdfg",

    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "dfghgfh",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "sdfgfsdfgh",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mudgfhg",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tdgfhh",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "sfdghsfdg",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "fdgghsgfh",
    cols: 2,
  },
];

const Memories = () => {
  return (
    <Container sx={{ mt: "130px" }}>
      <Typography variant="h3" color="primary">
        Customers Best Memories
      </Typography>

      <ImageList
        sx={{ width: "100%", height: "800px" }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default Memories;
