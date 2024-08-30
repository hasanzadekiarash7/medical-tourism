type author = {
  imageLink: string;
  fullName: string;
  tag: string;
};
type cardItem = {
  title: string;
  description: string;
  cardImageLink: string;
  author: author;
  isReverse?:boolean;
};
export type abilities = {
  items: Array<{
    bigSize: cardItem;
    smallSize?: cardItem;
  }>;
};
