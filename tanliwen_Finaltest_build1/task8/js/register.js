window.onload = function(){
    mv.app.toregister();
    document.onselectstart = function(){
        return false;
    }

}





var mv = {};
mv.tools = {};
mv.tools.tomoveup = function(obj1,obj2){
    var speed = 0;
    var Top1 = obj1.offsetTop;
    var Top2 = obj2.offsetTop;
    clearInterval(time);
    var time = setInterval(function(){
        Top1 = obj1.offsetTop;
        Top2 = obj2.offsetTop;
        if(speed == 10){
            clearInterval(time);
            speed = 0;
        }else{
            speed++;
            obj1.style.top = Top1 + 8 + 'px';
            obj2.style.top = Top2 - 2 + 'px';
        }
    },30)
}
mv.tools.tomovedown = function(obj1,obj2){
    var speed = 0;
    var Top1 = obj1.offsetTop;
    var Top2 = obj2.offsetTop;
    clearInterval(time);
    var time = setInterval(function(){
        Top1 = obj1.offsetTop;
        Top2 = obj2.offsetTop;
        if(speed == 10){
            clearInterval(time);
            speed = 0;
        }else{
            speed++;
            obj1.style.top = Top1 - 8 + 'px';
            obj2.style.top = Top2 + 2 + 'px';
        }
    },30)
}






mv.ui = {};






