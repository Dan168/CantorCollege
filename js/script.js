
(function(){
    document.getElementById("myHeading").innerHTML = "Dan Kavanagh";
    document.querySelector("nav ul li").setAttribute('class', 'currentPage');

    document
    .querySelector("nav ul li a")
    
    //DOM event 
    document.getElementById("myTestEvent").onclick = function(){
        console.info("Hi i was clicked")
    }

})()