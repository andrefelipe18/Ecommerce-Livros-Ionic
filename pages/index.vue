<script setup lang="ts">
const BooksStore = useBooksStore();

const books = BooksStore.books;



</script>
<template>
    <ion-page>
        <ion-content>
            <PageHeader>
                <ion-title>
                    Livros disponíveis
                </ion-title>
            </PageHeader>

            <ion-list>
                <ion-item v-for="book in books" :key="book.id">
                    <div>
                        <h2>{{ book.title }}</h2>
                        <p>{{ book.author }}</p>
                        <div class="rating">
                            <ion-icon v-for="star in book.rate" :key="star" :icon="ioniconsStar"
                                class="icon-star"></ion-icon>
                        </div>
                        <img :src="book.imageURL" alt="book image" width="100px" />
                    </div>
                </ion-item>
            </ion-list>
        </ion-content>
        <FooterTabs />
    </ion-page>
</template>
<style scoped>
.rating {
    display: flex;
    gap: 5px;
    margin-top: 10px;
    margin-bottom: 20px;
}

.icon-star {
    font-size: 20px;
    color: #FFD700;
}
</style>