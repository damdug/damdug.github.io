document.addEventListener('DOMContentLoaded', function() {
  function typeWriter(text, id, delay = 100, i = 0) {
    if (i < text.length) {
      document.getElementById(id).innerHTML += text.charAt(i);
      i++;
      setTimeout(() => typeWriter(text, id, delay, i), delay);
    }
  }

  const welcomeText = "def future_proof(business_strategy, technology_adoption, process_optimization):";
  const introText = `Enhance a business model to make it resilient against future challenges.

  Parameters:
  - business_strategy (dict): A dictionary containing elements of the business strategy.
  - technology_adoption (list): A list of technologies to adopt for future-proofing.
  - process_optimization (list): Processes identified for optimization.

  Returns:
  - dict: A dictionary representing the future-proofed business model.
  [Establish Connection]`;
  
  typeWriter(welcomeText, 'welcome-heading', 150); // Typing effect for the heading
  setTimeout(() => typeWriter(introText, 'intro-text', 50), welcomeText.length * 150); // Delay typing effect for the paragraph until the heading is done
});

document.addEventListener('DOMContentLoaded', function() {
  const keywords = ["Innovation", "AI & Machine Learning", "Business & Digital Strategy", "Web Development", "Sales & Marketing", "SOP Optimization", "Data Analysis", "PMO Project Management", "Full Stack Development", "Operations", "Good Ideas"];
  let currentKeyword = 0;
  let letterIndex = 0;
  const typingDelay = 100;
  const keywordPause = 2000;
  const elementID = 'dynamic-keyword'; // Targeting the dynamic part

  function typeKeywords() {
      if (currentKeyword >= keywords.length) {
          currentKeyword = 0;
      }

      if (letterIndex < keywords[currentKeyword].length) {
          document.getElementById(elementID).innerHTML += keywords[currentKeyword].charAt(letterIndex);
          letterIndex++;
          setTimeout(typeKeywords, typingDelay);
      } else {
          setTimeout(eraseKeyword, keywordPause);
      }
  }

  function eraseKeyword() {
      if (letterIndex > 0) {
          document.getElementById(elementID).innerHTML = keywords[currentKeyword].substring(0, letterIndex - 1);
          letterIndex--;
          setTimeout(eraseKeyword, typingDelay);
      } else {
          currentKeyword++;
          typeKeywords();
      }
  }

  // Start the typing effect
  typeKeywords();
});
