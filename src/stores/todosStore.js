import { defineStore } from "pinia";
import {ref} from 'vue';
import { v4 as uuidv4 } from 'uuid';
export const useTodoStore = defineStore("todo", {
    state: () => ({                                                            //pinia
        todos: [],
    }),
    actions: {
        addTodo(text) {
            this.todos.push({id: uuidv4(), text, completed: false});
        },
        toggleTodo(index) {
            const todo = this.todos.find((todo) => todo.id == index);
            todo && (todo.completed = !todo.completed);
        },
        removeTodo(index) {
            const todo = this.todos.findIndex((todo) => todo.id == index);
            todo !== 1 && this.todos.splice(todo,1)
        }
    }
    // const todos = ref([]);

    // const addTodo = (text) => {
    //     todos.value.push({id:uuidv4(),text, completed: false});
    // };

    // const toggleTodo = (index) => {
    //   const todo = todos.value.find((todo) => todo.id == index);
    //     todo && (todo.completed = !todo.completed)
    //  };

    // const removeTodo = (index) => {
    //     const todo = todos.value.findIndex((todo) => todo.id == index);
    //     if (todo !== -1) todos.value.splice(todo, 1)
    //     todos.value.splice(index,1);
    // };

    // return {todos,addTodo, toggleTodo, removeTodo};


});