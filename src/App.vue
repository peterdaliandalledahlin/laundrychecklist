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
        <v-list-item link>
          <template v-slot:prepend>
            <v-icon :icon="theme.name._value == 'dark' ? 'mdi-toggle-switch' : 'mdi-toggle-switch-off'"></v-icon>
          </template>
          <v-list-item-title @click="toggleTheme(); drawer = !drawer">Växla ljust/mörkt</v-list-item-title>
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

      <v-toolbar-title>Checklista för tvättstugor 1.0</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
      <v-footer fixed>
      <v-card
        flat
        tile
        width="100%"
        class="text-center"
      >

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>&copy; Omnia team EHB - App skapad av <a href="https://onedotzero.se/" target="_blank">onedotzero.se</a></strong>
        </v-card-text>
      </v-card>
    </v-footer>
    </v-main>
  </v-app>
</template>

<script setup>
//IMPORTS
  import { ref } from 'vue'
  import { useTheme } from 'vuetify'

  
  //VUETIFY DRAWER
  const drawer = ref(null)
  
  const theme = useTheme()

  const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'


</script>