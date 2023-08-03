function categListStats() {
  const categList = document.querySelector("#categories");
  const liArr = [...categList.children];
  console.log(`Number of categories: ${categList.children.length}`);
  liArr.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  });
}
categListStats();
