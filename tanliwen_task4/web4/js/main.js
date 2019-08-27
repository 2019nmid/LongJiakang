/*javascript*/
window.onload = function(){
    mv.app.tochange();
    mv.app.toregiter();
    mv.app.tologin();
};
var mv = {};
mv.tools = {};
mv.ui = {};
mv.ui.textchange = function(obj,str){
    obj.onfocus = function(){
        if(this.value == str){
            this.value ='';
        }
    };
};
mv.ui.ismail = function(str){
    var s = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return s.test(str);
};
mv.app = {};
mv.app.tochange = function(){
    var oLogin = document.querySelector('#login');
    var oRegiter = document.querySelector('#regiter');
    var oLogin_btn2 = document.querySelector('.login_btn2');
    var oRegiter_btn1 = document.querySelector('.regiter_btn1');

    var oLogin_p1 = document.querySelector('.login_p1 span');
    var oLogin_p2 = document.querySelector('.login_p2 span');
    var oRegiter_p1 = document.querySelector('.regiter_p1 span');
    var oRegiter_p2 = document.querySelector('.regiter_p2 span');
    var oRegiter_p3 = document.querySelector('.regiter_p3 span');
    var oRegiter_p4 = document.querySelector('.regiter_p4 span');

    var oLogin_text1 = document.querySelector('.login_text1');
    var oLogin_text2 = document.querySelector('.login_text2');
    var oRegiter_text1 = document.querySelector('.regiter_text1');
    var oRegiter_text2 = document.querySelector('.regiter_text2');
    var oRegiter_text3 = document.querySelector('.regiter_text3');
    var oRegiter_text4 = document.querySelector('.regiter_text4');
    
    var oLogin_a = document.querySelector('.login_a span');
    var oRegiter_a = document.querySelector('.regiter_a span');

    mv.ui.textchange(oLogin_text1,"请输入邮箱");
    mv.ui.textchange(oLogin_text2,"请输入密码");
    mv.ui.textchange(oRegiter_text1,"请输入用户名");
    mv.ui.textchange(oRegiter_text2,"请输入密码");
    mv.ui.textchange(oRegiter_text3,"请再次输入密码");
    mv.ui.textchange(oRegiter_text4,"请输入邮箱");
    oLogin_text2.onmousedown = function(){
        oLogin_text2.type = 'text';
    };
    oLogin_text2.onmouseup = function(){
        oLogin_text2.type = 'password';
    };
    oRegiter_text2.onmousedown = function(){
        oRegiter_text2.type = 'text';
    };
    oRegiter_text2.onmouseup = function(){
        oRegiter_text2.type = 'password';
    };
    oRegiter_text3.onmousedown = function(){
        oRegiter_text3.type = 'text';
    };
    oRegiter_text3.onmouseup = function(){
        oRegiter_text3.type = 'password';
    };
    oLogin_a.onclick = function(){
        oLogin.style.display = ('none');
        oRegiter.style.display = ('block');
    };
    oRegiter_a.onclick = function(){
        oLogin.style.display = ('block');
        oRegiter.style.display = ('none');
    };
    oLogin_btn2.onclick = function (){
        oLogin.style.display = ('none');
        oRegiter.style.display = ('block');
    }
    oRegiter_btn1.onclick = function (){
        oLogin.style.display = ('block');
        oRegiter.style.display = ('none');
    }
    oLogin_text1.onblur = function(){
        if(!oLogin_text1.value){
            oLogin_p1.innerHTML = '&nbsp;&nbsp;邮箱不能为空';
            oLogin_p1.style.color = 'red';
            oLogin_p1.style.fontSize = 13 + 'px';
            oLogin_p1.style.lineHeigh = 13 + 'px';
        }else if(!mv.ui.ismail(oLogin_text1.value)){
            oLogin_p1.innerHTML = '&nbsp;&nbsp;邮箱格式不符合要求';
            oLogin_p1.style.color = 'red';
            oLogin_p1.style.fontSize = 13 + 'px';
            oLogin_p1.style.lineHeigh = 13 + 'px';
        }else{
            oLogin_p1.innerHTML = '&nbsp;&nbsp;ok';
            oLogin_p1.style.color = 'green';
            oLogin_p1.style.fontSize = 13 + 'px';
            oLogin_p1.style.lineHeigh = 13 + 'px';
        }   
    };
    oLogin_text2.onblur = function(){
        if(!oLogin_text2.value){
            oLogin_p2.innerHTML = '&nbsp;&nbsp;密码不能为空';
            oLogin_p2.style.color = 'red';
            oLogin_p2.style.fontSize = 13 + 'px';
            oLogin_p2.style.lineHeigh = 13 + 'px';
        }else{
            oLogin_p2.innerHTML = '&nbsp;&nbsp;ok';
            oLogin_p2.style.color = 'green';
            oLogin_p2.style.fontSize = 13 + 'px';
            oLogin_p2.style.lineHeigh = 13 + 'px';
        }    
    };
    oRegiter_text1.onblur = function(){
        if(!oRegiter_text1.value){
            oRegiter_p1.innerHTML = '&nbsp;&nbsp;用户名不能为空';
            oRegiter_p1.style.color = 'red';
            oRegiter_p1.style.fontSize = 13 + 'px';
            oRegiter_p1.style.lineHeigh = 13 + 'px';
        }else{
            oRegiter_p1.innerHTML = '&nbsp;&nbsp;ok';
            oRegiter_p1.style.color = 'green';
            oRegiter_p1.style.fontSize = 13 + 'px';
            oRegiter_p1.style.lineHeigh = 13 + 'px';
        }    
    };
    oRegiter_text2.onblur = function(){
        if(!oRegiter_text2.value){
            oRegiter_p2.innerHTML = '&nbsp;&nbsp;密码不能为空';
            oRegiter_p2.style.color = 'red';
            oRegiter_p2.style.fontSize = 13 + 'px';
            oRegiter_p2.style.lineHeigh = 13 + 'px';
        }else{
            oRegiter_p2.innerHTML = '&nbsp;&nbsp;ok';
            oRegiter_p2.style.color = 'green';
            oRegiter_p2.style.fontSize = 13 + 'px';
            oRegiter_p2.style.lineHeigh = 13 + 'px';
        }    
    };
    oRegiter_text3.onblur = function(){
        if(oRegiter_text3.value != oRegiter_text2.value){
            oRegiter_p3.innerHTML = '&nbsp;&nbsp;两次密码输入不一致';
            oRegiter_p3.style.color = 'red';
            oRegiter_p3.style.fontSize = 13 + 'px';
            oRegiter_p3.style.lineHeigh = 13 + 'px';
        }else{
            oRegiter_p3.innerHTML = '&nbsp;&nbsp;ok';
            oRegiter_p3.style.color = 'green';
            oRegiter_p3.style.fontSize = 13 + 'px';
            oRegiter_p3.style.lineHeigh = 13 + 'px';
        }    
    };
    oRegiter_text4.onblur = function(){
        if(!oRegiter_text4.value){
            oRegiter_p4.innerHTML = '&nbsp;&nbsp邮箱不能为空';
            oRegiter_p4.style.color = 'red';
            oRegiter_p4.style.fontSize = 13 + 'px';
            oRegiter_p4.style.lineHeigh = 13 + 'px';
        }else if(!mv.ui.ismail(oRegiter_text4.value)){
            oRegiter_p4.innerHTML = '&nbsp;&nbsp;邮箱格式不符合要求';
            oRegiter_p4.style.color = 'red';
            oRegiter_p4.style.fontSize = 13 + 'px';
            oRegiter_p4.style.lineHeigh = 13 + 'px';
        }else{
            oRegiter_p4.innerHTML = '&nbsp;&nbsp;ok';
            oRegiter_p4.style.color = 'green';
            oRegiter_p4.style.fontSize = 13 + 'px';
            oRegiter_p4.style.lineHeigh = 13 + 'px';
        }    
    };



};
mv.app.toregiter = function(){
    document.querySelector('.regiter_btn3').onclick = function(){
        var oLogin = document.querySelector('#login');
        var oRegiter = document.querySelector('#regiter');

        var oRegiter_text1 = document.querySelector('.regiter_text1').value;
        var oRegiter_text2 = document.querySelector('.regiter_text2').value;
        var oRegiter_text3 = document.querySelector('.regiter_text3').value;
        var oRegiter_text4 = document.querySelector('.regiter_text4').value;
        var oRegiter_btn3 = document.querySelector('.regiter_btn3');

        var oLogin_text1 = document.querySelector('.login_text1');
        var oLogin_text2 = document.querySelector('.login_text2');
    
        var name = oRegiter_text1;
        var mail = oRegiter_text4;
        var psw = oRegiter_text2;
        var repsw = oRegiter_text3;
        var xhr;
        if(!name || name == "请输入用户名"){
            alert("用户名为空，请输入用户名");
        }else if(!mail || mail == "请输入邮箱"){
            alert("邮箱为空，请输入邮箱");
        }else if(!psw || psw == "请输入密码"){
            alert("密码为空，请输入密码");
        }else if(!repsw || repsw != psw){
            alert("两次输入密码不一致，请重新输入");
        }else if(!mv.ui.ismail(mail)){
            alert("邮箱格式不符合要求");
        }else{
            if(window.XMLHttpRequest){
                xhr = new XMLHttpRequest();
            }else{
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        var s = xhr.responseText;
                        var jsonObj = eval("("+s+")");
                        console.log(jsonObj);
                        if(jsonObj[0].status){
                            alert("恭喜你注册成功，即将为你转跳登录页面");
                            oLogin.style.display = ("block");
                            oRegiter.style.display = ("none");
                            oLogin_text1.value = mail;
                            oLogin_text2.value = psw;
                            oLogin_text2.type = 'password';
                        }else{
                            alert("未知错误");
                        }
                    }else{
                        alert(xhr.status);
                    }  
                }
            };
            //alert(oRegiter_text4);
            xhr.open("GET", "http://www.ljhhhx.com:8080/Test01/Regiter?userName=" + name + "&userMail=" + mail + "&userPsw=" + psw, true);
            xhr.send();
        }      
    };
};
mv.app.tologin = function(){
    document.querySelector('.login_btn3').onclick = function(){
        var oLogin_text1 = document.querySelector('.login_text1');
        var oLogin_text2 = document.querySelector('.login_text2');
        var oLogin_btn3 = document.querySelector('.login_btn3');

        var mail = oLogin_text1.value;
        var psw = oLogin_text2.value;
        //console.log(oLogin_btn3);
    
        var xhr;
        if(!mail || mail == "请输入邮箱"){
            alert("邮箱为空，请输入邮箱");
        }else if(!psw || psw == "请输入密码"){
            alert("密码为空，请输入密码");
        }else if(!mv.ui.ismail(mail)){
            alert("邮箱格式不符合要求");
        }else{
            if(window.XMLHttpRequest){
                xhr = new XMLHttpRequest();
            }else{
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        var s = xhr.responseText;
                        var jsonObj = eval("("+s+")");
                        if(jsonObj[0].status){
                            alert("恭喜你登录成功");
                        }else{
                            alert("邮箱不存在或邮箱密码输入错误");
                        }
                        console.log(jsonObj);
                    }else{
                        alert(xhr.status);
                    }
                    
                }
            };
            //alert(mail);
            xhr.open("GET", "http://www.ljhhhx.com:8080/Test01/Login?userMail=" + mail + "&userPsw=" + psw, true);
            xhr.send();
        } 
    };
};