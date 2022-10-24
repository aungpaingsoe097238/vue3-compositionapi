<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-4">
          <form @submit.prevent="createUser">
            <label for="">User Name</label>
            <input type="text" class="form-control" v-model="user_input.name" />
            <label for="">User Email</label>
            <input type="email" class="form-control" v-model="user_input.email" />
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-12 col-lg-4">

            <label for="sort">
                <input type="checkbox" id="sort" v-model="sort">
                Sort User
            </label>

            <ul  v-if="!sort">
                <li v-for="user in userStore.users" :key="user.id">
                    id  : {{ user.id }}
                    Name : {{ user.name }}
                    Email : {{ user.email }}
                </li>
            </ul>

            <ul v-else>
                <li v-for="user in userStore.userByName" :key="user.id">
                    id  : {{ user.id }}
                    Name : {{ user.name }}
                    Email : {{ user.email }}
                </li>
            </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/users";

const userStore = useUserStore();
const user_input = ref({ name: null, email: null });
const sort = ref(false);

const createUser = () => {
  if (user_input.value.name === null && user_input.value.email === null) {
    return alert("Something was wrong!");
  }
  // action
  userStore.create(user_input.value);
  user_input.value.name = null;
  user_input.value.email = null ;
};
</script>

<style lang="scss" scoped></style>
