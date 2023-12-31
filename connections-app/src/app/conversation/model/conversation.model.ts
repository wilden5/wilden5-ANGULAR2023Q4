export interface IConversationListResponse {
  $metadata: {
    httpStatusCode: number;
    requestId: string;
    attempts: number;
    totalRetryDelay: number;
  };
  Count: number;
  Items: IConversationItem[];
}

export interface IConversationItem {
  id: { S: string };
  companionID: { S: string };
}

export interface IConversationItemTransformed {
  id: string;
  companionID: string;
}

export interface ICreateConversationResponse {
  conversationID: string;
  companionID: string;
}
