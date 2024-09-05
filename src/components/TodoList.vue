<template>
   <div class="main">
    <h1>Todo List</h1>
    <input type="text" v-model="text" @keyup.enter="addTodo" placeholder="Add a new todo">
    <ul>
        <li v-for="todo in todos":key="todo.id">
            <span :style="{textDecoration: todo.completed ? 'line-through':'none'}">
                {{ todo.text }}</span>
                <button @click="removeTodo(todo.id)">Remove</button>
                <button @click="toggleTodo(todo.id)">Toggle</button>
        </li>
    </ul>
   </div>
</template>

<script setup>
import {ref} from 'vue'
import {useTodoStore} from '../stores/todosStore.js'
const todoStore = useTodoStore()

const text = ref('')
const addTodo = () => {
    if (text.value.trim()) {
        todoStore.addTodo(text.value)
        text.value = ''
    }
}


const toggleTodo = (index) => {
    todoStore.toggleTodo(index)
}
const removeTodo = (index) => {
    todoStore.removeTodo(index)
}

const todos = todoStore.todos
</script>

<style>

</style>