import React from "react";
import "./NewsCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const NewsCard = (props) => {
  return (
    <Card sx={{ maxWidth: 375  ,minHeight:390 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.image}
        className="newsImage"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.source.name}
        </Typography>
        <Typography variant="body3" >
          <strong>Published At: &nbsp;</strong>
          {new Date(props.publishedAt).toLocaleDateString()}
        </Typography>
        <br/>
        <Typography variant="body3" >
          <strong>Author:</strong> &nbsp;
          <i>{props.author}</i>
        </Typography>
        <br />
        <Typography variant="body2" className="NewsCard_title" >
          {props.title.split('-')[0]}
        </Typography>
      </CardContent>
      <CardActions>
        <a target="_blank" rel="noreferrer" href={props.url}>
          See more
        </a>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
