
function toggleLegend() {
  const legend = document.getElementById('legend');
  legend.style.display = (legend.style.display === 'none') ? 'block' : 'none';
}
function updateMap() {
  const selectedDate = document.getElementById('date-select').value;
  const mapImage = document.getElementById('drought-map');
  mapImage.src = 'images/maps/' + selectedDate + '.png';
}
