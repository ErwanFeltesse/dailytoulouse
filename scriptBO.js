let title = document.getElementById("title");
let introduction = document.getElementById("introduction");
let content = document.getElementById("content");
let image = document.getElementById("image");
let author = document.getElementById("author");
let date = document.getElementById("date");
let bigCategory = document.getElementById("bigCategory");
let subCategory = document.getElementById("subCategory");
let numArticle = document.getElementById("numArticle");
function addToLocalStorage() {
  let value = {
    title: title.value,
    introduction: introduction.value,
    content: content.value,
    image: image.value,
    author: author.value,
    date: date.value,
    bigCategory: bigCategory.value,
    subCategory: subCategory.value,
    numArticle: numArticle.value
    //Ajouter ici les nouvelle propriété de l'article
  };

  localStorage.setItem(numArticle.value, JSON.stringify(value));
  title.value = "";
  introduction.value = "";
  content.value = "";
  image.value = "";
  author.value = "";
  date.value = "";

  publication();
}

function publication() {
  const template = document.querySelector("#article-template");
  const key = localStorage.getItem(localStorage.length - 1); //Permet de selectionner la dernière clés existante, la dernière enregistré
  const valueTraduction = JSON.parse(key);
  const articleData = {
    title: valueTraduction.title,
    introduction: valueTraduction.introduction,
    content: valueTraduction.content,
    image: valueTraduction.image, //Att
    author: valueTraduction.author,
    date: valueTraduction.date,
    bigCategory: valueTraduction.bigCategory, //Att
    subCategory: valueTraduction.subCategory, //Att
    numArticle: valueTraduction.numArticle //Att
    //Ajouter ici les nouvelle propriété de l'article
  };
  const parentDiv = document.getElementById("parentElement");
  const article = template.content.cloneNode(true);

  article.querySelector(".articleTitle").textContent = articleData.title;
  article.querySelector(".textArticle").textContent = articleData.introduction;
  article.querySelector(".textleft").textContent = articleData.content;
  article.querySelector(
    ".AuthorAndDate"
  ).textContent = `${articleData.author} | ${articleData.date}`;
  article.querySelector(".imgArticle").setAttribute("src", articleData.image);
  article
    .querySelector(".articleLink")
    .setAttribute("id", `Article${articleData.numArticle}`);
  article
    .querySelector(`#Article${articleData.numArticle}`)
    .setAttribute("data-big-category", articleData.bigCategory);
  article
    .querySelector(`#Article${articleData.numArticle}`)
    .setAttribute("data-sub-category", articleData.subCategory);
  parentDiv.appendChild(article);

  const firstArticle = document.querySelector(".articleLink");
  const lastArticle = document.querySelector("#parentElement").lastElementChild;
  firstArticle.parentElement.insertBefore(lastArticle, firstArticle);
}

function loadLocalStorage() {
  for (let i = 0; i < localStorage.length; i = i + 1) {
    const template = document.querySelector("#article-template");
    const key = localStorage.getItem(i); //Permet de selectionner la dernière clés existante, la dernière enregistré
    const valueTraduction = JSON.parse(key);
    const articleData = {
      title: valueTraduction.title,
      introduction: valueTraduction.introduction,
      content: valueTraduction.content,
      image: valueTraduction.image,
      author: valueTraduction.author,
      date: valueTraduction.date,
      bigCategory: valueTraduction.bigCategory,
      subCategory: valueTraduction.subCategory,
      numArticle: valueTraduction.numArticle
      //Ajouter ici les nouvelles propriété de l'article Veiller a ce que ce soit les même qu'au dessus
    };
    const parentDiv = document.getElementById("parentElement");
    const article = template.content.cloneNode(true);

    article.querySelector(".articleTitle").textContent = articleData.title;
    article.querySelector(".textArticle").textContent =
      articleData.introduction;
    //article.querySelector(".textleft").textContent = articleData.content;
    article.querySelector(
      ".AuthorAndDate"
    ).textContent = `${articleData.author} | ${articleData.date}`;
    article.querySelector(".imgArticle").setAttribute("src", articleData.image);
    article
      .querySelector(".articleLink")
      .setAttribute("id", `Article${articleData.numArticle}`);
    article
      .querySelector(`#Article${articleData.numArticle}`)
      .setAttribute("data-big-category", articleData.bigCategory);
    article
      .querySelector(`#Article${articleData.numArticle}`)
      .setAttribute("data-sub-category", articleData.subCategory);
    parentDiv.appendChild(article);
    const firstArticle = document.querySelector(".articleLink");
    const lastArticle = document.querySelector("#parentElement")
      .lastElementChild;
    firstArticle.parentElement.insertBefore(lastArticle, firstArticle);
  }
}
loadLocalStorage();
