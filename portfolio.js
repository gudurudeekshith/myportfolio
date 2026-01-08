const tg = document.querySelector(".toggle");
const tgi = document.querySelector(".toggle i");
const main = document.querySelector(".contain2");

function togg() {
    main.classList.toggle("open");
    const mark = main.classList.contains("open");
    tgi.classList = mark ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}
// document.addEventListener('click',(e)=>{
//     const mclick=main.contains(e.target);
//     if(!mclick&&main.classList.contains("open")){
//         main.classList.remove("open");
//     }
// })