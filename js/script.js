const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

//Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.classList.add("subheading");

//Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

//Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p> New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

//Question 7

function listMaker(list) {
  for (let i = 0; i < cats.length; i++) {
    console.log(cats[i].name);
  }
}

listMaker(cats);

//Question 8

const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
  let finalHtml = "";
  for (let i = 0; i < cats.length; i++) {
    let catName = cats[i].name;
    let catAge = cats[i].age;
    if (!catAge) {
      catAge = "Age Unknown";
    }
    finalHtml += `<div><h5>${catName}</h5>
                <p>${catAge}</p>
                </div>`;
  }
  return finalHtml;
}

const catList = createCats(cats);
catContainer.innerHTML = catList;
createCats(cats);
