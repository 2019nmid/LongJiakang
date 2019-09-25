
const add = document.querySelector('.add-item');
add.addEventListener('submit', addItem);

var items = JSON.parse(localStorage.getItem('item')) || [];
function addItem(e) {
    e.preventDefault();  
    var obj = new Date;
    var hour = obj.getHours();
    var min = obj.getMinutes();
    const text = (this.querySelector('[name=item]')).value + "      " + hour + ":" + min;
    //text = text;
    const item = {
        text,
        done: false
    };
    items.push(item); 
    populateList(items, container);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

const container = document.querySelector('.item');
function populateList(plate, plateList) {
    plateList.innerHTML = plate.map((item, i) => {
        return `
        <li class="item-li">
            <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''}>
            <lable class="item-text" for="item${i}">${item.text}</lable>
            <input type="button" value="删除" class="delete-item" >
        </li>
    `
    }).join('');
    
}

function deleteDone(e) {
    const msg = '是否确定删除该事件?'
    if (!e.target.matches("input[type='button']")) return;
    const el = e.target;
    const index = el.dataset.index;
    if (confirm(msg)) {
        items.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, container);
    } else {
        return;
    }
}
container.addEventListener('click', deleteDone);

function toggleDone(e) {
    if (!e.target.matches("input[type='checkbox']")) return; 
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, container);
}
container.addEventListener('click', toggleDone);