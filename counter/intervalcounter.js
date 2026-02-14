//we are checking if there's a value in local storage, but if not the it runs the conditional ststement
if(!localStorage.getItem('counter'));
    localStorage.setItem('counter', 0);

    function count(){
        let counter = localStorage.getItem('counter')
        const heading = document.querySelector('h1')
        counter++;
        heading.innerHTML=counter;
        localStorage.setItem('counter', counter);
    }

    //the domcontentloaded makes sure that javascript goes through the entire document instead of header alone.
    document.addEventListener('DOMContentLoaded', function(){
        document.querySelector('h1').innerHTML=localStorage.getItem('counter');
        document.querySelector('button').onclick = count; // or .addEventListener('click', counter). always takes two arguments
    });
