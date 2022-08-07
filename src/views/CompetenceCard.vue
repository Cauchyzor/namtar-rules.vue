<template>
    <ion-card button="true">
        <ion-text>{{ Competence.Nom }}</ion-text>
    </ion-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import {
    IonCard,
    IonText,
} from "@ionic/vue";

import type { PropType } from 'vue'

import type { Competence } from "@/domain/Competence";

export default defineComponent({
    components: {
        IonCard,
        IonText
    },
    props: {
        showAttribute: Boolean,
        Competence: { type: Object as PropType<Competence>, required: true },
    },
    data() {
        const MARGIN_GUTTER_PX = 2
        const SCREEN_SIZE = window.innerWidth
        return {
            CardWidth: (SCREEN_SIZE - 5 * MARGIN_GUTTER_PX) / 4
        }
    },
    mounted() {
        this.showAttribute
        this.Competence
    }
});
</script>
<style scoped>
ion-card {
    width: 83px;
    height: 83px;
    padding: 8px;
    margin: 2px;
}

ion-text {
    font-size: 10px;
}
</style>
