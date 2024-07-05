let heading =document.querySelector("h2");
let str = "Frome Shariq Gazdar";
heading.innerText=(`${heading.innerText} ${str} `);
let div = document.querySelectorAll(".box");
idx= 1;
for (const i of div) {
    i.innerText = `Some unique text for div ${idx}`;
    idx++;
}