<template>
    <div class="resumeandcvpage">
    <div class="docs-wrapper">
      <!-- CV -->
      <div class="pdf-container">
        <h3>Curriculum Vitae</h3>
        <p>
          <a href="/DanceFiles/Cirriculum Vitae -2.pdf" download>Click here</a> to download the document.
        </p>
        <iframe
          src="/DanceFiles/Cirriculum Vitae -2.pdf"
          class="pdf-frame"
          title="CV PDF"
        ></iframe>
      </div>
  
      <!-- Performance Resume -->
      <div class="pdf-container">
        <h3>Performance Resume</h3>
        <p>
          <a href="/DanceFiles/Performance Resume-2.pdf" download>Click here</a> to download the document.
        </p>
        <iframe
          src="/DanceFiles/Performance Resume-2.pdf"
          class="pdf-frame"
          title="Performance Resume PDF"
        ></iframe>
      </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    name: "Docs"
  };
  </script>
  
  <style scoped>
  .docs-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding: 2rem;
  }
  
  .pdf-container {
    flex: 1 1 45%;
    max-width: 45%;
    border: 2px solid pink;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 4px 10px rgba(255, 192, 203, 0.3);
    background-color: #fff;
  }
  
  .pdf-frame {
    width: 100%;
    height: 450px;
    border: none;
    border-radius: 8px;
  }
  
  @media (max-width: 768px) {
    .pdf-container {
      max-width: 100%;
      flex: 1 1 100%;
    }
  }

  .resumeandcvpage {
  background-image: url('/DancePics/GridBackground.JPG');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  height: 100vh; /* Ensure the body takes the full height of the viewport */
}

h3 {
    font-weight: bold;
}

  </style>
  