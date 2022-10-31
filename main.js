/* global newData */

var addEntry = document.querySelector('.add-entry');
var modal = document.querySelector('#modal');
var submit = document.querySelector('.submit-button');
var form = document.querySelector('#forms');
var table = document.querySelector('table');

addEntry.addEventListener('click', handleClick);
form.addEventListener('submit', handleSubmit);
submit.addEventListener('click', handleClickSubmit);

function handleClick(event) {
  if (event.target.tagName === 'BUTTON') {
    modal.className = 'container-modal';
  }
}
function handleClickSubmit(event) {
  if (event.target.className === 'submit-button') {
    modal.className = 'container-modal hidden';
  }
}
function handleSubmit(event) {
  event.preventDefault();
  var data = {
    day: form.elements.week.value,
    time: form.elements.time.value,
    description: form.elements.description.value
  };

  newData.push(data);
  table.append(tableEntry(data));
  form.reset();
}

for (var i = 0; i < newData.length; i++) {
  var $data = tableEntry(newData[i]);
  table.appendChild($data);
}

function tableEntry(data) {
  var tableBody = document.createElement('tbody');
  var inputData = document.createElement('tr');
  var timeEntry = document.createElement('td');
  timeEntry.setAttribute('class', 'inputTime');
  timeEntry.textContent = data.time;
  var $description = document.createElement('td');
  $description.textContent = data.description;
  $description.setAttribute('class', 'inputDesc');
  inputData.appendChild(timeEntry);
  inputData.appendChild($description);
  tableBody.appendChild(inputData);
  return tableBody;
}
/*      <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123</td>
              <td>123</td>
            </tr>
          </tbody>
        </table> */
