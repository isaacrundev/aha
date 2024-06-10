export type ResultItemType = {
  id: string;
  name: string;
  username: string;
  avatar: string;
};

export type Tag = { id: string; count: number; name: string };

export type ResultPageParams = { itemCount: number; keywords?: string };
