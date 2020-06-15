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

function fetchCommentsTranslate() {
  const languageCode = document.getElementById('languages').value;
  console.log(languageCode);
  // const params = new URLSearchParams();
  // params.append('languageCode', languageCode);
//params.toString()
  fetch('/data?languageCode=' + languageCode).then(response => response.json()).then((comments) => {
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

function deleteComments() {
  fetch('/delete-data', {method: 'POST'}).then(fetchComments);
}