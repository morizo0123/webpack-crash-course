function component() {
  const elem = document.createElement('div');
  const array = ['hello', 'webpack'];
  elem.innerHTML = _.join(array, ' ');
  return elem;
}

document.body.appendChild(component());