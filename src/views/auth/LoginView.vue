<template>
  <b-container>
    <b-row class="justify-content-center align-content-center vh-100">
      <b-col lg="6">
        <b-card title="Login Here">
          <form @submit.prevent="submit" ref="form">
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
import { useRouter } from "vue-router";

const form = ref(null);
const store = usePiniaStore();
const route = useRouter();

const submit = () => {
  let formData = new FormData(form.value);
  store.post("login", formData);
  console.log(store.getData);
};



</script>

<style lang="scss" scoped></style>
