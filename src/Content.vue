<template lang="html">
  <div>
    <v-flex xs12>
      <v-date-picker
        show-week
        no-title
        multiple
        v-model="week"
        first-day-of-week="1"
        @input="selectWeek"
      ></v-date-picker>
    </v-flex>
  </div>
</template>

<script>
  import dataJson from './assets/cal.json'
  export default {
		name: 'Content',
		data: function () {
			return {
        week: [],
			}
		},
    created() {
    },
    methods: {
      selectWeek(val) {
        const formatted = this.formatDate(val.pop());
        const sunday = new Date(formatted.setDate(formatted.getDate() - (formatted.getDay())));
        let arr = [];
        for (let i = 0; i < 7; i-=-1) {
          arr.push(this.formatDateString(sunday.setDate(sunday.getDate() + 1)));
        }
        console.log(arr);
        this.week = arr;
      },
      /*
      getDataFromMonth() {
        return dataJson.filter(x => this.formatDate(x.start_date) >= this.formatDate(this.month) && this.formatDate(x.end_date) <= this.formatDate(this.month, true));
      },
      */
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
      formatDateString(date) {
        if (!(date instanceof Date)) date = new Date(date);
        return `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
      },
    },
  }
</script>

<style lang="css">
</style>
