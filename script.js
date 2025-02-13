$(document).ready(function() {
  // Define content for different pages
  const pageContent = {
    home: {
      welcomeText: `def create_and_scale(vision, tools, execution):`,
      introText: `Build, Scale, and Lead with Confidence—From Startup to Sustainable Growth.

Parameters:
  - vision (dict): Define your goals, refine your strategy, and establish a clear roadmap.
  - tools (list): Select and integrate the right digital solutions to automate, optimize, and scale efficiently.
  - execution (list): Implement structured methodologies to drive growth, streamline operations, and sustain success.

Returns:
  - dict: A fully realized business model designed for clarity, efficiency, and long-term scalability—whether launching a startup or leading an established business.

[Establish Connection]`
    },
    services: {
      // We'll only type "def frameworks(" and "):" once.
      // The middle keyword (formerly 'digital_transformation') will cycle through the list below.
      introText: `Parameters:
  - strategy (dict): Custom roadmaps for your business growth
  - technology (list): Cutting-edge tools and platforms
  - execution (list): Proven methodologies for success

Returns:
  - dict: Transformative solutions that drive real business results`
    }
  };

  // Keywords to rotate through in Services page heading, and to list below
  const keywords = [
    "Business Strategy & Organization",
    "Business Coaching & Leadership",
    "Integrated Online Presence & Strategy",
    "Fractional Executive Services",
    "Customer Growth & Sales Strategy",
    "Digital Engagement & Marketing",
    "AI-Powered Automation",
    "Scalable Business Operations",
    "CRM & Sales Optimization",
    "Content Marketing & SEO",
    "User Experience & Brand Identity",
    "Project & Product Management",
    "Full-Stack Business Development",
    "Process Improvement & SOPs",
    "Entrepreneurial Growth Roadmaps",
    "Building Systems for Scale",
    "Good Ideas"
  ];

  // Detect which page we are on
  const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
  const currentPage = isHomePage ? 'home' : 'services';
  const content = pageContent[currentPage];

  // Grab references to DOM elements
  const welcomeHeading = document.getElementById('welcome-heading');
  const introTextElement = document.getElementById('intro-text');
  const dynamicKeywordElement = document.getElementById('dynamic-keyword'); // Optional if needed
  const keywordsListElement = document.getElementById('keywords-list');

  /**
   * Simple typewriter for multi-line text
   * (Used on the Home page and for the Services "introText".)
   */
  function typeWriter(text, element, delay = 50, i = 0) {
    if (!element) return; // safeguard if element doesn't exist
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      setTimeout(() => typeWriter(text, element, delay, i + 1), delay);
    }
  }

  /**
   * Create a static list of all keywords (Services page).
   */
  function listAllKeywords() {
    if (!keywordsListElement) return;
    keywordsListElement.innerHTML = "";
    keywords.forEach(keyword => {
      const li = document.createElement('li');
      li.textContent = keyword;
      keywordsListElement.appendChild(li);
    });
  }

  /**
   * Cycle through keywords in the Services page heading:
   * "def frameworks(keyword_here):"
   */
  function cycleKeywordsInHeading() {
    if (!welcomeHeading) return;

    const prefix = "def frameworks(";
    const suffix = "):";
    let currentKeywordIndex = 0;
    let letterIndex = 0;
    let isErasing = false;

    const typingDelay = 100;    // speed of typing
    const erasingDelay = 100;   // speed of erasing
    const waitBeforeErase = 2000; // pause after finishing a word before erasing

    function typeLoop() {
      const currentKeyword = keywords[currentKeywordIndex];

      if (!isErasing) {
        // Typing forward
        welcomeHeading.textContent = prefix + currentKeyword.substring(0, letterIndex) + suffix;
        letterIndex++;

        if (letterIndex <= currentKeyword.length) {
          setTimeout(typeLoop, typingDelay);
        } else {
          // Finished typing full keyword, wait a bit then start erasing
          setTimeout(() => {
            isErasing = true;
            setTimeout(typeLoop, erasingDelay);
          }, waitBeforeErase);
        }
      } else {
        // Erasing
        welcomeHeading.textContent = prefix + currentKeyword.substring(0, letterIndex) + suffix;
        letterIndex--;

        if (letterIndex >= 0) {
          setTimeout(typeLoop, erasingDelay);
        } else {
          // Finished erasing, move to next keyword
          isErasing = false;
          currentKeywordIndex = (currentKeywordIndex + 1) % keywords.length;
          setTimeout(typeLoop, typingDelay);
        }
      }
    }

    // Start the cycle
    // First, type out the "def frameworks(" and skip to the dynamic portion
    welcomeHeading.textContent = prefix; 
    typeLoop();
  }

  // =============== PAGE-SPECIFIC LOGIC ===============

  if (currentPage === 'home') {
    // Home page: type entire welcomeText and introText
    if (welcomeHeading) {
      typeWriter(content.welcomeText, welcomeHeading);
    }
    if (introTextElement) {
      typeWriter(content.introText, introTextElement, 30);
    }

  } else {
    // Services page: 
    // 1. Replace digital_transformation with typed keywords 
    //    "def frameworks(keyword):"
    // 2. Type out intro text below
    // 3. List all keywords

    // Clear heading first
    if (welcomeHeading) {
      welcomeHeading.textContent = ""; 
    }

    // Start cycling the keyword portion in the heading
    cycleKeywordsInHeading();

    // Type out the intro text if there's an element
    if (introTextElement) {
      typeWriter(content.introText, introTextElement, 30);
    }

    // Show a static list of all keywords 
    listAllKeywords();
  }
});
