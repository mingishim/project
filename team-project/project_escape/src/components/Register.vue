<template>
    <div class="col-md-12">
        <div class="card card-container">
            <center>
                <h1 id="title">Create Account</h1>
            </center>
            <img id="hi" src="../assets/백경아하이.png">
                <Form @submit="handleRegister" :validation-schema="schema">
                    <div v-if="!successful">
                        <div class="form-group">
                            <label for="laboratory">연구실</label>
                            <Field name="laboratory" type="laboratory" class="form-control"/>
                            <ErrorMessage name="laboratory" class="error-feedback"/>
                        </div>
                        <div class="form-group">
                            <label for="username">이름</label>
                            <Field name="username" type="text" class="form-control"/>
                            <ErrorMessage name="username" class="error-feedback"/>
                        </div>
                        <div class="form-group">
                            <label for="email">이메일</label>
                            <Field name="email" type="email" class="form-control"/>
                            <ErrorMessage name="email" class="error-feedback"/>
                        </div>
                        <div class="form-group">
                            <label for="password">비밀번호</label>
                            <Field name="password" type="password" class="form-control"/>
                            <ErrorMessage name="password" class="error-feedback"/>
                        </div>
                        <div class="form-group">
                            <label for="repassword">비밀번호 확인</label>
                            <Field name="repassword" type="password" class="form-control"/>
                            <ErrorMessage name="repassword" class="error-feedback"/>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary btn-block" :disabled="loading">
                                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                                회원가입
                            </button>
                        </div>
                    </div>
                </Form>

                <div
                    v-if="message"
                    class="alert"
                    :class="successful ? 'alert-success' : 'alert-danger'">
                    {{ message }}
                </div>
            </div>
        </div>
    </template>

    <script>
        import {Form, Field, ErrorMessage} from "vee-validate";
        import * as yup from "yup";

        export default {
            name: "Register",
            components: {
                Form,
                Field,
                ErrorMessage
            },
            data() {
                const schema = yup
                    .object()
                    .shape({
                        laboratory: yup
                            .string()
                            .required("소속한 연구실 교수님 성함을 입력하세요."),
                        username: yup
                            .string()
                            .required("이름을 입력하시오")
                            .min(2, "2글자 이상을 쓰세요!")
                            .max(10, "error!"),

                        email: yup
                            .string()
                            .required("이메일을 입력하시오")
                            .email("유효한 이메일이 아닙니다."),

                        password: yup
                            .string()
                            .required("비밀번호를 입력해주세요!")
                            .min(6, "6자이상 18자 미만을 입력해주세요!")
                            .max(40, "6자이상 18자 미만을 입력해주세요!"),

                        repassword: yup
                            .string()
                            .oneOf([yup.ref('password')], '입력한 비밀번호와 일치하지 않습니다.')
                    });
                return {successful: false, loading: false, message: "", schema};
            },
            computed: {
                loggedIn() {
                    return this.$store.state.auth.status.loggedIn;
                }
            },
            mounted() {
                if (this.loggedIn) {
                    this
                        .$router
                        .push("/profile");
                }
            },
            methods: {
                handleRegister(user) {
                    this.message = "";
                    this.successful = false;
                    this.loading = true;

                    this
                        .$store
                        .dispatch("auth/register", user)
                        .then((data) => {
                            this.message = data.message;
                            this.successful = true;
                            this.loading = false;
                        }, (error) => {
                            this.message = (
                                error.response && error.response.data && error.response.data.message
                            ) || error.message || error.toString();
                            this.successful = false;
                            this.loading = false;
                        });
                }
            }
        };
    </script>

    <style scoped="scoped">
        @import url(//fonts.googleapis.com/earlyaccess/nanumpenscript.css);

        #title {
            font-family: 'Do Hyeon', sans-serif;
            color: #007BFF;
            font-size: 48px;
            font-weight: 700;
            width: 450px;
            height: 100px;
            position: relative;
            right: 18px;
            top: 25px;
            text-shadow: 2px 2px 2px rgb(144, 192, 255);
        }

        div {
            border-style: none;
        }

        .col-md-12 {
            width: 480px;
            position: relative;
            left: 305px;
            top: 20px;
            height: 800px;
        }

        .form-group {
            height: 90px;
        }

        label {
            font-weight: 525;
        }

        #hi {
            width: 75px;
            height: 85px;
            position: absolute;
            left: 373px;
            top: 0.01em;
        }

        :root {
            background: #2980B9;
            background: -webkit-linear-gradient(to top, #FFFFFF, #d3f3ff, rgb(158, 216, 255));
            background: linear-gradient(to top, #FFFFFF, #d3f3ff, rgb(158, 216, 255));
        }
    </style>