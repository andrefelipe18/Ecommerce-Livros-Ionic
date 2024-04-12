# Documentação do arquivo wishlist.vue

## Descrição

Este arquivo define uma página que exibe uma lista de livros desejados. Cada livro tem um título, autor, classificação, imagem e um botão para comprar o livro. Os livros podem ser adicionados ou removidos da lista de desejos.

## Código
```vue
<script setup lang="ts">
// Importa os ícones necessários
import { bookmarkOutline, bookmarks } from 'ionicons/icons';

// Importa a store de livros
const BooksStore = useBooksStore();

// Obtém a lista de livros desejados da store
const wishListBooks = computed(() => BooksStore.books.filter(book => book.inWishlist));

// Define a função para adicionar um livro à lista de desejos
const addToWishList = (bookId: number) => {
    BooksStore.addToWishList(bookId);
}

// Define a função para remover um livro da lista de desejos
const removeFromWishList = (bookId: number) => {
    BooksStore.removeFromWishList(bookId);
}

// Define a função para comprar um livro
const buy = (bookId: number) => {
    BooksStore.removeFromWishList(bookId);
    BooksStore.purchaseBook(bookId);
}
</script>

<template>
    <ion-page>
        <ion-content>
            <PageHeader>
                <template #title>
                    Livros desejados
                </template>
            </PageHeader>

            <ion-list>
                <!-- Itera sobre a lista de livros desejados -->
                <ion-item v-for="book in wishListBooks" :key="book.id">
                    <div class="">
                        <h2 class="flex items-center gap-1.5">
                            <!-- Exibe o título do livro -->
                            <span>{{ book.title }} -</span>
                            <!-- Exibe o ícone de desejo, que pode ser clicado para adicionar ou remover o livro da lista de desejos -->
                            <span @click="book.inWishlist ? removeFromWishList(book.id) : addToWishList(book.id)" class="flex items-center">
                                <ion-icon :icon="book.inWishlist ? bookmarks : bookmarkOutline"
                                    class="font-[20px] text-[#3880FF]"></ion-icon>
                            </span>
                        </h2>
                        <!-- Exibe o autor do livro -->
                        <p>{{ book.author }}</p>
                        <!-- Exibe a classificação do livro -->
                        <div class="flex gap-1.5 mt-2.5 mb-4">
                            <ion-icon v-for="star in book.rate" :key="star" :icon="ioniconsStar"
                                class="font-[20px] text-[#FFD700]"></ion-icon>
                        </div>
                        <!-- Exibe a imagem do livro -->
                        <img :src="book.imageURL" alt="book image" width="100px" />
                        <!-- Exibe o botão para comprar o livro, a menos que o livro já tenha sido comprado -->
                        <ion-button v-if="!book.isPurchased" @click="buy(book.id)" id="buy-book">Comprar esse livro</ion-button>
                        <ion-button v-if="book.isPurchased" id="buy-book" disabled>Comprado!!</ion-button>
                    </div>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>
```

## Funções

- `addToWishList(bookId: number)`: Adiciona o livro com o ID especificado à lista de desejos.
- `removeFromWishList(bookId: number)`: Remove o livro com o ID especificado da lista de desejos.
- `buy(bookId: number)`: Remove o livro com o ID especificado da lista de desejos e o adiciona à lista de comprados.