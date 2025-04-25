<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-container">
        <a class="navbar-brand" href="#">MARIECLAIRE OWENS</a>
        <div class="navbar-links">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
          <RouterLink class="nav-link" to="/resumeandcv">Resume & CV</RouterLink>
          <RouterLink class="nav-link" to="/reel">Reel</RouterLink>
          <RouterLink class="nav-link" to="/gallery">Gallery</RouterLink>
          <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
        </div>
      </div>
    </nav>

    <!-- Routed Content -->
    <RouterView />
  </div>
</template>

<style scoped>
/* Navbar background color */
.navbar {
  background-color: #f1f1f1; /* Light gray */
  padding: 1rem;
}

/* Container for navbar items */
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Brand text */
.navbar-brand {
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  color: black;
}

/* Links container */
.navbar-links {
  display: flex;
  gap: 1.5rem;
}

/* Nav link styles */
.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.nav-link:hover {
  color: #000;
}
</style>
