import { SEARCHVALUE } from "./ActionType";

export const searchValue = (value) => {
  return {
    type: SEARCHVALUE,
    payload: value,
  };
};
// export const usersId = (userid) => {
//   return {
//     type: USERID,
//     payload: userid,
//   };
// };
