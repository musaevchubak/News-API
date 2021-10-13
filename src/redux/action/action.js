import { GET_POSTS } from "../types";
import { axiosCardsGetter } from "../../API";

const getImg = (value) => ({
  type: GET_POSTS,
  payload: value,
});

export const getPosts = () => async (dispatch) => {
  try {
    const response = await axiosCardsGetter.get("");
    const data = await response.data;
    await dispatch(getImg(data));
  } catch (error) {
    console.log(error);
  }
};
