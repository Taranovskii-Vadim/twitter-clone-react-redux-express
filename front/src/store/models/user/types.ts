import { Action } from "redux";
import { TStatus } from "../../types";

// data

export interface IAuthData {
  email: string;
  password: string;
}

export interface IUser {
  readonly id: string;
  name: string;
  nickname: string;
  avatarUrl?: string;
}

export interface IState {
  user: IUser | undefined;
  status: TStatus;
}

// actions

export enum ETypes {
  SET_USER = "/user/SET_USER",
  FETCH_USER = "/user/FETCH_USER",
}

export interface IFetchUser extends Action<ETypes.FETCH_USER> {
  payload: IAuthData;
}

export interface ISetUser extends Action<ETypes.SET_USER> {
  payload: IUser;
}

export type TAction = ISetUser;
