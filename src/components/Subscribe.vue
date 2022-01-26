<template>
	<div>
		<div class="subscribe-wrap">
			<div v-for="(item, index) in subscriberList" :key="index" class="subscriber">
				{{ item }}
				<textarea v-model="showSentence"></textarea>
				<div class="btn-wrap">
					<b-button v-model="btnState" :variant="btnState.variant" @click="editSubscribeType(index)">
						{{ buttonName }}
					</b-button>
				</div>
			</div>
		</div>
	</div>
</template>
<!--메시지 이벤트는 계속 보내고 관찰자가 받아서 체크해서 보여주기-->
<script>
    export default {
        name: "Subscribe",
	    data () {

            return {
                observers: [],

                inputSentence: '',
                showSentence: '',
                subscriberType: '비구독자',
                buttonName: '구독',
                btnState: {
                    variant: 'outline-primary',
                },
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
            }
	    },
	    methods: {
            /*Subject: async function () {
                constructor(name){
                    this.name = name;
                }
                subscribe(observer){
                    this.observers.push(observer);
	            }
                unsubscribe(observer) {
                    this.observers.splice(this.observers.indexOf(observer), 1);
                }

                notifyAll(changeOfState) {
                    this.observers.forEach((observer) => observer.notify(changeOfState));
                }
            },*/
    /*        async editSubscribeType(index) {
                if(this.buttonName === '구독') {
                    this.subscriberType = '구독자';
                    this.buttonName = '구독 취소';
                    this.subscriberList[index] = this.buttonName;
                    this.btnState.variant = 'outline-danger';
                    console.log('구독자', this.subscriberType);
                } else {
                    this.subscriberType = '비구독자';
                    this.buttonName = '구독';
                    this.subscriberList[index] = this.buttonName;
                    this.btnState.variant = 'outline-primary';
                    console.log('비구독자', this.subscriberType);
                }
            },
		    async submitSentence() {
                if(this.subscriberType === '구독자') {

                    this.showSentence = this.inputSentence;
                }
		    },*/
	    },
	    computed: {

	    },
    }
</script>

<style scoped>
	.subscribe-wrap  {
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