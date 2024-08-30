type author = {
  imageLink: string;
  fullName: string;
  tag: string;
  isAuthorTextBlack?: boolean;
};
type cardItem = {
  title: string;
  description: string;
  cardImageLink: string;
  author: author;
  isReverse?:boolean;
  isAuthorTextBlack?: boolean;
};
export type abilities = {
  items: Array<{
    bigSize: cardItem;
    smallSize?: cardItem;
  }>;
};
