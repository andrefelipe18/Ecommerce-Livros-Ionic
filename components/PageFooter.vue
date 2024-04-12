<script setup lang="ts">
import { home, star, card, homeOutline, starOutline, cardOutline } from 'ionicons/icons';

const router = useIonRouter();

const currentRoute = ref(router.route);

const homeIcon = computed(() => {
    return currentRoute.value === '/' ? homeOutline : home;
});

const wishListIcon = computed(() => {
    return currentRoute.value === '/wishlist' ? star : starOutline;
});

const purchasedIcon = computed(() => {
    return currentRoute.value === '/purchased' ? card : cardOutline;
});

const toHome = () => router.push('/');
const toWishList = () => router.push('/wishlist');
const toPurchased = () => router.push('/purchased');
</script>
<template>
    <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" @click="toHome">
            <ion-icon :icon="homeIcon" />
            <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="wishlist" @click="toWishList">
            <ion-icon :icon="wishListIcon" />
            <ion-label>Lista de Desejo</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="purchased" @click="toPurchased">
            <ion-icon :icon="purchasedIcon" />
            <ion-label>Comprados</ion-label>
        </ion-tab-button>
    </ion-tab-bar>
</template>