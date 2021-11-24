<template>
	<div>
		<div class="container">
			<div class="input-wrap">
				<input v-model="inputSentence" type="text">
				<b-button variant="outline-primary" @click="submitSentence">SUBMIT</b-button>
			</div>
			<div class="subscribe-wrap">
				<div v-for="(item, index) in subscriberList" :key="index" class="subscriber">
					<textarea v-model="showSentence"></textarea>
					<div class="btn-wrap">
						<b-button variant="outline-success" @click="onSubscribe">구독</b-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Subscribe",
	    data () {

            return {
                inputSentence: '',
	            showSentence: '',
                subscriberList: [{},{},{}],
            }
	    },
	    methods: {
            async onSubscribe() {
                this.onSubscribe()
            },
		    async submitSentence() {
                this.showSentence = this.inputSentence;
		    },
	    },
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
	.subscribe-wrap {
		display: flex;
		width: 100%;
	}
	.subscribe-wrap .subscriber {
		margin-right: 10px;
		width: 33.3333%;
		display: flex;
		flex-direction: column;
	}
	.subscribe-wrap .subscriber:last-child {
		margin-right: 0;
	}
	.subscribe-wrap .subscriber .btn-wrap {
		margin-top: 15px;
		display: flex;
		justify-content: center;
	}
	.subscribe-wrap textarea {
		width: 100%;
		height: 200px;
	}
</style>