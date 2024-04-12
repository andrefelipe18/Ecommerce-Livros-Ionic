<script setup lang="ts">
import { home, star, card, homeOutline, starOutline, cardOutline } from 'ionicons/icons';

const router = useIonRouter();
const route = useRoute();

const routeName = ref(route.name);

const getIcon = (route: string, solidIcon: string, outlineIcon: string) => {
    return computed(() => routeName.value === route ? solidIcon : outlineIcon);
};

const homeIcon = getIcon('index', home, homeOutline);
const wishListIcon = getIcon('wishlist', star, starOutline);
const purchasedIcon = getIcon('purchased', card, cardOutline);

const toRoute = (routePath: string) => {
    router.push(routePath);
    routeName.value = routePath.replace('/', '');
    if(routePath === '/') routeName.value = 'index';
}
</script>
<template>
    <footer id="footer">
        <div class="container-icon" :class="{ 'active-route': routeName === 'index' }" @click="toRoute('/')">
            <ion-icon :icon="homeIcon" />
            <ion-label>Home</ion-label>
        </div>
        <div class="container-icon" :class="{ 'active-route': routeName === 'wishlist' }" @click="toRoute('/wishlist')">
            <ion-icon :icon="wishListIcon" />
            <ion-label>Lista de Desejo</ion-label>
        </div>
        <div class="container-icon" :class="{ 'active-route': routeName === 'purchased' }" @click="toRoute('/purchased')">
            <ion-icon :icon="purchasedIcon" />
            <ion-label>Comprados</ion-label>
        </div>
    </footer>
</template>
<style scoped>
.container-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #333;
}

.container-icon.active-route {
    color: #3880FF;
}

#footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #f7f7f7;
    color: white;
    padding: 1.25rem;
    text-align: center;
    display: flex;
    justify-content: space-between;
    border-radius: 0.75rem 0.75rem 0 0;
}
</style>