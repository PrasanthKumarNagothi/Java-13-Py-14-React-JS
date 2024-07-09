let counter = document.getElementById("counter");


let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")

increase.onclick = () => {
    let count = parseInt(counter.textContent);
    console.log('check');
    counter.textContent = count + 1
}