function fetchComments() {
  fetch('/data').then(response => response.json()).then((comments) => {
    const commentListElement = document.getElementById('displayComments');
    commentListElement.innerHTML = '';
    comments.forEach(element => {
      commentListElement.appendChild(
        createListElement('Comment: ' + element));
    });
  });
}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
