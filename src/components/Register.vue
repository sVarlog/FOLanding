<template>
    <div class="registerWrap" :style="{height: `${currentHeight}px`}">
        <transition-group name="fade">
            <div key="first" v-show="!emailAuth && !regOneClick" class="reg-list">
                <p class="reg-list-title" >Регистрация</p>
                <div class="reg-list__item oneReg" @click="registerOneClick">
                    <div class="svgWrap">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip22)">
                                <path d="M20.5697 0.00280938C16.4703 -0.0706906 11.7952 2.07218 8.83591 5.39631C6.00791 5.44968 3.25428 6.60906 1.22691 8.63644C1.10879 8.75281 1.06679 8.92694 1.11841 9.08444C1.17091 9.24281 1.30741 9.35744 1.47191 9.38106L4.84416 9.86406L4.42766 10.3304C4.27278 10.5037 4.28066 10.7671 4.44516 10.9316L10.0688 16.5552C10.1537 16.6401 10.2657 16.6829 10.3785 16.6829C10.4827 16.6829 10.5868 16.6462 10.6699 16.5718L11.1363 16.1553L11.6193 19.5276C11.6429 19.6921 11.7724 19.8128 11.929 19.8653C11.9693 19.8784 12.0113 19.8846 12.0542 19.8846C12.1784 19.8846 12.3053 19.8303 12.3928 19.7437C14.3922 17.7443 15.5515 14.9907 15.6049 12.1627C18.9325 9.19731 21.0929 4.52393 20.9975 0.429809C20.9914 0.197059 20.8033 0.00893438 20.5697 0.00280938ZM16.5377 7.55581C16.1115 7.98194 15.5515 8.19544 14.9907 8.19544C14.4298 8.19544 13.8698 7.98194 13.4437 7.55581C12.5914 6.70269 12.5914 5.31493 13.4437 4.46181C14.2968 3.60868 15.6845 3.60868 16.5377 4.46181C17.3908 5.31493 17.3908 6.70356 16.5377 7.55581Z" fill="white"/>
                                <path d="M2.38355 14.7919C1.4473 15.7282 0.161925 19.9579 0.0184252 20.4365C-0.0279498 20.5905 0.0149252 20.7577 0.1278 20.8714C0.2118 20.9554 0.322925 21 0.43755 21C0.47955 21 0.52155 20.9939 0.56355 20.9817C1.04218 20.8382 5.27192 19.5528 6.20817 18.6165C7.26255 17.5622 7.26255 15.8463 6.20817 14.7919C5.15292 13.7375 3.43793 13.7384 2.38355 14.7919Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip22">
                                    <rect width="21" height="21" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    в 1 клик
                </div>
                <div class="reg-list__item email" @click="emailAuth = true; showStep(1, true)">
                    <div class="svgWrap">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#qwd12d12ds2)">
                                <path d="M15.8603 3.17969L11.0078 8.00091L15.8603 12.8221C15.948 12.6388 16.0012 12.4361 16.0012 12.2197V3.78216C16.0012 3.56569 15.948 3.36303 15.8603 3.17969Z" fill="white"/>
                                <path d="M14.5947 2.375H1.40716C1.19069 2.375 0.988031 2.42822 0.804688 2.51594L7.00666 8.68667C7.55503 9.23504 8.44678 9.23504 8.99516 8.68667L15.1971 2.51594C15.0138 2.42822 14.8111 2.375 14.5947 2.375Z" fill="white"/>
                                <path d="M0.140937 3.17969C0.0532188 3.36303 0 3.56569 0 3.78216V12.2197C0 12.4361 0.0532188 12.6388 0.140937 12.8221L4.99341 8.00091L0.140937 3.17969Z" fill="white"/>
                                <path d="M10.3447 8.66406L9.658 9.35072C8.74428 10.2644 7.2575 10.2644 6.34378 9.35072L5.65716 8.66406L0.804688 13.4853C0.988031 13.573 1.19069 13.6262 1.40716 13.6262H14.5947C14.8111 13.6262 15.0138 13.573 15.1971 13.4853L10.3447 8.66406Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="qwd12d12ds2">
                                    <rect width="16" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    через Email
                </div>
                <!--<div class="reg-list__item vkReg" onclick="$('#vk_auth').submit()">
                    <div class="svgWrap">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.8128 15.4613C20.7564 15.3635 20.4072 14.579 18.7271 12.9666C16.9682 11.2781 17.2045 11.5523 19.323 8.63277C20.6133 6.85474 21.1292 5.76891 20.9677 5.30472C20.8141 4.86225 19.8651 4.97897 19.8651 4.97897L16.7096 4.99797C16.7096 4.99797 16.476 4.9654 16.3014 5.07262C16.1321 5.17849 16.0232 5.4228 16.0232 5.4228C16.0232 5.4228 15.5231 6.79909 14.8563 7.96906C13.4505 10.438 12.8874 10.5683 12.6577 10.4149C12.1234 10.0579 12.2573 8.97888 12.2573 8.21337C12.2573 5.82049 12.6078 4.82288 11.5735 4.565C11.2296 4.47949 10.9775 4.42249 10.0994 4.41299C8.9732 4.40077 8.01894 4.41706 7.47947 4.68987C7.11982 4.87175 6.84286 5.27757 7.01218 5.30065C7.22089 5.32915 7.69342 5.4323 7.94413 5.7852C8.26834 6.23989 8.25652 7.26328 8.25652 7.26328C8.25652 7.26328 8.44291 10.0796 7.82206 10.4298C7.39546 10.6701 6.81136 10.1801 5.55783 7.9392C4.91597 6.7923 4.43031 5.52324 4.43031 5.52324C4.43031 5.52324 4.33711 5.28708 4.17041 5.16085C3.96827 5.00748 3.68475 4.95861 3.68475 4.95861L0.684156 4.97762C0.684156 4.97762 0.233935 4.99119 0.0685481 5.19342C-0.0784628 5.37394 0.0567347 5.74584 0.0567347 5.74584C0.0567347 5.74584 2.40628 11.4288 5.0656 14.294C7.50572 16.9203 10.2753 16.748 10.2753 16.748H11.5301C11.5301 16.748 11.9095 16.7045 12.1024 16.4887C12.2809 16.2906 12.2744 15.9187 12.2744 15.9187C12.2744 15.9187 12.2494 14.1773 13.0318 13.9207C13.8022 13.6683 14.7919 15.6038 15.8407 16.3489C16.6335 16.9122 17.236 16.7887 17.236 16.7887L20.041 16.748C20.041 16.748 21.5085 16.6543 20.8128 15.4613Z" fill="white"/>
                        </svg>
                    </div>
                    c помощью Вконтакте
                </div>
                <form action="/login/vkontakte" id="vk_auth">
                    <input hidden v-if="$router.currentRoute.params.id" type="text" name="payment" :value="$router.currentRoute.params.id">
                </form>-->
            </div>
            <div key="second" v-show="emailAuth && !regOneClick" class="reg-form active">
                <p class="reg-list-title">Регистрация</p>
                <div>
                    <div class="form-group" :class="{has_error: email_error}">
                        <input class="regContacts" @input="inputEmail()" v-model="email" type="text" name="contacts" placeholder="Никнейм, почта или телефон" autocomplete="off">
                    </div>
                    <div class="block-email" v-show="btnActive" :style="{zIndex: BoxEmail ? 1 : -1, opacity: BoxEmail ? 1 : 0}">
                        <div class="form-group" :class="{has_error: pass_error}">
                            <input :type="showPass ? 'text' : 'password'" v-model="pass" name="password" :placeholder="'пароль'">
                            <div class="passWrap" :class="{active: showPass}" @click="showPass = !showPass">
                                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.9991 1.90625C3.39728 1.90625 2.9082 2.39533 2.9082 2.99715C2.9082 3.59897 3.39728 4.08805 3.9991 4.08805C4.60092 4.08805 5.09 3.59897 5.09 2.99715C5.09 2.39533 4.6009 1.90625 3.9991 1.90625Z" fill="white"/>
                                    <path d="M4.00001 0.269531C2.18182 0.269531 0.629097 1.40043 0 2.99681C0.629097 4.59317 2.18182 5.72408 4.00001 5.72408C5.82 5.72408 7.37092 4.59317 8.00002 2.99681C7.37092 1.40043 5.82 0.269531 4.00001 0.269531ZM4.00001 4.81498C2.99637 4.81498 2.18182 4.00043 2.18182 2.99679C2.18182 1.99315 2.99637 1.17862 4.00001 1.17862C5.00365 1.17862 5.8182 1.99317 5.8182 2.99681C5.8182 4.00044 5.00365 4.81498 4.00001 4.81498Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                        <div class="form-group" v-show="pass.length >= 4" :class="{has_error: pass_error}">
                            <input :type="showConfirm ? 'text' : 'password'" v-model="confirm" name="password_confirmation" :placeholder="'повторите пароль'">
                            <div class="passWrap" :class="{active: showConfirm}" @click="showConfirm = !showConfirm">
                                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.9991 1.90625C3.39728 1.90625 2.9082 2.39533 2.9082 2.99715C2.9082 3.59897 3.39728 4.08805 3.9991 4.08805C4.60092 4.08805 5.09 3.59897 5.09 2.99715C5.09 2.39533 4.6009 1.90625 3.9991 1.90625Z" fill="white"/>
                                    <path d="M4.00001 0.269531C2.18182 0.269531 0.629097 1.40043 0 2.99681C0.629097 4.59317 2.18182 5.72408 4.00001 5.72408C5.82 5.72408 7.37092 4.59317 8.00002 2.99681C7.37092 1.40043 5.82 0.269531 4.00001 0.269531ZM4.00001 4.81498C2.99637 4.81498 2.18182 4.00043 2.18182 2.99679C2.18182 1.99315 2.99637 1.17862 4.00001 1.17862C5.00365 1.17862 5.8182 1.99317 5.8182 2.99681C5.8182 4.00044 5.00365 4.81498 4.00001 4.81498Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <transition name="fade">
                        <button class="regBtn" @click="register" v-if="btnActive && pass.length >= 4 && pass === confirm" :disabled="!btnActive">Зарегистрироваться</button>
                    </transition>
                </div>
            </div>
            <register-one-click key="third" v-if="regOneClick" @setUser="setUser"></register-one-click>
        </transition-group>
    </div>
