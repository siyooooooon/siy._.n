<template>
	<div class="container">
		<div class="input-wrap">
			<input v-model="inputSentence" type="text">
			<b-button variant="outline-primary" @click="submitSentence">SUBMIT</b-button>
		</div>

		<Subscribe></Subscribe>

	</div>
</template>

<script>
    import Subscribe from "../components/Subscribe";
    export default {
        name: "Main",
	    component: {
            Subscribe,
	    }
    }
</script>

<style scoped>
	.input-wrap {
		padding: 100px 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.input-wrap input[type=text] {
		padding: 6px 12px;
		width: 100%;
	}
	.input-wrap .btn {
		margin-left: 10px;
	}
</style>