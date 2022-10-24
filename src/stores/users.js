import { defineStore } from "pinia";

export const useUserStore = defineStore('users',{
    state : () => {
        return {
            users : []
        }
    },
    actions : {
        create(user) {
            this.users.push(
                {
                    'id' : this.users.length + 1 ,...user
                })
        },
        delete(id) {
            this.users = this.user.filter( user => user.id !== id );
        }
    },
    getters : {
        userByName (state) {
           return [...state.users].reverse()
        }
    }
})