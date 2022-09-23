<template>
  <v-container>
    <v-btn block @click="deleteAssignmentList()">Radera databasen</v-btn>
    <v-btn block @click="getAssignmentList()">Ny databas</v-btn>
    <v-btn block @click="filteredAssignments()">Hämta alla tvättstugor</v-btn>
    <v-btn class="mb-5" block @click="getOneAssignment()">Hämta en tvättstuga</v-btn>
    
    <div v-for="(assignment, index) in storedAssignments" :key="index">
      <v-sheet
        elevation="8"
        class="mx-auto mb-5"
        height="100%"
        width="100%"
      >  
        <v-checkbox
          v-model="assignment.occupied"
          :label="`${assignment.laundryroom} upptagen`"
          color="red"
          hide-details
          @change="updateOccupiedLandry(assignment.id, assignment.occupied)"
        ></v-checkbox>

        <v-list class="pa-0">
          <v-list-item>
            <template v-slot:prepend>
              <v-avatar color="grey-lighten-1">
                <v-img src="key.png" aria-label="nyckel" alt="nyckel"></v-img>
              </v-avatar>
            </template>

            <template v-slot:append>
              {{assignment.key ? 'nyckel nr.' + assignment.key : 'Ingen nyckel behövs'}}
            </template>
          </v-list-item>
        </v-list>
    
        <v-expansion-panels variant="accordion">
          <v-expansion-panel :disabled="assignment.occupied">
            <v-expansion-panel-title>
              {{assignment.laundryroom}}
            </v-expansion-panel-title>
            <v-expansion-panel-text v-for="(task, index) in assignment.tasks" :key="index">
              <v-list>
                <v-list-item
                  :key="task.id"
                  :title="task.name"
                >
                  <template v-slot:prepend>
                    <v-avatar color="grey-lighten-1">
                      <v-img :src="task.img" height="100%" cover></v-img>
                    </v-avatar>
                  </template>
  
                  <template v-slot:append>
                    <v-btn
                      @click="task.done = !task.done, updateAssignmentList(assignment.id, task.id, task.done)"
                      :color="task.done ? 'green' : 'red'"
                      :icon="task.done ? 'mdi-check' : 'mdi-close'"
                      size="x-small"
                    ></v-btn>
                  </template>
                  <!--
                  <v-checkbox
                    v-model="assignment.done"
                    :label="`Färdig med tvättstuga: ${checkbox.toString()}`"
                    color="success"
                  ></v-checkbox>
                  -->
                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels> 

      </v-sheet>
    </div><!--loop storedAssignments-->
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
//import generateAssigments from '../../laundryrooms'
import generateAssigments from '../../laundryrooms'

import Localbase from 'localbase'
let db = new Localbase('db') 

let storedAssignments = ref([])

const deleteAssignmentList = async () => {
  await db.delete()
}

const getAssignmentList = () => {
  generateAssigments()
  //generateAssigmentList()
}

const filteredAssignments = async () => {
  const assignments = await db.collection('assignments').get()
      return storedAssignments.value = assignments
        .sort((a, b) => a.id - b.id
      )
}

// const getAllAssignments = () => {
//   db.collection('assignments').get().then(assignments => {
//     storedAssignments.value = assignments
//   })
// }

const getOneAssignment = () => {
  db.collection('assignments').doc({ id: 1 }).get().then(document => {
    console.log(document)
  })
}

const updateOccupiedLandry = (id, occupied) => {
  db.collection('assignments').doc({ id }).update({
  occupied
})
}

const updateAssignmentList = async (laundryroomId, taskId, done) => {
  const laundryRoom = await db.collection('assignments').doc({ id: laundryroomId}).get()
  //console.log(laundryRoom)
   for( let i = 0; i < laundryRoom.tasks.length; i++) {
    if(laundryRoom.tasks[i].id == taskId) {
      laundryRoom.tasks[i].done = done
    }
   }
  db.collection('assignments').doc({ id: laundryroomId }).set(laundryRoom)
  //console.log(id, done)
}

const closePanel = () => {
  //const element1 = document.querySelector('[aria-expanded]')?.getAttribute('aria-expanded')
  //const element2 = document.querySelector('.v-expansion-panel.v-expansion-panel--active')
  //element.classList.remove('v-expansion-panel--active')
  // var x = document.querySelector('[aria-expanded]').getAttribute("aria-expanded"); 
  // if (x == "true") 
  // {
  // x = "false"
  // } else {
  // x = "true"
  // }
  // document.querySelector('[aria-expanded]').setAttribute("aria-expanded", x)
  //console.log(element1)
}

onMounted( async () => {
  //generateAssigments()
  // db.collection('assignments').get().then(assignments => {
  //   console.log(assignments)
  // })
  // storedAssignments.value = await JSON.parse(localStorage.getItem("assignments"))
  // console.log(storedAssignments)
})

//const show = ref(false)
//const checkbox = ref(false)
</script>

<style scoped>
/* v-expansion-panel v-expansion-panel--active */
</style>