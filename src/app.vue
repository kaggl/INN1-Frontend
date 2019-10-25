<template>
	<v-app>
		<v-navigation-drawer app>

		</v-navigation-drawer>
		<v-app-bar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Frontend</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
		<v-content>
			<all-content></all-content>
		</v-content>
	</v-app>
</template>

<script>
	import AllContent from './Content.vue';

	import { mapMutations, mapGetters } from 'vuex';

	export default {
		name: 'App',
		data: function () {
			return {
			}
		},
		components: {
			AllContent,
		},
	}
</script>

<style lang="less">
</style>
