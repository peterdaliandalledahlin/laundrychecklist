<template>
  <v-alert class="d-flex justify-center" type="info">Sidan du försöker nå verkar inte finnas.</v-alert>
    <v-btn
    @click="goBack"
      variant="flat"
      color="error"
    >
    Tillbaka
    </v-btn>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
  router.back()
}
</script>
