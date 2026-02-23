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

1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

=>getElementById()- its select an element using by its unique name (id attribute), returns object or null.
=>getElementByClassName()- its select an element using by its common names (class attribute), returns a live HTMLCollection.
=>quirySelector()- its a flexible methode that returns the first element which is match one or more css selectors.

2. How do you create and insert a new element into the DOM?

=>
<!--in HTML-->
<div id = "heading-section">
    <h1>This is Bangladesh </h1>
</div>
<script>
    const newHeading = document.createElement('h1');
    newHeading.innerText = 'Welcome to the Bangladesh';
    Const headingSection = document.getelementById('heading-section');
    headingSection.appendchild(newHeading);
</script>


3. What is Event Bubbling? And how does it work?

=> Event Bubbling is a DOM Event propagation where occurred an event in child element that event goes upwards their parent element step by step, its follow DOM tree.

it works by clicking a button inside a div, it's occurs an event on target element and event handlers on target element execute first. 
We can stop event bubbling using by event.stopPRopagation() method.

4. What is Event Delegation in JavaScript? Why is it useful?