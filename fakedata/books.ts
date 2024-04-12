interface Book {
  id: number;
  title: string;
  author: string;
  rate: number;
  imageURL: string;
  inWishlist: boolean;
}

let book1: Book = {
  id: 1,
  title: "Harry Potter",
  author: "J.K. Rowling",
  rate: 5,
  imageURL:
    "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
  inWishlist: false,
};

let book2: Book = {
  id: 2,
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  rate: 2,
  imageURL:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.readingsanctuary.com%2Fwp-content%2Fuploads%2F2018%2F03%2Fthe-lord-of-the-rings.png&f=1&nofb=1&ipt=785811a00b5bca9e81d3649d0a08982771cc6db7ac26b2050b30e08aa54a6614&ipo=images",
  inWishlist: false,
};

let book3: Book = {
  id: 3,
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  rate: 2,
  imageURL:
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-tz40y0OlrCc%2FVGfG-NmL_AI%2FAAAAAAAAAJg%2FJVArqytkaOE%2Fs1600%2F81Dd%252BimpKAL.jpg&f=1&nofb=1&ipt=7634b46fb47f6c56b7afe4822caddcf9e89d02690d20f5865419515a95848365&ipo=images",
  inWishlist: true,
};

let book4: Book = {
  id: 4,
  title: "1984",
  author: "George Orwell",
  rate: 4,
  imageURL:
    "https://th.bing.com/th/id/OIP.8bTpGDLEYVpDlV8tD10XlQHaMF?w=195&h=319&c=7&r=0&o=5&pid=1.7",
  inWishlist: false,
};

let book5: Book = {
  id: 5,
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  rate: 5,
  imageURL:
    "https://th.bing.com/th/id/OIP.T55C4BiOVfcS3WFdCM3xdwHaK2?rs=1&pid=ImgDetMain",
  inWishlist: true,
};

let book6: Book = {
  id: 6,
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  rate: 4,
  imageURL:
    "https://th.bing.com/th/id/OIP.56NnR9KvQ-a88tjpiOwJ0wHaLH?rs=1&pid=ImgDetMain",
  inWishlist: false,
};

let book7: Book = {
  id: 7,
  title: "Pride and Prejudice",
  author: "Jane Austen",
  rate: 5,
  imageURL:
    "https://th.bing.com/th/id/OIP.mhFI3Nd75_9KE06fiw-XGAHaKN?rs=1&pid=ImgDetMain",
  inWishlist: false,
};

let book8: Book = {
  id: 8,
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  rate: 4,
  imageURL:
    "https://th.bing.com/th/id/OIP.wFLl1OwW94svmL7TP76r-wAAAA?w=309&h=499&rs=1&pid=ImgDetMain",
  inWishlist: false,
};

let books: Book[] = [book1, book2, book3, book4, book5, book6, book7, book8];

export { books, book1, book2, book3, book4, book5, book6, book7, book8 };
