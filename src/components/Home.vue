<template>
  <v-container>
    <v-btn block @click="deleteAssignmentList()">Radera databasen</v-btn>
    <!-- <v-btn block @click="getAssignmentList()">Ny databas</v-btn>
    <v-btn block @click="filteredAssignments()">Hämta alla tvättstugor</v-btn>
    <v-btn block @click="getAssignmentsForLillsidan()">Hämta tvättstugor Lillsidan</v-btn>
    <v-btn block @click="getAssignmentsForKorsangen()">Hämta tvättstugor för Korsängen</v-btn> -->
    <v-btn class="mb-5" block @click="buttonClicked()">Testa nya</v-btn>  
    <v-sheet
      elevation="8"
      class="mx-auto my-5"
      height="100%"
      width="100%"
    >  
      <div v-for="region in storedRegions" :key="region.id">
        <v-card
          class="mx-auto pt-5 mb-3"
          max-width="300"
        >
          <v-img
            class="align-end text-white"
            height="200"
            :src="region.img"
            cover
          >
            <v-card-title>{{ region.name }}</v-card-title>
          </v-img>

          <!-- <v-card-subtitle class="pt-4">
            Number 10
          </v-card-subtitle> -->

          <v-card-text>
            <div>Tvättstugor på {{ region.name}}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange">
              <!-- <router-link :to="`/${region.link}/${region.id}`" custom v-slot="{ navigate }"> -->
              <router-link :to="{ name: 'laundryroom-list', params: { id: region.id } }" custom v-slot="{ navigate }">
                <span @click="navigate" @keypress.enter="navigate" role="link">Hämta tvättstugor för {{ region.name }}</span>
              </router-link>
            </v-btn>
          </v-card-actions>
        </v-card>   
      </div><!--loop storedAssignments-->
    </v-sheet>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
//import generateAssigments from '../../laundryrooms'
//import generateAssigments from '../../laundryrooms'
//import { generateAssigmentsForLillsidan, generateAssigmentsForKorsangen } from '../../laundryrooms'
//import { generateAssigments, generateAssigmentsForLillsidan, generateAssigmentsForKorsangen, generateAssigmentList } from '../../laundryrooms'
import { generateAssigmentList } from '../../laundryrooms'

import Localbase from 'localbase'
let db = new Localbase('db') 

let storedRegions = ref([])

const deleteAssignmentList = async () => {
  await db.delete()
}

// const getAssignmentList = () => {
//   generateAssigments()
//   //generateAssigmentList()
// }

// const filteredAssignments = async () => {
//   const assignments = await db.collection('assignments').get()
//       return storedAssignments.value = assignments
//         .sort((a, b) => a.id - b.id
//       )
// }



// const getOneAssignment = () => {
//   db.collection('assignments').doc({ id: 1 }).get().then(document => {
//     console.log(document)
//   })
// }

// const updateOccupiedLandry = (id, occupied) => {
//   db.collection('assignments').doc({ id }).update({
//     occupied
//   })
// }

// const updateAssignmentList = async (laundryroomId, taskId, done) => {
//   const laundryRoom = await db.collection('assignments').doc({ id: laundryroomId}).get()
//   //console.log(laundryRoom)
//    for( let i = 0; i < laundryRoom.tasks.length; i++) {
//     if(laundryRoom.tasks[i].id == taskId) {
//       laundryRoom.tasks[i].done = done
//     }
//    }
//   db.collection('assignments').doc({ id: laundryroomId }).set(laundryRoom)
//   //console.log(id, done)
// }


const buttonClicked = () => {
  generateAssigmentList()
}

onMounted(() => {
    db.collection('regions').get().then(regions => {
      storedRegions.value = regions
    })  
})

</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* v-expansion-panel v-expansion-panel--active */
</style>