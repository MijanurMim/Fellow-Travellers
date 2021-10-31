import ShareIcon from "@mui/icons-material/Share";
import {
  Avatar,
  Button,
  CardActionArea,
  CardActions,
  CardHeader,
  Grid,
  IconButton,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },
  cardButton: {
    display: "flex",
    justifyContent: "center",
  },
  buttonText: {
    textDecoration: "none",
  },
}));

const Package = ({ pd, handleDelete }) => {
  const { _id, title, date, image, description } = pd;
  const classes = useStyles();

  return (
    <Grid item xs={12} md={5} sx={{ m: "20px" }}>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar aria-label="recipe" src={image}></Avatar>}
          action={
            <IconButton aria-label="settings">
              <ShareIcon></ShareIcon>
            </IconButton>
          }
          title={title}
        />
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {description} {date}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardButton}>
          {/* dynamic routing for every service  */}

          <Button onClick={() => handleDelete(pd._id)}>Delete</Button>
          <Link to={`/packageDetails/${_id}`}>
            <Button>Book {title.toLowerCase()} </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>

    // <div>
    //   <h1>{title}</h1>
    //   <h3>{_id}</h3>
    //   <h4>{date}</h4>

    //   <Button onClick={() => handleDelete(pd._id)}>Delete</Button>
    //   <Link to={`/packageDetails/${_id}`}>
    //     <Button>Book {title.toLowerCase()} </Button>
    //   </Link>
    // </div>
  );
};

export default Package;
