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
              <router-link class="nav-link" to="/careermap">About the PSF</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/skillsmap">Messages</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/functionalskills">Technical Guide</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">Acknowledgment</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contactus">Revision Log</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { RouterLink } from 'vue-router';

  const props = defineProps(['to']);
  </script>
  
  <style scoped>
  .nav-item{
    margin-left: 30px;
    margin-right: 30px;

  }
  /* Add any component-specific styles here */
  </style>
  