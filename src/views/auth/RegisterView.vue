<template>
  <b-container>
    <b-row class="justify-content-center align-content-center vh-100">
      <b-col lg="6">
        <b-card title="Register Here">
          <form @submit.prevent="submit" ref="form">
            <div>
              <b-form-group
                id="name"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
                label="Name"
                label-for="name"
              >
                <b-form-input id="name" name="name"></b-form-input>
              </b-form-group>
            </div>
            <div>
              <b-form-group
                id="email"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
                label="Email"
                label-for="email"
              >
                <b-form-input
                  id="email"
                  type="email"
                  name="email"
                ></b-form-input>
              </b-form-group>
            </div>
            <div>
              <b-form-group
                id="password"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
                label="Password"
                label-for="password"
              >
                <b-form-input
                  id="password"
                  type="password"
                  name="password"
                ></b-form-input>
              </b-form-group>
            </div>
            <div>
              <b-form-group
                id="confirm_password"
                label-cols-sm="4"
                label-cols-lg="3"
                content-cols-sm
                content-cols-lg="7"
                label="Confirm Password"
                label-for="confirm_password"
              >
                <b-form-input
                  id="confirm_password"
                  type="password"
                  name="password_confirmation"
                ></b-form-input>
              </b-form-group>
            </div>
            <b-button type="submit" class="mx-1 float-end" variant="primary"
              >Submit</b-button
            >
          </form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
import { ref } from "vue";
import { usePiniaStore } from "../../stores/index";
import axios from 'axios'
import { useRouter } from "vue-router";

const form = ref(null);
const store = usePiniaStore();
const route = useRouter();

const submit = () => {
  let formData = new FormData(form.value);
  axios
    .post(store.getUrl("register"),formData)
    .then((res) => {
      route.push('/login')
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style lang="scss" scoped></style>
