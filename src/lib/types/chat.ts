export interface Message {
  uuid: string;
  message: string;
  fromTeacher: boolean;
  createdAt: string;
  isViewed: boolean;
}

export interface MessagesResponse {
  data: Message[];
  nextCursor: number;
}
