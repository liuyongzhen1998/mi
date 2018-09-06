window.onload = function(){
	var cart_a = document.querySelector('.hover_cart a');
	var cart = document.querySelector('.cart');
    var nav = document.querySelector('.nav');
	var cart_p = document.querySelector('.cart p');
	var header = document.querySelector('.header-nav-menu');
	var Goodss = document.querySelector('.Goods');
	var Good_cont = document.querySelector('.Good_cont');
	var tabitem_b = document.querySelector('.tabitem_b');
    var slider = document.querySelector('.slider');
    var slider_a = document.querySelectorAll('.slider a');
    var table_list = document.querySelectorAll('.table_list li');
    var home_hero_sub = document.querySelector('.home-hero-sub');
    //秒
    var time_s = document.querySelector('#time_s');
    // 分
    var time_m = document.querySelector('#time_m');
    // 小时
    var time_d = document.querySelector('#time_d');

	cart_a.onmouseenter = function(){
		cart_p.style.transition = 'all 1s';
		cart.style.transition = 'all 0.5s';
		cart_p.style.display = 'block';
		cart_p.style.top = '40px';
		cart.style.border = '1px solid #ccc';
		cart.style.borderTop = null;
		cart_a.style.background  = '#fff';
		cart_a.style.color  = '#FF6700';
		cart.style.height = '98px';
	}
	nav.onmouseover = function(){
		cart_p.style.top = null;
		cart_p.style.display = null;
		cart.style.border = null;
		cart_a.style.background = null;
		cart_a.style.color  = null;
		cart.style.height = null;
	}
	cart.onmouseout = function(){
		cart_p.style.top = null;
		cart_p.style.display = null;
		cart.style.border = null;
		cart_a.style.background= null;
		cart_a.style.color  = null;
		cart.style.height = null;
	}

	//tab切换
    $(".tabitem").hover(function(){
    	header.style.height = '220px';
		header.style.transition = 'all 0.5s';
        var lis=$(".tabitem")
        var divs=$(".tabcon")
        for(var i=0;i<lis.length;i++){
            if(lis[i]==this){
                $('.tabitem').removeClass('active')
                $('.tabcon').removeClass('active')
                lis.eq(i).addClass("active")
                divs.eq(i).addClass("active")
            }
        }
    })
    header.onmouseout = function(){
    	header.style.boxShadow = null;
    	header.style.height = null;
    }
	$(".tabitem_b").mouseenter(function(){
		Good_cont.style.display = 'block';
        var lis=$(".tabitem_b")
        for(var j=0; j<2;j++){
            slider_a[j].style.zIndex  = '-1'
        }
        for(var i=0;i<lis.length;i++){
            lis[i].style.background = null;
            if(lis[i]==this){
                    lis[i].style.background = '#FF6700';
                switch (i) {
                	case 0:Goodss.style.marginTop = '0px';
                		   Good_cont.style.width = '991px';
                	break;
                	case 1:Goodss.style.marginTop = '-462px';
                		   Good_cont.style.width = '991px';
                	break;
                	case 2:Goodss.style.marginTop = '-924px';
                		   Good_cont.style.width = '991px';
                	break;
                	case 3:Goodss.style.marginTop = '-1386px';
                		   Good_cont.style.width = '500px';
                	break;
                	case 4:Goodss.style.marginTop = '-1846px';
                		   Good_cont.style.width = '500px';
                	break;
                	case 5:Goodss.style.marginTop = '-2308px';
                		   Good_cont.style.width = '991px';
                	break;
                	case 6:Goodss.style.marginTop = '-2770px';
                		   Good_cont.style.width = '991px';
                	break;
                	case 7:Goodss.style.marginTop = '-3232px';
                		   Good_cont.style.width = '991px';
                	break;
                	case 8:Goodss.style.marginTop = '-3694px';
                		   Good_cont.style.width = '991px';
                	break;
                	case 9:Goodss.style.marginTop = '-4156px';
                		   Good_cont.style.width = '991px';
                	break;
                }
            }
        }
    })

    home_hero_sub.onmouseenter = function(){
        Good_cont.style.display = null;
        for(var j=0; j<2;j++){
            slider_a[j].style.zIndex  = null;
        }
        for(var i=0;i<table_list.length;i++){
            table_list[i].style.background = null;
        }
    }

    function s_date(){
            var now = new Date();
            var date = now.getDate();//得到日期
            if (date < 10) date = "0" + date;
            var time = "";
            var a = new Date("2018/8/"+date+" 22:00").getTime();
            var timestamp=new Date().getTime();
                time = a - timestamp;
            var s = time/1000;
            if (Math.floor(s) <= 0) {
               s = 0;
            }
            if ((s % 60) < 10 ){
                time_s.innerHTML = '0'+Math.floor(s % 60);
            }else{
                time_s.innerHTML = Math.floor(s % 60);
            }
            if((s / 60 % 60) < 10){
                time_m.innerHTML = '0'+Math.floor(s / 60 % 60);
            }else{
                time_m.innerHTML = Math.floor(s / 60 % 60);
            }
            if((s / 3600) < 10){
                time_d.innerHTML = '0'+Math.floor(s / 3600);
            }else{
                time_d.innerHTML = Math.floor(s / 3600);
            }

        }
    a = setInterval(s_date,1000);



    var but_left = document.querySelector('.control-prev');
    var but_right = document.querySelector('.control-next');
    var cont_lunbo = document.querySelector('.cont_lunbo');
    but_right.onclick = function(){
        but_left.classList.remove("control-disabled");
        but_right.classList.add("control-disabled");
        cont_lunbo.style.left =  '-976px';
    }
     but_left.onclick = function(){
        but_right.classList.remove("control-disabled");
        but_left.classList.add("control-disabled");
        cont_lunbo.style.left = null;
    }

// *************************************************
    var ul_name = document.querySelectorAll('.appliances .cont .ul_name li');
    var cont_ul = document.querySelectorAll('.appliances .cont .ul_cont ul');
        ul_name[0].style.color = '#ff6700';
        ul_name[0].style.borderBottom = '2px solid #ff6700';
            cont_ul[0].style.display = null;
            ul_name[0].style.borderBottom = '2px solid #ff6700';
    for(var i = 0;i<ul_name.length; i++){
        ul_name[i].index = i;
        ul_name[i].onmouseover = function(){
            for(var j=0;j<cont_ul.length;j++){
                cont_ul[j].style.display = 'none';
                ul_name[j].style.color = null;
                ul_name[j].style.borderBottom = null;
            }

            ul_name[this.index].style.color = '#ff6700';
            ul_name[this.index].style.borderBottom = '2px solid #ff6700';
            cont_ul[this.index].style.display = null;
        }
    }
// *************************************************
    var ul_name_a = document.querySelectorAll('.capacity .cont .ul_name_b li');
    var cont_ul_a = document.querySelectorAll('.capacity .cont .ul_cont ul');
        ul_name_a[0].style.color = '#ff6700';
        ul_name_a[0].style.borderBottom = '2px solid #ff6700';
    for(var j = 0;j<ul_name_a.length; j++){
        ul_name_a[j].index = j;
        ul_name_a[j].onmouseover = function(){
            for(var j=0;j<cont_ul_a.length;j++){
                cont_ul_a[j].style.display = 'none';
                ul_name_a[j].style.color = null;
                ul_name_a[j].style.borderBottom = null;
            }
            ul_name_a[this.index].style.color = '#ff6700';
            ul_name_a[this.index].style.borderBottom = '2px solid #ff6700';
            cont_ul_a[this.index].style.display = null;
        }
    }
// ******************************************************
    var ul_name_b = document.querySelectorAll('.match .cont .ul_name li');
    var cont_ul_b = document.querySelectorAll('.match .cont .ul_cont ul');
        ul_name_b[0].style.color = '#ff6700';
        ul_name_b[0].style.borderBottom = '2px solid #ff6700';
    for(var j = 0;j<ul_name_b.length; j++){
        ul_name_b[j].index = j;
        ul_name_b[j].onmouseover = function(){
            for(var j=0;j<cont_ul_b.length;j++){
                cont_ul_b[j].style.display = 'none';
                ul_name_b[j].style.color = null;
                ul_name_b[j].style.borderBottom = null;
            }
            ul_name_b[this.index].style.color = '#ff6700';
            ul_name_b[this.index].style.borderBottom = '2px solid #ff6700';
            cont_ul_b[this.index].style.display = null;
        }
    }
    // ***************************************
    var ul_name_c = document.querySelectorAll('.parts .cont .ul_name li');
    var cont_ul_c = document.querySelectorAll('.parts .cont .ul_cont ul');
        ul_name_c[0].style.color = '#ff6700';
        ul_name_c[0].style.borderBottom = '2px solid #ff6700';
    for(var j = 0;j<ul_name_b.length; j++){
        ul_name_c[j].index = j;
        ul_name_c[j].onmouseover = function(){
            for(var j=0;j<cont_ul_c.length;j++){
                cont_ul_c[j].style.display = 'none';
                ul_name_c[j].style.color = null;
                ul_name_c[j].style.borderBottom = null;
            }
            ul_name_c[this.index].style.color = '#ff6700';
            ul_name_c[this.index].style.borderBottom = '2px solid #ff6700';
            cont_ul_c[this.index].style.display = null;
        }
    }

    var ul_name_d = document.querySelectorAll('.rim .cont .ul_name li');
    var cont_ul_d = document.querySelectorAll('.rim .cont .ul_cont ul');
            ul_name_d[0].style.color = '#ff6700';
            ul_name_d[0].style.borderBottom = '2px solid #ff6700';
    for(var j = 0;j<ul_name_d.length; j++){
        ul_name_d[j].index = j;
        ul_name_d[j].onmouseover = function(){
            for(var j=0;j<cont_ul_d.length;j++){
                ul_name_d[j].style.color = null;
                ul_name_d[j].style.borderBottom = null;
            }
            ul_name_d[this.index].style.color = '#ff6700';
            ul_name_d[this.index].style.borderBottom = '2px solid #ff6700';
            cont_ul_d[this.index].style.display = null;
        }
    }
    // ****************************************************************
    // 为你推荐
    var recommend_but_left = document.querySelector('.recommend .control-prev');
    var recommend_but_fight = document.querySelector('.recommend .control-next');
    var recommend_lunbo = document.querySelector('.recommend .cont .lunbo');

    recommend_but_fight.onclick = function(){
        if(recommend_lunbo.style.left == 0){
            recommend_lunbo.style.left = '-1265px';
        }else if(recommend_lunbo.style.left == '-1265px'){
            recommend_lunbo.style.left = '-2520px';
            recommend_but_left.classList.remove("control-disabled");
            recommend_but_fight.classList.add("control-disabled");
        }
    }
    recommend_but_left.onclick = function(){
        if(recommend_lunbo.style.left == '-2520px'){
            recommend_lunbo.style.left = '-1265px';
        }else if(recommend_lunbo.style.left == '-1265px'){
            recommend_lunbo.style.left = null;
            recommend_but_fight.classList.remove("control-disabled");
            recommend_but_left.classList.add("control-disabled");
        }
    }


    // 第一个
    // *********************************
    var Content_a_lb_but_left = document.querySelector('.Content_lb .cont_a .control-prev');
    var Content_a_lb_but_fight = document.querySelector('.Content_lb .cont_a .control-next');
    var Content_a_lb_lunbo = document.querySelector('.Content_lb .cont_a .hidd');
    var Content_a_lb_pagers = document.querySelectorAll('.Content_lb .cont_a .pager');
    var list_a = 0;
    var onck = 0;

    for(var i=0;i<Content_a_lb_pagers.length;i++){
        Content_a_lb_pagers[i].index=i;
        Content_a_lb_pagers[i].onclick = function(){
            onck = this.index;
            if(this.index==0) list_a = 308;
            if(this.index==1) list_a = 0;
            if(this.index==2) list_a = -308;
            Content_a();
        }
    }
    var Content_a = Content_a_lb_but_fight.onclick = function(){
        for(var i=0; i<Content_a_lb_pagers.length;i++){
            Content_a_lb_pagers[i].classList.remove("pager-active");
        }
        if(list_a > -616){
            list_a -= 308;
            Content_a_lb_lunbo.style.left = list_a+'px';
        }
        if(list_a==0) onck=0;
        if(list_a== -308) onck=1;
        if(list_a== -616) onck=2;
        Content_a_lb_pagers[onck].classList.add("pager-active");
        }
    Content_a_lb_but_left.onclick = function(){
        for(var i=0; i<Content_a_lb_pagers.length;i++){
            Content_a_lb_pagers[i].classList.remove("pager-active");
        }
        if(list_a!=0){
            list_a+= 308;
            Content_a_lb_lunbo.style.left =list_a+'px';
        }
        if(list_a== 0) onck=0;
        if(list_a== -308) onck=1;
        if(list_a== -616) onck=2;
        Content_a_lb_pagers[onck].classList.add("pager-active");
    }

    // 第二个
    // *******************************************
    var Content_b_lb_but_left = document.querySelector('.Content_lb .cont_b .control-prev');
    var Content_b_lb_but_fight = document.querySelector('.Content_lb .cont_b .control-next');
    var Content_b_lb_lunbo = document.querySelector('.Content_lb .cont_b .hidd');
    var Content_b_lb_pagers = document.querySelectorAll('.Content_lb .cont_b .pager');
    var list_b = 0;
    var onck_b = 0;

    for(var i=0;i<Content_b_lb_pagers.length;i++){
        Content_b_lb_pagers[i].index=i;
        Content_b_lb_pagers[i].onclick = function(){
            onck_b = this.index;
            if(this.index==0) list_b = 308;
            if(this.index==1) list_b = 0;
            if(this.index==2) list_b = -308;
            Content_b();
        }
    }
    var Content_b = Content_b_lb_but_fight.onclick = function(){
        for(var i=0; i<Content_b_lb_pagers.length;i++){
            Content_b_lb_pagers[i].classList.remove("pager-active");
        }
        if(list_b > -616){
            list_b -= 308;
            Content_b_lb_lunbo.style.left = list_b+'px';
        }
        if(list_b==0) onck_b=0;
        if(list_b== -308) onck_b=1;
        if(list_b== -616) onck_b=2;
        Content_b_lb_pagers[onck_b].classList.add("pager-active");
        }
    Content_b_lb_but_left.onclick = function(){
        for(var i=0; i<Content_b_lb_pagers.length;i++){
            Content_b_lb_pagers[i].classList.remove("pager-active");
        }
        if(list_b!=0){
            list_b+= 308;
            Content_b_lb_lunbo.style.left =list_b+'px';
        }
        if(list_b== 0) onck_b=0;
        if(list_b== -308) onck_b=1;
        if(list_b== -616) onck_b=2;
        Content_b_lb_pagers[onck_b].classList.add("pager-active");
    }


    // 第三个
    // ***********************************
    var Content_c_lb_but_left = document.querySelector('.Content_lb .cont_c .control-prev');
    var Content_c_lb_but_fight = document.querySelector('.Content_lb .cont_c .control-next');
    var Content_c_lb_lunbo = document.querySelector('.Content_lb .cont_c .hidd');
    var Content_c_lb_pagers = document.querySelectorAll('.Content_lb .cont_c .pager');
    var list_c = 0;
    var onck_c = 0;

    for(var i=0;i<Content_c_lb_pagers.length;i++){
        Content_c_lb_pagers[i].index=i;
        Content_c_lb_pagers[i].onclick = function(){
            onck_c = this.index;
            if(this.index==0) list_c = 308;
            if(this.index==1) list_c = 0;
            if(this.index==2) list_c = -308;
            Content_c();
        }
    }
    var Content_c = Content_c_lb_but_fight.onclick = function(){
        for(var i=0; i<Content_c_lb_pagers.length;i++){
            Content_c_lb_pagers[i].classList.remove("pager-active");
        }
        if(list_c > -616){
            list_c -= 308;
            Content_c_lb_lunbo.style.left = list_c+'px';
        }
        if(list_c==0) onck_c=0;
        if(list_c== -308) onck_c=1;
        if(list_c== -616) onck_c=2;
        Content_c_lb_pagers[onck_c].classList.add("pager-active");
        }
    Content_c_lb_but_left.onclick = function(){
        for(var i=0; i<Content_c_lb_pagers.length;i++){
            Content_c_lb_pagers[i].classList.remove("pager-active");
        }
        if(list_c!=0){
            list_c+= 308;
            Content_c_lb_lunbo.style.left =list_c+'px';
        }
        if(list_c== 0) onck_c=0;
        if(list_c== -308) onck_c=1;
        if(list_c== -616) onck_c=2;
        Content_c_lb_pagers[onck_c].classList.add("pager-active");
    }


    // 第四个******************************
    var Content_d_lb_but_left = document.querySelector('.Content_lb .cont_d .control-prev');
    var Content_d_lb_but_fight = document.querySelector('.Content_lb .cont_d .control-next');
    var Content_d_lb_lunbo = document.querySelector('.Content_lb .cont_d .hidd');
    var Content_d_lb_pagers = document.querySelectorAll('.Content_lb .cont_d .pager');
    var list_d = 0;
    var onck_d = 0;

    for(var i=0;i<Content_d_lb_pagers.length;i++){
        Content_d_lb_pagers[i].index=i;
        Content_d_lb_pagers[i].onclick = function(){
            onck_d = this.index;
            if(this.index==0) list_d = 308;
            if(this.index==1) list_d = 0;
            if(this.index==2) list_d = -308;
            Content_d();
        }
    }
    var Content_d = Content_d_lb_but_fight.onclick = function(){
        for(var i=0; i<Content_d_lb_pagers.length;i++){
            Content_d_lb_pagers[i].classList.remove("pager-active");
        }
        if(list_d > -616){
            list_d -= 308;
            Content_d_lb_lunbo.style.left = list_d+'px';
        }
        if(list_d==0) onck_d=0;
        if(list_d== -308) onck_d=1;
        if(list_d== -616) onck_d=2;
        Content_d_lb_pagers[onck_d].classList.add("pager-active");
    }


    Content_d_lb_but_left.onclick = function(){
        for(var i=0; i<Content_d_lb_pagers.length;i++){
            Content_d_lb_pagers[i].classList.remove("pager-active");
        }
        if(list_d!=0){
            list_d+= 308;
            Content_d_lb_lunbo.style.left =list_d+'px';
        }
        if(list_d== 0) onck_d=0;
        if(list_d== -308) onck_d=1;
        if(list_d== -616) onck_d=2;
    Content_d_lb_pagers[onck_d].classList.add("pager-active");
    }

    var mp4_li = document.querySelectorAll('.buzzs ul li div');
    var mp4_div = document.querySelector('.mp4_cont');
    var mp4_center = document.querySelector('.mp4_cont .mp4');
    var but_mp4 = document.querySelector('.mp4_cont .mp4 .title span i');
    var mp4_img = document.querySelector('.mp4_cont .mp4 img');
    var mp4_but = document.querySelector('.mp4_cont .mp4>.play');
    var voida = document.querySelector('.mp4_cont .mp4 video');
    var voida_url = document.querySelector('.mp4_cont .mp4 video source');
    var mp4_name_h3 = document.querySelector('.mp4_cont .mp4 .title h3');
    var mp4_name = ['一团火','小米8，一部与众不同的手机','小米MIX 2S，一面科技 一面艺术','生活中无所不在的小爱同学']
    var mp4_img_url = ['imga/video/xmad_15318974928021_cthgC.jpg','imga/video/xmad_15278351912522_frJQc.jpg','imga/video/xmad_15278359339164_dDTJC.jpg','imga/video/xmad_15278358912266_LDHfI.jpg'];
    var mp4_url = ['https://v.mifile.cn/b2c-mimall-media/c2cb94c9485243e1767d43268fb90820.mp4','https://v.mifile.cn/b2c-mimall-media/ed921294fb62caf889d40502f5b38147.mp4','https://v.mifile.cn/b2c-mimall-media/53fc775dd6b29ecd8df3e2ea35129766.mp4','https://v.mifile.cn/b2c-mimall-media/69f7b9881f4ed7123f0d473dcd44d621.mp4']
    for(var i=0;i<mp4_li.length;i++){
        mp4_li[i].index =i;
        mp4_li[i].onclick = function(){
            // mp4_center.style.transition = 'all 1s';
            // mp4_center.style.opacity = 1;
            mp4_center.style.marginTop = "-298px";
            mp4_div.style.display = 'block';
            mp4_img.src = mp4_img_url[this.index];
            mp4_name_h3.innerHTML = mp4_name[this.index];
            voida.src = mp4_url[this.index];
        }
    }
    mp4_but.onclick = function(){
        mp4_img.style.display = 'none';
        voida.style.display = 'block';
        mp4_but.style.display = 'none';
    }
    but_mp4.onclick = function(){
        voida.pause();
        mp4_div.style.display = null;
    }
}