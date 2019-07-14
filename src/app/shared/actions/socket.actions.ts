import { Action } from '@ngrx/store';

export enum SocketActionTypes {
  MessagesWereLoaded = '[Socket] Messages were loaded',
  MessageWasAdded = '[Socket] Message was added',
  UsersWereLoaded = '[Socket] Users were loaded',
}

export class MessagesWereLoaded implements Action {
  readonly type = SocketActionTypes.MessagesWereLoaded;
  constructor(public payload: any) {}
}

export class MessageWasAdded implements Action {
  readonly type = SocketActionTypes.MessageWasAdded;
  constructor(public payload: any) {}
}

export class UsersWereLoaded implements Action {
  readonly type = SocketActionTypes.UsersWereLoaded;
  constructor(public payload: any) {}
}

export type SocketActions =
  | MessagesWereLoaded
  | MessageWasAdded
  | UsersWereLoaded;
