import { AUTHORS } from "./ActionType";

export const authors = (authorName) => {
  return {
    type: AUTHORS,
    payload: authorName,
  };
};
