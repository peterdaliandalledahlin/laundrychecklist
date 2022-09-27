<template>
    <v-container>
        <h1>laundryroomlist</h1>
        <div v-for="laundryroom in storedRegions" :key="laundryroom.id">
            <v-sheet
              elevation="8"
              class="mx-auto mb-5"
              height="100%"
              width="100%"
            >
                <v-checkbox
                    v-model="laundryroom.occupied"
                    :label="`${laundryroom.name} upptagen`"
                    color="red"
                    hide-details
                    @change="updateOccupiedLandry(laundryroom.id, laundryroom.occupied)"
                ></v-checkbox>
                <v-list class="pa-0">
                <v-list-item>
                    <template v-slot:prepend>
                    <v-avatar color="grey-lighten-1">
                        <v-img :src="key" aria-label="nyckel" alt="nyckel"></v-img>
                    </v-avatar>
                    </template>

                    <template v-slot:append>
                        {{laundryroom.key ? 'nyckel nr.' + laundryroom.key : 'Ingen nyckel behövs'}}
                    </template>
                </v-list-item>
                </v-list>          
                <v-expansion-panels variant="accordion">
                <v-expansion-panel :disabled="laundryroom.occupied">
                    <v-expansion-panel-title>
                    {{ laundryroom.name}}
                    </v-expansion-panel-title>
                    <v-expansion-panel-text v-for="task in laundryroom.tasks" :key="task.id">
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
                            @click="task.done = !task.done, updateAssignmentTask(laundryroom.id, task.id, task.done)"
                            :color="task.done ? 'green' : 'red'"
                            :icon="task.done ? 'mdi-check' : 'mdi-close'"
                            size="x-small"
                            ></v-btn>
                        </template>
                        </v-list-item>
                    </v-list>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                </v-expansion-panels>
            </v-sheet>
        </div><!--loop storedRegions-->
    </v-container>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import key from '../../assets/key.png'

import Localbase from 'localbase'
let db = new Localbase('db')
  
const route = useRoute()

let storedRegions = ref([])

const updateOccupiedLandry = async (laundryroomId, laundryroomOccupied) => {
    const laundryRoom = await db.collection('regions').doc({ id: laundryroomId}).get()
    for( let i = 0; i < laundryRoom.laundryrooms.length; i++) {
        if(laundryRoom.laundryrooms[i].id == laundryroomId) {
            laundryRoom.laundryrooms[i].occupied = laundryroomOccupied
        }
   }
   db.collection('regions').doc({ id: laundryroomId }).set(laundryRoom)
}

const updateAssignmentTask = async (laundryroomId, taskId, done) => {
  const laundryRoom = await db.collection('regions').doc({ id: laundryroomId}).get()
  console.log(laundryRoom)
   for( let i = 0; i < laundryRoom.laundryrooms.tasks.length; i++) {
    
    if(laundryRoom.laundryrooms.tasks[i].id == taskId) {
      laundryRoom.laundryrooms.tasks[i].done = done
    }
   }
  db.collection('regions').doc({ id: laundryroomId }).set(laundryRoom)
}
  
onMounted( () => {
    db.collection('regions').doc({ id: parseInt(route.params.id) }).get().then(regions => {
        //console.log(regions.laundryrooms)
        storedRegions.value = regions.laundryrooms
    })
})
</script>

