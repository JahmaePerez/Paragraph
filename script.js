document.addEventListener("DOMContentLoaded", function () {
  const genBtn = document.querySelector(".generate");
  const numInt = document.querySelector("#number");
  const parag = document.querySelector(".parag");

  let lorems = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Illo eum incidunt alias magnam! Pariatur, autem eligendi totam saepe quia atque omnis impedit tenetur.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sed nobis soluta molestias deserunt nisi, recusandae at vero assumenda eius?",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    "Eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
    "Nullam constius, turpis et commodo pharetra.",
    "Est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
  ];

  function generateParagraphs() {
    let paragNum = parseInt(numInt.value, 10);
    parag.innerHTML = "";

    for (let i = 0; i < paragNum; i++) {
      let para = document.createElement("p");
      let randomIndex = Math.floor(Math.random() * lorems.length);
      para.textContent = lorems[randomIndex];
      parag.appendChild(para);
    }
  }

  genBtn.addEventListener("click", generateParagraphs);
});
