<template lang="html">
  <div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 justify="center">
          <v-card>
            <v-tabs
              color="primary"
              slider-color="primary"
            >
              <v-tab
                v-for="day in days">
                {{ day.name }}
              </v-tab>
              <v-tab-item
                v-for="day in days">
                <v-data-table
                  :headers="headers"
                  :items="getItemsByAttr('Day', day.val)"
                  group-by="Class"
                  sort-by="Room"
                  disable-pagination
                  hide-default-footer
                  class="elevation-1"
                >
                </v-data-table>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import csvFile from './assets/output.csv';

  export default {
		name: 'Content',
		data: function () {
			return {
        headers: [
          { text: 'Raum', value: 'Room'},
          { text: 'Slot', value: 'Slot' },
          { text: 'Klasse', value: 'Class' },
          { text: 'Gruppe', value: 'Subclass' },
          { text: 'Kurs', value: 'Course' }
        ],
        days: [
          {name: 'Montag', val: 'mo' },
          {name: 'Dienstag', val: 'di' },
          {name: 'Mittwoch', val: 'mi' },
          {name: 'Donnerstag', val: 'do' },
          {name: 'Freitag', val: 'fr' },
        ],
			}
		},
    created() {
      console.log(csvFile);
    },
    methods: {
      getAttrs(attr, arr = csvFile) {
        return [...new Set(arr.map(x => x[attr]))];
      },
      getItemsByAttr(key, val, arr = csvFile) {
        return arr.filter(x => x[key] == val);
      },
      getAllItems() {
        return csvFile;
      },
    },
  }
</script>

<style lang="css">
</style>
