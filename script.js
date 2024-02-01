const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
 
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=> observer.observe(el));



//Calculator Progarm

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
    try {
         display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

