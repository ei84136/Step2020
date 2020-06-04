// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings = [
    'Run!',
    'Don\'t blink.',
    'I\'m planning on dyeing my hair pink.',
    'I have a cat named Gracie.',
    'It\'s dangerous to go alone! Take this.',
    'You want weapons? We\'re in a library! Books! The best weapons in the world!',
  ];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function fetchTest() {
  fetch('/data').then(response => response.json()).then((messages) => {
    console.log(messages);
    const commentListElement = document.getElementById('helloContainer');
    commentListElement.innerHTML = '';
    messages.forEach(element => {
      commentListElement.appendChild(
        createListElement('Comment: ' + element.message));
    });
  });
}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
