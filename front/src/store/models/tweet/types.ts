import { Action } from "redux";
import { IMessage, TStatus } from "../../types";
import { IUser } from "../user/types";

// data

export interface ITweet {
  readonly id: string;
  text: string;
  date: string;
  imageUrl?: string;
  user: IUser;
}

export interface IState {
  tweet?: ITweet;
  status: TStatus;
  message?: IMessage;
}

// actions

export enum ETypes {
  FETCH_TWEET = "/tweet/FETCH_TWEET",
  SET_TWEET = "/tweet/SET_TWEET",
  CHANGE_STATUS = "/tweet/CHANGE_STATUS",
}

export interface IFetchTweet extends Action<ETypes.FETCH_TWEET> {
  payload: string;
}

export interface ISetTweet extends Action<ETypes.SET_TWEET> {
  payload: IState["tweet"];
}

export interface IChangeStatus extends Action<ETypes.CHANGE_STATUS> {
  payload: {
    status: TStatus;
    message?: IMessage;
  };
}

export type TAction = ISetTweet | IChangeStatus;
