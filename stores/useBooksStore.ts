import { books } from "@/fakedata/books";

interface Book {
  id: number;
  title: string;
  author: string;
  rate: number;
  imageURL: string;
  inWishlist: boolean;
}

export const useBooksStore = defineStore("books", {
  state: () => ({
    books: books as Book[],
  }),
  actions: {
    add() {},

    finish() {},
  },
});
