document.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const nameList = document.getElementById('name-list');
  const sortButton = document.getElementById('sort-button');
  const shuffleButton = document.getElementById('shuffle-button');
  const resetButton = document.getElementById('reset-button');
  const totalCount = document.getElementById('total-count');
  const sortStatus = document.getElementById('sort-status');
  
  // Original list of names
  const originalNames = [
    'Albert Einstein',
    'Marie Curie',
    'Isaac Newton',
    'Nikola Tesla',
    'Rosalind Franklin',
    'Charles Darwin',
    'Ada Lovelace',
    'Galileo Galilei',
    'Jane Goodall',
    'Stephen Hawking',
    'Grace Hopper',
    'Richard Feynman',
    'Rachel Carson',
    'Max Planck',
    'Barbara McClintock'
  ];
  
  // Current working copy of the list
  let currentNames = [...originalNames];
  let isSorted = false;
  
  // Initialize the list
  function renderList() {
    // Clear the current list
    nameList.innerHTML = '';
    
    // Create list items
    currentNames.forEach((name, index) => {
      const li = document.createElement('li');
      
      // Create numbered marker
      const numberSpan = document.createElement('span');
      numberSpan.classList.add('list-number');
      numberSpan.textContent = index + 1;
      
      // Add name text
      const nameText = document.createTextNode(name);
      
      // Append elements to list item
      li.appendChild(numberSpan);
      li.appendChild(nameText);
      
      // Add animation delay based on index
      li.style.animationDelay = `${index * 50}ms`;
      
      // Append to list
      nameList.appendChild(li);
    });
    
    // Update list statistics
    totalCount.textContent = currentNames.length;
    sortStatus.textContent = isSorted ? 'Sorted' : 'Unsorted';
    sortStatus.style.color = isSorted ? '#2ecc71' : '#e74c3c';
  }
  
  // Sort names alphabetically
  function sortNames() {
    // Create a new sorted array
    currentNames = [...currentNames].sort((a, b) => a.localeCompare(b));
    isSorted = true;
    renderList();
    
    // Visual feedback for button
    sortButton.classList.add('active');
    setTimeout(() => {
      sortButton.classList.remove('active');
    }, 300);
  }
  
  // Shuffle the list using Fisher-Yates algorithm
  function shuffleNames() {
    const shuffled = [...currentNames];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    currentNames = shuffled;
    isSorted = false;
    renderList();
    
    // Visual feedback for button
    shuffleButton.classList.add('active');
    setTimeout(() => {
      shuffleButton.classList.remove('active');
    }, 300);
  }
  
  // Reset to original order
  function resetNames() {
    currentNames = [...originalNames];
    isSorted = false;
    renderList();
    
    // Visual feedback for button
    resetButton.classList.add('active');
    setTimeout(() => {
      resetButton.classList.remove('active');
    }, 300);
  }
  
  // Event listeners
  sortButton.addEventListener('click', sortNames);
  shuffleButton.addEventListener('click', shuffleNames);
  resetButton.addEventListener('click', resetNames);
  
  // Initialize the list on page load
  renderList()});