import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    float: "right",
  },
});

const ArticleCard = ({ id, date, title, content }: IArticleOutput) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        {title}
        <Typography component="p">{content}</Typography>
      </CardContent>
      {/* <CardActions className={classes.button}>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};
export default ArticleCard;
