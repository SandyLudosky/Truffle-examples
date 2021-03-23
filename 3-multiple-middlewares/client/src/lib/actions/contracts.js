import { DEPLOY } from "./types";

export const deploy = () => {
  return (
    dispatch,
    _,
    { instances: { SimpleStorage, Greetings }, accounts, admin }
  ) => {
    dispatch({
      type: DEPLOY,
      payload: {
        accounts,
        admin,
        greetings: { instance: Greetings },
        storage: { instance: SimpleStorage },
      },
    });
  };
};
