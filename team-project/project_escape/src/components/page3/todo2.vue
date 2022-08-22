<template>
    <main class="app">

        <div class="container2">
            <section class="greeting">
            <br><br>
            <h2 class="title">
                <center>To Do List</center>
            </h2>
            <img src="../page3/백경이홧팅.png" id="fighting1">
            <img src="../page3/백경이홧팅.png" id="fighting2">
            </section>

            <form id="new-todo-form" @submit.prevent="addTodo">
                <h4 id="title-two"><center>오늘 랩실에서 할 일을 입력해 주세요!</center></h4>
                <center>
                    <br>
                    <input
                    type="text"
                    name="content"
                    id="content"
                    placeholder="ex) 랩실 출근하기"
                    v-model="input_content"/></center>
                &nbsp;
                <center><input id="add-todo" type="submit" value="추가"/></center>
            </form>


                <div class= "todo-container" v-for="todo in todos_asc" v-bind:key="`todo-item ${todo.done && 'done'}`">
                    <label>
                        <input id="checkbox" type="checkbox" v-model="todo.done"/>
                        <span
                            :class="`bubble ${
							todo.category == 'business'
								? 'business'
								: 'personal'
						}`"></span>
                    </label>

                    <div class="todo-content">
                        <input id="todo-content" type="text" v-model="todo.content"/>
                    </div>

                    <div class="actions">
                        <button class="delete" @click="removeTodo(todo)">삭제</button>
                    </div>
                </div>
        </div>

    </main>
</template>
<script setup="setup">
    import {ref, onMounted, computed, watch} from 'vue'

    const todos = ref([])
    const name = ref('')

    const input_content = ref('')
    const input_category = ref('')
/* eslint-disable */
    const todos_asc = computed(() => todos.value.sort((a, b) => {
        return a.createdAt - b.createdAt
    }))

    watch(name, (newVal) => {
        localStorage.setItem('name', newVal)
    })

    watch(todos, (newVal) => {
        localStorage.setItem('todos', JSON.stringify(newVal))
    }, {deep: true})

    const addTodo = () => {
        if (input_content.value.trim() === '' || input_category.value === null) {
            return
        }

        todos
            .value
            .push(
                {content: input_content.value, category: input_category.value, done: false, editable: false, createdAt: new Date().getTime()}
            )
    }

    const removeTodo = (todo) => {
        todos.value = todos
            .value
            .filter((t) => t !== todo)
    }

    onMounted(() => {
        name.value = localStorage.getItem('name') || ''
        todos.value = JSON.parse(localStorage.getItem('todos')) || []
    })
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/nanumpenscript.css);
.todo-container {
    width:700;
    height: 60px;
}


.title {
    font-size:50px;
    font-family: 'Do Hyeon', sans-serif;
    color:rgb(40, 92, 197);
}

#title-two {
    font-size:17px;
    font-family: 'Do Hyeon', sans-serif;
    color:rgb(103, 114, 117)
}

#add-todo {
    color:white;
    background-color:rgb(125, 125, 255);
    border:none;
    height: 32px;
    width:79px;
    border-radius: 5px;
    position:relative;
    left:255px;
    bottom:55px;

}

.container2 {
    width:700px;
    background-color: beige;
    position:relative;
    bottom:40px;
    left:550px;
    background-color:rgb(251, 238, 255);
}

#content {
    width:500px;
    position:relative;
    right:50px;
}

#checkbox {
        position:relative;
        left:52px;
        bottom: 30px;
}

#todo-content {
        width:471px;
        position:relative;
        left:80px;
        bottom: 65px;
}

.delete {
    height: 32px;
    width:79px;
    border:none;
    color:white;
    border-radius: 5px;
    background-color:rgb(125, 125, 255);
    position:relative;
    left:565px;
    bottom: 96px;
}

#fighting1 {
    width:100px;
    height: 125px;
    position:relative;
    left: 120px;
    bottom: 100px;
}

#fighting2 {
    width:100px;
    height: 125px;
    position:relative;
    left: 385px;
    bottom: 100px;
}

.greeting {
    width: 700px;
    height: 100px;
}

.app {
    width:530px;
    height:280px;
}
</style>