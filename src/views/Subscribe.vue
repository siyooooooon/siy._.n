<template>
	<div>
		<div class="container">
			<div class="input-wrap">
				<input type="text">
				<button>SUBMIT</button>
			</div>
			<div class="subscribe-wrap">
				<div class="subscriber">
					<textarea></textarea>
					<button>구독</button>
				</div>
				<div class="subscriber">
					<textarea></textarea>
					<button>구독</button>
				</div>
				<div class="subscriber">
					<textarea></textarea>
					<button>구독</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Subscribe",
    }
</script>

<style scoped>
	.input-wrap {
		width: 100%;
	}
	.subscribe-wrap {
		display: flex;
		width: 100%;
	}
	.subscribe-wrap .subscriber {
		width: 33.3333%;
	}
	.subscribe-wrap textarea {
		width: 100%;

	}
</style>