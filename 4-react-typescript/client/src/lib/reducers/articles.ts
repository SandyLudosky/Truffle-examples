import { DEPLOY } from "../actions/contracts/actionTypes";

export const initialState: ArticleState = {
  instance: Object.create(null),
  event: Object.create(null),
  items: [],
  isPending: false,
};

const articles = (
  state: ArticleState = initialState,
  { type, payload }: ArticleAction
) => {
  switch (type) {
    case DEPLOY:
      return {
        ...state,
        instance: payload.articles.instance,
      };
    default:
      return {
        ...state,
        ...payload,
      };
  }
};

export default articles;
