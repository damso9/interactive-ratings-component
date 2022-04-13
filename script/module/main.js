// DOM Selectors
const spanGroup = document.querySelectorAll(".span");
const submit = document.querySelector("#submit");
const h1 = document.querySelector("h1");
const p = document.querySelector(".para");
const image1Container = document.querySelector("#aside1");
const image2Container = document.querySelector("#aside2");
const selection = document.querySelector(".selection");
const section = document.querySelector("section");

let submitValue;
console.log(spanGroup);
spanGroup.forEach((span) => {
  span.onclick = (e) => {
    e.preventDefault();
    submitValue = e.target.value;
    console.log(e.target);
    console.log(e.target.innerHTML);
  };
});

const handleClick = (e) => {
  console.log(e.target);

  submitValue = e.target.innerHTML;
  e.target.style.backgroundColor = "pink";

  console.log(submitValue);
};

submit.onclick = function (e) {
  e.preventDefault();
  if (submitValue) {
    console.log(e);
    selection.innerHTML = `You selected ${submitValue} out of 5`;
    selection.style.display = "block";

    image1Container.style.display = "none";
    image2Container.style.display = "block";
    h1.innerHTML = "Thank You!";
    h1.style.textAlign = "center";
    p.innerHTML =
      "We appreciate you taking the time to give a rating. If you ever need more support, don;t hesistate to get in touch!";
    console.log(submitValue);
    p.style.textAlign = "center";
    p.style.border = "2px solid red";
    section.style.display = "none";
    submit.style.display = "none";
  }
};
