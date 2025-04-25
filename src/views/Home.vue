<template>
    <div>

  
      <!-- Main content -->
      <div class="main-content">
        <h1>MARIECLAIRE OWENS</h1>
        <div class="shape-container">
          <svg width="300" height="300" viewBox="0 0 300 300">
            <!-- Circle -->
            <circle cx="150" cy="150" r="50" class="animated-circle"></circle>
            <!-- Square -->
            <rect x="100" y="100" width="100" height="100" class="animated-square"></rect>
            <!-- Triangle -->
            <polygon points="150,50 200,200 100,200" class="animated-triangle"></polygon>
          </svg>
        </div>
      </div>

      <!-- What I'm Currently Doing Section -->
    <div class="current-activities">
        <h2>What's Keeping Me <span class="italicized">Moving</span></h2>
      <div class="cards">
        <!-- Card 1: Dancer's Choice -->
        <div class="card card-circle">
          <h3>Dancer's Choice</h3>
          <p>June 21, 2025</p>
          <p>Lopez Theater -- Falmouth, ME</p>
          <a href="https://www.mainestateballet.org/2024-25-season" target="_blank">Learn More</a>
        </div>

        <!-- Card 2: Serenade -->
        <div class="card card-circle">
          <h3>Serenade</h3>
          <p>June 21, 2025</p>
          <p>Lopez Theater -- Falmouth, ME</p>
          <a href="https://www.mainestateballet.org/2024-25-season" target="_blank">Learn More</a>
        </div>

        <!-- Card 3: Teaching Heels -->
        <div class="card card-circle">
          <h3>Heels Dance Instructor</h3>
          <p>Maine Dance Center -- 7:00 PM Wednesdays</p>
          <p>Body Positive Dance -- 5:00 PM Thursdays</p>
          <a href="https://www.mainedancecenter.com" target="_blank">Learn More</a>
        </div>
      </div>
    </div>
  
    <!-- Artistic Statement Section -->
<div class="artistic-section">
  <h2 class="mb-3">Artistic Statement</h2>
  <p>
    Dance is my gateway to the world and the people around me. I see it as a universal language that allows us to express emotions and ideas beyond words. Through dance, I aim to share the intricacies of human connection while exploring the depth of the human experience.
    Geometrical shapes inspire my personal movement style, as I play with the juxtaposition of angles and curves. Musicality is central to my work, driving movements that oscillate between sharpness, suspension, and flow. I believe in the power of simplicity—when movement is purposeful, even the smallest gesture can leave a profound impact. I also embrace the influence of multiple dance styles, blending techniques to create work that reflects the interconnectedness of art.
  </p>

  <div class="animated-lines">
  <svg width="100%" height="50" viewBox="0 0 300 50" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 25 Q 75 -10, 150 25 T 300 25"
          stroke="gray"
          stroke-width="2"
          fill="none"
          stroke-dasharray="500"
          stroke-dashoffset="500">
          
      <animate attributeName="d"
               dur="8s"
               repeatCount="indefinite"
               values="M0 25 Q 75 -10, 150 25 T 300 25;
                       M0 25 Q 75 60, 150 25 T 300 25;
                       M0 25 Q 75 -10, 150 25 T 300 25" />

      <animate attributeName="stroke-dashoffset"
               values="300; 0; 300"
               dur="8s"
               repeatCount="indefinite" />
    </path>

    <!-- Short Vertical Line -->
    <line x1="150" y1="10" x2="150" y2="40"
          stroke="black"
          stroke-width="2"
          stroke-dasharray="30"
          stroke-dashoffset="30">
      <animate attributeName="stroke-dashoffset"
               values="20; 0; 20"
               dur="3s"
               repeatCount="indefinite" />
    </line>
  </svg>
</div>

  <p>
    In all my work, I strive to create a space for audiences to connect on their own terms. I want viewers to feel something, whether it’s understanding the narrative I’ve crafted or creating their own interpretation. My goal is to evoke emotions and invite reflection, ensuring that each person walks away with something meaningful.
  </p>
  <p>
    If you had asked me 4 years ago about the relationship between dance and perfection, I would have said that dance strives for perfection. Now, dance is not about that at all, and rather the contrary. It’s about exploration and embracing the endless possibilities, flops, and failures of creation. Through this process, I hope to continue connecting with others and celebrating the beauty of movement as an art form. The road to perfection does not exist, but luckily there are an infinite amount of roads that lead to art.
  </p>
