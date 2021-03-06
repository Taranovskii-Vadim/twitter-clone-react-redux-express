import { createSelector } from "reselect";
import { IRootState } from "../../types";
import { IState } from "./types";

const getBase = (state: IRootState): IState => state.tweet;

export const selectTweet = createSelector(getBase, state => state.tweet);

export const selectStatus = createSelector(getBase, state => state.status);

export const selectMessage = createSelector(getBase, state => state.message);
