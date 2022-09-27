<template>
  <h1>lillsidan</h1>
  <div v-for="(region, index) in storedAssignments" :key="index">
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
</template>

<script>
export default {
    name: 'lillsidan'

}
</script>

<style>

</style>