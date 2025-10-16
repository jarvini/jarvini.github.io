var r = document.querySelector(':root');

function setWidth(TNW) {
  r.style.setProperty(TNW, ((Math.random()*35)+10) +'px');
}
setWidth('--T1W')
setWidth('--T2W')
setWidth('--T3W')
setWidth('--T4W')
setWidth('--T5W')
setWidth('--T6W')
setWidth('--T7W')
setWidth('--T8W')
setWidth('--T9W')
setWidth('--T10W')

function setDistance(TND) {
  r.style.setProperty(TND, ((Math.random()*10)) +'vw');
}
setDistance('--T1D')
setDistance('--T2D')
setDistance('--T3D')
setDistance('--T4D')
setDistance('--T5D')
setDistance('--T6D')
setDistance('--T7D')
setDistance('--T8D')
setDistance('--T9D')
setDistance('--T10D')

function setColor(TNC) {
  r.style.setProperty(TNC, ((Math.random()*80)+110));
}
setColor('--T1C')
setColor('--T2C')
setColor('--T3C')
setColor('--T4C')
setColor('--T5C')
setColor('--T6C')
setColor('--T7C')
setColor('--T8C')
setColor('--T9C')
setColor('--T10C')