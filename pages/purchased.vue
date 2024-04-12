<script setup lang="ts">
import { bookmarkOutline, bookmarks } from 'ionicons/icons';
const BooksStore = useBooksStore();

const purchasedBooks = computed(() => BooksStore.books.filter(book => book.isPurchased));

const addToWishList = (bookId: number) => {
    BooksStore.addToWishList(bookId);
}

const removeFromWishList = (bookId: number) => {
    BooksStore.removeFromWishList(bookId);
}
</script>
<template>
    <ion-page>
        <ion-content>
            <PageHeader>
                <template #title>
                    Livros comprados
                </template>
            </PageHeader>

            <ion-list>
                <ion-item v-for="book in purchasedBooks" :key="book.id">
                    <div class="">
                        <h2 class="flex items-center gap-1.5">
                            <span>{{ book.title }} -</span>
                            <span @click="book.inWishlist ? removeFromWishList(book.id) : addToWishList(book.id)" class="flex items-center">
                                <ion-icon :icon="book.inWishlist ? bookmarks : bookmarkOutline"
                                    class="font-[20px] text-[#3880FF]"></ion-icon>
                            </span>
                        </h2>
                        <p>{{ book.author }}</p>
                        <div class="flex gap-1.5 mt-2.5 mb-4">
                            <ion-icon v-for="star in book.rate" :key="star" :icon="ioniconsStar"
                                class="font-[20px] text-[#FFD700]"></ion-icon>
                        </div>
                        <img :src="book.imageURL" alt="book image" width="100px" />
                        <ion-button shape="round">Round</ion-button>
                    </div>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>