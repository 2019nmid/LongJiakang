/*javascript*/
window.onload = function(){
    mv.app.toHead();
    mv.app.toLogo();
    mv.app.tofoot();
    mv.app.tologin();
    mv.app.tobody();
    document.onselectstart = function(){
        return false;
    }

};
var mv = {};
mv.tools = {};
mv.tools.playup = function(obj,a,b){
    var speed = 0;
    var time;
    if(a == 1){
        var old = obj.offsetTop;
    }else if(a == 2){
        var old = obj.offsetLeft;
    }
    clearInterval(time);
    time = setInterval(function(){
        if(speed == 110){
            clearInterval(time);
            speed = 0;
        }else{
            obj.style.opacity = speed/100;
            if(b == 1){
                obj.style.top = -speed/5 + old + 'px';
            }else if(b == 2){
                obj.style.left = -speed/5 + old + 'px';
            }else if(b == 3){
                obj.style.left = speed/5 + old + 'px';
            }
            speed += 10;

        }
    },60)
}
mv.tools.slip = function(obj1,obj2,y){
    var oBody1 = document.querySelector('.login_body1_left3');
    var oBody2 = document.querySelector('.login_body1_left2');
    var oInput1 = document.querySelector('.login_body1_left2_text');
    var oInput2 = document.querySelector('.login_body1_left2_psw');
    var oBody = document.querySelector('#login');
    var changeleft;
    changeleft = 0;
    obj1.onmousedown = function(event1){
        var x1 = event1.clientX;
        document.onmousemove = function(event2){
            var x2 = event2.clientX;
            changeleft = x2 - x1;
            if(changeleft < -20){
                obj1.style.left = 66 + 'px';
                obj2.style.left = 70 + 'px';
            }else if(changeleft > 240){
                obj1.style.left = 326 + 'px';
                obj2.style.left = 330 + 'px';
            }else{
                obj1.style.left = changeleft + 86 + 'px';
                obj2.style.left = changeleft + 90 + 'px';
            }
        }
    }
    document.onmouseup = function(){
        var a = true;
        var b = 0;
        document.onmousemove = null;
        if(changeleft>=204+y && changeleft <=214+y){
            changeleft = 0;
            alert("验证成功！")
            obj1.style.left = 86 + 'px';
            obj2.style.left = 90 + 'px';
            oBody1.style.display = ('none');
            oBody2.style.display = ('block');
            var name = oInput1.value;
            var psw = oInput2.value;
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
                        if(jsonObj[0].status){
                            alert("尊敬的:" + name + "    恭喜您登录成功");
                            oBody.style.display = ('none');
                        }else{
                            alert("用户名不存在或密码输入错误");
                        }
                        console.log(jsonObj);
                    }else{
                        alert(xhr.status);
                    }
                    
                }
            };
            console.log(name)
            console.log(psw)
            xhr.open("GET", "http://www.ljhhhx.com:8080/Test01/Login?userMail=" + name + "&userPsw=" + psw, true);
            xhr.send();
        }else{
            clearInterval(time);
            if(changeleft!=0){
                var Thisx = changeleft;
                if(Thisx <= -20){
                    Thisx = -17;
                }else if(Thisx >= 240){
                    Thisx = 237;
                }
                var time = setInterval(function(){
                    obj1.style.left = Thisx + 86 + (a ? -3 : 3) + 'px';
                    obj2.style.left = Thisx + 90 + (a ? -3 : 3) + 'px';
                    a = !a;
                    b++;
                    if(b >= 6){
                        clearInterval(time);
                    }
                },80)
            }
            changeleft = 0;
            setTimeout(function(){
                obj1.style.left = 86 + 'px'; 
                obj2.style.left = 90 + 'px';
            },1000);
        }
        
    }
}




mv.ui = {};






