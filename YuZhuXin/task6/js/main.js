var input = document.getElementById("input");
//红色的提示
var main_hint = document.getElementsByClassName("main_hint")[0];
//主体部分
var main_content = document.getElementById("main_content");
//添加的部分
var main_p = main_content.getElementsByTagName("p");
//大的按钮
var btn_remove_bg = document.getElementById("btn_remove_bg");
//多选和取消
var choice = document.getElementById("choice");
var cancel = document.getElementById("cancel");
//多选框
var main_check = document.getElementsByName('check');

window.onload = function(){
	show_data();
}

//增加方法
function add() {
	var input_value = input.value;
	if(input_value.trim() == "") {
		alert("请输入内容");
		return;
	}
	localStorage.setItem("Memo" + input_value,input_value);
	//input_value = $("#input").val();
	var content = document.createElement("p");
	
	if(choice.style.display == "none") {
		content.innerHTML = getNode("show","Memo" + input_value);
	} else {
		content.innerHTML = getNode("hide","Memo" + input_value);
	}
	
	show_animation(main_content.appendChild(content));
	input.value = "";
	main_hint_change();
}
//显示数据方法
function show_data(){
	for(var i = 0;i<localStorage.length;i++){
		var content = document.createElement("p");
		if(choice.style.display == "none") {
			content.innerHTML = getNode("show",localStorage.key(i));
		} else {
			content.innerHTML = getNode("hide",localStorage.key(i));
		}		
		//main_content.appendChild(content);
		show_animation(main_content.appendChild(content));
	}
	main_hint_change();
}

//节点的封装
function getNode(flag,item){
	return "<input type='checkbox' class='"+flag+" checkbox' name='check'/>" + localStorage.getItem(item) +
				"<button class='btn_remove' onclick='remove(this)'>删除</button>" +
				"<button class='btn_update' onclick='update(this)'>修改</button>";
}

/*红色提示，显示与隐藏切换*/
function main_hint_change() {
	if(main_content.childElementCount > 1) {
		main_hint.className = "hide main_hint";
	} else {
		main_hint.className = "show main_hint";
	}
}
//单个删除
function remove(obj) {
	obj.disabled = true;
	localStorage.removeItem("Memo" + obj.previousSibling.data);
	hide_animation(obj.parentNode);
	//obj.parentNode.parentNode.removeChild(obj.parentNode);
	main_hint_change();
}
//修改
function update(obj){
	var f = prompt("请输入修改的信息",obj.previousSibling.previousSibling.data);
	if(f){
		localStorage.removeItem("Memo" + obj.previousSibling.previousSibling.data)
		localStorage.setItem("Memo" + f ,f);
	}else{
		return
	}
	location.reload();
}
//多选，取消切换
function change(status) {
	choice.style.display = status ? "none" : "block";
	cancel.style.display = status ? "block" : "none";
	btn_remove_bg.style.display = status ? "block" : "none";
	for(var i = 0; i < main_check.length; i++) {
		main_check[i].className = status ? 'show checkbox' : 'hide checkbox';
	}
}
//批量删除
function remvoe_check() {
	for(var i = 0; i < main_check.length; i++) {
		if(main_check[i].checked) {
			remove(main_check[i]);
			i--;
		}
	}
	main_hint_change();
}
//淡入淡出

function show_animation(obj){
	var num = 0;
	obj.style.opacity = num;
	var st = setInterval(function(){
		num ++;
		obj.style.opacity = num/10;
		if(num>=10){
			clearInterval(st);
		}
	},80)
}


function hide_animation(obj){
	var num = 10;
	var st = setInterval(function(){
		num --;
		obj.style.opacity = num/10;
		if(num<=0){
			obj.parentNode.removeChild(obj);
			main_hint_change();
			clearInterval(st);
		}
	},80)
}