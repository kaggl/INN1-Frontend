<template>
	<v-app>
		<all-content>
		</all-content>
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
