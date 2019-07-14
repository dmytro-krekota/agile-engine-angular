import { SocketActionTypes } from '../actions/socket.actions';

export const initialState = {
  messages: [],
  users: [],
};

export function socketReducer(state = initialState, action: any) {
  switch (action.type) {
    case SocketActionTypes.MessagesWereLoaded:
      return { ...state, messages: action.payload };
    case SocketActionTypes.MessageWasAdded:
      return { ...state, messages: [...state.messages, action.payload] };
    case SocketActionTypes.UsersWereLoaded:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
