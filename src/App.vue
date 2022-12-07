<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Tvättstugor
          </v-list-item-title>
          <v-list-item-subtitle>
            Checklista för EHB's tvättstugor
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      
      <!-- <v-divider></v-divider>
  
      <v-list density="compact">
        <v-list-subheader>LÄNKAR</v-list-subheader>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          active-color="#3E2723"
          :to="item.link"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title @click="drawer = !drawer">{{item.text}}</v-list-item-title>
        </v-list-item>
      </v-list> -->

      <v-divider></v-divider>
  
      <v-list density="compact">
        <v-list-subheader>LÄNKAR</v-list-subheader>
        <v-list-item link to="/">
          <template v-slot:prepend>
            <v-icon icon="mdi-home"></v-icon>
          </template>
          <v-list-item-title @click="drawer = !drawer">Hem</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/settings">
          <template v-slot:prepend>
            <v-icon icon="mdi-cog"></v-icon>
          </template>
          <v-list-item-title @click="drawer = !drawer">Inställningar</v-list-item-title>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>


    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-img
        class="mx-2"
        src="/logotype.png"
        max-height="40"
        max-width="40"
        contain
      ></v-img>

      <v-toolbar-title>Checklista för tvättstugor V. 0.7</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
//IMPORTS
  import { ref } from 'vue'
  //import Localbase from 'localbase'
  //import { generateAssigmentList } from '../laundryrooms'

//LOCALBASE
    //let db = new Localbase('db')

//VUETIFY DRAWER
  const drawer = ref(null)

//LOOP ITEMS IN NAVIGATION
  // const items = ref([
  //   { text: 'Hem', icon: 'mdi-home', link: '/' },
  //   { text: 'Skapa ny checklista', icon: 'mdi-database-refresh'}
  // ])

</script>