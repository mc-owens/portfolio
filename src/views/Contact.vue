<template>
    <div class="contact-page">
      <div class="form-wrapper">
        <h2>Let's Connect</h2>
        <p>207-653-4861</p>
        <p>marieclaire.owens@gmail.com</p>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model="name" type="text" id="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="email" type="email" id="email" required />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea v-model="message" id="message" rows="4" required></textarea>
          </div>
          <button type="submit" class="submit-button">Submit</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const name = ref('')
  const email = ref('')
  const message = ref('')
  
  const handleSubmit = () => {
    alert(`Sending message from ${name.value}...`)
    // You’ll replace this with Formspree or EmailJS later.
    name.value = ''
    email.value = ''
    message.value = ''
  }
  </script>
  
  <style scoped>
 .contact-page {
  background-image: url('/DancePics/sorchia4.jpg');
  background-size: contain;
  background-position: center;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* moves box higher */
  padding: 4rem 2rem 2rem; /* extra top padding pushes form up */
}
.form-wrapper {
  background-color: rgba(255, 255, 255, 0.85);
  padding: 1.5rem 2rem; /* smaller top padding for h2 */
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}
  
h2 {
    margin-top: .5rem; 
  margin-bottom: 0.5rem; /* less space under the heading */
  font-size: 2rem;
  color: #333;
}

p {
  margin: 0.15rem 0;
  color: #444;
}

p:last-of-type {
  margin-bottom: 1rem; /* space between email and form */
}
  
  .form-group {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #222;
  }
  
  input,
  textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
  }
  
  input:focus,
  textarea:focus {
    border-color: #444;
  }
  
  .submit-button {
    width: 100%;
    background-color: #333;
    color: white;
    padding: 0.75rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #555;
  }
  </style>
  