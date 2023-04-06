export interface Post {
  id: string;
  title: string;
  body: string;
}

export interface ById {
  [key: string]: Post;
}
export interface Normalize {
  byId: ById;
  allIds: string[];
}
