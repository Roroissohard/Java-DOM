const bookList = document.querySelector('#book-list');

console.log('the parent next sibling is', bookList.nextSibling);
console.log('the parent next element sibling is', bookList.nextElementSibling);

console.log('the parent previous sibling is', bookList.previousSibling);
console.log('the parent previous element sibling', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML +='<br />Too cool for everyone else!';
