import './style.css'
import './componets/comps.css'


const wrap = document.querySelector('.wrap');
const container = document.querySelector('.container');
const inputField = document.querySelector('.input-field');
const btn = document.querySelector('.btn');

function addItem ()
{
// btn.addEventListener('click', ()=>{
  // add wrap and text
  let newdiv = document.createElement('div');
  let newWrap = document.createElement('div');
  newdiv.textContent = inputField.value;
  newWrap.appendChild(newdiv);
  inputField.value = ''
  // add remove btn
  let rmBtn = document.createElement('button');
  rmBtn.textContent = 'remove';
  rmBtn.classList = 'removeBtn'
  newWrap.appendChild(rmBtn);
  wrap.appendChild(newWrap)


  // deleted items
  rmBtn.addEventListener('click', ()=>{
    rmBtn.parentElement.remove();
  })

// })
}

// for enter btn
document.addEventListener('keydown', (e)=>{
   if (e.keyCode === 13 && inputField.value !== '') 
   {
    addItem();
   }
})




