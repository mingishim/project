<template>
<!--Stopwatch-->
    <div id="app">
        <button id="in" @click="start">입실</button>
        <a class="nav-link" @click.prevent="logOut"><button id="out" @click="stop">탈출</button></a>
        <p class="stopwatch">{{formattedElapsedTime}}</p>
    </div>


</template>

<script>
import {formattedElapsedTime} from "../page3/stopwatch.vue"

export default {
        name: "App",
        data() {
        localStorage.setItem('stopwatch', JSON.stringify(formattedElapsedTime))
            return {elapsedTime: 0, timer: undefined,};
        },
        computed: {
            formattedElapsedTime() {
                const date = new Date(null);
                date.setSeconds(this.elapsedTime / 1000);
                const utc = date.toUTCString();
                return utc.substr(utc.indexOf(":") - 2, 8);
            }
        },
        methods: {
            logOut() {
                                this
                                    .$store
                                    .dispatch('auth/logout');
                                this
                                    .$router
                                    .push('/login');
                            }
                        },
            start() {
                // 인터벌이 이미 실행 중인지 확인
                if (!this.timer) {
                    this.timer = setInterval(() => {
                        this.elapsedTime += 1000;
                    }, 1000);
                }
            },
            stop() {
                if (this.timer) {
                    clearInterval(this.timer)
                    this.timer = undefined;
                }
            }
        }
</script>

<style>


p {
    font-size: 65px;
    font-weight: 600;
    color: rgb(40, 92, 197);
    position: absolute;
    left: 10px;
    bottom: 585px;
}

#in {
    border: 0;
    outline: 0;
    background-color: white;
    font-size: 35px;
    font-weight: 550;
    color: rgb(144, 181, 255);
    position: absolute;
    left: 60px;
    top: 100px;
    font-family: 'Do Hyeon', sans-serif;
}

#out {
    border: 0;
    outline: 0;
    background-color: white;
    font-size: 35px;
    font-weight: 550;
    color: rgb(144, 181, 255);
    position: absolute;
    left: 150px;
    top: 100px;
    font-family: 'Do Hyeon', sans-serif;
}

/*입실버튼 막기*/
</style>