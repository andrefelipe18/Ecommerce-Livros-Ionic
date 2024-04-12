<script setup lang="ts">
import { home, star, card, homeOutline, starOutline, cardOutline } from 'ionicons/icons';

const router = useIonRouter();
const route = useRoute();

const getIcon = (routeName: string, solidIcon: string, outlineIcon: string) => {
  return computed(() => route.name === routeName ? solidIcon : outlineIcon);
};

const homeIcon = getIcon('index', home, homeOutline);
const wishListIcon = getIcon('wishlist', star, starOutline);
const purchasedIcon = getIcon('purchased', card, cardOutline);

const toHome = () => router.push('/');
const toWishList = () => router.push('/wishlist');
const toPurchased = () => router.push('/purchased');
</script>
<template>
  <ion-app>
      <ion-router-outlet></ion-router-outlet> <!-- Esse componente é responsável por renderizar as rotas -->

      <PageFooter></PageFooter>
  </ion-app>
</template>
