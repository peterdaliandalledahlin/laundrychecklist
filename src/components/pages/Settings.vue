<template>
  <v-container>
    <v-sheet
      elevation="8"
      class="mx-auto my-5 pa-6"
      height="100%"
      width="100%"
    >

      <v-row class="mb-3">
        <v-alert
          color="deep-orange"
          icon="mdi-information"
          title="Information"
          variant="outlined"
        >
        <ul>
          <li>&bull; Är det första gången du gör detta så raderas ingen gammal checklista.</li>
          <li>&bull; Viktigt att veta är att om du trycker på knappen "Skapa ny checklista" så raderas den gamla & all data försvinner.</li>
          <li>&bull; Detta är bäst att göra när alla tvättstugor på listan är kollade och du vill börja om på en ny checklista.</li>
        </ul>
        </v-alert>
      </v-row>

      <v-row>
        <v-form>
          <v-checkbox
            v-model="checkbox"
            label="Jag förstår"
          >
          </v-checkbox>
          <v-btn @click="dialog = true" color="deep-orange" :disabled="!checkbox">Skapa ny checklista</v-btn>
        </v-form>
      </v-row>

      <v-dialog
        v-model="dialog"
      >
        <v-card>
          <v-card-text>
            Är du säker på att du vill radera listan på tvättstugor och skapa en ny? Du kan inte ändra dig! (klicka bara bredvid rutan om du ändrar dig)
          </v-card-text>
          <v-card-actions>
            <v-btn color="deep-orange" block @click="dialog = false, createDb()">Jag är säker!</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { generateAssigmentList } from '../../../laundryrooms'

import Localbase from 'localbase'
let db = new Localbase('db')

let dialog = ref(false)
let checkbox = ref(false)

const router = useRouter()

const createDb = async () => {
  await db.collection('regions').delete()
  await generateAssigmentList()
  router.push('/')
}
</script>

<style scoped>
button:disabled {
  cursor: not-allowed;
  pointer-events: all !important;
}
</style>