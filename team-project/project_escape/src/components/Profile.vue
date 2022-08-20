<template>
    <Todo></Todo>
    <stopwatch></stopwatch>
    <Clock></Clock>
</template>

<script>
    import Todo from '../components/page3/todo2.vue';
    import stopwatch from '../components/page3/stopwatch.vue';
    import Clock from "../components/page3/Clock.vue";
    export default {
        components: {
            'Todo': Todo,
            'stopwatch': stopwatch,
            'Clock': Clock
        },
        name: 'Profile',
        computed: {
            currentUser() {
                return this.$store.state.auth.user;
            }
        },
        mounted() {
            if (!this.currentUser) {
                this
                    .$router
                    .push('/login');
            }
        }
    };
</script>