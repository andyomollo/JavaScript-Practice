//modifying thegood.html

document.addEventListener("DOMContentLoaded", ()=> {

    //disable submit to work after task has been added
    document.querySelector('#submit').disabled = true;

    document.querySelector('#comment').onkeyup = ()=>{
        document.querySelector('#submit').disabled = false;
    };

    document.querySelector('form').onsubmit = () =>{
        const task = document.querySelector("#comment").value;

        const li = document.createElement(li);
        li.innerHTML =task;

        document.querySelector('#comment').append(li);

        document.querySelector('#comment').value = '';
        document.querySelector('#submit').disabled = true;

        //stop submit button from submitting
        return false; }
});