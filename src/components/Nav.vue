<template>
  <b-nav pills class="d-flex justify-content-between">
    <div class="d-flex">
      <b-nav-item class="nav-link">Vue3</b-nav-item>
      <!-- <b-nav-item class="nav-link">Posts Manager</b-nav-item>
      <b-nav-item class="nav-link">Categories Manager</b-nav-item> -->
    </div>
    <div>
      <b-nav-item-dropdown
        class="nav-link"
        id="my-nav-dropdown"
        text="Dropdown"
        toggle-class="nav-link-custom"
        right
      >
          <RouterLink to="/login">
            <b-dropdown-item>Login</b-dropdown-item>
          </RouterLink>
          <RouterLink to="/register">
            <b-dropdown-item>Register</b-dropdown-item>
          </RouterLink>
      </b-nav-item-dropdown>
    </div>
  </b-nav>
</template>
