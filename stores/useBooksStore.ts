import { book1, book2, book3 } from "@/fakedata/books";

interface Book {
  id: number;
  title: string;
  author: string;
  rate: number;
  imageURL: string;
}

export const useBooksStore = defineStore("books", {
  state: () => ({
    books: [book1, book2, book3] as Book[],
  }),
  actions: {
    add() {},

    finish() {},
  },
});
