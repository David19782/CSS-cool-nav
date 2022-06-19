const list = document.querySelectorAll(".list");
console.log(list)
function remove(){
    list.forEach(el => {
        el.classList.remove('active');
    })
}

list.forEach((el, ind) => {
    el.addEventListener("click", (curr) => {
        remove();
        el.classList.add("active");
        console.log(ind)
        console.log(document.querySelector(".indicator"))
        const val = (ind*70);
        document.querySelector(".indicator").style.transform = `translateX(${val}px)`;
    });
})