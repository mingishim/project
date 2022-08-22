<template>
    <div class="col-md-12">
        <div class="card card-container">
            <center>
                <img id="profile-img" src="../assets/백경씨수정본.png"></center>

                <Form @submit="handleLogin" :validation-schema="schema">
                    <div class="form-group">
                        <label for="username">이름</label>
                        <Field name="username" type="text" class="form-control"/>
                        <ErrorMessage name="username" class="error-feedback"/>
                    </div>
                    <div class="form-group">
                        <label for="password">비밀번호</label>
                        <Field name="password" type="password" class="form-control"/>
                        <ErrorMessage name="password" class="error-feedback"/>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-primary btn-block" :disabled="loading">
                            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                            <span>Login</span>
                        </button>
                    </div>

                    <div class="form-group">
                        <div v-if="message" class="alert alert-danger" role="alert">
                            {{ message }}
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    </template>

    <script>
        import {Form, Field, ErrorMessage} from "vee-validate";
        import * as yup from "yup";

        export default {
            name: "Login",
            components: {
                Form,
                Field,
                ErrorMessage
            },
            data() {
                const schema = yup
                    .object()
                    .shape({
                        username: yup
                            .string()
                            .required("이름을 입력해주세요!"),
                        password: yup
                            .string()
                            .required("비밀번호를 입력해주세요!")
                    });

                return {loading: false, message: "", schema};
            },
            computed: {
                loggedIn() {
                    return this.$store.state.auth.status.loggedIn;
                }
            },
            created() {
                if (this.loggedIn) {
                    this
                        .$router
                        .push("/profile");
                }
            },
            methods: {
                handleLogin(user) {
                    this.loading = true;

                    this
                        .$store
                        .dispatch("auth/login", user)
                        .then(() => {
                            this
                                .$router
                                .push("/profile");
                        }, (error) => {
                            this.loading = false;
                            this.message = (
                                error.response && error.response.data && error.response.data.message
                            ) || error.message || error.toString();
                        });
                }
            }
        };
    </script>

    <style scoped="scoped">
        @import url(//fonts.googleapis.com/earlyaccess/nanumpenscript.css);

        #profile-img {
            width: 30rem;
            left: 400px;
        }

        .form-group {
            width: 480px;
            position: relative;
            left: 305px;
        }

        button {
            background-color: #007BFF;
        }

        template {
            background-color: #2980B9;
        }

        #logout {
            color: skyblue;
            background-color: rgb(255, 255, 255);
            border: 3px solid skyblue;
            height: 50px;
            width: 140px;
            border-radius: 5px;
            font-size: 22px;
            font-weight: 700;
            position: absolute;
            top: 640px;
            right: 500px;
        }

        #greeting {
            font-family: 'Do Hyeon', sans-serif;
            font-size: 30px;
            position: absoulte;
            top: 480px;
            right: 10px;
        }

        #router {
            font-family: 'Do Hyeon', sans-serif;
            font-size: 30px;
            position: absolute;
            top: 560px;
            right: 520px;
        }
    </style>