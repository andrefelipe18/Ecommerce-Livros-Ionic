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
    addToWishList(bookId: number) {
      const book = this.books.find((book) => book.id === bookId);
      if (book) {
        book.inWishlist = true;
      }
    },

    removeFromWishList(bookId: number) {
      const book = this.books.find((book) => book.id === bookId);
      if (book) {
        book.inWishlist = false;
      }
    },
  },
});
