<template>
    <div class="registerComponent">
        <div class="imgWrap" style="min-width: 105px; min-height: 105px;">
            <lottie-animation
                style="width: 105px; height: 105px;"
                path="lootie/registerModalGif.json"
            />
        </div>
        <p class="popupText">Сохраните логин и пароль, чтобы не потерять доступ к аккаунту.</p>
        <div class="info" @click="copy()">
            <div class="line" :style="{marginTop:'27px'}"></div>
            <div class="infoInner">
                <div class="info__log">
                    <div class="name">Логин</div>
                    <div id="registered_email" class="value">{{oneRegData.email}}</div>
                </div>
                <div class="info__pass">
                    <div class="name">Пароль</div>
                    <div id="registered_password" class="value">{{oneRegData.pass}}</div>
                </div>
            </div>
            <div class="line"></div>
            <p class="infoText">Нажмите, чтобы скопировать.</p>
        </div>
        <div class="stepsWrap">
            <div class="stepsInner">
                <div class="step first">
                    <div class="btn-email" id="btn-email" @click="changeStep(1)">Отправить мне на почту</div>
                    <div class="bnt-continue" @click="authorization">Войти в аккаунт</div>
                </div>
                <div class="step second">
                    <div class="inputWrap">
                        <input class="sendMail" name="to" type="email" placeholder="Ваша почта" v-model="oneRegData.sendTo">
                    </div>
                    <input name="email" type="email" hidden>
                    <input name="password" type="text" hidden>
                    <div class="buttons">
                        <button class="btn-send" v-if="checkEmail(oneRegData.sendTo)" @click="sendEmail">Отправить и войти</button>
                        <button class="btn-send" v-else @click="authorization">Войти без отправки</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
    import axios from 'axios';
    import EventBus from '../EventBus';
    const RegisterOneClick = {
        data: () => ({
            oneRegData: {
                email: '',
                pass: '',
                sendTo: ''
            },
            stepsInner: null,
            profileId: null
        }),
        created() {
            this.registerData();
        },
        mounted() {
            this.stepsInner = document.querySelector('.registerComponent .stepsInner');
        },
        components: {
            LottieAnimation
        },
        methods: {
            authorization() {
                EventBus.$emit('closeModal');
            },
            registerData() {
                this.oneRegData.active = true;
                axios
                    .post('https://friendsOnly.me/api/oneClick')
                    .then((resp) => {
                        console.log(resp)
                        this.oneRegData.email = resp.data.email;
                        this.oneRegData.pass = resp.data.password;
                        localStorage.setItem('user', JSON.stringify(resp.data.token));
                        this.$emit('setUser',resp.data.token);
                        this.$forceUpdate();
                    });
            },
            copy(){
                this.oneRegData.copy = true
                setTimeout(()=> {
                    this.oneRegData.copy_content = true
                }, 300)
                const el = document.createElement('textarea');
                el.value = `Login: ${this.oneRegData.email}  Password: ${this.oneRegData.pass}`;
                el.setAttribute('readonly', '');
                el.style.position = 'absolute';
                el.style.left = '-9999px';
                document.body.appendChild(el);
                const selected =  document.getSelection().rangeCount > 0  ? document.getSelection().getRangeAt(0) : false;
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
                if (selected) {
                    document.getSelection().removeAllRanges();
                    document.getSelection().addRange(selected);
                }
            },
            changeStep(step) {
                this.stepsInner.style.transform = `translateX(-${step * 50}%)`;
                if (step === 1) {
                    this.stepsInner.querySelector('.inputWrap input.sendMail').focus();
                }
            },
            checkEmail(mail) {
                let emailPattern = /^([a-z0-9_-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                return emailPattern.test(mail);
            },
            sendEmail(){
                if(!this.checkEmail(this.oneRegData.sendTo)) {
                    return
                }
                let form = {
                    to: this.oneRegData.sendTo,
                    email: this.oneRegData.email,
                    password: this.oneRegData.pass
                }
                axios
                    .post('https://friendsOnly.me/api/send/credentials', form)
                    .then( async () => {
                        this.authorization();
                    })
            },
        }
    }
    export default RegisterOneClick;
</script>

<style scoped>
    .registerComponent .imgWrap{
        display: flex;
        width: 100%;
        height: 103px;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
    }
    .registerComponent .imgWrap img{
        width: 103px;
        height: 103px;
    }
    .registerComponent .popupText{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
        text-align: center;
        color: #292941;
    }
    .registerComponent .btn-email,
    .registerComponent .bnt-continue{
        width: 100%;
        height: 55px;
        -webkit-border-radius: 13px;
        -moz-border-radius: 13px;
        border-radius: 13px;
        box-sizing: border-box;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 21px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        border: 0;
        background: #469BFC;
        color: #fff;
        opacity: 1;
    }
    .registerComponent .btn-email{
        background: #fff;
        border: 2px solid #F2F2F2;
        color: rgba(21, 21, 30, .4);
    }
    .registerComponent .info{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .registerComponent .info .line{
        width: 100%;
        height: 1px;
        background: rgba(0, 0, 0, 0.1);
        margin-top: 15px;
        margin-bottom: 10px;
    }
    .registerComponent .info .infoText{
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 130%;
        text-align: center;
        color: #292941;
        opacity: 0.4;
    }
    .registerComponent .info .infoInner{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 5px;
    }
    .registerComponent .info .infoInner .name{
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        color: #292941;
        opacity: 0.4;
        width: 50px;
    }
    .registerComponent .info .infoInner .info__log{
        display: flex;
        align-items: center;
        margin-bottom: 17px;
    }
    .registerComponent .info .infoInner .info__pass{
        display: flex;
        align-items: center;
    }
    .registerComponent .info .infoInner .value{
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #292941;
        margin-left: 10px;
    }
    .registerComponent .stepsWrap{
        overflow: hidden;
        margin-top: 20px;
    }
    .registerComponent .stepsInner{
        width: 200%;
        display: flex;
        transition: .2s;
    }
    .registerComponent .stepsInner .step{
        width: 50%;
    }
    .registerComponent .stepsInner .step .inputWrap{
        width: 100%;
        position: relative;
    }
    .registerComponent .stepsInner .step input{
        width: 100%;
        height: 55px;
        font-family: SF Pro Display;
        background: #fff;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #292941;
        position: relative;
        z-index: 2;
        border: 2px solid #F2F2F2;
        box-sizing: border-box;
        -webkit-border-radius: 13px;
        -moz-border-radius: 13px;
        border-radius: 13px;
        padding-left: 20px;
    }
    .registerComponent .stepsInner .step input::placeholder{
        opacity: .6;
    }
    .registerComponent .stepsInner .step .buttons{
        display: flex;
        align-items: center;
        margin-top: 10px;
    }
    .registerComponent .stepsInner .step .buttons button{
        width: 100%;
        height: 55px;
        box-sizing: border-box;
        border-radius: 13px;
        background: #469BFC;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        outline: 0;
        border: 0;
        justify-content: center;
    }
    .registerComponent .stepsInner .step .buttons .btn-back{
        background: #fff;
        border: 1.5px solid rgba(41, 41, 65, 0.1);
        width: 53px;
        min-width: 53px;
        margin-right: 10px;
    }
</style>