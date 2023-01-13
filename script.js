const burgermenu = document.getElementById("burgermenu");

burgermenu.addEventListener('click',()=>{
    const burgervisible = document.getElementById('togglemenu');
    if (burgervisible.classList.contains("links")) {
        burgervisible.classList.remove("links");
    } else {
        burgervisible.classList.add("links");
    }
    
    
});

