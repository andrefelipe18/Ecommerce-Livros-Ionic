interface Book {
  id: number;
  title: string;
  author: string;
  rate: number;
  imageURL: string;
}

let book1: Book = {
  id: 1,
  title: "Harry Potter",
  author: "J.K. Rowling",
  rate: 5,
  imageURL:
    "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
};

let book2: Book = {
  id: 2,
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  rate: 2,
  imageURL:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.readingsanctuary.com%2Fwp-content%2Fuploads%2F2018%2F03%2Fthe-lord-of-the-rings.png&f=1&nofb=1&ipt=785811a00b5bca9e81d3649d0a08982771cc6db7ac26b2050b30e08aa54a6614&ipo=images",
};

let book3: Book = {
  id: 3,
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  rate: 2,
  imageURL:
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-tz40y0OlrCc%2FVGfG-NmL_AI%2FAAAAAAAAAJg%2FJVArqytkaOE%2Fs1600%2F81Dd%252BimpKAL.jpg&f=1&nofb=1&ipt=7634b46fb47f6c56b7afe4822caddcf9e89d02690d20f5865419515a95848365&ipo=images",
};

export { book1, book2, book3 };