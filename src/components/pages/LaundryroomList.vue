<template>
    <v-container>
        <div v-for="laundryroom in region.laundryrooms" :key="laundryroom.id">
            <v-sheet
              elevation="8"
              class="mx-auto mb-5"
              height="100%"
              width="100%"
            >

                <v-list class="d-flex pa-0">
                    <v-list-item>
                        <template v-slot:prepend>
                            {{ laundryroom.name }}
                            <v-avatar color="grey-lighten-1">
                                <v-img class="ml-3" :src="key" aria-label="nyckel" alt="nyckel"></v-img>
                            </v-avatar>
                        </template>

                        <template v-slot:append>
                            <!-- {{laundryroom.name}} -->
                            {{laundryroom.key ? 'nyckel nr.' + laundryroom.key : 'Ingen nyckel behövs'}}
                        </template>
                    </v-list-item>
                </v-list>
                
                <v-checkbox
                    v-model="laundryroom.occupied"
                    :label="`upptagen`"
                    color="red"
                    hide-details
                    @change="syncToStorage(), closePanel(laundryroom.id, laundryroom.occupied)"
                    class="ml-2"
                ></v-checkbox>

                
                         
                <v-expansion-panels v-model="panels" multiple variant="accordion">
                    <v-expansion-panel :value="laundryroom.id" :disabled="laundryroom.occupied">
                        <v-expansion-panel-title class="pr-3">
                            <div v-for="task in laundryroom.tasks" :key="task.id">
                                <!-- <v-badge dot v-if="!task.done" color="error" :content="task.name" inline></v-badge> -->
                                <v-avatar size="x-small" class="mr-3" v-if="!task.done">
                                    <v-img
                                        :src="task.img"
                                        :alt="task.name"
                                    ></v-img>
                                </v-avatar>
                            </div>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text v-for="task in laundryroom.tasks" :key="task.id">
                        <v-list>
                            <v-list-item
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
                            <v-divider thickness="2"></v-divider>
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
    import key from '../../assets/nyckel.png'
    import Localbase from 'localbase'

//LOCALBASE
    let db = new Localbase('db')
    db.config.debug = false

//GET ROUTE PARAMS
    const route = useRoute()

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

//SET REGIONS COLLECTION ON CLICK
    let region = ref([])
    const syncToStorage = async () => {
        //console.log(region.value)
        await db.collection('regions').doc({id: region.value.id}).set(JSON.parse(JSON.stringify(region.value)))
    }

//GET STORED REGION FROM ROUTE PARAMS LOOP TO DOM 
    onMounted( () => {
        db.collection('regions').doc({ id: parseInt(route.params.id) }).get().then(storedRegion => {       
            region.value = storedRegion
        })
    })
</script>

<style scoped>
/* .v-expansion-panel {
    overflow-x: scroll !important;
} */
</style>