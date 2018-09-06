    var Content_d_lb_but_left = document.querySelector('.Content_lb .cont_d .control-prev');
    var Content_d_lb_but_fight = document.querySelector('.Content_lb .cont_d .control-next');
    var Content_c_lb_lunbo = document.querySelector('.Content_lb .cont_d .hidd');
    var Content_c_lb_pagers = document.querySelectorAll('.Content_lb .cont_d .pager');
    var list_c = 0;
    var onck_c = 0;

    for(var i=0;i<Content_c_lb_pagers.length;i++){
        Content_c_lb_pagers[i].index=i;
        Content_c_lb_pagers[i].onclick = function(){
            onck_c = this.index;
            if(this.index==0) list_c = 308;
            if(this.index==1) list_c = 0;
            if(this.index==2) list_c = -308;
            Content_a();
        }
    }
    var Content_a = Content_d_lb_but_fight.onclick = function(){
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
    Content_d_lb_but_left.onclick = function(){
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