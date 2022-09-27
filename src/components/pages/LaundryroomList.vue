<template>
    <v-container>
        <h1>laundryroomlist</h1>
        <div v-for="laundryroom in region.laundryrooms" :key="laundryroom.id">
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
                    @change="syncToStorage(), closePanel(laundryroom.id, laundryroom.occupied)"
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
                <v-expansion-panels v-model="panels" multiple variant="accordion">
                    <v-expansion-panel :value="laundryroom.id" :disabled="laundryroom.occupied">
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
                                @click="task.done = !task.done, syncToStorage()"
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
//IMPORTS
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import key from '../../assets/key.png'
    import Localbase from 'localbase'

//LOCALBASE
    let db = new Localbase('db')

//GET ROUTE PARAMS
const route = useRoute()

//GET REGION
let region = ref([])

//CLOSE EXPANSION PANEL ON CHECKBOX LAUNDRY OCCUPIED
let panels = ref([])
const closePanel = (id, occupied) => {
    if(occupied) {
        for( let i = 0; i < panels.value.length; i++) {
            if(panels.value[i] == id) {
                return panels.value =  panels.value.filter(e => e !== id); // will return ['A', 'C']
            }
        }
    }
}

//SET REGIONS COLLECTION ON CLICK & CHANGE
const syncToStorage = async () => {
  const data = await db.collection('regions').doc({id: region.value.id}).set(JSON.parse(JSON.stringify(region.value)))
}

//GET STORED REGION FROM ROUTE PARAMS LOOP TO DOM 
onMounted( () => {
    db.collection('regions').doc({ id: parseInt(route.params.id) }).get().then(storedRegion => {       
        region.value = storedRegion
    })
})
</script>
