<template>
  <nav class="navbar navbar-expand-lg navbar-light justify-content-between d-flex w-100 p-0">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/careermap' }" :class="{ 'active': isActive('/careermap') }">Career Map</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/skillsmap' }" :class="{ 'active': isActive('/skillsmap') }">Skills Map</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/functionalskills' }" :class="{ 'active': isActive('/functionalskills') }">Functional Skills</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/about' }" :class="{ 'active': isActive('/about') }">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ path: '/contactus' }" :class="{ 'active': isActive('/contactus') }">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { defineProps, ref, onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const props = defineProps(['to']);
const route = useRoute();
const activeLink = ref('');

const isActive = (path) => {
  return route.path === path;
};

onMounted(() => {
  // Set the active link initially on component mount
  setActiveLink();
});

// Watch for route changes and update the active link
watch(() => route.path, () => {
  setActiveLink();
});

const setActiveLink = () => {
  activeLink.value = route.path;
};
</script>


<style scoped>
.nav-item {
  margin-left: 50px;
  margin-right: 50px;
}

.navbar-nav .nav-item .active {
  color: #007bff; /* Change to your desired active link color */
  text-decoration: underline; /* Add underline to the active link */
}

/* Add any component-specific styles here */
</style>
