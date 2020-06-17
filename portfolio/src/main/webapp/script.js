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

google.charts.load('current', {'packages': ['sankey']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'From');
  data.addColumn('string', 'To');
  data.addColumn('number', 'Weight');
  data.addRows([
    ['Focused', 'Pop', 3],
    ['Focused', 'Show Tunes', 1],
    ['Focused', 'Classical', 0],
    ['Focused', '"Pop Punk"', 5],
    ['Focused', 'Emo', 0],
    ['Focused', 'other', 1],
    ['Energized', 'Pop', 5],
    ['Energized', 'Show Tunes', 5],
    ['Energized', 'Classical', 0],
    ['Energized', '"Pop Punk"', 5],
    ['Energized', 'Emo', 1],
    ['Energized', 'other', 1],
    ['Tired', 'Pop', 1],
    ['Tired', 'Show Tunes', 1],
    ['Tired', 'Classical', 5],
    ['Tired', '"Pop Punk"', 0],
    ['Tired', 'Emo', 2],
    ['Tired', 'other', 3],
    ['Happy', 'Pop', 5],
    ['Happy', 'Show Tunes', 5],
    ['Happy', 'Classical', 5],
    ['Happy', '"Pop Punk"', 5],
    ['Happy', 'Emo', 5],
    ['Happy', 'other', 5],
    ['Upset', 'Pop', 2],
    ['Upset', 'Show Tunes', 2],
    ['Upset', 'Classical', 1],
    ['Upset', '"Pop Punk"', 2],
    ['Upset', 'Emo', 2],
    ['Upset', 'other', 1],
    ['Indecisive', 'Pop', 3],
    ['Indecisive', 'Show Tunes', 0],
    ['Indecisive', 'Classical', 2],
    ['Indecisive', '"Pop Punk"', 4],
    ['Indecisive', 'Emo', 2],
    ['Indecisive', 'other', 2],
    ['Contemplative', 'Pop', 2],
    ['Contemplative', 'Show Tunes', 1],
    ['Contemplative', 'Classical', 4],
    ['Contemplative', '"Pop Punk"', 3],
    ['Contemplative', 'Emo', 2],
    ['Contemplative', 'other', 1],
  ]);

  var options = {
    width: 500,
    height: 800,
  };

  var chart = new google.visualization.Sankey(document.getElementById('moods-music-sankey'));
  chart.draw(data, options);
}
