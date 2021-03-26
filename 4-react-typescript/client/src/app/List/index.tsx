import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ArticleCard from "../Card";
import { ReactElement } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    width: "100%",
    maxWidth: 360,
  },
  border: {
    marginBottom: 20,
    borderBottom: "1px solid #ccc",
  },
}));

interface RootState {
  contracts: {
    accounts: string[];
    admin: Object;
    event: Object;
  };
  articles: {
    instance: Object;
    event: Object;
    isPending: boolean;
    items: IArticleOutput[];
  };
}

interface IArticleProps {
  children(item: IArticleOutput): ReactElement;
  items: IArticleOutput[];
  heading: string;
}
interface IArticleActionProps {
  someAction: () => void;
}
export function renderRow(item: IArticleOutput) {
  return (
    <>
      <ListItem
        key={item.date}
        role={undefined}
        dense
        button
        onClick={() => null}
      >
        <ArticleCard {...item} />
      </ListItem>
    </>
  );
}
const ArticlesList = ({ children, items, heading }: IArticleProps) => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5" className={classes.border}>
        {heading}
      </Typography>
      <List className={classes.root}>{items?.map(children)}</List>
    </div>
  );
};
export default ArticlesList;
