let counter = 0;

    function count(){
        const heading=document.querySelector('h1')
        counter++;
        heading.innerHTML=counter;

        if (counter >= 10) {
            alert(`You have reached a max ${counter} counts. Resetting to 0.`);
            counter = 0;
        } else {
            counter++; 
        }
    }

    //the domcontentloaded makes sure that javascript goes through the entire document instead of header alone.
    document.addEventListener('DOMContentLoaded', function(){
        document.querySelector('button').onclick = count; // or .addEventListener('click', counter). always takes two arguments
    });