</template>

<script>

    import axios from 'axios'
    const RegisterOneClick = () => import('./RegisterOneClick')
    const Register = {
        props: {
            redirect:{default:false},
            isBlog:{default: null}
        },
        data: () => ({
            email: '',
            type: 'email',
            pass_error: false,
            pass_msg: '',
            email_error: false,
            email_msg: '',
            pass: '',
            confirm: '',
            byEmail: false,
            usr_for_reg: '',
            BoxEmail: false,
            btnActive: false,
            stepsInner: null,
            emailAuth: false,
            currentHeight: 165,
            currentRegEmailStep: 0,
            showPass: false,
            showConfirm: false,
            regOneClick: false,
        }),
        components:{
            RegisterOneClick,
        },
        watch: {
            pass: function() {
                if (this.confirm === '') {
                    this.pass.length >= 4 ? this.currentHeight = 220 : this.currentHeight = 160;
                } else {
                    this.pass.length >= 4 && this.pass === this.confirm ? this.currentHeight = 285 : this.currentHeight = 220;
                }
            },
            confirm: function() {
                this.confirm === this.pass ? this.currentHeight = 285 : this.currentHeight = 220;
            }
        },
        methods: {
            setUser(data) {
                this.$emit('setUser', data)
            },
            showStep(num) {
                if (num === 1) {
                    this.currentHeight = 100;
                } else if (num === 2) {
                    this.currentHeight = 120;
                }
            },
            registerOneClick() {
                this.regOneClick = true;
                this.currentHeight = 490;
            },
            register(){
                if (this.pass.length < 8) {
                    this.pass_error = true;
                } else if (this.pass === this.confirm || this.usr_for_reg !== '/register') {
                    this.pass_error = false;
                    let form = new FormData();
                    form.append(this.type, this.email);
                    form.append('password', this.pass);
                    form.append('password_confirmation', this.confirm);
                    this.$emit('setLoading',true)
                    axios
                        .post('https://friendsonly.me/api/register', form)
                        .then(resp => {
                            this.$emit('closeModal');
                            this.$emit('showNotification','Регистрация выполнена')
                            this.$emit('setLoading')
                            localStorage.setItem('user',JSON.stringify(resp.data.data.token));
                            this.$emit('setUser',resp.data.data.token);
                            if(resp.data.errors && resp.data.errors.validation.phone == 'Phone already exists'){
                                this.email_error = true
                            } else {
                                if(resp.data !== ''){
                                    console.log(2)
                                }
                                this.email_error = false
                            }
                        })
                        .catch(() => {
                            this.email = ''
                            this.$emit('showNotification','Данный e-mail уже зарегистрирован');
                            this.$emit('setLoading')
                            this.email_error = true
                        })
                        .finally(()=>{
                        })
                }else{
                    this.pass_error = true
                }
            },
            inputEmail(){
                let emailPattern = /^([a-z0-9_-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                let showMail = /[a-zA-Z-]/i;
                let test = this.email.slice(1)
                if(this.email !== '' && test !== '+') {
                    this.BoxEmail = showMail.test(this.email);
                    if (emailPattern.test(this.email)) {
                        this.usr_for_reg = '/register'
                        this.type = 'email'
                        this.btnActive = true
                        if (this.pass === '') {
                            this.currentHeight = 160;
                        } else {
                            this.pass.length >= 4 && this.pass === this.confirm ? this.currentHeight = 285 : this.currentHeight = 220;
                        }
                    } else {
                        this.btnActive = false
                        this.currentHeight = 100;
                    }
                    // if(testTel.test(this.email)) {
                    //     this.usr_for_reg = '/registerSms'
                    //     this.type = 'phone';
                    //     this.btnActive = true
                    //     this.BoxEmail = false
                    // }
                    this.$forceUpdate();
                } else {
                    this.usr_for_reg = ''
                    this.BoxEmail = false
                }
            },
        },
    }
    export default Register
</script>

<style scoped>
    .registerWrap{
        transition: .2s;
        position: relative;
        overflow: hidden;
    }
    .reg-list-title {
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        margin: 0 0 25px;
    }
    .reg-list__item{
        width: 100%;
        height: 55px;
        margin-bottom: 8px;
        outline: 0;
        border: 0;
        -webkit-border-radius: 13px;
        -moz-border-radius: 13px;
        border-radius: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        color: #FFFFFF;
        position: relative;
        cursor: pointer;
    }
    .reg-list__item .svgWrap{
        width: 21px;
        position: absolute;
        left: 25px;
    }
    .reg-list__item.email{
        background: linear-gradient(89.99deg, #3790F5 0.01%, #1B76FF 100%);
    }
    .reg-list__item.oneReg{
        background: linear-gradient(90deg, #FFDB59 0%, #FF6745 100%);
    }
    .reg-list__item.emailReg{
        background: linear-gradient(89.99deg, #01C99B -2.88%, #469BFC 106.99%);
    }
    .reg-list__item.tgReg{
        background: linear-gradient(90deg, #29B9F5 0%, #0B94CD 100%);
    }
    .reg-list__item.fbReg{
        background: linear-gradient(90deg, #157DC3 0%, #07578D 100%);
    }
    .reg-list__item.vkReg{
        background: linear-gradient(90deg, #6CA5E7 0%, #5181B8 100%);
    }
    .haveAcc {
        margin-top: 30px;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
    }
    .haveAcc span {
        color: #0B94CD;
        margin-right: 15px;
    }
    .haveAcc .text{
        min-width: 150px;
    }
    .haveAcc .line{
        height: 2px;
        width: 100%;
        background: #F2F2F2;
        border-radius: 1px;
    }
    .separator{
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    .separator span{
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #292941;
        margin-left: 25px;
        margin-right: 25px;
    }
    .separator .line{
        width: 100%;
        background: #292941;
        opacity: 0.1;
        border-radius: 1px;
        height: 1px;
    }
    .form-group{
        margin-bottom: 8px;
        position: relative;
    }
    .form-group .passWrap{
        background: rgba(21, 21, 30, .1);
        width: 18px;
        height: 18px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 20px;
        top: 18px;
        transition: .2s;
    }
    .form-group .passWrap.active{
        background: rgba(55, 144, 245, 1);
    }
    .reg-form input{
        width: 100%;
        height: 50px;
        border: 1.5px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        border-radius: 13px;
        padding-left: 23px;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #292941;
        opacity: 1;
    }
    .reg-form input::placeholder{
        opacity: .6;
    }
    .reg-form .regBtn{
        width: 100%;
        height: 50px;
        outline: 0;
        border: 0;
        background: #469BFC;
        border-radius: 13px;
        margin-top: 7px;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
    }
    .reg-form .regBtn:disabled{
        opacity: .5;
    }
    .reg-form .block-email{
        transition: .5s;
        position: relative;
    }
    .registerWrap .stepsWrap{
        overflow-x: hidden;
    }
    .registerWrap .stepsWrap .stepsInner{
        display: flex;
        width: 200%;
        transition: .5s;
    }
    .registerWrap .stepsWrap .stepsInner .step{
        width: 50%;
    }
    .registerWrap .stepsWrap .stepsInner .step .buttons{
        display: flex;
        align-items: center;
    }
    .registerWrap .stepsWrap .stepsInner .step .buttons button{
        width: 100%;
        height: 53px;
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
    .registerWrap .stepsWrap .stepsInner .step .buttons .btn-back{
        background: #fff;
        border: 1.5px solid rgba(41, 41, 65, 0.1);
        width: 53px;
        min-width: 53px;
        margin-right: 10px;
    }
    .registerWrap .reg-list,
    .registerWrap .reg-form{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
</style>