import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { remove, getArticles } from "../lib/actions/articles/actionCreators";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Form from "./Form";

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
    items: [];
  };
}

const mapState = ({ articles }: RootState) => ({
  isArticlesPending: articles.isPending,
  items: articles.items,
  event: articles.event,
  instance: articles.instance,
});

const mapDispatch = {
  readArticles: () => getArticles(),
  removeArticle: (id: number) => remove(id),
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

function App({ readArticles, event }: PropsFromRedux) {
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
        <Grid item xs={6}></Grid>
      </Grid>
    </Container>
  );
}
export default connector(App);
