<!-- Navbar.vue -->

<template>
    <div class="navbar">
      <!-- Logo and Search Bar Component -->
      <div class="logo-search">
        <div class="navbar-logo">
          <img src="" alt="Logo" height="40">
        </div>
  
        <div class="search-bar">
          <input v-model="searchQuery" type="text" class="search-input" placeholder="Search any things">
          <button @click="search" class="search-button">Search</button>
        </div>
      </div>
    </div>

  
      <!-- Navigation Links Component -->
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/product">Categories</router-link>
        <router-link to="/order">Order</router-link>
        <router-link to="/cart">Cart</router-link>
      </div>
  </template>
  
  <script>
 
  </script>
  
  <style scoped>
  /* Add your CSS styles here */
  
  .navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(169, 168, 168);
    height: 53px;
  }
  
  .logo-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-logo img {
    height: 40px;
    position: absolute; left: 80px;
  }

  
  .search-bar {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  
  .search-input {
    padding: 8px;
    border: none;
    border-radius: 20px;
    width: 600px;
  }
  
  .search-button {
    padding: 8px 15px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    position: relative left;
  }
  
  .nav-links {
    display: flex;
    background-color: rgb(223, 223, 223);
    height: 40px;
    padding: top 20px;
  }
  
  .nav-links a {
    color: black; /* Adjust the color as needed */
    text-decoration: none;
    margin: 0 25px;
    padding: 8px;
  }
  
  .sub-menu {
    position: relative;
    cursor: pointer;
  }
  
  .sub-menu div {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #333;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  .sub-menu:hover div {
    display: block;
  }
  </style>
  