mv.app = {};
mv.app.toregister = function(){
    var oWarning1 = document.querySelector('.register_wraning1');
    var oWarning2 = document.querySelector('.register_wraning2');
    var oSuggest0 = document.querySelector('.register_suggest0');
    var oSuggest1 = document.querySelector('.register_suggest1');
    var oSuggest2 = document.querySelector('.register_suggest2');
    var oSuggest3 = document.querySelector('.register_suggest3');
    var oText1 = document.querySelector('.register_body_text1');
    var oText2= document.querySelector('.register_body_text2');
    var oRegister_qq= document.querySelector('.register_qq');
    var oRegister_qq_div= document.querySelector('.register_qq_div');
    var oLanguage = document.querySelector('.language');
    var oLanguage_div = document.querySelector('.language_div');
    var oDiv1 = document.querySelector('.register_div1');
    var oDiv2 = document.querySelector('.register_div2');
    var oDiv3 = document.querySelector('.register_div3');
    var oDiv4 = document.querySelector('.register_div4');
    var oDiv5 = document.querySelector('.register_div5');
    var oDiv6 = document.querySelector('.register_div6');
    var oDiv7 = document.querySelector('.register_div7');
    var oDiv8 = document.querySelector('.register_div8');
    var oRegister_body_foot_a1 = document.querySelector('.register_body_foot_a1');
    var oRegister_body_foot_a2 = document.querySelector('.register_body_foot_a2');
    var oRegister_body_foot_a3 = document.querySelector('.register_body_foot_a3');
    var oRegister_body_text3 = document.querySelector('.register_body_text3');
    var oRegister_body_text1 = document.querySelector('.register_body_text1');
    var oRegister_body_text2 = document.querySelector('.register_body_text2');
    var oRegister_body_text4 = document.querySelector('.register_body_text4');
    var oRegister_body_text5 = document.querySelector('.register_body_text5');
    var oRegister_body_btn1 = document.querySelector('.register_body_btn1');
    var oRegister_body_btn2 = document.querySelector('.register_body_btn2');
    var oRegister_num = document.querySelector('.register_num');
    var oRegister_country = document.querySelector('.register_country');
    var reg1 = /\s/;
    var reg2 = /[0-9]/;
    var reg3 = /[a-z]/;
    var Ture = 0;
    var oImg = document.querySelector("#img img");
    var b = 1;

    setInterval(function(){
        if(b == 1){
            oImg.src="./img/register/register_img1.png";
            b++;
        }else if(b == 2){
            oImg.src="./img/register/register_img2.png";
            b++;
        }else if(b == 3){
            oImg.src="./img/register/register_img3.png";
            b = 1;
        }       
    }, 3000);



    oRegister_body_text2.onmousedown = function(){
        oRegister_body_text2.type = 'text';
    }
    document.onmouseup = function(){
        oRegister_body_text2.type = 'password';
    }
    oText1.onfocus = function(){
        if(!oText1.value){
            oSuggest0.style.display = ('block');
        }
    }
    oText1.onblur = function(){
        oSuggest0.style.display = ('none');
        if(!oText1.value){
            oWarning1.style.display = ('block');
            oWarning1.innerHTML = "昵称不能为空";
            Ture = 0;
        }else if(oText1.value.length<5){
            oWarning1.style.display = ('block');
            oWarning1.innerHTML = "昵称长度应大于等于5位";
            Ture = 0;
        }
        else{
            oWarning1.style.display = ('none');
            Ture = 1;
        }
    }
    oText2.onfocus = function(){
        if(!oText2.value){
            oSuggest1.style.display = ('block');
            oSuggest2.style.display = ('block');
            oSuggest3.style.display = ('block');
        }
    }
    oText2.onblur = function(){
        oSuggest1.style.display = ('none');
        oSuggest2.style.display = ('none');
        oSuggest3.style.display = ('none');
        if(!oText2.value){
            oWarning2.style.display = ('block');
            oWarning2.innerHTML = "密码不能为空";
            Ture = 0;
        }else if(reg1.test(oText2.value)){
            oWarning2.style.display = ('block');
            oWarning2.innerHTML = "密码不能含有空格";
            Ture = 0;
        }else if(oText2.value.length<8 || oText2.value.length>12){
            oWarning2.style.display = ('block');
            oWarning2.innerHTML = "密码长度应为8-12";
            Ture = 0;
        }else if(!reg2.test(oText2.value) || !reg3.test(oText2.value)){
            oWarning2.style.display = ('block');
            oWarning2.innerHTML = "密码必须包含数字和字母";
            Ture = 0;
        }else{
            oWarning2.style.display = ('none');
            Ture = 1;
        }
    }
    oRegister_qq.onmouseover = function(){
        oRegister_qq_div.style.display = ('block');
    }
    oRegister_qq_div.onmouseover = function(){
        oRegister_qq_div.style.display = ('block');
    }
    oRegister_qq.onmouseout = function(){
        oRegister_qq_div.style.display = ('none');
    }
    oRegister_qq_div.onmouseout = function(){
        oRegister_qq_div.style.display = ('none');
    }
    oLanguage.onmouseover = function(){
        oLanguage_div.style.display = ('block');
        oDiv1.style.display = ('none');
        oDiv2.style.display = ('block');
    }
    oLanguage.onmouseout = function(){
        oLanguage_div.style.display = ('none');
        oDiv2.style.display = ('none');
        oDiv1.style.display = ('block');
    }
    oLanguage_div.onmouseover = function(){
        oLanguage_div.style.display = ('block');
        oDiv1.style.display = ('none');
        oDiv2.style.display = ('block');
    }
    oLanguage_div.onmouseout = function(){
        oLanguage_div.style.display = ('none');
        oDiv2.style.display = ('none');
        oDiv1.style.display = ('block');
    }
    oDiv3.onclick = function(){
        oDiv3.style.display = ('none');
        oDiv4.style.display = ('block');
        oRegister_body_foot_a1.style.display = ('block');
        oRegister_body_foot_a2.style.display = ('block');
        oRegister_body_foot_a3.style.display = ('block');
    }
    oDiv4.onclick = function(){
        oDiv4.style.display = ('none');
        oDiv3.style.display = ('block');
        oRegister_body_foot_a1.style.display = ('none');
        oRegister_body_foot_a2.style.display = ('none');
        oRegister_body_foot_a3.style.display = ('none');
    }
    oRegister_body_text4.onfocus = function(){
        oRegister_num.style.display = ('block');
    }
    oRegister_body_text4.onblur = function(){
        if(!oRegister_body_text4.value){
            oRegister_num.style.display = ('none');
        }
    }
    oRegister_body_text3.onfocus = function(){
        oRegister_country.style.display = ('block');
        oDiv7.style.display = ('none');
        oDiv8.style.display = ('block');
    }
    oDiv7.onclick = function(){
        oRegister_country.style.display = ('block');
        oDiv7.style.display = ('none');
        oDiv8.style.display = ('block');
    }
    oDiv8.onclick = function(){
        oRegister_country.style.display = ('none');
        oDiv7.style.display = ('block');
        oDiv8.style.display = ('none');
    }

    var oRegister_ul = document.querySelector('.register_ul');
    var oLi = oRegister_ul.getElementsByTagName('li');
    for(i=0;i<oLi.length;i++){
        oLi[i].onmouseover = function(){
            this.style.backgroundColor = '#aaaaaa';
        }
        oLi[i].onmouseout = function(){
            this.style.backgroundColor = '#ffffff';
        }
        oLi[i].onclick = function(){
            oRegister_body_text3.value = this.querySelector('.register_li_p2').innerHTML;
            oRegister_country.style.display = ('none');
            oDiv7.style.display = ('block');
            oDiv8.style.display = ('none');
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    ////号码选择

 /*   var top1;
    var top2;
    var oSlip = document.querySelector('#silp');
    var register_div5 = document.querySelector('#register_div5');
    var register_div6 = document.querySelector('#register_div6');
    var oRegister_ul = document.querySelector('.register_ul');
    var oLi = oRegister_ul.getElementsByTagName('li');

    register_div5.onclick = function(){
        top1 = oRegister_ul.offsetTop;
        top2 = oSlip.offsetTop;
        if(top1+80>0 || top2-20<20){
            oRegister_ul.style.top = 0 +'px'
            oSlip.style.top = 20 + 'px';
        }else{
            mv.tools.tomoveup(oRegister_ul,oSlip);
        }
    } 
    register_div6.onclick = function(){
        top1 = oRegister_ul.offsetTop;
        top2 = oSlip.offsetTop;
        if(top1-80<-400 || top2+20>120){
            oRegister_ul.style.top = -400 +'px'
            oSlip.style.top = 120 + 'px';
        }else{
            mv.tools.tomovedown(oRegister_ul,oSlip);
        }
    }
    for(i=0;i<oLi.length;i++){
        oLi[i].onmouseover = function(){
            this.style.backgroundColor = '#aaaaaa';
        }
        oLi[i].onmouseout = function(){
            this.style.backgroundColor = '#ffffff';
        }
        oLi[i].onclick = function(){
            oRegister_body_text3.value = this.querySelector('.register_li_p2').innerHTML;
            oRegister_country.style.display = ('none');
            oDiv7.style.display = ('block');
            oDiv8.style.display = ('none');
        }
    }
    oSlip.onmousedown = function(event1){
        var oldtop1 = oSlip.offsetTop;
        var oldtop2 = oRegister_ul.offsetTop;
        var limit1 = 120 - oldtop1;
        var limit2 = 20 - oldtop1; 
        var y1 = event1.clientY;
        document.onmousemove = function(event2){
            var y2 = event2.clientY;
            changetop = y2 - y1;
            if(changetop<limit2){
                oSlip.style.top = 20 + 'px';
                oRegister_ul.style.top = 0 + 'px';
            }else if(changetop>limit1){
                oSlip.style.top = 120 + 'px';
                oRegister_ul.style.top = -400 + 'px';
            }else{
                oSlip.style.top = changetop + oldtop1 + 0 + 'px';
                oRegister_ul.style.top = -4*changetop + oldtop2 + 0 + 'px';
            }
        }
        document.onmouseup = function(){
            document.onmousemove = null;
        }
    } */

    
    /////////////////////////////////////////////////////////////////////////
    //ajax
    var oRegister_checkbox = document.querySelector('#register_checkbox');
    oRegister_body_btn2.onclick = function(){
        if(Ture){
            if(!oRegister_body_text5.value){
                alert("请输入验证码");
            }else if(!oRegister_checkbox.checked){
                alert("请勾选用户协议")
            }else{
                var name = oRegister_body_text1.value;
                console.log(name);
                var psw = oRegister_body_text2.value;
                console.log(psw);
                var xhr;
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
                                window.location.href="index.html";
                            }else{
                                alert("未知错误");
                            }
                        }else{
                            alert(xhr.status);
                        }  
                    }
                };
                xhr.open("GET",  "http://www.ljhhhx.com:8080/Test01/Regiter?userName=" + name + "&userMail=" + name + "&userPsw=" + psw, true);
                xhr.send();
            }
        }  
    }
}
