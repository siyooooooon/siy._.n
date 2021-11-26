<template>
	<div id="app">
		<Subscribe></Subscribe>
	</div>
</template>

<script>
import Subscribe from './views/Subscribe.vue'

export default {
    name: 'App',
    components: {
        Subscribe,
    },
}
</script>

<style>
	@import 'assets/css/style.scss';
</style>
