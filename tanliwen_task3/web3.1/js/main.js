/*javascript*/
window.onload = function(){
    mv.app.toslip();
    mv.app.tochange();
};

var mv = {};
mv.tools = {};
mv.ui = {};
mv.app = {};
mv.app.toslip = function(){
    var oLogin_btn = document.querySelector('.login_btn'); 
    var oSilde = document.querySelector('.silde');
    var oImg1 = document.querySelector('.img1');
    var oImg2 = document.querySelector('.img2');
    var oRect_p = document.querySelector('.rect_p');
    var oSilp = document.querySelector('#silp');
    var oSilp_body = document.querySelector('.silp_body');
    var oSilp_p = document.querySelector('.silp_p');
    var oBody = document.querySelector('#body');
    var oFoot_img2 = document.querySelector('.foot_img2');
    var Num = 1;
    var Left = 25;
    var changewidth = 24;
    oSilp_p.style.display = ('none');
    oSilde.style.left = Left -25 + 'px'; 
    oImg2.style.left = Left + 'px';
    oFoot_img2.onclick = function(){
        if(Num == 3){
            Num = 1;
        }
        else{
            Num++;
        }
        if(Num == 1){
            changewidth = 24; 
            oImg1.src = './img/img1_1.png';
            oImg2.src = './img/img1_2.png';
            oImg2.style.top = 95 + 'px';
        }
        if(Num == 2){
            oImg1.src = './img/img2_1.png';
            oImg2.src = './img/img2_2.png';
            oImg2.style.top = 113 + 'px';
            changewidth = 84; 
        }
        if(Num == 3){
            oImg1.src = './img/img3_1.png';
            oImg2.src = './img/img3_2.png';
            oImg2.style.top = 89 + 'px';
            changewidth = 0; 
        }
    };
    oLogin_btn.onclick = function(){
        oSilp.style.display = ('block');
    };
    oSilde.onmousedown = function(length1){
        var xlength1 = length1.clientX;
        document.onmousemove = function(length2){
            oRect_p.style.display = ('none');
            var xlength2 = length2.clientX;
            Left = xlength2 - xlength1; 
            if(Left < 25){
                Left = 25;
            }
            else if(Left > 280){
                Left = 280;
            }
            else{
                oSilde.style.left = Left - 25 + 'px'; 
                oImg2.style.left = Left + 'px';
            } 
        };
    };
    document.onmouseup = function(){
        document.onmousemove = null;
        var a = true;
        var b = 0;
        if(Left <= 181 + changewidth && Left >= 176 + changewidth){
            Left = 25;
            oSilde.style.left = Left -25 + 'px'; 
            oImg2.style.left = Left + 'px';
            oSilp.style.display = ('none');
            alert('你随便输点数字就想骗我？');
        }
        else if(Left < 176 + changewidth || Left > 181 + changewidth){
            if(Left != 25){
                oSilp_p.style.display = ('block'); 
                var time = setInterval(function(){
                    oSilp_body.style.left = (a ? -5 : 5) + 'px';
                    a = !a;
                    b++;
                    if(b >= 6){
                        clearInterval(time);
                    }
                },100)
            }
            Left = 25;
            setTimeout(function(){
                oSilp_p.style.display = ('none');
                oRect_p.style.display = ('block');
                oSilde.style.left = Left -25 + 'px'; 
                oImg2.style.left = Left + 'px';
            },1000);
            
        }
    };
};
mv.app.tochange = function(){
    var oFoot_img1 = document.querySelector('.foot_img1');
    var oFoot_img2 = document.querySelector('.foot_img2');
    var oFoot_logo1 = document.querySelector('.foot_logo1');
    var oFoot_logo2 = document.querySelector('.foot_logo2');
    var oSilp = document.querySelector('#silp');
    oFoot_img1.onmouseover = function(){
        oFoot_img1.src = './img/foot_img2.png';
        oFoot_logo1.style.display = ('block');
    };
    oFoot_img1.onmouseout = function(){
        oFoot_img1.src = './img/foot_img1.png';
        oFoot_logo1.style.display = ('none');
    };
    oFoot_img2.onmouseover = function(){
        oFoot_img2.src = './img/foot_img4.png';
        oFoot_logo2.style.display = ('block');
    };
    oFoot_img2.onmouseout = function(){
        oFoot_img2.src = './img/foot_img3.png';
        oFoot_logo2.style.display = ('none');
    };
    oFoot_img1.onclick = function(){
        oSilp.style.display = ('none');
    };
};