mv.app = {};
mv.app.toHead = function(){
    var oDa = document.querySelector('.logo_body3');
    var oDb = document.querySelector('.head_btn4');
    var oDc = document.querySelector('.head_btn5');
    var oDd = document.querySelector('.head_btn2');

    oDc.onclick = function(){
        window.open('child.html');
    }
    oDb.onmouseover = function(){
        oDa.style.display = ("block");
    }
    oDb.onmouseout = function(){
        oDa.style.display = ("none");
    }
    oDa.onmouseover = function(){
        oDa.style.display = ("block");
    }
    oDa.onmouseout = function(){
        oDa.style.display = ("none");
    }
    oDd.onclick = function(){
        window.location.href = 'index.html';
    }
}
mv.app.toLogo = function(){
    var oDa = document.querySelector(".logo_body1_btn");
    var oDb = document.querySelector(".logo_body2_btn1");
    var oDc = document.querySelector(".logo_body2_btn2");
    var oDd = document.querySelector(".logo_body2_btn3");
    
    oDa.onmouseover = function(){
        oDa.style.backgroundImage = 'url(./img/logo/logo_img3.png)'
    }
    oDa.onmouseout = function(){
        oDa.style.backgroundImage = 'url(./img/logo/logo_img2.png)'
    }
    oDb.onmouseover = function(){
        oDb.style.backgroundImage = 'url(./img/logo/logo_img7.png)'
    }
    oDb.onmouseout = function(){
        oDb.style.backgroundImage = 'url(./img/logo/logo_img4.png)'
    }
    oDc.onmouseover = function(){
        oDc.style.backgroundImage = 'url(./img/logo/logo_img8.png)'
    }
    oDc.onmouseout = function(){
        oDc.style.backgroundImage = 'url(./img/logo/logo_img5.png)'
    }
    oDd.onmouseover = function(){
        oDd.style.backgroundImage = 'url(./img/logo/logo_img9.png)'
    }
    oDd.onmouseout = function(){
        oDd.style.backgroundImage = 'url(./img/logo/logo_img6.png)'
    }
    oDb.onclick = function(){
        scrollTo(0,0);
    }

    var oDh = document.documentElement.scrollTop;
    if(oDh >= 200)
    {
        oDb.style.display = ("block");
    }else{
        oDb.style.display = ("none");
    }
    document.onscroll = function(){
        oDh = document.documentElement.scrollTop;
        if(oDh >= 200)
        {
            oDb.style.display = ("block");
        }else{
            oDb.style.display = ("none");
        }
    }
}
mv.app.tofoot = function(){
    var oImg1 = document.querySelector(".foot_ul1_a1a_img");
    var oImg2 = document.querySelector('.foot_ul1_a2a_img');
    var oImg3 = document.querySelector('.foot_ul1_a3a_img');
    var oImg4 = document.querySelector('.foot_ul1_a4a_img');
    var oImg5 = document.querySelector(".foot_ul2_a1a_img");
    var oImg6 = document.querySelector('.foot_ul2_a2a_img');
    var oImg7 = document.querySelector('.foot_ul2_a3a_img');
    var oA1 = document.querySelector('.foot_ul1_a1b');
    var oA2 = document.querySelector('.foot_ul1_a2b');
    var oA3 = document.querySelector('.foot_ul1_a3b');
    var oA4 = document.querySelector('.foot_ul1_a4b');
    var oA5 = document.querySelector('.foot_ul2_a1b');
    var oA6 = document.querySelector('.foot_ul2_a2b');
    var oA7 = document.querySelector('.foot_ul2_a3b');

    oImg1.onmouseover = function(){
        oImg1.src = "./img/foot/foot_img1b.png";
        oA1.style.color = '#31c27c';
    }
    oImg1.onmouseout = function(){
        oImg1.src = "./img/foot/foot_img1a.png";
        oA1.style.color = '#7f7f7f';
    }
    oA1.onmouseover = function(){
        oImg1.src = "./img/foot/foot_img1b.png";
        oA1.style.color = '#31c27c';
    }
    oA1.onmouseout = function(){
        oImg1.src = "./img/foot/foot_img1a.png";
        oA1.style.color = '#7f7f7f';
    }
    oImg2.onmouseover = function(){
        oImg2.src = "./img/foot/foot_img2b.png";
        oA2.style.color = '#31c27c';
    }
    oImg2.onmouseout = function(){
        oImg2.src = "./img/foot/foot_img2a.png";
        oA2.style.color = '#7f7f7f';
    }
    oA2.onmouseover = function(){
        oImg2.src = "./img/foot/foot_img2b.png";
        oA2.style.color = '#31c27c';
    }
    oA2.onmouseout = function(){
        oImg2.src = "./img/foot/foot_img2a.png";
        oA2.style.color = '#7f7f7f';
    }
    oImg3.onmouseover = function(){
        oImg3.src = "./img/foot/foot_img3b.png";
        oA3.style.color = '#31c27c';
    }
    oImg3.onmouseout = function(){
        oImg3.src = "./img/foot/foot_img3a.png";
        oA3.style.color = '#7f7f7f';
    }
    oA3.onmouseover = function(){
        oImg3.src = "./img/foot/foot_img3b.png";
        oA3.style.color = '#31c27c';
    }
    oA3.onmouseout = function(){
        oImg3.src = "./img/foot/foot_img3a.png";
        oA3.style.color = '#7f7f7f';
    }
    oImg4.onmouseover = function(){
        oImg4.src = "./img/foot/foot_img4b.png";
        oA4.style.color = '#31c27c';
    }
    oImg4.onmouseout = function(){
        oImg4.src = "./img/foot/foot_img4a.png";
        oA4.style.color = '#7f7f7f';
    }
    oA4.onmouseover = function(){
        oImg4.src = "./img/foot/foot_img4b.png";
        oA4.style.color = '#31c27c';
    }
    oA4.onmouseout = function(){
        oImg4.src = "./img/foot/foot_img4a.png";
        oA4.style.color = '#7f7f7f';
    }
    oImg5.onmouseover = function(){
        oImg5.src = "./img/foot/foot_img5b.png";
        oA5.style.color = '#31c27c';
    }
    oImg5.onmouseout = function(){
        oImg5.src = "./img/foot/foot_img5a.png";
        oA5.style.color = '#7f7f7f';
    }
    oA5.onmouseover = function(){
        oImg5.src = "./img/foot/foot_img5b.png";
        oA5.style.color = '#31c27c';
    }
    oA5.onmouseout = function(){
        oImg5.src = "./img/foot/foot_img5a.png";
        oA5.style.color = '#7f7f7f';
    }
    oImg6.onmouseover = function(){
        oImg6.src = "./img/foot/foot_img6b.png";
        oA6.style.color = '#31c27c';
    }
    oImg6.onmouseout = function(){
        oImg6.src = "./img/foot/foot_img6a.png";
        oA6.style.color = '#7f7f7f';
    }
    oA6.onmouseover = function(){
        oImg6.src = "./img/foot/foot_img6b.png";
        oA6.style.color = '#31c27c';
    }
    oA6.onmouseout = function(){
        oImg6.src = "./img/foot/foot_img6a.png";
        oA6.style.color = '#7f7f7f';
    }
    oImg7.onmouseover = function(){
        oImg7.src = "./img/foot/foot_img7b.png";
        oA7.style.color = '#31c27c';
    }
    oImg7.onmouseout = function(){
        oImg7.src = "./img/foot/foot_img7a.png";
        oA7.style.color = '#7f7f7f';
    }
    oA7.onmouseover = function(){
        oImg7.src = "./img/foot/foot_img7b.png";
        oA7.style.color = '#31c27c';
    }
    oA7.onmouseout = function(){
        oImg7.src = "./img/foot/foot_img7a.png";
        oA7.style.color = '#7f7f7f';
    }

}
mv.app.tologin = function(){
    var oLogin_btn = document.querySelector('.head_btn7');
    var oLogin = document.querySelector('#login');
    var oLogin_close1 = document.querySelector('.login_body1_close');
    var oLogin_close2 = document.querySelector('.login_body2_close');
    var oDa1 = document.querySelector('.login_body1_left_a1');
    var oDa2 = document.querySelector('.login_body1_left2_p1 a');
    var oDa3 = document.querySelector('.login_body1_head_a2');
    var oDa4 = document.querySelector('.login_body2_head_a1');
    var oDa5 = document.querySelector('.login_body1_left3_a1');
    var oBody1 = document.querySelector('.login_body1_left');
    var oBody2 = document.querySelector('.login_body1_left2');
    var oBody3 = document.querySelector('.login_body2');
    var oBody4 = document.querySelector('.login_body1_left3');
    var oDelect = document.querySelector('.login_body1_left2_img1');
    var oImg1 = document.querySelector('.login_body1_left_img1');
    var oImg2 = document.querySelector('.login_body1_left_img2');
    var oInput1 = document.querySelector('.login_body1_left2_text');
    var oWarning1 = document.querySelector('.login_body1_left2_p2');
    var oWarning2 = document.querySelector('.login_body1_left2_p3');
    var oWarning_img = document.querySelector('.login_body1_left2_img2');
    var oSlide_img1 = document.querySelector('.slide_img1');
    var oSlide_img2 = document.querySelector('.slide_img2');
    var oSlip = document.querySelector('.slide_b');
    var oChange = document.querySelector('.login_body1_left3_a3');
    var oSlip_btn = document.querySelector('.login_body1_left2 button');
    var a = 2;

    var toregister2 = document.querySelector('.login_body1_left2_a2'); 
    var toregister1 = document.querySelector('.login_body1_left_a2'); 
    
    oLogin_btn.onclick = function(){
        oLogin.style.display = ('block');
    }
    oLogin_close1.onmouseover = function(){
        oLogin_close1.src = "./img/login/login_close2.png";
    }
    oLogin_close1.onmouseout = function(){
        oLogin_close1.src = "./img/login/login_close1.png";
    }
    oLogin_close1.onclick = function(){
        oLogin.style.display = ('none');
    }
    oLogin_close2.onmouseover = function(){
        oLogin_close1.src = "./img/login/login_close2.png";
    }
    oLogin_close2.onmouseout = function(){
        oLogin_close1.src = "./img/login/login_close1.png";
    }
    oLogin_close2.onclick = function(){
        oLogin.style.display = ('none');
    }
    oDa1.onclick = function(){
        oBody1.style.display = ('none');
        oBody2.style.display = ('block');
    }
    oDa2.onclick = function(){
        oBody2.style.display = ('none');
        oBody1.style.display = ('block');
    }
    oDa3.onclick = function(){
        oBody3.style.display = ('block');
    }
    oDa4.onclick = function(){
        oBody3.style.display = ('none');
    }
    oDa5.onclick = function(){
        oBody4.style.display = ('none');
        oBody2.style.display = ('block');
    }
    oDelect.onmouseover = function(){
        oDelect.src = './img/login/login_close4.png'
    }
    oDelect.onmouseout = function(){
        oDelect.src = './img/login/login_close3.png'
    }
    oImg1.onmouseover = function(){
        var time;
        var Left;
        Left = oImg1.offsetLeft;
        if(Left == 150){
            clearInterval(time);
            time = setInterval(function(){
                if(Left <= 70){
                    oImg1.style.left = 70 + 'px';
                    clearInterval(time);
                    oImg2.style.display = ('block');           
                }else{
                    Left -= 10;
                    oImg1.style.left = Left + 'px';
                }
            },30);  
        }
    }
    oImg1.onmouseout = function(){
        var time;
        var Left;
        Left = oImg1.offsetLeft;
        if(Left == 70){
            clearInterval(time);
            oImg2.style.display = ('none');
            time = setInterval(function(){
                if(Left >= 150){
                    oImg2.style.display = ('none');
                    oImg1.style.left = 150 + 'px';
                    clearInterval(time);
                }else{
                    oImg2.style.display = ('none');
                    Left += 10;
                    oImg1.style.left = Left + 'px';
                }
            },30); 
        }
    }
    oDelect.onclick = function(){
        oInput1.value = '';
    }

    var Ture = 0;
    oInput1.onblur = function(){
        var req = /[1-9]\d{4,12}/;
        if(!oInput1.value){
            oWarning1.style.display = ('none');
            oWarning2.style.display = ('block');
            oWarning_img.style.display = ('block');
            Ture = 0;
        }else if(!req.test(oInput1.value)){
            oWarning1.style.display = ('block');
            oWarning2.style.display = ('none');
            oWarning_img.style.display = ('block');
            Ture = 0;
        }else{
            oWarning1.style.display = ('none');
            oWarning2.style.display = ('none');
            oWarning_img.style.display = ('none');
            Ture = 1;
        }
    }
    oSlip_btn.onclick = function(){
        if(Ture){
            oBody2.style.display = ('none');
            oBody4.style.display = ('block');
        }
    } 
    
    mv.tools.slip(oSlip,oSlide_img2,0);
    oChange.onclick = function(){
        if(a == 1){
            oSlide_img1.src = './img/slide/slide_img1.png'
            oSlide_img2.src = './img/slide/slide_img2.png'
            oSlide_img2.style.top = 81 + 'px';
            mv.tools.slip(oSlip,oSlide_img2,0);
            a++;
        }else if(a == 2){
            oSlide_img1.src = './img/slide/slide_img3.png'
            oSlide_img2.src = './img/slide/slide_img4.png'
            oSlide_img2.style.top = 110 + 'px';
            mv.tools.slip(oSlip,oSlide_img2,-13);
            a = 3;
        }else if(a == 3){
            oSlide_img1.src = './img/slide/slide_img5.png'
            oSlide_img2.src = './img/slide/slide_img6.png'
            oSlide_img2.style.top = 98 + 'px';
            mv.tools.slip(oSlip,oSlide_img2,1);
            a = 4;
        }else if(a == 4){
            oSlide_img1.src = './img/slide/slide_img7.png'
            oSlide_img2.src = './img/slide/slide_img8.png'
            oSlide_img2.style.top = 96 + 'px';
            mv.tools.slip(oSlip,oSlide_img2,3);
            a = 1;
        }
    }
    
    toregister1.onclick = function(){
        window.open('register.html')
    }
    toregister2.onclick = function(){
        window.open('register.html')
    }
}
mv.app.tobody = function(){
    var oBody_p1 = document.querySelector('.body_p1');
    var oBody_p2 = document.querySelector('.body_p2');
    var oBtn = document.querySelector('#body button');
    var oLogin = document.querySelector('#login');

    mv.tools.playup(oBody_p1,1,1);
    setTimeout(function(){
        mv.tools.playup(oBody_p2,1,1);
    },800);
    setTimeout(function(){
        mv.tools.playup(oBtn,1,1);
    },1000);
    oBtn.onclick = function(){
        oLogin.style.display = ("block");
    }
}