</div>
  
      <!-- About Me Section -->
      <div class="aboutme-section">
        <h2 class="mb-3">About Me</h2>
  <div class="aboutme-container">
    
    <div class="aboutme-text">
        <p>
          I grew up in Maine, where I began my dance journey at Maine State Ballet, immersing myself in the authentic Balanchine technique. Under the direction of Linda MacArthur Miele, the youngest dancer ever accepted into the New York City Ballet by George Balanchine, I had the privilege of performing some of his most iconic works. This experience gave me a deep appreciation for the strong foundations of ballet, Balanchine's technique, and the crucial elements of performance and musicality.
          My journey continued at Florida Southern College in Lakeland, where I am pursuing a Bachelor of Fine Arts in Dance Performance and Choreography, along with a major in Applied Mathematics and a minor in Computer Science. It was here that I discovered the world of modern and contemporary dance, and began to draw connections between my classical ballet training and these new forms. Over time, my dance exploration expanded into styles I had never before encountered, such as hip-hop and heels, which pushed me to challenge myself creatively and technically.
          Currently, I am teaching a heels class to adults, sharing my passion for dance exploration, creativity, and choreography and fostering confidence in others. I am grateful for the diverse experiences and opportunities that have shaped my artistic journey, and I continue to seek ways to blend my technical expertise with my love for creative expression.
        </p>
      </div>
      <div class="aboutme-image">
        <br>
      <img src="/DancePics/sorchia2.JPG" alt="Marieclaire Portrait" />
    </div>
    </div>
    
</div>
</div>
  </template>
  
  <script>
  export default {
    name: "Home",
  };
  </script>
  
  <style scoped>

.aboutme-heading {
  text-align: center;
  margin-bottom: 2rem;
}

.aboutme-container {
  display: flex;
  align-items: flex-start; /* align top instead of stretch */
  gap: 6rem; /* reduce gap for tighter layout */
  justify-content: space-between;
  flex-wrap: nowrap;
}

.aboutme-text {
  flex: 1; /* give more room to text */
}

.aboutme-image {
  flex: 1;
  max-width: 300px; /* limit image width */
}

.aboutme-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  max-height: 300px;
  margin: 0; /* remove default spacing */
  padding: 0;
}


  .main-content {
    text-align: center;
  }
  
  .shape-container svg {
    width: 300px;
    height: 300px;
  }
  
  .animated-circle {
    animation: circle-animation 4s ease-in-out infinite;
  }
  
  .animated-square {
    animation: square-animation 11s ease-in-out infinite;
  }
  
  .animated-triangle {
    animation: triangle-animation 8s ease-in-out infinite;
  }

  .animated-circle,
.animated-square,
.animated-triangle {
  fill: none;
  stroke: white;
  stroke-width: 2;
}

  
  @keyframes circle-animation {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
  
  @keyframes square-animation {
  0%, 100% {
    transform: translateX(100%) rotate(0deg); /* Start off-screen to the right */
  }
  50% {
    transform: translateX(0) rotate(180deg); /* Move to its normal position */
  }
}
  
  @keyframes triangle-animation {
    0%, 100% {
      transform: rotate(20deg);
    }
    50% {
      transform: rotate(180deg);
    }
  }
  
  .artistic-section {
  margin-top: 20px; /* Adjust as needed */
  padding: 30px;
  color: rgb(42, 41, 41); /* or black, depending on your background */
}

.aboutme-section {
    margin-top: 20px; /* Adjust as needed */
  padding: 30px;
  color: rgb(42, 41, 41); /* or black, depending on your background */
}


.animated-lines {
    margin: 2rem 0;
    color: #ff7ec9;
    text-align: center;
  }


  /* Apply the animation to the path */
  .line-path {
    animation: animate-line 4s ease-in-out infinite;
  }
  

  .main-content {
  text-align: center;
  background-image: url('/DancePics/main.jpg'); /* Replace with your image name */
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 79vh; 
  padding: 50px 0;
  position: relative;
  color: white; /* optional if your background is dark */
}

.main-content h1 {
  position: relative;
  top: -30px; /* Move text up without affecting the background */
}

/* General Styles */
.current-activities {
  text-align: center;
  margin-top: 50px;
}

.current-activities-title {
  font-size: 2rem;
  margin-bottom: 30px;
  color: white;
}

/* Card Layout */
.cards {
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-top: 30px;
}

.card {
  width: 210px;  /* Width */
  height: 210px; /* Set height equal to width for a perfect circle */
  padding: 40px;
  text-align: center;
  background-color: #f2bfd9; /* Light blue background */
  border-radius: 50%; /* Makes the card a circle */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}


.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  background-color: #eeadcf; /* Slightly darker blue */
}

.card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.card p {
  font-size: 1rem;
  margin-bottom: 10px;
}

.card a {
  font-size: 1rem;
  color: #ff0095;
  text-decoration: none;
}

.italicized {
  font-style: italic;
}

.card h3 {
    font-weight: 400;
}

p {
    line-height: 1.8;
}

  </style>