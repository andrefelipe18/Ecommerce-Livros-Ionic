# Documentação do arquivo useBooksStore.ts

## Descrição

Este arquivo define uma store para gerenciar o estado dos livros em uma aplicação. A store contém o estado dos livros e ações para modificar esse estado.
Uma store ajuda a gerenciar e centralizar o estado da aplicação, tornando mais fácil rastrear e entender as mudanças de estado.

## Código

```ts
import { books } from "@/fakedata/books";

// Define a interface para um livro
interface Book {
  id: number;
  title: string;
  author: string;
  rate: number;
  imageURL: string;
  inWishlist: boolean;
  isPurchased: boolean;
  isFinished: boolean;
}

// Define a store
export const useBooksStore = defineStore("books", {
  // Define o estado inicial da store
  state: () => ({
    books: books as Book[],
  }),
  // Define as ações que podem ser realizadas na store
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

    purchaseBook(bookId: number) {
      const book = this.books.find((book) => book.id === bookId);
      if (book) {
        book.isPurchased = true;
      }
    },

    removeFromPurchase(bookId: number) {
      const book = this.books.find((book) => book.id === bookId);
      if (book) {
        book.isPurchased = false;
      }
    },

    finishBook(bookId: number) {
      const book = this.books.find((book) => book.id === bookId);
      if (book) {
        book.isFinished = true;
      }
    },
  },
});
```
## Funções

- `addToWishList(bookId: number)`: Adiciona um livro à lista de desejos.
- `removeFromWishList(bookId: number)`: Remove um livro da lista de desejos.
- `purchaseBook(bookId: number)`: Marca um livro como comprado.
- `removeFromPurchase(bookId: number)`: Desmarca um livro como comprado.
- `finishBook(bookId: number)`: Marca um livro como terminado.