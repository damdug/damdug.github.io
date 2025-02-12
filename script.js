document.addEventListener('DOMContentLoaded', function() {
  function typeWriter(text, id, delay = 100, i = 0) {
    if (i < text.length) {
      document.getElementById(id).innerHTML += text.charAt(i);
      i++;
      setTimeout(() => typeWriter(text, id, delay, i), delay);
    }
  }

  const welcomeText = "def create_and_scale(vision, tools, execution):";
  const introText = `Build, Scale, and Lead with Confidence—From Startup to Sustainable Growth.

 Parameters:
    - vision (dict): Define your goals, refine your strategy, and establish a clear roadmap.
    - tools (list): Select and integrate the right digital solutions to automate, optimize, and scale efficiently.
    - execution (list): Implement structured methodologies to drive growth, streamline operations, and sustain success.

    Returns:
    - dict: A fully realized business model designed for clarity, efficiency, and long-term scalability—whether launching a startup or leading an established business.

  [Establish Connection]`;
  
  typeWriter(welcomeText, 'welcome-heading', 150); // Typing effect for the heading
  setTimeout(() => typeWriter(introText, 'intro-text', 50), welcomeText.length * 150); // Delay typing effect for the paragraph until the heading is done
});

document.addEventListener('DOMContentLoaded', function() {
  const keywords = [
"Business Strategy & Organization",
"Business Coaching & Leadership",
"Integrated Online Presence & Strategy",
"Fractional Executive Services",
"Customer Growth & Sales Strategy"
"Digital Engagement & Marketing",
"AI-Powered Automation",,
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
  let currentKeyword = 0;
  let letterIndex = 0;
  const typingDelay = 100;
  const keywordPause = 2000;
  const elementID = 'dynamic-keyword'; // Targeting the dynamic part
  const listElementID = 'keywords-list'; // ID for the bulleted list container

  function typeKeywords() {
    if (currentKeyword >= keywords.length) {
      currentKeyword = 0;
    }

    if (letterIndex === 0) {
      document.getElementById(elementID).innerHTML = ""; // Clear the element only at the start of a new word
    }

    if (letterIndex < keywords[currentKeyword].length) {
      document.getElementById(elementID).innerHTML += keywords[currentKeyword].charAt(letterIndex);
      letterIndex++;
      setTimeout(typeKeywords, typingDelay);
    } else {
      appendKeywordToList(keywords[currentKeyword]); // Append when finished typing
      setTimeout(eraseKeyword, keywordPause);
    }
  }

  function eraseKeyword() {
    if (letterIndex > 0) {
      document.getElementById(elementID).innerHTML = keywords[currentKeyword].substring(0, letterIndex - 1);
      letterIndex--;
      setTimeout(eraseKeyword, typingDelay);
    } else {
      letterIndex = 0; // Reset letterIndex after erasing
      currentKeyword++;
      typeKeywords();
    }
  }

  function appendKeywordToList(keyword) {
    if (!document.querySelector(`#${listElementID} li[data-keyword="${keyword}"]`)) {
      const li = document.createElement('li');
      li.textContent = keyword;
      li.setAttribute('data-keyword', keyword);
      document.getElementById(listElementID).appendChild(li);
    }
  }

  // Start the typing effect
  typeKeywords();
});
