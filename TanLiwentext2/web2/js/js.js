/*javascript*/
window.onload = function(){
    mv.app.download();
    mv.app.change();
    mv.app.silp();
    mv.app.choose();
    mv.app.totext();
};
var mv = {};
mv.tools = {};



mv.ui = {};
mv.ui.moveup = function(obj,old,now){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var iSpeed = (now-old)/10;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if(now == old){
            clearInterval(obj.timer);
        }
        else{
            old += iSpeed;
            obj.style.top = old + 'px';
        }
    },30);
};
mv.ui.textchange = function(obj,str){
    obj.onfocus = function(){
        if(this.value == str){
            this.value ='';
        }
    };
    obj.onblur = function(){
        if(this.value == ''){
            this.value = str;
        }
    };
};
mv.ui.textlogin = function(obj1,str1,obj2,str2,obj3){
    if(obj1.value != ''){
        if(obj2.value != ''){
            if(obj1.value != str1){
                if(obj2.value != str2){
                    obj3.style.backgroundColor = '#00b51d';
                }
            }
        }
    }
    else{
        obj3.style.backgroundColor = '#97d9a1';
    }

};


mv.app = {};
mv.app.download = function(){
    var oDd1 = document.getElementById('sign_download1')
    var oDd2 = document.getElementById('sign_download_img')
    oDd2.onmouseover = function(){
        oDd1.style.display = 'block';
    };
    oDd1.onmouseover = function(){
        oDd1.style.display = 'block';
    };
    oDd1.onmouseout = function(){
        oDd1.style.display = 'none';
    };
};
mv.app.change = function(){
    var oDd1 = document.getElementById('login1');
    var oDd2 = document.getElementById('login2');
    var oDd3 = document.getElementById('login3');
    var oDd4 = document.getElementById('login4');

    var oDb1 = document.getElementById('login1_btn2');
    var oDb2 = document.getElementById('login2_btn1');
    var oDb3 = document.getElementById('login3_btn1');
    var oDb6 = document.getElementById('login2_a2');
    var oDb7 = document.getElementById('login3_a2');
    var oDb8 = document.getElementById('login1_btn4_a');
    var oDb9 = document.getElementById('login1_btn4_b');
    var oDb10 = document.getElementById('login2_btn4_a');
    var oDb11 = document.getElementById('login2_btn4_b');

    var oDb4 = document.getElementById('bottom1');
    var oDb5 = document.getElementById('bottom2');

    var oDa1 = document.getElementById('login1_a');
    var oDa2 = document.getElementById('login2_a');
    var oDa3 = document.getElementById('login3_a');
    var oDa4 = document.getElementById('login4_a');

    

    var idispaly1 = oDd1.style.display;
    var idispaly2 = oDd2.style.display;
    var idispaly3 = oDd3.style.display;
    var idispaly4 = oDd4.style.display;

    
    oDb1.onclick = function(){
        oDd1.style.display = 'none';
        oDd2.style.display = 'block';
        oDd3.style.display = 'none';
        oDd4.style.display = 'none';
    };
    oDb2.onclick = function(){
        oDd1.style.display = 'block';
        oDd2.style.display = 'none';
        oDd3.style.display = 'none';
        oDd4.style.display = 'none';
    };
    oDb3.onclick = function(){
        oDd1.style.display = 'block';
        oDd2.style.display = 'none';
        oDd3.style.display = 'none';
        oDd4.style.display = 'none';
    };
    oDb6.onclick = function(){
        oDd1.style.display = 'none';
        oDd2.style.display = 'none';
        oDd3.style.display = 'block';
        oDd4.style.display = 'none';
    };
    oDb7.onclick = function(){
        oDd1.style.display = 'none';
        oDd2.style.display = 'block';
        oDd3.style.display = 'none';
        oDd4.style.display = 'none';
    };
    oDa1.onmouseover = function(){
        oDb4.style.display = 'block';
        oDb5.style.display = 'none';
    };
    oDa1.onmouseout = function(){
        oDb4.style.display = 'none';
        oDb5.style.display = 'none';
    };
    oDa2.onmouseover = function(){
        oDb4.style.display = 'block';
        oDb5.style.display = 'none';
    };
    oDa2.onmouseout = function(){
        oDb4.style.display = 'none';
        oDb5.style.display = 'none';
    };
    oDa3.onmouseover = function(){
        oDb4.style.display = 'block';
        oDb5.style.display = 'none';
    };
    oDa3.onmouseout = function(){
        oDb4.style.display = 'none';
        oDb5.style.display = 'none';
    };
    oDa4.onmouseover = function(){
        oDb5.style.display = 'block';
        oDb4.style.display = 'none';
    };
    oDa4.onmouseout = function(){
        oDb5.style.display = 'none';
        oDb4.style.display = 'none';
    };
    oDa1.onclick = function(){
        oDd1.style.display = 'none';
        oDd2.style.display = 'none';
        oDd3.style.display = 'none';
        oDd4.style.display = 'block';
    };
    oDa2.onclick = function(){
        oDd1.style.display = 'none';
        oDd2.style.display = 'none';
        oDd3.style.display = 'none';
        oDd4.style.display = 'block';
    };
    oDa3.onclick = function(){
        oDd1.style.display = 'none';
        oDd2.style.display = 'none';
        oDd3.style.display = 'none';
        oDd4.style.display = 'block';
    };
    oDa4.onclick = function(){
        oDd1.style.display = 'block';
        oDd2.style.display = 'none';
        oDd3.style.display = 'none';
        oDd4.style.display = 'none';
    };
    oDb8.onclick = function(){
        oDb8.style.display = 'none';
        oDb9.style.display = 'block';
    };
    oDb9.onclick = function(){
        oDb9.style.display = 'none';
        oDb8.style.display = 'block';
    };
    oDb10.onclick = function(){
        oDb10.style.display = 'none';
        oDb11.style.display = 'block';
    };
    oDb11.onclick = function(){
        oDb11.style.display = 'none';
        oDb10.style.display = 'block';
    };
};
mv.app.silp = function(){
    var oDd2 = document.getElementById('login_silp1')
    var oDd1 = document.getElementById('login_silp2')

    var oDiv = document.getElementById('login5_li_silp');
    var oImg = document.getElementById('login_silp_img');

    var oDa1 = document.getElementById('login_silp1_p');
    var oDa2 = document.getElementById('login_silp2_p');

    var iNow1 = 0;
    var iNow2 = 20;
    var iNum = 0;
    
    if(iNow2 == 20 ){
        oDa1.style.borderBottomColor = '#c1c1c1';
    }
    if(iNow2 != 20){
        oDa1.style.borderBottomColor = '#505050';
    }
    if(iNow2 == 157){
        oDa2.style.borderTopColor = '#c1c1c1';
    }
    if(iNow2 != 157){
        oDa2.style.borderTopColor = '#505050';
    }
    oDd1.onmousemove = function(){
        if(iNow2 == 20 ){
            oDa1.style.borderBottomColor = '#c1c1c1';
        }
        if(iNow2 != 20){
            oDa1.style.borderBottomColor = '#505050';
        }
        if(iNow2 == 157){
            oDa2.style.borderTopColor = '#c1c1c1';
        }
        if(iNow2 != 157){
            oDa2.style.borderTopColor = '#505050';
        }
    };
    oDd2.onmousemove = function(){
        if(iNow2 == 20 ){
            oDa1.style.borderBottomColor = '#c1c1c1';
        }
        if(iNow2 != 20){
            oDa1.style.borderBottomColor = '#505050';
        }
        if(iNow2 == 157){
            oDa2.style.borderTopColor = '#c1c1c1';
        }
        if(iNow2 != 157){
            oDa2.style.borderTopColor = '#505050';
        }
    };
    

    oDd1.onclick = function(){
        if(iNow1 > -658){
            if(iNow1-54 > -658){
                mv.ui.moveup(oDiv,iNow1,iNow1-54);
                iNow1 = iNow1 - 54;
            }
            else{
                mv.ui.moveup(oDiv,iNow1,-658);
                iNow1 = -658;
            }
            
        }
        if(iNow2 < 157){
            if(iNow2+12 < 157){
                mv.ui.moveup(oImg,iNow2,iNow2+12);
                iNow2 = iNow2 + 12;
            }
            else{
                mv.ui.moveup(oImg,iNow2,157);
                iNow2 = 157;
            }
        }
    };
    oDd2.onclick = function(){
        if(iNow1 < 0){
            if(iNow1+54 <= 0){
                mv.ui.moveup(oDiv,iNow1,iNow1+54);
                iNow1 = iNow1 + 54;
            }
            else{
                mv.ui.moveup(oDiv,iNow1,0);
                iNow1 = 0;
            }
        }
        if(iNow2 > 20){
            if(iNow2-12 >= 20){
                mv.ui.moveup(oImg,iNow2,iNow2-12);
                iNow2 = iNow2 - 12;
            }
            else{
                mv.ui.moveup(oImg,iNow2,20);
                iNow2 = 20;
            }
        }
    };




    oDd1.onmouseover = function(){
        if(iNow2 < 157){
            oDd1.style.backgroundColor = '#c1c1c1';
        }
    };
    oDd1.onmouseout = function(){
        if(iNow2 <= 157){
            oDd1.style.backgroundColor = '#f1f1f1';
        }
    };
    oDd2.onmouseover = function(){
        if(iNow2 > 20){
            oDd2.style.backgroundColor = '#c1c1c1';
        }
    };
    oDd2.onmouseout = function(){
        if(iNow2 >= 20){
            oDd2.style.backgroundColor = '#f1f1f1';
        }
    };






    oDd1.onmousedown = function(){
        if(iNow1 > 157){
            oDa2.style.borderTopColor = '#ffffff';
            oDd1.style.backgroundColor = '#787878';
        }
    };
    oDd1.onmouseup = function(){
        oDa2.style.borderTopColor = '#505050';
        oDd1.style.backgroundColor = '#f1f1f1';
        if(iNow2 == 20 ){
            oDa1.style.borderBottomColor = '#c1c1c1';
        }
        if(iNow2 != 20){
            oDa1.style.borderBottomColor = '#505050';
        }
        if(iNow2 == 157){
            oDa2.style.borderTopColor = '#c1c1c1';
        }
        if(iNow2 != 157){
            oDa2.style.borderTopColor = '#505050';
        }
    };
    oDd2.onmousedown = function(){
        if(iNow2 < 20){
            oDa1.style.borderBottomColor = '#ffffff';
            oDd2.style.backgroundColor = '#787878';
        }
    };
    oDd2.onmouseup = function(){
        oDa1.style.borderBottomColor = '#505050';
        oDd2.style.backgroundColor = '#f1f1f1';
        if(iNow2 == 20 ){
            oDa1.style.borderBottomColor = '#c1c1c1';
        }
        if(iNow2 != 20){
            oDa1.style.borderBottomColor = '#505050';
        }
        if(iNow2 == 157){
            oDa2.style.borderTopColor = '#c1c1c1';
        }
        if(iNow2 != 157){
            oDa2.style.borderTopColor = '#505050';
        }
    };


};
mv.app.choose = function(){

    iNow1 = 0;
    iNow2 = 0;
    iNow3 = 0; 

    var oLi1 = document.getElementById('login5_li1')
    var oLi2 = document.getElementById('login5_li2')
    var oLi3 = document.getElementById('login5_li3')
    var oLi4 = document.getElementById('login5_li4')
    var oLi5 = document.getElementById('login5_li5')
    var oLi6 = document.getElementById('login5_li6')
    var oLi7 = document.getElementById('login5_li7')
    var oLi8 = document.getElementById('login5_li8')
    var oLi9 = document.getElementById('login5_li9')
    var oLi10 = document.getElementById('login5_li10')
    var oLi11 = document.getElementById('login5_li11')
    var oLi12 = document.getElementById('login5_li12')
    var oLi13 = document.getElementById('login5_li13')
    var oLi14 = document.getElementById('login5_li14')
    var oLi15 = document.getElementById('login5_li15')
    var oLi16 = document.getElementById('login5_li16')
    var oLi17 = document.getElementById('login5_li17')
    var oLi18 = document.getElementById('login5_li18')
    var oLi19 = document.getElementById('login5_li19')
    var oLi20 = document.getElementById('login5_li20')
    var oLi21 = document.getElementById('login5_li21')
    var oLi22 = document.getElementById('login5_li22')
    var oLi23 = document.getElementById('login5_li23')
    var oLi24 = document.getElementById('login5_li24')
    var oLi25 = document.getElementById('login5_li25')
    var oLi26 = document.getElementById('login5_li26')
    var oLi27 = document.getElementById('login5_li27')

    var oBa1 = document.getElementById('login5_li1_a1')
    var oBa2 = document.getElementById('login5_li2_a1')
    var oBa3 = document.getElementById('login5_li3_a1')
    var oBa4 = document.getElementById('login5_li4_a1')
    var oBa5 = document.getElementById('login5_li5_a1')
    var oBa6 = document.getElementById('login5_li6_a1')
    var oBa7 = document.getElementById('login5_li7_a1')
    var oBa8 = document.getElementById('login5_li8_a1')
    var oBa9 = document.getElementById('login5_li9_a1')
    var oBa10 = document.getElementById('login5_li10_a1')
    var oBa11 = document.getElementById('login5_li11_a1')
    var oBa12 = document.getElementById('login5_li12_a1')
    var oBa13 = document.getElementById('login5_li13_a1')
    var oBa14 = document.getElementById('login5_li14_a1')
    var oBa15 = document.getElementById('login5_li15_a1')
    var oBa16 = document.getElementById('login5_li16_a1')
    var oBa17 = document.getElementById('login5_li17_a1')
    var oBa18 = document.getElementById('login5_li18_a1')
    var oBa19 = document.getElementById('login5_li19_a1')
    var oBa20 = document.getElementById('login5_li20_a1')
    var oBa21 = document.getElementById('login5_li21_a1')
    var oBa22 = document.getElementById('login5_li22_a1')
    var oBa23 = document.getElementById('login5_li23_a1')
    var oBa24 = document.getElementById('login5_li24_a1')
    var oBa25 = document.getElementById('login5_li25_a1')
    var oBa26 = document.getElementById('login5_li26_a1')
    var oBa27 = document.getElementById('login5_li27_a1')


    var oDa1 = document.getElementById('login5_li1_a2')
    var oDa2 = document.getElementById('login5_li2_a2')
    var oDa3 = document.getElementById('login5_li3_a2')
    var oDa4 = document.getElementById('login5_li4_a2')
    var oDa5 = document.getElementById('login5_li5_a2')
    var oDa6 = document.getElementById('login5_li6_a2')
    var oDa7 = document.getElementById('login5_li7_a2')
    var oDa8 = document.getElementById('login5_li8_a2')
    var oDa9 = document.getElementById('login5_li9_a2')
    var oDa10 = document.getElementById('login5_li10_a2')
    var oDa11 = document.getElementById('login5_li11_a2')
    var oDa12 = document.getElementById('login5_li12_a2')
    var oDa13 = document.getElementById('login5_li13_a2')
    var oDa14 = document.getElementById('login5_li14_a2')
    var oDa15 = document.getElementById('login5_li15_a2')
    var oDa16 = document.getElementById('login5_li16_a2')
    var oDa17 = document.getElementById('login5_li17_a2')
    var oDa18 = document.getElementById('login5_li18_a2')
    var oDa19 = document.getElementById('login5_li19_a2')
    var oDa20 = document.getElementById('login5_li20_a2')
    var oDa21 = document.getElementById('login5_li21_a2')
    var oDa22 = document.getElementById('login5_li22_a2')
    var oDa23 = document.getElementById('login5_li23_a2')
    var oDa24 = document.getElementById('login5_li24_a2')
    var oDa25 = document.getElementById('login5_li25_a2')
    var oDa26 = document.getElementById('login5_li26_a2')
    var oDa27 = document.getElementById('login5_li27_a2')

    var aImg1 = document.getElementById('login5_li1_img')
    var aImg2 = document.getElementById('login5_li2_img')
    var aImg3 = document.getElementById('login5_li3_img')
    var aImg4 = document.getElementById('login5_li4_img')
    var aImg5 = document.getElementById('login5_li5_img')
    var aImg6 = document.getElementById('login5_li6_img')
    var aImg7 = document.getElementById('login5_li7_img')
    var aImg8 = document.getElementById('login5_li8_img')
    var aImg9 = document.getElementById('login5_li9_img')
    var aImg10 = document.getElementById('login5_li10_img')
    var aImg11 = document.getElementById('login5_li11_img')
    var aImg12 = document.getElementById('login5_li12_img')
    var aImg13 = document.getElementById('login5_li13_img')
    var aImg14 = document.getElementById('login5_li14_img')
    var aImg15 = document.getElementById('login5_li15_img')
    var aImg16 = document.getElementById('login5_li16_img')
    var aImg17 = document.getElementById('login5_li17_img')
    var aImg18 = document.getElementById('login5_li18_img')
    var aImg19 = document.getElementById('login5_li19_img')
    var aImg20 = document.getElementById('login5_li20_img')
    var aImg21 = document.getElementById('login5_li21_img')
    var aImg22 = document.getElementById('login5_li22_img')
    var aImg23 = document.getElementById('login5_li23_img')
    var aImg24 = document.getElementById('login5_li24_img')
    var aImg25 = document.getElementById('login5_li25_img')
    var aImg26 = document.getElementById('login5_li26_img')
    var aImg27 = document.getElementById('login5_li27_img')


    var oDd1 = document.getElementById('login1');
    var oDd2 = document.getElementById('login2');
    var oDd3 = document.getElementById('login3');
    var oDd4 = document.getElementById('login4');
    var oDd5 = document.getElementById('login5');
    
    var oImg1 = document.getElementById('login_logo_img1');
    var oImg2 = document.getElementById('login_logo_img2');

    var oBtn1 = document.getElementById('login1_from_btn');
    var oBtn2 = document.getElementById('login3_from_btn');

    oImg1.onmouseover = function(){
        oImg1.style.display = 'none';
        oImg2.style.display = 'block';
    };
    oImg2.onmouseover = function(){
        oImg1.style.display = 'none';
        oImg2.style.display = 'block';
    };
    oImg1.onmouseout = function(){
        oImg2.style.display = 'none';
        oImg1.style.display = 'block';
    };
    oImg2.onclick = function(){
        oDd5.style.display = 'none';
    };
    oBtn1.onclick = function(){
        oDd5.style.display = 'block';
    };
    oBtn2.onclick = function(){
        oDd5.style.display = 'block';
    };
    oLi1.onclick = function(){
        oDd5.style.display = 'none';
        oBa1.style.color = '#42bd56';
        oDa1.style.color = '#42bd56';
        aImg1.style.display = 'block';
        oBtn1.value = '+86';
        oBtn2.value = '+86';
        if(iNow1 == 0){
            iNow1 = aImg1;
            iNow2 = oBa1;
            iNow3 = oDa1;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg1;
            iNow2 = oBa1;
            iNow3 = oDa1;
        }
        
    }
    oLi2.onclick = function(){
        oDd5.style.display = 'none';
        oBa2.style.color = '#42bd56';
        oDa2.style.color = '#42bd56';
        aImg2.style.display = 'block';
        oBtn1.value = '+852';
        oBtn2.value = '+852';
        if(iNow1 == 0){
            iNow1 = aImg2;
            iNow2 = oBa2;
            iNow3 = oDa2;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg2;
            iNow2 = oBa2;
            iNow3 = oDa2;
        }
    }
    oLi3.onclick = function(){
        oDd5.style.display = 'none';
        oBa3.style.color = '#42bd56';
        oDa3.style.color = '#42bd56';
        aImg3.style.display = 'block';
        oBtn1.value = '+853';
        oBtn2.value = '+853';
        if(iNow1 == 0){
            iNow1 = aImg3;
            iNow2 = oBa3;
            iNow3 = oDa3;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg3;
            iNow2 = oBa3;
            iNow3 = oDa3;
        }
    }
    oLi4.onclick = function(){
        oDd5.style.display = 'none';
        oBa4.style.color = '#42bd56';
        oDa4.style.color = '#42bd56';
        aImg4.style.display = 'block';
        oBtn1.value = '+886';
        oBtn2.value = '+886';
        if(iNow1 == 0){
            iNow1 = aImg4;
            iNow2 = oBa4;
            iNow3 = oDa4;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg4;
            iNow2 = oBa4;
            iNow3 = oDa4;
        }
    }
    oLi5.onclick = function(){
        oDd5.style.display = 'none';
        oBa5.style.color = '#42bd56';
        oDa5.style.color = '#42bd56';
        aImg5.style.display = 'block';
        oBtn1.value = '+81';
        oBtn2.value = '+81';
        if(iNow1 == 0){
            iNow1 = aImg5;
            iNow2 = oBa5;
            iNow3 = oDa5;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg5;
            iNow2 = oBa5;
            iNow3 = oDa5;
        }
    }
    oLi6.onclick = function(){
        oDd5.style.display = 'none';
        oBa6.style.color = '#42bd56';
        oDa6.style.color = '#42bd56';
        aImg6.style.display = 'block';
        oBtn1.value = '+82';
        oBtn2.value = '+82';
        if(iNow1 == 0){
            iNow1 = aImg6;
            iNow2 = oBa6;
            iNow3 = oDa6;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg6;
            iNow2 = oBa6;
            iNow3 = oDa6;
        }
    }
    oLi7.onclick = function(){
        oDd5.style.display = 'none';
        oBa2.style.color = '#42bd56';
        oDa2.style.color = '#42bd56';
        aImg2.style.display = 'block';
        oBtn1.value = '+65';
        oBtn2.value = '+65';
        if(iNow1 == 0){
            iNow1 = aImg7;
            iNow2 = oBa7;
            iNow3 = oDa7;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg7;
            iNow2 = oBa7;
            iNow3 = oDa7;
        }
    }
    oLi8.onclick = function(){
        oDd5.style.display = 'none';
        oBa2.style.color = '#42bd56';
        oDa2.style.color = '#42bd56';
        aImg2.style.display = 'block';
        oBtn1.value = '+66';
        oBtn2.value = '+66';
        if(iNow1 == 0){
            iNow1 = aImg8;
            iNow2 = oBa8;
            iNow3 = oDa8;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg8;
            iNow2 = oBa8;
            iNow3 = oDa8;
        }       
    }
    oLi9.onclick = function(){
        oDd5.style.display = 'none';
        oBa9.style.color = '#42bd56';
        oDa9.style.color = '#42bd56';
        aImg9.style.display = 'block';
        oBtn1.value = '+60';
        oBtn2.value = '+60';
        if(iNow1 == 0){
            iNow1 = aImg9;
            iNow2 = oBa9;
            iNow3 = oDa9;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg9;
            iNow2 = oBa9;
            iNow3 = oDa9;
        }
    }
    oLi10.onclick = function(){
        oDd5.style.display = 'none';
        oBa10.style.color = '#42bd56';
        oDa10.style.color = '#42bd56';
        aImg10.style.display = 'block';
        oBtn1.value = '+1';
        oBtn2.value = '+1';
        if(iNow1 == 0){
            iNow1 = aImg10;
            iNow2 = oBa10;
            iNow3 = oDa10;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg10;
            iNow2 = oBa10;
            iNow3 = oDa10;
        }
    }
    oLi11.onclick = function(){
        oDd5.style.display = 'none';
        oBa11.style.color = '#42bd56';
        oDa11.style.color = '#42bd56';
        aImg11.style.display = 'block';
        oBtn1.value = '+1';
        oBtn2.value = '+1';
        if(iNow1 == 0){
            iNow1 = aImg11;
            iNow2 = oBa11;
            iNow3 = oDa11;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg11;
            iNow2 = oBa11;
            iNow3 = oDa11;
        }
    }
    oLi12.onclick = function(){
        oDd5.style.display = 'none';
        oBa12.style.color = '#42bd56';
        oDa12.style.color = '#42bd56';
        aImg12.style.display = 'block';
        oBtn1.value = '+61';
        oBtn2.value = '+61';
        if(iNow1 == 0){
            iNow1 = aImg12;
            iNow2 = oBa12;
            iNow3 = oDa12;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg12;
            iNow2 = oBa12;
            iNow3 = oDa12;
        }   
    }
    oLi13.onclick = function(){
        oDd5.style.display = 'none';
        oBa13.style.color = '#42bd56';
        oDa13.style.color = '#42bd56';
        aImg13.style.display = 'block';
        oBtn1.value = '+44';
        oBtn2.value = '+44';
        if(iNow1 == 0){
            iNow1 = aImg13;
            iNow2 = oBa13;
            iNow3 = oDa13;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg13;
            iNow2 = oBa13;
            iNow3 = oDa13;
        }
    }
    oLi14.onclick = function(){
        oDd5.style.display = 'none';
        oBa14.style.color = '#42bd56';
        oDa14.style.color = '#42bd56';
        aImg14.style.display = 'block';
        oBtn1.value = '+49';
        oBtn2.value = '+49';
        if(iNow1 == 0){
            iNow1 = aImg14;
            iNow2 = oBa14;
            iNow3 = oDa14;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg14;
            iNow2 = oBa14;
            iNow3 = oDa14;
        }
    }
    oLi15.onclick = function(){
        oDd5.style.display = 'none';
        oBa15.style.color = '#42bd56';
        oDa15.style.color = '#42bd56';
        aImg15.style.display = 'block';
        oBtn1.value = '+33';
        oBtn2.value = '+33';
        if(iNow1 == 0){
            iNow1 = aImg15;
            iNow2 = oBa15;
            iNow3 = oDa15;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg15;
            iNow2 = oBa15;
            iNow3 = oDa15;
        } 
    }
    oLi16.onclick = function(){
        oDd5.style.display = 'none';
        oBa16.style.color = '#42bd56';
        oDa16.style.color = '#42bd56';
        aImg16.style.display = 'block';
        oBtn1.value = '+7';
        oBtn2.value = '+7';
        if(iNow1 == 0){
            iNow1 = aImg16;
            iNow2 = oBa16;
            iNow3 = oDa16;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg16;
            iNow2 = oBa16;
            iNow3 = oDa16;
        }     
    }
    oLi17.onclick = function(){
        oDd5.style.display = 'none';
        oBa17.style.color = '#42bd56';
        oDa17.style.color = '#42bd56';
        aImg17.style.display = 'block';
        oBtn1.value = '+91';
        oBtn2.value = '+91';
        if(iNow1 == 0){
            iNow1 = aImg17;
            iNow2 = oBa17;
            iNow3 = oDa17;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg17;
            iNow2 = oBa17;
            iNow3 = oDa17;
        }  
    }
    oLi18.onclick = function(){
        oDd5.style.display = 'none';
        oBa18.style.color = '#42bd56';
        oDa18.style.color = '#42bd56';
        aImg18.style.display = 'block';
        oBtn1.value = '+64';
        oBtn2.value = '+64';
        if(iNow1 == 0){
            iNow1 = aImg18;
            iNow2 = oBa18;
            iNow3 = oDa18;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg18;
            iNow2 = oBa18;
            iNow3 = oDa18;
        } 
    }
    oLi19.onclick = function(){
        oDd5.style.display = 'none';
        oBa19.style.color = '#42bd56';
        oDa19.style.color = '#42bd56';
        aImg19.style.display = 'block';
        oBtn1.value = '+39';
        oBtn2.value = '+39';
        if(iNow1 == 0){
            iNow1 = aImg19;
            iNow2 = oBa19;
            iNow3 = oDa19;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg19;
            iNow2 = oBa19;
            iNow3 = oDa19;
        }  
    }
    oLi20.onclick = function(){
        oDd5.style.display = 'none';
        oBa20.style.color = '#42bd56';
        oDa20.style.color = '#42bd56';
        aImg20.style.display = 'block';
        oBtn1.value = '+31';
        oBtn2.value = '+31';
        if(iNow1 == 0){
            iNow1 = aImg20;
            iNow2 = oBa20;
            iNow3 = oDa20;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg20;
            iNow2 = oBa20;
            iNow3 = oDa20;
        }  
    }
    oLi21.onclick = function(){
        oDd5.style.display = 'none';
        oBa21.style.color = '#42bd56';
        oDa21.style.color = '#42bd56';
        aImg21.style.display = 'block';
        oBtn1.value = '+34';
        oBtn2.value = '+34';
        if(iNow1 == 0){
            iNow1 = aImg21;
            iNow2 = oBa21;
            iNow3 = oDa21;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg21;
            iNow2 = oBa21;
            iNow3 = oDa21;
        }
    }
    oLi22.onclick = function(){
        oDd5.style.display = 'none';
        oBa22.style.color = '#42bd56';
        oDa22.style.color = '#42bd56';
        aImg22.style.display = 'block';
        oBtn1.value = '+41';
        oBtn2.value = '+41';
        if(iNow1 == 0){
            iNow1 = aImg22;
            iNow2 = oBa22;
            iNow3 = oDa22;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg22;
            iNow2 = oBa22;
            iNow3 = oDa22;
        }
    }
    oLi23.onclick = function(){
        oDd5.style.display = 'none';
        oBa23.style.color = '#42bd56';
        oDa23.style.color = '#42bd56';
        aImg23.style.display = 'block';
        oBtn1.value = '+370';
        oBtn2.value = '+370';
        if(iNow1 == 0){
            iNow1 = aImg23;
            iNow2 = oBa23;
            iNow3 = oDa23;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg23;
            iNow2 = oBa23;
            iNow3 = oDa23;
        }
    }
    oLi24.onclick = function(){
        oDd5.style.display = 'none';
        oBa24.style.color = '#42bd56';
        oDa24.style.color = '#42bd56';
        aImg24.style.display = 'block';
        oBtn1.value = '+63';
        oBtn2.value = '+63';
        if(iNow1 == 0){
            iNow1 = aImg24;
            iNow2 = oBa24;
            iNow3 = oDa24;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg24;
            iNow2 = oBa24;
            iNow3 = oDa24;
        }
    }

    oLi25.onclick = function(){
        oDd5.style.display = 'none';
        oBa25.style.color = '#42bd56';
        oDa25.style.color = '#42bd56';
        aImg25.style.display = 'block';
        oBtn1.value = '+62';
        oBtn2.value = '+62';
        if(iNow1 == 0){
            iNow1 = aImg25;
            iNow2 = oBa25;
            iNow3 = oDa25;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg25;
            iNow2 = oBa25;
            iNow3 = oDa25;
        }
    }
    oLi26.onclick = function(){
        oDd5.style.display = 'none';
        oBa26.style.color = '#42bd56';
        oDa26.style.color = '#42bd56';
        aImg26.style.display = 'block';
        oBtn1.value = '+84';
        oBtn2.value = '+84';
        if(iNow1 == 0){
            iNow1 = aImg26;
            iNow2 = oBa26;
            iNow3 = oDa26;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg26;
            iNow2 = oBa26;
            iNow3 = oDa26;
        }
    }
    oLi27.onclick = function(){
        oDd5.style.display = 'none';
        oBa27.style.color = '#42bd56';
        oDa27.style.color = '#42bd56';
        aImg27.style.display = 'block';
        oBtn1.value = '+971';
        oBtn2.value = '+971';
        if(iNow1 == 0){
            iNow1 = aImg27;
            iNow2 = oBa27;
            iNow3 = oDa27;
        }
        else{
            iNow1.style.display = 'none';
            iNow2.style.color = '#494949';
            iNow3.style.color = '#aaaaaa';
            iNow1 = aImg27;
            iNow2 = oBa27;
            iNow3 = oDa27;
        }
    }
}
mv.app.totext = function(){

    oText1 = document.getElementById('text1');
    oText2 = document.getElementById('text2');
    oText3 = document.getElementById('text3');
    oText4 = document.getElementById('text4');
    oText5 = document.getElementById('text5');
    oText6 = document.getElementById('text6');
    oText7 = document.getElementById('text7');

    oBtn1 = document.getElementById('login1_btn3');
    oBtn2 = document.getElementById('login2_btn3');
    oBtn3 = document.getElementById('login3_btn3');

    mv.ui.textchange(oText1,'书籍，电影，音乐，小组，小站，成员');
    mv.ui.textchange(oText2,'手机号');
    mv.ui.textchange(oText3,'验证码');
    mv.ui.textchange(oText4,'手机号/邮箱');
    mv.ui.textchange(oText5,'密码');
    mv.ui.textchange(oText6,'手机号');
    mv.ui.textchange(oText7,'密码');
    
    mv.ui.textlogin(oText2,'手机号',oText3,'验证码',oBtn1);
    mv.ui.textlogin(oText4,'手机号/邮箱',oText5,'密码',oBtn2);
    mv.ui.textlogin(oText6,'手机号',oText7,'密码',oBtn3);
    
};