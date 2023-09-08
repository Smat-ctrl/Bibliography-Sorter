const numOfInputs = document.querySelector('#amount')
const addBtn = document.querySelector('#add')
const insert = document.querySelector('#insert_area')
const _inputs = [] 

function add_input () {
    const num = parseInt(numOfInputs.value);
    if (!isNaN(num)) {
        insert.innerHTML = ''; 
        addBtn.remove();
        for (let i = 0; i < num; i++) {
            const inputElement = document.createElement('input')
            _inputs.push(inputElement) 
            insert.appendChild(inputElement)
        }
    }
}

addBtn.addEventListener('click', add_input);

function add_array () {

    for (let i = 0; i < _inputs.length; i++) {
        console.log(_inputs[i].value)
    }

}
