# Documentação do arquivo PageHeader.vue

## Descrição

Este arquivo define um componente Vue que exibe um cabeçalho de página. O título do cabeçalho é definido através de um slot, permitindo que seja personalizado em cada instância do componente.

## Código
```vue
<template>
    <ion-header>
        <ion-toolbar>
            <ion-title>
                <!-- Define um slot para o título do cabeçalho -->
                <slot name="title"></slot>
            </ion-title>
        </ion-toolbar>
    </ion-header>
</template>
```