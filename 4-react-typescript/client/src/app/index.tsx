import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { remove, getArticles } from "../lib/actions/articles/actionCreators";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Form from "./Form";
import List, { renderRow } from "./List";

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
  isArticlesPending: boolean;
  items: IArticleOutput[];
  instance: Object;
  event: Object;
}
interface IArticleActionProps {
  readArticles: () => void;
}

type Props = IArticleProps & IArticleActionProps;

function App({ readArticles, event, items }: Props) {
  useEffect(() => {
    readArticles();
  }, []);
  useEffect(() => {
    readArticles();
  }, [event]);
  return (
    <Container component="main" maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Form />
        </Grid>
        <Grid item xs={6}>
          <List items={items} heading="Articles">
            {renderRow}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = ({ articles }: RootState) => ({
  isArticlesPending: articles.isPending,
  items: articles.items,
  event: articles.event,
  instance: articles.instance,
});

function mapDispatchToProps(dispatch: DispatchType): IArticleActionProps {
  return {
    readArticles: () => getArticles(),
  };
}
const mapDispatch = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
