# Job Application Tracker

## Overview
Job Application Tracker is a simple efficient web application it's dashboard that provides a overview of all job application details.Build with HTML, CSS , DaisyUI and Vanilla JavaScript, it's uses for storing data and managing total number of Applications, Interviews and Rejected. This application contains job application history tracking also allows adding and deleting any data from the dashboard.

## Features
- **Dashboard** - View application history and quick access to all services.
- **Total** - Overall number of jobs applied to
- **Interview** - Applications that are upcoming or completed
- **Rejected** - Applications that were declined
- **Filter Applications** - Applications that are transfer from interview to rejected or rejected to interview.
- **Delete** - Applications that were removed from the total application, interview and rejected.


## How to use

### 1. Clone the Repository
git clone https://github.com/Rabeaaktersumi/Job-Application-Tracker.git


## Answers to the Questions

## 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

=>getElementById()- its select an element using by its unique name (id attribute), returns object or null.
Example: document.getElementById('id');

=>getElementsByClassName()- its select an element using by its common names (class attribute), returns a live HTMLCollection.
Example: document.getElementsByClassName('classname');

=>quirySelector()- its a flexible methode that returns the first element which is match one or more css selectors.
Example: document.querySelector('.example');

## 2. How do you create and insert a new element into the DOM?

=>
<!--in HTML
<div id = "head-section">
    <p>This is Bangladesh </p>
</div>-->
<script>
    const newText = document.createElement('p');
    newText.textContent = 'Welcome to the Bangladesh';
    Const headSection = document.getelementById('head-section');
    headSection.appendchild(newText);
</script>



## 3. What is Event Bubbling? And how does it work?

=> Event Bubbling is a DOM Event propagation where occurred an event in child element that event goes upwards their parent element step by step, its follow DOM tree.

it works by clicking a button inside a div, it's occurs an event on target element and event handlers on target element execute first. 
We can stop event bubbling using by event.stopPRopagation() method.

EXAMPLE:
document.querySelector('.grandparent').addEventListener('click', function() => {
  console.log('Grandparent clicked');
});

document.querySelector('.parent').addEventListener('click', function() => {
  console.log('Parent clicked');
});

document.querySelector('.child').addEventListener('click', function() => {
  console.log('Child clicked');
});


## 4. What is Event Delegation in JavaScript? Why is it useful?

=> Event Delegation is a technique where we use one event listener for different child element instead of different event listener in their common parent element. It works depend on event bibbling.

It's useful because-
-It's performance is very good need less memory and don't need different event listener.
-Supports dynamic elements.
-It's make code clean and maintainable.


## 5. What is the difference between preventDefault() and stopPropagation() methods?

=> preventDefault() methods:
-It works to stop default behaviour in an element.
-It does not stop event bubbling.
-It uses for stops form submit, link click etc for default browser's behaviour.

Example:
const text = document.querySelector('.para');
text.addEventListener('click', function(event){
    event.preventDefault();

    console.log('text prevented');
})

stopPropagation() methods:
-It works to stop event bubbling.
-It does not stop default event behaviour.
-Stop event from reaching parent elements.

Example:
document.querySelector('.grandparent').addEventListener('click', function() => {
    functionName.stopPropagation()
    console.log('Grandparent clicked');
});

document.querySelector('.parent').addEventListener('click', function() => {
    functionName.stopPropagation()
    console.log('Parent clicked');
});

document.querySelector('.child').addEventListener('click', function() => {
    functionName.stopPropagation()
    console.log('Child clicked');
});

