const tabs = document.querySelectorAll('.occurs');
const occurrence = document.querySelector('.occurrence');
// let work;
// let play;

const request = async function(){
  const response = await fetch('./data.json');
  const data = await response.json();
  console.log(data)
  work = data[0];
  play = data[1];
  console.log(data[1])
}

request();


occurrence.addEventListener('click',function(e){
  const clicked = e.target;
  const {timeframes} = work;
  if ( clicked.classList.contains('day') ){
      document.querySelector('.current').textContent = timeframes.daily.current + 'hrs';
      document.querySelector('.previous').textContent = `Yesterday - ${timeframes.daily.previous}hrs` 
    } else if ( clicked.classList.contains('week') ) {
      document.querySelector('.current').textContent = timeframes.weekly.current + 'hrs';
      document.querySelector('.previous').textContent = `Last week - ${timeframes.weekly.previous}hrs` 
    } else {
      document.querySelector('.current').textContent = timeframes.monthly.current + 'hrs';
      document.querySelector('.previous').textContent = `Last month - ${timeframes.monthly.previous}hrs` 
    }
    
});




tabs.forEach(tab =>
  tab.addEventListener('click', e => {

    // remove all active tab
    tabs.forEach(tab => tab.classList.remove('active'));

    // set active tab when tab clicked, then load content of the tab
    tab.classList.add('active');
    loadContent(tab);
  })
);
