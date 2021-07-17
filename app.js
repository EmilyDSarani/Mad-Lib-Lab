// import functions and grab DOM elements
const nounEl = document.getElementById('noun');  
const verbEl = document.getElementById('verb');
const adjectiveEl = document.getElementById('adjective');
const buttonEl = document.getElementById('button');
const initialEl = document.getElementById('initial-page');
const outputEl = document.getElementById('output-page');
// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
buttonEl.addEventListener('click', ()=>{
  outputEl.textContent = nounEl.value; 
  outputEl.textContent = verbEl.value; 
  outputEl.textContent = adjectiveEl.value; 
  verbEl.Value; 
  adjectiveEl.Value; 
  initialEl.style.display="none";
  outputEl.style.display="block"; 
});

// headerEl.textContent = inputEl.value;
