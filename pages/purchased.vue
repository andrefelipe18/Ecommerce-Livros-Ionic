<script setup lang="ts">
import { closeCircleOutline } from 'ionicons/icons';
const BooksStore = useBooksStore();

const purchasedBooks = computed(() => BooksStore.books.filter(book => book.isPurchased));

const removeFromPurchase = (bookId: number) => {
    BooksStore.removeFromPurchase(bookId);
}

const finishReading = (bookId: number) => {
    BooksStore.finishBook(bookId);
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
                            <span @click="removeFromPurchase(book.id)" class="flex items-center">
                                <ion-icon :icon="closeCircleOutline"
                                    class="font-[20px] text-[#ec1e1e]"></ion-icon>
                            </span>
                        </h2>
                        <p>{{ book.author }}</p>
                        <div class="flex gap-1.5 mt-2.5 mb-4">
                            <ion-icon v-for="star in book.rate" :key="star" :icon="ioniconsStar"
                                class="font-[20px] text-[#FFD700]"></ion-icon>
                        </div>
                        <img :src="book.imageURL" alt="book image" width="100px" />
                        <ion-button v-if="!book.isFinished" @click="finishReading(book.id)" id="finish-reading">Finalizar leitura</ion-button>
                        <ion-button v-if="book.isFinished" id="finish-reading" disabled>Finalizado!!</ion-button>
                    </div>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>