<template>
    <div class="loginWrap" :style="{height: `${stepHeight[currentStep]}px`}">
        <transition-group name="fade">
            <div key="one" v-show="currentStep === 0" class="step first">
                <h3 class="login-title">Войти в аккаунт</h3>
                <div class="form-group" :class="{has_error: error_email}">
                    <input name="email" type="text" v-model="email" :class="{is_invalid: error_email}" placeholder="Никнейм, почта или телефон">
                </div>
                <div class="enterBlock">
                    <div class="first" :class="{active: email.length <= 0}">
                        <div class="separator">
                            <div class="line"></div>
                            <span>или</span>
                            <div class="line"></div>
                        </div>
                        <div class="page-login__footer">
                            <a href="tg://resolve?domain=Friendsonly_mebot">
                                <span class="svgWrap">
                                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.32154 18.7979C7.62463 18.7979 7.74311 18.5383 7.50275 17.8835L5.45361 11.2288L21.2272 1.99463" fill="#C8DAEA"/>
                                        <path d="M8.32178 18.798C8.85951 18.798 9.09701 18.5553 9.39725 18.2673L12.2652 15.5155L8.6878 13.3867" fill="#A9C9DD"/>
                                        <path d="M8.56893 13.074L16.675 19.2388C17.6001 19.7642 18.2676 19.4921 18.498 18.3549L21.7976 2.34935C22.1354 0.955208 21.2813 0.322668 20.3963 0.736252L1.02119 8.42662C-0.301323 8.97272 -0.293445 9.73225 0.780157 10.0706L5.75225 11.6682L17.2632 4.19279C17.8066 3.85357 18.3054 4.03577 17.8961 4.40985" fill="url(#paint0_linear)"/>
                                        <defs>
                                            <linearGradient id="paint0_linear" x1="14.4363" y1="8.86394" x2="17.7307" y2="16.1559" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#EFF7FC"/>
                                                <stop offset="1" stop-color="white"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                                <span>через Telegram</span>
                            </a>
                            <a href="''">
                                <span class="svgWrap">
                                    <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.99733 3.48687H10.9145V0.147875C10.5837 0.102375 9.4462 0 8.12145 0C5.35733 0 3.46383 1.73863 3.46383 4.93412V7.875H0.413574V11.6077H3.46383V21H7.20358V11.6086H10.1305L10.5951 7.87588H7.2027V5.30425C7.20358 4.22537 7.49408 3.48687 8.99733 3.48687Z" fill="white"/>
                                    </svg>
                                </span>
                                <span>через Facebook</span>
                            </a>
                            <!--<a :href="socLogin('vkontakte')">
                                <span class="svgWrap">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.8128 15.4613C20.7564 15.3635 20.4072 14.579 18.7271 12.9666C16.9682 11.2781 17.2045 11.5523 19.323 8.63277C20.6133 6.85474 21.1292 5.76891 20.9677 5.30472C20.8141 4.86225 19.8651 4.97897 19.8651 4.97897L16.7096 4.99797C16.7096 4.99797 16.476 4.9654 16.3014 5.07262C16.1321 5.17849 16.0232 5.4228 16.0232 5.4228C16.0232 5.4228 15.5231 6.79909 14.8563 7.96906C13.4505 10.438 12.8874 10.5683 12.6577 10.4149C12.1234 10.0579 12.2573 8.97888 12.2573 8.21337C12.2573 5.82049 12.6078 4.82288 11.5735 4.565C11.2296 4.47949 10.9775 4.42249 10.0994 4.41299C8.9732 4.40077 8.01894 4.41706 7.47947 4.68987C7.11982 4.87175 6.84286 5.27757 7.01218 5.30065C7.22089 5.32915 7.69342 5.4323 7.94413 5.7852C8.26834 6.23989 8.25652 7.26328 8.25652 7.26328C8.25652 7.26328 8.44291 10.0796 7.82206 10.4298C7.39546 10.6701 6.81136 10.1801 5.55783 7.9392C4.91597 6.7923 4.43031 5.52324 4.43031 5.52324C4.43031 5.52324 4.33711 5.28708 4.17041 5.16085C3.96827 5.00748 3.68475 4.95861 3.68475 4.95861L0.684156 4.97762C0.684156 4.97762 0.233935 4.99119 0.0685481 5.19342C-0.0784628 5.37394 0.0567347 5.74584 0.0567347 5.74584C0.0567347 5.74584 2.40628 11.4288 5.0656 14.294C7.50572 16.9203 10.2753 16.748 10.2753 16.748H11.5301C11.5301 16.748 11.9095 16.7045 12.1024 16.4887C12.2809 16.2906 12.2744 15.9187 12.2744 15.9187C12.2744 15.9187 12.2494 14.1773 13.0318 13.9207C13.8022 13.6683 14.7919 15.6038 15.8407 16.3489C16.6335 16.9122 17.236 16.7887 17.236 16.7887L20.041 16.748C20.041 16.748 21.5085 16.6543 20.8128 15.4613Z" fill="white"/>
                                    </svg>
                                </span>
                                <span>c помощью Вконтакте</span>
                            </a>-->
                        </div>
                        <div class="register">Впервые тут? <span @click="$emit('register')">Регистрация</span></div>
                    </div>
                    <div class="second" :class="{active: email.length > 0}">
                        <div class="form-group pass" :class="{has_error: error_pass}">
                            <input name="password" :type="showPass ? 'text' : 'password'" v-model="pass" placeholder="пароль">
                            <span class="invalid-feedback" v-if="error_pass" role="alert"></span>
                            <div class="showPass" :class="{active: showPass}" @click="showPass = !showPass">
                                <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path d="M4.00106 3.41016C3.39924 3.41016 2.91016 3.89831 2.91016 4.49898C2.91016 5.09966 3.39924 5.58781 4.00106 5.58781C4.60287 5.58781 5.09196 5.09966 5.09196 4.49898C5.09196 3.89831 4.60286 3.41016 4.00106 3.41016Z" fill="white"/>
                                        <path d="M4.00001 1.77734C2.18182 1.77734 0.629097 2.90609 0 4.49944C0.629097 6.09276 2.18182 7.22153 4.00001 7.22153C5.82 7.22153 7.37092 6.09276 8.00002 4.49944C7.37092 2.90609 5.82 1.77734 4.00001 1.77734ZM4.00001 6.31416C2.99637 6.31416 2.18182 5.50115 2.18182 4.49942C2.18182 3.49769 2.99637 2.6847 4.00001 2.6847C5.00365 2.6847 5.8182 3.49771 5.8182 4.49944C5.8182 5.50117 5.00365 6.31416 4.00001 6.31416Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="8" height="7.9848" fill="white" transform="translate(0 0.507812)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <button class="loginBtn" @click="login" :disabled="error_email||error_pass">Войти в аккаунт</button>
                        <button class="linkForgot" @click="changeStep(1)">Забыл пароль :(</button>
                    </div>
                </div>
            </div>
            <div key="sec" v-show="currentStep === 1" class="step second">
                <div class="separator" :style="{marginBottom:'25px'}">
                    <h3 class="login-title" :style="{margin:0}">Восстановление пароля</h3>
                </div>
                <div class="page-forgot__form">
                    <div class="form-group">
                        <p style="color: red" v-if="resetPass.error">Почта не найдена</p>
                        <p style="color: #5ce720" v-if="resetPass.success">Восстановление успешное</p>
                        <input name="email" type="text" placeholder="Никнейм, почта или телефон" v-model="resetPass.email">
                    </div>
                    <div class="row">
                        <button class="resetPass" @click="resetPassword">Подтвердить</button>
                    </div>
                </div>
            </div>
            <div key="thr" v-show="currentStep === 2" class="step third">
                <h3>Отлично!</h3>
                <span>Мы отправили инструкции по восстановлению пароля вам на почту</span>
                <button @click="changeStep(0)">Вернуться к авторизации</button>
            </div>
        </transition-group>
    </div>
</template>
<script>
    import axios from 'axios'
    const Login = {
        props: {
            redirect:{default:false},
            isBlog:{default: false},
        },
        data: () => ({
            error_email: false,
            error_message: false,
            error_pass: false,
            message_email: '',
            message_pass: '',
            email: '',
            pass: '',
            resetPass: {
                email:'',
                error: false,
                success: false
            },
            showPass: false,
            currentStep: 0,
            stepHeight: [353, 157]
        }),
        watch:{
            error_pass(){
                setTimeout(()=>{
                    this.error_pass = false
                },4000)
            },
            error_email(){
                setTimeout(()=>{
                    this.error_email = false
                },4000)
            },
        },
        methods: {
            changeStep(step){
              this.currentStep = step;
            },
            resetPassword(){
                if (this.success === true) {
                    return;
                }
                this.error = false;
                axios
                    .post('https://friendsOnly.me/api/new/password', {email: this.resetPass.email})
                    .then( resp => {
                        if (resp.data.code !== 200) {
                            this.error = true;
                        } else {
                            this.success = true;
                            this.changeStep(2);
                        }
                    })
            },
            login(){
                this.error_email = this.error_pass = false
                let emailPattern = /^([a-z0-9_.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                let testTel = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
                if(this.pass.length < 4){
                    this.error_pass = true;
                    this.$emit('showNotification','Пароль слишком короткий');
                    return
                }
                if(!emailPattern.test(this.email) && !testTel.test(this.email)){
                    this.error_email = true
                    return
                }
                let form = new FormData()
                form.append('email', this.email);
                form.append('password', this.pass);
                this.$emit('setLoading',true)
                axios.post('https://friendsOnly.me/api/login', form)
                    .then(() => {
                            this.$emit('showNotification','Вход выполнен');
                            this.$emit('closeModal');
                            this.$emit('setLoading',false);
                    })
                    .catch(error => {
                        this.$emit('setLoading',false)
                        this.error_email = this.error_pass = true;
                        if (error.response.status === 403) {
                            console.log('403')
                        } else {
                            this.$emit('showNotification','Логин или пароль введены не верно');
                        }
                    })
            },
        },
    }
    export default Login
</script>

<style scoped>
    .loginWrap{
        position: relative;
    }
    .loginWrap .enterBlock{
        position: relative;
        width: 100%;
        height: 190px;
    }
    .loginWrap .enterBlock .first,
    .loginWrap .enterBlock .second{
        position: absolute;
        top: 0;
        width: 100%;
        transition: .2s;
        opacity: 0;
        pointer-events: none;
    }
    .register {
        margin-top: 30px;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
    }
    .register span {
        color: #0B94CD;
    }
    .loginWrap .enterBlock .first.active,
    .loginWrap .enterBlock .second.active{
        opacity: 1;
        pointer-events: auto;
    }
    .loginWrap .enterBlock .second .linkForgot{
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        color: #15151E;
        opacity: 0.3;
        width: 100%;
        height: 55px;
        margin-top: 10px;
        border: 0;
        outline: 0;
        -webkit-border-radius: 13px;
        -moz-border-radius: 13px;
        border-radius: 13px;
        background: #cfcfcf;
    }
    .loginWrap .enterBlock .second .form-group{
        position: relative;
    }
    .loginWrap .enterBlock .second .showPass{
        background: rgba(21, 21, 30, .1);
        width: 18px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 20px;
        top: 18px;
        transition: .2s;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
    .loginWrap .enterBlock .second .showPass.active{
        background: rgba(55, 144, 245, 1);
    }
    .page-login__footer a{
        width: 100%;
        margin-bottom: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 13px;
        height: 55px;
        position: relative;
        text-decoration: none;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        color: #FFFFFF;
        cursor: pointer;
    }
    .page-login__footer a:nth-child(1){
        background: linear-gradient(90deg, #29B9F5 0%, #0B94CD 100%);
    }
    .page-login__footer a:nth-child(2){
        background: linear-gradient(90deg, #157DC3 0%, #07578D 100%);
    }
    .page-login__footer a:nth-child(3){
        background: linear-gradient(90deg, #6CA5E7 0%, #5181B8 100%);
    }
    .page-login__footer a > .svgWrap{
        position: absolute;
        left: 25px;
        width: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .separator{
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    .second .separator{
        margin-bottom: 15px;
    }
    .separator h2{
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #292941;
        display: flex;
        width: 100%;
        white-space: nowrap;
        margin-right: 20px;
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
        position: relative;
        margin-bottom: 8px;
    }
    .loginWrap input{
        width: 100%;
        height: 55px;
        outline: 0;
        border: 1.5px solid #F2F2F2;
        box-sizing: border-box;
        border-radius: 13px;
        display: flex;
        align-items: center;
        padding-left: 24px;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #292941;
        opacity: 1;
    }
    .loginWrap input::placeholder{
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #292941;
        opacity: 0.6;
    }
    .loginWrap .loginBtn{
        width: 100%;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #469BFC;
        border-radius: 13px;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
        border: 0;
        outline: 0;
        margin-top: 15px;
        cursor: pointer;
    }
    .loginWrap .login-title {
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 25px;
        text-align: center;
        transition: margin-bottom .2s;
    }
    .loginWrap .step{
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .loginWrap .step.second .separator{
        margin-top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loginWrap .step.second .separator h2{
        text-align: center;
    }
    .loginWrap .step.third{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .loginWrap .step.third h3{
        margin-top: 10px;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #15151E;
    }
    .loginWrap .step.third span{
        margin-top: 15px;
        margin-bottom: 25px;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
        text-align: center;
        color: #15151E;
        opacity: .6;
    }
    .loginWrap .step.third button{
        width: 100%;
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-border-radius: 13px;
        -moz-border-radius: 13px;
        border-radius: 13px;
        border: 0;
        outline: 0;
        background: #3790F5;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        color: #FFFFFF;
    }
    .page-forgot__form{
        padding: 0;
    }
    .page-forgot__form .row{
        display: flex;
        align-items: center;
        margin-top: 13px;
    }
    .page-forgot__form .btnBack{
        height: 50px;
        width: 50px;
        margin-right: 13px;
        background: #fff;
        outline: 0;
        border: 1.5px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        border-radius: 13px;
    }
    .page-forgot__form .resetPass{
        height: 50px;
        width: 100%;
        background: #469BFC;
        border-radius: 13px;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
        border: none;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
        color: #FFFFFF;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
        color: #FFFFFF;
    }
</style>