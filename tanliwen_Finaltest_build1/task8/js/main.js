/*javascript*/
window.onload = function(){
    mv.app.toHead();
    mv.app.toLogo();
    mv.app.tofoot();    
    mv.app.toplay_recommend();
    mv.app.toplay_newsing();
    mv.app.toplay_newdvd();
    mv.app.toplay_ranking();
    mv.app.toplay_mv();
    mv.app.tppaly_wonderful();
    mv.app.tomove_recommend();
    mv.app.tomove_newsing();
    mv.app.tomove_wonderful();
    mv.app.tomove_mv();
    document.onselectstart = function(){
        return false;
    }



    mv.app.tologin();
};




var mv = {};
mv.tools = {};
mv.tools.playin_recommend = function(obj,a){
    var value = 0;
    var Width = a;
    clearInterval(time);
    var time = setInterval(function(){             
        if(value == 100){
            clearInterval(time);
        } 
        else{
            value = value + 10;
            Width = Width + 2;
            obj.querySelector('.recommend_play').style.opacity = value/100;
            obj.querySelector('.play_div1').style.opacity = (value/100)/5;          
            obj.querySelector('.recommend_li_img').style.width = Width + 'px';          
        }                                            
    },30) 
}
mv.tools.playout_recommend = function(obj,a){
    var value = 100;
    var Width = a;
    clearInterval(time);
    var time = setInterval(function(){             
        if(value == 0){
            clearInterval(time);
        } 
        else{
            value = value - 10;
            Width = Width - 2;
            obj.querySelector('.recommend_play').style.opacity = value/100;
            obj.querySelector('.play_div1').style.opacity = (value/100)/5;
            obj.querySelector('.recommend_li_img').style.width = Width + 'px';
        }                                            
    },30) 
}
mv.tools.playin_newsing = function(obj,a){
    var value = 0;
    var Width = a;
    clearInterval(time);
    var time = setInterval(function(){             
        if(value == 100){
            clearInterval(time);
        } 
        else{
            value = value + 10;
            Width = Width + 1;
            obj.querySelector('.newsing_play').style.opacity = value/100;
            obj.querySelector('.play_div2').style.opacity = (value/100)/5;          
            obj.querySelector('.newsing_li_img').style.width = Width + 'px';          
        }                                            
    },30) 
}
mv.tools.playout_newsing = function(obj,a){
    var value = 100;
    var Width = a;
    clearInterval(time);
    var time = setInterval(function(){             
        if(value == 0){
            clearInterval(time);
        } 
        else{
            value = value - 10;
            Width = Width - 1;
            obj.querySelector('.newsing_play').style.opacity = value/100;
            obj.querySelector('.play_div2').style.opacity = (value/100)/5;
            obj.querySelector('.newsing_li_img').style.width = Width + 'px';
        }                                            
    },30) 
}
mv.tools.playin_newdvd = function(obj,a){
    var value = 0;
    var Width = a;
    clearInterval(time);
    var time = setInterval(function(){             
        if(value == 100){
            clearInterval(time);
        } 
        else{
            value = value + 10;
            Width = Width + 2;
            obj.querySelector('.newdvd_play').style.opacity = value/100;
            obj.querySelector('.play_div3').style.opacity = (value/100)/5;          
            obj.querySelector('.newdvd_li_img').style.width = Width + 'px';          
        }                                            
    },30) 
}
mv.tools.playout_newdvd = function(obj,a){
    var value = 100;
    var Width = a;
    clearInterval(time);
    var time = setInterval(function(){             
        if(value == 0){
            clearInterval(time);
        } 
        else{
            value = value - 10;
            Width = Width - 2;
            obj.querySelector('.newdvd_play').style.opacity = value/100;
            obj.querySelector('.play_div3').style.opacity = (value/100)/5;
            obj.querySelector('.newdvd_li_img').style.width = Width + 'px';
        }                                            
    },30) 
}
mv.tools.playin_ranking = function(obj,a){
    var value = 0;
    var Width = a;
    var oDiv = obj.querySelector(".ranking_li_div");
    oDiv.style.display = ("none");
    clearInterval(time);
    var time = setInterval(function(){             
        if(value == 100){
            clearInterval(time);
        } 
        else{
            value = value + 10;
            Width = Width + 1;
            obj.querySelector('.ranking_play').style.opacity = value/100;
            obj.querySelector('.ranking_li_img').style.width = Width + 'px';                  
        }                                            
    },30) 
}
mv.tools.playout_ranking = function(obj,a){
    var value = 100;
    var Width = a;
    var oDiv = obj.querySelector(".ranking_li_div");
    oDiv.style.display = ("block");
    clearInterval(time);
    var time = setInterval(function(){             
        if(value == 0){
            clearInterval(time);
        } 
        else{
            value = value - 10;
            Width = Width - 1;
            obj.querySelector('.ranking_play').style.opacity = value/100;
            obj.querySelector('.ranking_li_img').style.width = Width + 'px';
        }                                            
    },30) 
}
mv.tools.playin_mv = function(obj,a){
    var value = 0;
    var Width = a;
    clearInterval(time);
    var time = setInterval(function(){             
        if(value == 100){
            clearInterval(time);
        } 
        else{
            value = value + 10;
            Width = Width + 2;
            obj.querySelector('.mv_play').style.opacity = value/100;          
            obj.querySelector('.mv_li_img').style.width = Width + 'px';          
        }                                            
    },30) 
}
mv.tools.playout_mv = function(obj,a){
    var value = 100;
    var Width = a;
    clearInterval(time);
    var time = setInterval(function(){             
        if(value == 0){
            clearInterval(time);
        } 
        else{
            value = value - 10;
            Width = Width - 2;
            obj.querySelector('.mv_play').style.opacity = value/100;
            obj.querySelector('.mv_li_img').style.width = Width + 'px';
        }                                            
    },30) 
}
mv.tools.arrow_playin = function(obj1,obj2){
    var time;
    var value = -79;
    clearInterval(time);
    time = setInterval(function(){
        if(value == 0){
            clearInterval(time);
        }else{
            if(value + 10 <= 0){
                value += 10;
            }else{
                value = 0;
            }
            obj1.style.left = value + 'px';
            obj2.style.right = value + 'px';
        }
    },30)
}
mv.tools.arrow_playout = function(obj1,obj2){
    var time;
    var value = 0;
    clearInterval(time);
    time = setInterval(function(){
        if(value == -79){
            clearInterval(time);
        }else{
            if(value - 10 >= -79){
                value -= 10;
            }else{
                value = -79;
            }
            obj1.style.left = value + 'px';
            obj2.style.right = value + 'px';
        }
    },30)
}
mv.tools.moveleft = function(obj,old,now){
    var time;
    var value = old;
    obj.style.left = old + 'px'
    clearInterval(time);
    time = setInterval(function(){
        if(value == now){
            clearInterval(time);
        }else{
            value -= (old - now)/10;
            obj.style.left = value + 'px';
        }
    },30)
}
mv.tools.moveright = function(obj,old,now){
    var time;
    var value = old;
    obj.style.left = old + 'px'
    clearInterval(time);
    time = setInterval(function(){
        if(value == now){
            clearInterval(time);
        }else{
            value += (old - now)/10;
            obj.style.left = value + 'px';
        }
    },50)
}


