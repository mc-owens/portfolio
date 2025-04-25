<template>
    <div class="video-wrapper text-center">
      <div class="video-border">
        <iframe
          width="900"
          height="506"
          src="https://www.youtube.com/embed/LtZjtD8K56Q"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Reel"
  };
  </script>
  
  <style scoped>
  .video-wrapper {
    margin: 50px;
    text-align: center;
  }
  
  .video-border {
    display: inline-block;
    border: 5px solid #6c757d;
    padding: 0;
    margin: 0;
  }
  </style>
  