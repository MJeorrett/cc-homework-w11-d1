# Quiz

1. What does DOM stand for?
---
Document Object Model

2. What is the name of the object we can use to get information about the browser enviroment?
---
window

3. What is the name of the object that we can use to get access to the DOM representation of the page?
---
document

4. What type of files might we see in the Network tab for in Chrome devTools?
---
.css, .js

5. What version of HTML is document.querySelector from?
---
5

6. Which event do we hook into when we want to know the DOM has loaded, window.onload or document.onload?
---
window.onload();

7. We use window.createElement to make new DOM elements, true or false?
---
false

8. List two ways to get all the elements by class 'cat'
---
document.getElementsByClassName( 'cat' );
document.querySelectorAll( '.cat' );

9. List two ways to retrieve the element with id "goat"
---
document.getElementById( 'goat' );
document.querySelector( '#goat' );

10. List two ways to get all the li elements
---
document.getElementsByTagName( 'li' );
document.querySelectorAll( 'li' );

11. List two ways to get the first li element
---
document.getElementsByTagName( 'li' )[0];
document.querySelector( 'li' );


12. How can we set the a given element to be hidden?
---
element.style.visibility = 'hidden';
