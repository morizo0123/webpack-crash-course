import _ from 'lodash'
import Lion from './utilities'
import './style.css'

// 衝突を防ぐ
// import { NAME as NAME_OF_HAM } from './utilities'
// import * as hoge from './utilities'
// import { NAME, NiJou } from './utilities'

// console.log(Lion.say())

function component() {
  const elem = document.createElement('div');
  const array = ['hello', 'webpack', '!!'];
  elem.innerHTML = _.join(array, ' ');
  return elem;
}

document.body.appendChild(component());
document.body.classList.add('haikei');