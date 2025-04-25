<template>
    <div class="gallery-container">
      <div class="gallery-grid">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="gallery-item"
          @click="openModal(img)"
        >
          <img :src="img" alt="gallery image" />
        </div>
      </div>
  
      <div v-if="selectedImage" class="modal-overlay" @click="closeModal">
        <transition name="fade">
          <img class="modal-image" :src="selectedImage" @click.stop />
        </transition>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const images = ref([
    '/DancePics/main.jpg',
    '/DancePics/emerging1.JPG',
    '/DancePics/emerging2.JPG',
    '/DancePics/flutes.jpg',
    '/DancePics/image1.jpg',
    '/DancePics/cobweb1.jpg',
    '/DancePics/sorchia3.JPG',
    '/DancePics/cobweb2.jpg',
    '/DancePics/snow1.jpg',
    '/DancePics/cobweb3.jpg',
    '/DancePics/sorchia2.JPG',
    '/DancePics/image4.jpg',
    '/DancePics/cobweb4.jpg',
    '/DancePics/souvenir.jpg',
    '/DancePics/image2.jpg',
    '/DancePics/sorchia4.jpg',
    '/DancePics/image3.jpg',
    '/DancePics/image5.jpg',
    '/DancePics/raymonda.jpg',
    '/DancePics/coppelia1.jpg',
    '/DancePics/coppelia2.jpg',
    '/DancePics/coppelia3.jpg',
    '/DancePics/firebird1.jpg',
    '/DancePics/raymonda2.jpg',
    '/DancePics/coppelia4.jpg',
    
    
  ])
  
  const selectedImage = ref(null)
  
  const openModal = (img) => {
    selectedImage.value = img
  }
  
  const closeModal = () => {
    selectedImage.value = null
  }
  </script>
  
  <style scoped>
  .gallery-container {
    padding: 1rem;
  }
  
  .gallery-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-start;
  align-items: flex-start;
}

.gallery-item img {
  height: auto;
  max-height: 275px; /* or whatever fits your design */
  width: auto;
  display: block;
  object-fit: contain;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

  
  .gallery-item img:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
  
  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-image {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  