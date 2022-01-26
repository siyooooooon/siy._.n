<template>
	<div class="subscriber">
<!--		<div v-for="(item, index) in subscriberList" :key="index" class="subscriber">-->

			<textarea v-model="showSentence"></textarea>
			<div class="btn-wrap">
				<b-button v-model="btnState" :variant="btnState.variant" @click="editSubscribeType(index)">
					{{ buttonName }}
				</b-button>
			</div>
	<!--	</div>-->
	</div>
</template>

<script>
    export default {
        name: "SubscriberArea",
	    data() {
            return {
                showSentence: '',
                subscriberType: '비구독자',
                buttonName: '구독',
                btnState: {
                    variant: 'outline-primary',
                }
            }
	    },
	    methods: {
            async editSubscribeType(index) {
                //this.buttonName = '구독 취소'
                /*this.subscriberType = '구독자';
                this.subscriberList[index] = '구독 취소';
                console.log('구독자', this.subscriberType);*/

                if(this.buttonName === '구독') {
                    this.subscriberType = '구독자';
                    this.buttonName = '구독 취소';
                    this.subscriberList[index] = this.buttonName;
                    this.btnState.variant = 'outline-danger';
                    console.log('구독자', this.subscriberType);
                } else {
                    //this.buttonName = '구독자';
                    this.subscriberType = '비구독자';
                    this.buttonName = '구독';
                    this.subscriberList[index] = this.buttonName;
                    this.btnState.variant = 'outline-primary';
                    console.log('비구독자', this.subscriberType);
                }
            },
	    },
    }
</script>

<style scoped>

	.subscriber {
		margin-right: 10px;
		width: 33.3333%;
		display: flex;
		flex-direction: column;
	}
	.subscriber:last-child {
		margin-right: 0;
	}
	.subscriber .btn-wrap {
		margin-top: 15px;
		display: flex;
		justify-content: center;
	}
	.subscriber textarea {
		width: 100%;
		height: 200px;
	}
</style>