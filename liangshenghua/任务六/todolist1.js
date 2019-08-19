(function (){
const listDom = document.querySelector('.navcrn-ipt');
const listOl = document.querySelector('.mid-ol');
const listUl = document.querySelector('.mid-ul');
 
const btnDom = document.getElementById('addbtn');
const midCtn = document.querySelector('.ctn-middle');


function addList(){

    let iptCheDom = document.createElement('input');
    iptCheDom.setAttribute('type', 'checkbox');
    iptCheDom.classList.add('checkdom');

    let btn = document.createElement('BUTTON');
    btn.innerHTML = 'DEL';
    btn.classList.add('delbtn');
    let node = document.createElement('LI');
    let value = document.createTextNode(listDom.value);

    node.appendChild(iptCheDom);
    node.appendChild(value);
    node.appendChild(btn);
    listDom.value = '';
    listOl.appendChild(node);

    function handleDelTodo(e){
        let ol = e.target.parentNode.parentNode;
        let currLi = e.target.parentNode;
        ol.removeChild(currLi);       
    }
    btn.addEventListener('click',  handleDelTodo);

}
btnDom.onclick = function(){
    if( listDom.value.length == 0){
        alert('输入不能为为0');
       return 0;
    }
    else{
        addList();
        
    }
   
}


midCtn.addEventListener('click',function(e) {
    if(e.target.nodeName.toLowerCase() === 'input'){
        const li = e.target.parentNode;
        const cnode = li.cloneNode(true);

        if(li.parentNode.className === 'mid-ol' &&  e.target.checked){
            listUl.appendChild(cnode);
            listOl.removeChild(li)
        }else {
            listOl.appendChild(cnode);
            listUl.removeChild(li);
        }
    }
    if (e.target.nodeName.toLowerCase() === 'button'){
        const ol = e.target.parentNode.parentNode;
        const currLi = e.target.parentNode;
        ol.removeChild(currLi);
      
    }
}

)
})();