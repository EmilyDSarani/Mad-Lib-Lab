## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## HTML Plan 
0) labels for the inputs
    - Why: to help identify parts of speech for users to input
    - How: <span>
1) inputs (noun, adjective, verb)
    - Why: we need the user interaction
    - How: <input>; we will need id's for these to grab them in javascript
2) submit button
    - Why: we need to take the parts of speech and turn them into results
    - How: <button>; we will need an id for this to have an eventListener

## JS Plan
    - grab DOM elements from HTML
        - input from noun ID
        - input from adjective ID
        - input from verb ID
        - button ID

    - addEventListener to the button click: 
        - want the user input to result in a fun madlib
        - temp1.style.display = "none" (??) 
        - temp1.style.display = "block" (??) 