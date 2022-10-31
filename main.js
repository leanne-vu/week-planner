var addEntry = document.querySelector('.add-entry');
var modal = document.querySelector('#modal');
var submit = document.querySelector('.submit-button');
var form = document.querySelector('#forms');
var datastart = document.querySelector('.data-start');
var table= document.querySelector('table');

addEntry.addEventListener('click', handleClick);
submit.addEventListener('submit', handleSubmit);

function handleClick(event) {
  if (event.target.tagName === 'BUTTON') {
    modal.className = 'container-modal';
  }

}

function handleSubmit(event) {
  event.preventDefault();
  if (event.target.className === '.submit-button') {
    modal.class = 'container-modal hidden';
  }

  var data = {
    day: form.elements.week.value,
    time: form.elements.time.value,
    description: form.elements.description.value
  };

  newData.push(data);
}

function tableEntry(event) {
  var tableBody = document.createElement('tbody')
  var inputData = document.createElement('tr');
  var timeEntry = document.createElement('td');
  timeEntry.setAttribute('class', 'input-time');
  var $description = document.createAttribute('td');
  $description.setAttribute('class', 'input-desc');
  inputData.appendChild(timeEntry, $description);
  tableBody.appendChild(inputData);
  table.appendChild(tableBody);
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

}