///////////////////////////////////////////////////////////
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
    var oDd = document.querySelector('.head_btn3');

    oDd.onclick = function(){
        window.location.href = 'mymusic.html';
    }
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
mv.app.toplay_recommend = function(){
    var i;
    var This;
    var oDiv1 = document.querySelector('.recommend_body').getElementsByClassName('recommend_play_div');
    var oBody = document.querySelector('#recommend');
    var oArrowleft = document.querySelector('.recommend_arrow_left');
    var oArrowright = document.querySelector('.recommend_arrow_right');
    
    for(i=0;i<oDiv1.length;i++){
        oDiv1[i].onmouseover = function(){ 
            This = this.parentNode;
            mv.tools.playin_recommend(This, 224);
        }
        oDiv1[i].onmouseout = function(){ 
            This = this.parentNode;
            mv.tools.playout_recommend(This, 244);            
        }
    }

    oBody.onmouseenter = function(){
        mv.tools.arrow_playin(oArrowleft,oArrowright);
    }
    oBody.onmouseleave = function(){
        mv.tools.arrow_playout(oArrowleft,oArrowright);    
    }
    oArrowleft.onmouseover = function(){
        this.style.backgroundColor = "#c9c5c9";
        this.querySelector('.recommend_arrow_left_div2').style.borderRight = "16px solid #c9c5c9";
    }
    oArrowleft.onmouseout = function(){
        this.style.backgroundColor = "#efeeef";
        this.querySelector('.recommend_arrow_left_div2').style.borderRight = "16px solid #efeeef";
    }
    oArrowright.onmouseout = function(){
        this.style.backgroundColor = "#efeeef";
        this.querySelector('.recommend_arrow_right_div2').style.borderLeft = "16px solid #efeeef";
    }
    oArrowright.onmouseover = function(){
        this.style.backgroundColor = "#c9c5c9";
        this.querySelector('.recommend_arrow_right_div2').style.borderLeft = "16px solid #c9c5c9";
    }
}
mv.app.tppaly_wonderful = function(){
    var oBody = document.querySelector('#wonderful');
    var oArrowleft = document.querySelector('.wonderful_arrow_left');
    var oArrowright = document.querySelector('.wonderful_arrow_right');

    oBody.onmouseenter = function(){
        mv.tools.arrow_playin(oArrowleft,oArrowright);
    }
    oBody.onmouseleave = function(){
        mv.tools.arrow_playout(oArrowleft,oArrowright);    
    }
    oArrowleft.onmouseover = function(){
        this.style.backgroundColor = "#c9c5c9";
        this.querySelector('.wonderful_arrow_left_div2').style.borderRight = "16px solid #c9c5c9";
    }
    oArrowleft.onmouseout = function(){
        this.style.backgroundColor = "#efeeef";
        this.querySelector('.wonderful_arrow_left_div2').style.borderRight = "16px solid #efeeef";
    }
    oArrowright.onmouseout = function(){
        this.style.backgroundColor = "#efeeef";
        this.querySelector('.wonderful_arrow_right_div2').style.borderLeft = "16px solid #efeeef";
    }
    oArrowright.onmouseover = function(){
        this.style.backgroundColor = "#c9c5c9";
        this.querySelector('.wonderful_arrow_right_div2').style.borderLeft = "16px solid #c9c5c9";
    }
}
mv.app.toplay_newsing = function(){
    var i;
    var This;
    var oDiv2 = document.querySelector('.newsing_body').getElementsByClassName('newsing_play_div');
    var oBody = document.querySelector('#newsing');
    var oArrowleft = document.querySelector('.newsing_arrow_left');
    var oArrowright = document.querySelector('.newsing_arrow_right');

    for(i=0;i<oDiv2.length;i++){
        oDiv2[i].onmouseover = function(){ 
            This = this.parentNode;
            mv.tools.playin_newsing(This, 86);
        }
        oDiv2[i].onmouseout = function(){ 
            This = this.parentNode;
            mv.tools.playout_newsing(This, 96);            
        }
    }

    oBody.onmouseenter = function(){
        mv.tools.arrow_playin(oArrowleft,oArrowright);
    }
    oBody.onmouseleave = function(){
        mv.tools.arrow_playout(oArrowleft,oArrowright);    
    }
    oArrowleft.onmouseover = function(){
        this.style.backgroundColor = "#c9c5c9";
        this.querySelector('.newsing_arrow_left_div2').style.borderRight = "16px solid #c9c5c9";
    }
    oArrowleft.onmouseout = function(){
        this.style.backgroundColor = "#efeeef";
        this.querySelector('.newsing_arrow_left_div2').style.borderRight = "16px solid #efeeef";
    }
    oArrowright.onmouseout = function(){
        this.style.backgroundColor = "#efeeef";
        this.querySelector('.newsing_arrow_right_div2').style.borderLeft = "16px solid #efeeef";
    }
    oArrowright.onmouseover = function(){
        this.style.backgroundColor = "#c9c5c9";
        this.querySelector('.newsing_arrow_right_div2').style.borderLeft = "16px solid #c9c5c9";
    }
}
mv.app.toplay_newdvd = function(){
    var i;
    var This;
    var oDiv3 = document.querySelector('.newdvd_body').getElementsByClassName('newdvd_play_div');

    for(i=0;i<oDiv3.length;i++){
        oDiv3[i].onmouseover = function(){ 
            This = this.parentNode;
            mv.tools.playin_newdvd(This, 224);
        }
        oDiv3[i].onmouseout = function(){ 
            This = this.parentNode;
            mv.tools.playout_newdvd(This, 244);            
        }
    }
}
mv.app.toplay_ranking = function(){
    var i;
    var This;
    var oDiv3 = document.querySelector('.ranking_body').getElementsByClassName('ranking_play_div');

    for(i=0;i<oDiv3.length;i++){
        oDiv3[i].onmouseover = function(){ 
            This = this.parentNode;
            mv.tools.playin_ranking(This, 224);
        }
        oDiv3[i].onmouseout = function(){ 
            This = this.parentNode;
            mv.tools.playout_ranking(This, 234);            
        }
    }
}
mv.app.toplay_mv = function(){
    var i;
    var This;
    var oDiv3 = document.querySelector('.mv_body').getElementsByClassName('mv_play_div');
    var oBody = document.querySelector('#mv');
    var oArrowleft = document.querySelector('.mv_arrow_left');
    var oArrowright = document.querySelector('.mv_arrow_right');

    for(i=0;i<oDiv3.length;i++){
        oDiv3[i].onmouseover = function(){ 
            This = this.parentNode;
            mv.tools.playin_mv(This, 224);
        }
        oDiv3[i].onmouseout = function(){ 
            This = this.parentNode;
            mv.tools.playout_mv(This, 244);            
        }
    }

    oBody.onmouseenter = function(){
        mv.tools.arrow_playin(oArrowleft,oArrowright);
    }
    oBody.onmouseleave = function(){
        mv.tools.arrow_playout(oArrowleft,oArrowright);    
    }
    oArrowleft.onmouseover = function(){
        this.style.backgroundColor = "#c9c5c9";
        this.querySelector('.mv_arrow_left_div2').style.borderRight = "16px solid #c9c5c9";
    }
    oArrowleft.onmouseout = function(){
        this.style.backgroundColor = "#efeeef";
        this.querySelector('.mv_arrow_left_div2').style.borderRight = "16px solid #efeeef";
    }
    oArrowright.onmouseout = function(){
        this.style.backgroundColor = "#efeeef";
        this.querySelector('.mv_arrow_right_div2').style.borderLeft = "16px solid #efeeef";
    }
    oArrowright.onmouseover = function(){
        this.style.backgroundColor = "#c9c5c9";
        this.querySelector('.mv_arrow_right_div2').style.borderLeft = "16px solid #c9c5c9";
    }
}
mv.app.tomove_recommend = function(){
    var i = 1;
    var a = 0;
    var oArrowleft = document.querySelector('.recommend_arrow_left');
    var oArrowright = document.querySelector('.recommend_arrow_right');
    var oUl = document.querySelector('.recommend_body').querySelector('.recommend_ul');
    var oPoint1 = document.querySelector('.recommend_point1');
    var oPoint2 = document.querySelector('.recommend_point2');

    oArrowright.onclick = function(){
        if(i == 1){
            mv.tools.moveleft(oUl,-1220,-2440);
            oPoint2.style.borderColor = "#afafaf";
            oPoint1.style.borderColor = "#e1e1e1";
            i++;
        }else if(i == 2){
            mv.tools.moveleft(oUl,0,-1220);
            oPoint1.style.borderColor = "#afafaf";
            oPoint2.style.borderColor = "#e1e1e1";
            i = 1;
        }
    }
    oArrowleft.onclick = function(){
        if(i == 1){
            mv.tools.moveleft(oUl,-1220,0);
            oPoint2.style.borderColor = "#afafaf";
            oPoint1.style.borderColor = "#e1e1e1";
            i++;
        }else if(i == 2){
            mv.tools.moveleft(oUl,-2440,-1220);
            oPoint1.style.borderColor = "#afafaf";
            oPoint2.style.borderColor = "#e1e1e1";
            i = 1;
        }
    }
    oPoint1.onclick = function(){
        mv.tools.moveleft(oUl,i*(-1220),-1220);
        oPoint1.style.borderColor = "#afafaf";
        oPoint2.style.borderColor = "#e1e1e1";
        i = 1;
    }
    oPoint2.onclick = function(){
        mv.tools.moveleft(oUl,i*(-1220),-2440);
        oPoint2.style.borderColor = "#afafaf";
        oPoint1.style.borderColor = "#e1e1e1";
        i = 2;
    }
}//////////
mv.app.tomove_newsing = function(){
    var i = 1;
    var a = 0;
    var oArrowleft = document.querySelector('.newsing_arrow_left');
    var oArrowright = document.querySelector('.newsing_arrow_right');
    var oDiv = document.querySelector('.newsing_div');
    var oPoint1 = document.querySelector('.newsing_point1');
    var oPoint2 = document.querySelector('.newsing_point2');
    var oPoint3 = document.querySelector('.newsing_point3');
    var oPoint4 = document.querySelector('.newsing_point4');

    oArrowright.onclick = function(){
        if(i == 1){
            mv.tools.moveleft(oDiv,-1230,-2460);
            oPoint2.style.borderColor = "#afafaf";
            oPoint1.style.borderColor = "#e1e1e1";
            i = 2;
        }else if(i == 2){
            mv.tools.moveleft(oDiv,-2460,-3690);
            oPoint3.style.borderColor = "#afafaf";
            oPoint2.style.borderColor = "#e1e1e1";
            i++;
        }
        else if(i == 3){
            mv.tools.moveleft(oDiv,-3690,-4920);
            oPoint4.style.borderColor = "#afafaf";
            oPoint3.style.borderColor = "#e1e1e1";
            i++;
        }
        else if(i == 4){
            mv.tools.moveleft(oDiv,0,-1230);
            oPoint1.style.borderColor = "#afafaf";
            oPoint4.style.borderColor = "#e1e1e1";
            i = 1;
        }
    }
    oArrowleft.onclick = function(){
        if(i == 1){
            mv.tools.moveleft(oDiv,-1230,0);
            oPoint4.style.borderColor = "#afafaf";
            oPoint1.style.borderColor = "#e1e1e1";
            i = 4;
        }else if(i == 4){
            mv.tools.moveleft(oDiv,-4920,-3690);
            oPoint3.style.borderColor = "#afafaf";
            oPoint4.style.borderColor = "#e1e1e1";
            i--;
        }
        else if(i == 3){
            mv.tools.moveleft(oDiv,-3690,-2460);
            oPoint2.style.borderColor = "#afafaf";
            oPoint3.style.borderColor = "#e1e1e1";
            i--;
        }
        else if(i == 2){
            mv.tools.moveleft(oDiv,-2460,-1230);
            oPoint1.style.borderColor = "#afafaf";
            oPoint2.style.borderColor = "#e1e1e1";
            i = 1;
        }
    }
    oPoint1.onclick = function(){
        mv.tools.moveleft(oDiv,i*(-1230),-1230);
        oPoint1.style.borderColor = "#afafaf";
        oPoint2.style.borderColor = "#e1e1e1";
        oPoint3.style.borderColor = "#e1e1e1";
        oPoint4.style.borderColor = "#e1e1e1";
        i = 1;
    }
    oPoint2.onclick = function(){
        mv.tools.moveleft(oDiv,i*(-1230),-2460);
        oPoint2.style.borderColor = "#afafaf";
        oPoint1.style.borderColor = "#e1e1e1";
        oPoint3.style.borderColor = "#e1e1e1";
        oPoint4.style.borderColor = "#e1e1e1";
        i = 2;
    }
    oPoint3.onclick = function(){
        mv.tools.moveleft(oDiv,i*(-1230),-3690);
        oPoint3.style.borderColor = "#afafaf";
        oPoint2.style.borderColor = "#e1e1e1";
        oPoint1.style.borderColor = "#e1e1e1";
        oPoint4.style.borderColor = "#e1e1e1";
        i = 3;
    }
    oPoint4.onclick = function(){
        mv.tools.moveleft(oDiv,i*(-1230),-4920);
        oPoint4.style.borderColor = "#afafaf";
        oPoint2.style.borderColor = "#e1e1e1";
        oPoint3.style.borderColor = "#e1e1e1";
        oPoint1.style.borderColor = "#e1e1e1";
        i = 4;
    }
}//////////
mv.app.tomove_wonderful = function(){
    var i = 1;
    var a = 0;
    var oArrowleft = document.querySelector('.wonderful_arrow_left');
    var oArrowright = document.querySelector('.wonderful_arrow_right');
    var oUl = document.querySelector('.wonderful_ul');
    var oPoint1 = document.querySelector('.wonderful_point1');
    var oPoint2 = document.querySelector('.wonderful_point2');
    var oPoint3 = document.querySelector('.wonderful_point3');
    var oPoint4 = document.querySelector('.wonderful_point4');
    var oPoint5 = document.querySelector('.wonderful_point5');

    oArrowright.onclick = function(){
        if(i == 1){
            mv.tools.moveleft(oUl,-1220,-2440);
            oPoint2.style.borderColor = "#afafaf";
            oPoint1.style.borderColor = "#e1e1e1";
            i = 2;
        }else if(i == 2){
            mv.tools.moveleft(oUl,-2440,-3660);
            oPoint3.style.borderColor = "#afafaf";
            oPoint2.style.borderColor = "#e1e1e1";
            i = 3;
        }
        else if(i == 3){
            mv.tools.moveleft(oUl,-3660,-4880);
            oPoint4.style.borderColor = "#afafaf";
            oPoint3.style.borderColor = "#e1e1e1";
            i++;
        }
        else if(i == 4){
            mv.tools.moveleft(oUl,-4880,-6100);
            oPoint5.style.borderColor = "#afafaf";
            oPoint4.style.borderColor = "#e1e1e1";
            i++;
        }else if(i == 5){
            mv.tools.moveleft(oUl,0,-1220);
            oPoint1.style.borderColor = "#afafaf";
            oPoint5.style.borderColor = "#e1e1e1";
            i = 1;
        }
    }
    oArrowleft.onclick = function(){
        if(i == 1){
            mv.tools.moveleft(oUl,-1200,0);
            oPoint5.style.borderColor = "#afafaf";
            oPoint1.style.borderColor = "#e1e1e1";
            i = 5;
        }else if(i == 5){
            mv.tools.moveleft(oUl,-6100,-4880);
            oPoint4.style.borderColor = "#afafaf";
            oPoint5.style.borderColor = "#e1e1e1";
            i--;
        }
        else if(i == 4){
            mv.tools.moveleft(oUl,-4880,-3660);
            oPoint3.style.borderColor = "#afafaf";
            oPoint4.style.borderColor = "#e1e1e1";
            i--;
        }
        else if(i == 3){
            mv.tools.moveleft(oUl,-3660,-2440);
            oPoint2.style.borderColor = "#afafaf";
            oPoint3.style.borderColor = "#e1e1e1";
            i = 2;
        }else if(i == 2){
            mv.tools.moveleft(oUl,-2440,-1220);
            oPoint1.style.borderColor = "#afafaf";
            oPoint2.style.borderColor = "#e1e1e1";
            i = 1;
        }
    }
    oPoint1.onclick = function(){
        mv.tools.moveleft(oUl,i*(-1220),-1220);
        oPoint1.style.borderColor = "#afafaf";
        oPoint2.style.borderColor = "#e1e1e1";
        oPoint3.style.borderColor = "#e1e1e1";
        oPoint4.style.borderColor = "#e1e1e1";
        oPoint5.style.borderColor = "#e1e1e1";
        i = 1;
    }
    oPoint2.onclick = function(){
        mv.tools.moveleft(oUl,i*(-1220),-2440);
        oPoint2.style.borderColor = "#afafaf";
        oPoint1.style.borderColor = "#e1e1e1";
        oPoint3.style.borderColor = "#e1e1e1";
        oPoint4.style.borderColor = "#e1e1e1";
        oPoint5.style.borderColor = "#e1e1e1";
        i = 2;
    }
    oPoint3.onclick = function(){
        mv.tools.moveleft(oUl,i*(-1220),-3660);
        oPoint3.style.borderColor = "#afafaf";
        oPoint2.style.borderColor = "#e1e1e1";
        oPoint1.style.borderColor = "#e1e1e1";
        oPoint4.style.borderColor = "#e1e1e1";
        oPoint5.style.borderColor = "#e1e1e1";
        oPoint5.style.borderColor = "#e1e1e1";
        i = 3;
    }
    oPoint4.onclick = function(){
        mv.tools.moveleft(oUl,i*(-1220),-4880);
        oPoint4.style.borderColor = "#afafaf";
        oPoint2.style.borderColor = "#e1e1e1";
        oPoint3.style.borderColor = "#e1e1e1";
        oPoint1.style.borderColor = "#e1e1e1";
        oPoint5.style.borderColor = "#e1e1e1";
        i = 4;
    }
    oPoint5.onclick = function(){
        mv.tools.moveleft(oUl,i*(-1220),-6100);
        oPoint5.style.borderColor = "#afafaf";
        oPoint2.style.borderColor = "#e1e1e1";
        oPoint3.style.borderColor = "#e1e1e1";
        oPoint1.style.borderColor = "#e1e1e1";
        oPoint4.style.borderColor = "#e1e1e1";
        i = 5;
    }
}//////////
mv.app.tomove_mv = function(){
    var i = 1;
    var a = 0;
    var oArrowleft = document.querySelector('.mv_arrow_left');
    var oArrowright = document.querySelector('.mv_arrow_right');
    var oDiv = document.querySelector('.mv_div');
    var oPoint1 = document.querySelector('.mv_point1');
    var oPoint2 = document.querySelector('.mv_point2');
    var oPoint3 = document.querySelector('.mv_point3');
    var oPoint4 = document.querySelector('.mv_point4');

    oArrowright.onclick = function(){
        if(i == 1){
            mv.tools.moveleft(oDiv,-1220,-2440);
            oPoint2.style.borderColor = "#afafaf";
            oPoint1.style.borderColor = "#e1e1e1";
            i = 2;
        }else if(i == 2){
            mv.tools.moveleft(oDiv,-2440,-3660);
            oPoint3.style.borderColor = "#afafaf";
            oPoint2.style.borderColor = "#e1e1e1";
            i++;
        }
        else if(i == 3){
            mv.tools.moveleft(oDiv,-3660,-4880);
            oPoint4.style.borderColor = "#afafaf";
            oPoint3.style.borderColor = "#e1e1e1";
            i++;
        }
        else if(i == 4){
            mv.tools.moveleft(oDiv,0,-1220);
            oPoint1.style.borderColor = "#afafaf";
            oPoint4.style.borderColor = "#e1e1e1";
            i = 1;
        }
    }
    oArrowleft.onclick = function(){
        if(i == 1){
            mv.tools.moveleft(oDiv,-1220,0);
            oPoint4.style.borderColor = "#afafaf";
            oPoint1.style.borderColor = "#e1e1e1";
            i = 4;
        }else if(i == 4){
            mv.tools.moveleft(oDiv,-4880,-3660);
            oPoint3.style.borderColor = "#afafaf";
            oPoint4.style.borderColor = "#e1e1e1";
            i--;
        }
        else if(i == 3){
            mv.tools.moveleft(oDiv,-3660,-2440);
            oPoint2.style.borderColor = "#afafaf";
            oPoint3.style.borderColor = "#e1e1e1";
            i--;
        }
        else if(i == 2){
            mv.tools.moveleft(oDiv,-2440,-1220);
            oPoint1.style.borderColor = "#afafaf";
            oPoint2.style.borderColor = "#e1e1e1";
            i = 1;
        }
    }
    oPoint1.onclick = function(){
        mv.tools.moveleft(oDiv,i*(-1220),-1220);
        oPoint1.style.borderColor = "#afafaf";
        oPoint2.style.borderColor = "#e1e1e1";
        oPoint3.style.borderColor = "#e1e1e1";
        oPoint4.style.borderColor = "#e1e1e1";
        i = 1;
    }
    oPoint2.onclick = function(){
        mv.tools.moveleft(oDiv,i*(-1220),-2440);
        oPoint2.style.borderColor = "#afafaf";
        oPoint1.style.borderColor = "#e1e1e1";
        oPoint3.style.borderColor = "#e1e1e1";
        oPoint4.style.borderColor = "#e1e1e1";
        i = 2;
    }
    oPoint3.onclick = function(){
        mv.tools.moveleft(oDiv,i*(-1220),-3660);
        oPoint3.style.borderColor = "#afafaf";
        oPoint2.style.borderColor = "#e1e1e1";
        oPoint1.style.borderColor = "#e1e1e1";
        oPoint4.style.borderColor = "#e1e1e1";
        i = 3;
    }
    oPoint4.onclick = function(){
        mv.tools.moveleft(oDiv,i*(-1220),-4880);
        oPoint4.style.borderColor = "#afafaf";
        oPoint2.style.borderColor = "#e1e1e1";
        oPoint3.style.borderColor = "#e1e1e1";
        oPoint1.style.borderColor = "#e1e1e1";
        i = 4;
    }
}//////////




/////登录login
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