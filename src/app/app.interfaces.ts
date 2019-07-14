interface User {
  username: string;
}

interface Message {
  date: Date;
  username: string;
  text: string;
}

interface State {
  socket: any;
}
