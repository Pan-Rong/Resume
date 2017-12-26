var jq=$.noConflict();//避免和模板字面量发生冲突
var arrowUpFlg=1;//0表示下移
jq(function(){
    jq('#fullpageshow').fullpage({
        sectionsColor : ['#8786c9', '#77b4c4', '#90ac78', '#70cfaf'],
        anchors: ['homepage', 'educationpage','workspage', 'contactpage'],
		menu: '#menu',
        loopBottom: true
    });
    setInterval(function(){
        jq.fn.fullpage.moveSlideRight();
    }, 3000);
    setInterval(function(){
        if(arrowUpFlg){
            jq(".angledown").css({bottom:"0px"}); 
            arrowUpFlg=0;
        }else{
            jq(".angledown").css({bottom:"10px"});
            
            arrowUpFlg=1;
        }
        jq(".angledown").fadeToggle();  
    },800);
});
