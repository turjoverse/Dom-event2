1. Difference Between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById

Usage: Returns a single element with the specified ID.
Return Type: An HTML element (or null if not found).
Example: document.getElementById('myID')
getElementsByClassName

Usage: Returns a live HTMLCollection of elements with the specified class name(s).
Return Type: A collection (array-like) of HTML elements.
Example: document.getElementsByClassName('myClass')
querySelector

Usage: Returns the first element that matches a specified CSS selector.
Return Type: An HTML element (or null if not found).
Example: document.querySelector('.myClass')
querySelectorAll

Usage: Returns a static NodeList of elements that match a specified CSS selector.
Return Type: A NodeList (array-like) of HTML elements.
Example: document.querySelectorAll('.myClass')


2. Creating and Inserting a New Element into the DOM

Creation: Use document.createElement().
Insertion: Use appendChild(), insertBefore(), or replaceChild().
Example:const newElement = document.createElement('div'); // Create a new <div>
newElement.textContent = 'Hello, World!'; // Set its content
document.body.appendChild(newElement); // Append it to the body

3. Event Bubbling and How It Works

Definition: Event bubbling is a type of event propagation where an event starts from the target element and bubbles up to its ancestors (parent elements).
How it Works: When an event occurs on an element (e.g., a button click), the event triggers on that element first, then triggers on its parent, and continues upward until it reaches the root of the DOM.
4. Event Delegation in JavaScript

Definition: A technique that allows you to attach a single event listener to a parent element instead of multiple listeners to child elements.
Benefits:
Reduces memory usage by using fewer event listeners.
Handles events for dynamically added elements automatically.
Example:document.querySelector('#parent').addEventListener('click', function(event) {
    if (event.target.matches('.child')) {
        // Handle click on the child elements
    }
});

5. Difference Between preventDefault() and stopPropagation() Methods

preventDefault()

Usage: Prevents the default action that belongs to the event from being triggered.
Example: Prevent a form submission with event.preventDefault().
stopPropagation()

Usage: Stops the event from propagating (bubbling) up the DOM tree.
Example: Prevents the event from reaching parent elements.