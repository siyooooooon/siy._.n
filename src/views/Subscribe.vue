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
						<b-button v-model="btnState" :variant="btnState.variant" @click="editSubscribeType(index)">
							{{ buttonName }}
						</b-button>
						<!--<template v-if="subscriberType === '구독자'">
							<b-button variant="outline-success" @click="unSubscribe(index)">
								구독 취소
							</b-button>
						</template>
						<template v-else>
							<b-button variant="outline-success" @click="onSubscribe(index)">
								구독
							</b-button>
						</template>-->
						<!--<b-button variant="outline-success" @click="onSubscribe" v-if="subscriberType === '비구독자' ? buttonName === '구독' : buttonName ==='구독 취소'">
							{{ buttonName }}
						</b-button>-->
						<!--<b-button variant="outline-success" @click="onSubscribe">
							{{ buttonName }}
						</b-button>-->
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
                subscriberList: [
                    {
                        text: '',
						seq: 2021,
                        isSubscribe: false
                    },
                    {
                        text: '',
                        seq: 2054,
                        isSubscribe: false
                    },
                    {
                        text: '',
                        seq: 3000,
                        isSubscribe: false
                    }
                ],
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
          /*  async unSubscribe() {
                //this.buttonName = '구독 취소'
                this.subscriberType = '비구독자';
                console.log('비구독자', this.subscriberType);
            },*/
		    async submitSentence() {
                if(this.subscriberType === '구독자') {

                    this.showSentence = this.inputSentence;
                }
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