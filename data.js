/* exported newData */

var newData = [];
var previousDataJSON = localStorage.getItem('planner-storage');
if (previousDataJSON !== null) {
  newData = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(newData);
  localStorage.setItem('planner-storage', dataJSON);

});
