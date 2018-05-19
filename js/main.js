console.log('connected');
var ul = document.getElementsByTagName('ul')[0]

ul.addEventListener('click', (e) => {
  if (e.target.nodeName === 'LI') {
    return alert(e.target.textContent)
  }
});