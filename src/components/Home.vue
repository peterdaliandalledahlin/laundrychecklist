<template>
  <v-container> 
    <v-sheet
      elevation="8"
      class="mx-auto my-5"
      height="100%"
      width="100%"
    >  
      <v-row>
        <v-card
        v-for="region in storedRegions" :key="region.id"
          class="mx-auto pt-5 mb-3"
          max-width="350"
        >
          <v-img
            class="align-end text-white"
            height="200"
            :src="region.img"
            cover
          >
            <v-card-title>{{ region.name }}</v-card-title>
          </v-img>
    
          <v-card-text>
            <div>Tvättstugor på {{ region.name}}</div>
          </v-card-text>
    
          <v-card-actions>
            <v-btn color="orange">
              <router-link :to="{ name: 'laundryroom-list', params: { id: region.id } }" custom v-slot="{ navigate }">
                <span @click="navigate" @keypress.enter="navigate" role="link">Hämta tvättstugor för {{ region.name }}</span>
              </router-link>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-sheet>

    <div v-show="banner">

      <v-card
        class="mx-auto"
        max-width="400"
      >
        <v-img
          class="align-end text-white"
          height="200"
          src="tvattstuga.webp"
          cover
        >
          <v-card-title>Det finns ingen tvättstugechecklista.</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
          Number 10
        </v-card-subtitle>

        <v-card-text>
          <div>Gå till "Inställningar" i menyn till vänster och följ instruktionerna, eller tryck på länken nedan .</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange">
            <router-link to="/settings" custom v-slot="{ navigate }">
              <span @click="navigate" @keypress.enter="navigate" role="link">Gå till "Inställningar"</span>
            </router-link>
          </v-btn>
        </v-card-actions>
      </v-card>

      <!-- <v-banner
      v-model="banner"
        lines="one"
        icon="mdi-database-refresh"
        color="deep-purple-accent-4"
        class="my-4"
      >
        <v-banner-text>
          Det finns ingen checklista, gå till Inställningar i menyn till vänster och följ instruktionerna.
        </v-banner-text>
  
        <template v-slot:actions>
          <v-btn @click="banner = false">Stäng</v-btn>
        </template>
      </v-banner> -->
    </div>
  </v-container>
</template>

<script setup>
//IMPORTS
  import { ref, onMounted } from 'vue'
  import Localbase from 'localbase'

//LOCALBASE
  let db = new Localbase('db') 

// const filteredAssignments = async () => {
  //   const assignments = await db.collection('assignments').get()
  //       return storedAssignments.value = assignments
  //         .sort((a, b) => a.id - b.id
  //       )
  // }

let banner = ref(false)
  
//GET REGIONS COLLECTION AND LOOP REGIONS TO DOM
  let storedRegions = ref([])
  onMounted(() => {
      db.collection('regions').get().then(regions => {
        if(regions.length) {
          console.log('lista')
          banner.value = false
          storedRegions.value = regions
        }else {
          console.log('ingen lista')
          banner.value = true
        }
      })  
  })

</script>
