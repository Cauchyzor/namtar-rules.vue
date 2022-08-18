<template>
    <ion-text>
        <h5 class="page-title">
            <slot></slot>
        </h5>
    </ion-text>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { IonText } from "@ionic/vue";

export default defineComponent({
    name: "NamTitle",
    components: {
        IonText
    }
});
</script>
<style scoped>
.page-title {
    text-transform: Uppercase;
    font-family: "Anurati-Regular";
    text-align: center;
}
</style>
