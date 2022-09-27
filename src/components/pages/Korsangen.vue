<template>
  <h1>korsängen</h1>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import Localbase from 'localbase'
let db = new Localbase('db')

const route = useRoute()

//console.log(route.params.id)

 onMounted( () => {
    db.collection('regions').doc({ id: parseInt(route.params.id) }).get().then(document => {
    console.log(document)
  })
})
</script>

<style>

</style>