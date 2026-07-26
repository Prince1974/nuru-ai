export type MessageRole =
  | "user"
  | "assistant"
  | "system";


export interface ChatMessage {

  id:string;

  role:MessageRole;

  content:string;

  createdAt:Date;

}


export interface Conversation {

  id:string;

  agentId:string;

  messages:ChatMessage[];

}
