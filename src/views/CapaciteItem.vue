<template>
    <ion-item>
        <ion-thumbnail slot="start">
            <img :src="Capacite.Image">
        </ion-thumbnail>
        <ion-label>
            <h2>{{ Capacite.Nom }}</h2>
            <p>{{ Capacite.Description }}</p>
        </ion-label>
        <ion-button fill="outline" slot="end">Détail</ion-button>
    </ion-item>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import {
    IonItem,
    IonLabel,
    IonThumbnail,
    IonButton
} from "@ionic/vue";

import type { PropType } from 'vue'

import { Capacite } from "@/domain/Capacite";

export default defineComponent({
    components: {
        IonItem,
        IonLabel,
        IonThumbnail,
        IonButton
    },
    props: {
        Capacite: { type: Object as PropType<Capacite>, required: true },
    }
});
</script>
<style scoped>
</style>
