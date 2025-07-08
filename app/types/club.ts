export interface IClub {
  _id: string;
  name: string;
  slug: string;
  description: string;
  clubIconUrl: string;
  visibility: "public" | "private";
  createdAt: string;
}