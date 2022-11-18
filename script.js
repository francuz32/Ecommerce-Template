const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav  = document.getElementById("navbar");

if(bar){
    bar.addEventListener("click", () => {
        console.log("You've clicked the bar");
        nav.classList.add("active");
    });
}

if(close){
    close.addEventListener("click", () => {
        console.log("You've clicked the bar");
        nav.classList.remove("active");
    });
}