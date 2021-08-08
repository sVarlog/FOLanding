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
                        <div class="register"><div class="text">Впервые тут?</div> <span @click="$emit('register')">Регистрация</span> <div class="line"></div></div>
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
                        <button class="loginBtn" @click="login" :disabled="error_email || error_pass">Войти в аккаунт</button>
                        <!-- <button class="linkForgot" @click="changeStep(1)">Забыл пароль :(</button> -->
                    </div>
                </div>
            </div>
            <!-- <div key="sec" v-show="currentStep === 1" class="step second">
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
            </div> -->
        </transition-group>
    </div>
</template>
<script>
    import axios from 'axios'
    const Login = {
        props: {
            redirect: {
                default: false
            },
            isBlog: {
                default: false
            },
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
            stepHeight: [205, 165, 165]
        }),
        watch:{
            email() {
                this.error_email = false;
                this.error_pass = false;
                if (this.email.length > 0) {
                    this.$el.style = 'height: 235px';
                } else {
                    this.$el.style = 'height: 205px';
                }
            },
            pass() {
                this.error_email = false;
                this.error_pass = false;
            }
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
                axios
                    .post('https://friendsOnly.me/api/login', form)
                    .then((data) => {
                        this.$emit('showNotification','Вход выполнен');
                        this.$emit('closeModal');
                        this.$emit('setLoading',false);
                        localStorage.setItem('user',JSON.stringify(data.data.data._token));
                        this.$emit('setUser',data.data.data._token);
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
        overflow: hidden;
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
        display: flex;
        align-items: center;
    }
    .register span {
        color: #0B94CD;
        margin-right: 15px;
        cursor: pointer;
    }
    .register .text{
        min-width: 110px;
    }
    .register .line{
        height: 2px;
        width: 100%;
        background: #F2F2F2;
        border-radius: 1px;
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
        transition: .2s;
    }
    .loginWrap .loginBtn:disabled{
        opacity: .5;
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