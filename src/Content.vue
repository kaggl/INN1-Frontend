<template lang="html">
  <div>
    <v-flex xs12>
      <v-date-picker type="month" v-model="month" landscape></v-date-picker>
      {{ getDataFromMonth().length }}
      {{ getDataFromMonth().map(x => x.title) }}
    </v-flex>
  </div>
</template>

<script>
  import dataJson from './assets/cal.json'
  export default {
		name: 'Content',
		data: function () {
			return {
        month: '',
			}
		},
    created() {
    },
    methods: {
      getDataFromMonth() {
        return dataJson.filter(x => this.formatDate(x.start_date) >= this.formatDate(this.month) && this.formatDate(x.end_date) <= this.formatDate(this.month, true));
      },
      formatDate(str, add = false) {
        if (!str) return '';
        let date;
        if (str.length == 7) {
          const arr = str.split('-');
          date = new Date(`${arr[0]}-${arr[1]}-01`);
        } else {
          const arr = str.split('.');
          date = new Date(`${arr[2]}-${arr[1]}-${arr[0]}`);
        }
        if (add) date = new Date(date.setMonth(date.getMonth()+1));
        return date;
      },
    },
  }
</script>

<style lang="css">
</style>
