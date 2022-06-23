document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#delete-all');
  button.addEventListener('click', handleDeleteAll);
});

const handleFormSubmit = function (event){
  event.preventDefault();
  const readingListItem = document.createElement('li');
  readingListItem.textContent = `${this.title.value}\n ${this.author.value}\n ${this.category.value}`;
  const list = document.querySelector('#reading-list');
  list.appendChild(readingListItem); 
  this.reset();
};

const handleDeleteAll = function (event){
// event.preventDefault();
// let list = document.querySelector('#reading-list');
// for (item of list) {
//   list.pop();
// };
  const list = document.querySelector('#reading-list');
  list.innerHTML = "";
};
