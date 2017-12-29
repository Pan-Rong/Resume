var jq=$.noConflict();//避免和模板字面量发生冲突
var arrowUpFlg=1;//0表示下移,用在箭头动画上
var gNum=0;//用于存储作品的索引
jq(function(){
    jq("#fullpageshow").fullpage({
        sectionsColor : ["#8786c9", "#77b4c4", "#90ac78", "#70cfaf"],
        anchors: ["homepage", "educationpage","workspage", "contactpage"],
		menu: "#menu",
        loopBottom: true
    });
    showImage(1);//显示默认作品图片
    showPersonalInform();
    jq(".icobox div").on("click",function(){
        jq(".icobox div").attr("class","");//清除原class
        var imgIconNum=jq(this).data("imageiconnum");
            jq(this).attr("class","active");
            //console.log(imgIconNum);
            showImage(imgIconNum);
    });
    setInterval(function(){//让箭头动起来
        if(arrowUpFlg){
            jq(".angledown").css({bottom:"0px"}); 
            arrowUpFlg=0;
        }else{
            jq(".angledown").css({bottom:"10px"});
            arrowUpFlg=1;
        }
        jq(".angledown").fadeToggle();  
    },800);
    jq(".imagetitle").hover(function(){
        jq(".imagebrief").css({"display":"block"});
        jq(".imagebrief").empty();
        var tempContent=`<div>${getImageBoxAndImageIntro[gNum-1].briefIntro}</div>`;
        jq(".imagebrief").append(tempContent);
    });
    jq(".imagetitle").mouseout(function(){
        jq(".imagebrief").empty();
        jq(".imagebrief").css({"display":"none"});
    });
});
function showPersonalInform(){
    jq(".introlist").empty();
    var arrLength=getPersonalInform.length-1;//最后一个是skillList
    //console.log(arrLength);
    for(var i=0;i<arrLength;i++){
        var tempDiv=`<div class="${getPersonalInform[i].className}">
                        <i class="${getPersonalInform[i].iconAndText[0]}"></i>
                        <p>${getPersonalInform[i].iconAndText[1]}</p>    
                    </div>`;
            jq(".introlist").append(tempDiv);    
    }
    jq(".skill").empty();
    var skArrLength=getPersonalInform[arrLength].skillList.length;
    for(var i=0;i<skArrLength;i++){
        var tempSkillList=`<div>
                                <i class="${getPersonalInform[arrLength].skillIcon}"></i>
                                <span>${getPersonalInform[arrLength].skillList[i]}</span>
                            </div>`;
            jq(".skill").append(tempSkillList);
    }
}
function showImage(num){//显示作品图片
    gNum=num;//用于鼠标移动到title上显示内容;
    jq(".imagebox").empty();//清空以便显示
    var tempImage=`<a href="${getImageBoxAndImageIntro[num-1].hrefValue}" target="_blank" title="点击体验">
                <img src="${getImageBoxAndImageIntro[num-1].imageSrc}"></a>`;
    //console.log(getImageBoxAndImageIntro[num-1].imageSrc);
    jq(".imagebox").append(tempImage);//显示最新信息
    /* --------- 以下显示作品标题-----------*/
    jq(".imagetitle").empty();//清空以便显示
    var tempP=jq("<p></p>");
    tempP.text(getImageBoxAndImageIntro[num-1].title);
    jq(".imagetitle").append(tempP);//显示最新信息
}
var getPersonalInform=[{    
        "className":"edubg",
        "iconAndText":["fa fa-mortar-board","学历/本科"],
    },{
        "className":"age",
        "iconAndText":["fa fa-clock-o","出生/92年"],
    },{
        "className":"location",
        "iconAndText":["fa fa-map-marker","目前/南京"],
    },{
        "className":"state",
        "iconAndText":["fa fa-smile-o","状态/求职"],
    },{
       "skillIcon":"fa fa-hand-o-right",
        "skillList":[
                        "计算机水平: 全国计算机二级、江苏省计算机二级（C++）、江苏省计算机三级（偏硬）证书",
                        "外语水平: 六级",
                        "应用工具: Visual Studio Code、codeOpen、git、photoshop",
                        "17年10月底自学前端开发",
                        "熟悉jquery、ajax、bootstrap、API等"
                    ]
    }
];
var getImageBoxAndImageIntro=[{
        "hrefValue":"indexcard.html",
        "imageSrc":"images/game.png",
        "title":"纸牌游戏",
        "briefIntro":"该游戏由纯js编写，未添加任何库。可实现游戏暂停、继续等操作"
    },{
        "hrefValue":"indexwiki.html",
        "imageSrc":"images/wiki.png",
        "title":"维基百科单词查询",
        "briefIntro":"该作品利用jQuery的Ajax等技术,通过维基百科API实现单词查询，点击可连接到维基百科了解详情"
    },{
        "hrefValue":"indexweather.html",
        "imageSrc":"images/weather.png",
        "title":"天气查询",
        "briefIntro":"该作品利用jQuery的Ajax等技术,通过聚合数据的API实现天气查询，并显示当天及未来五天的天气情况.背景图片及天气图标随因早中晚的不同变化"
    },{
        "hrefValue":"indextwitch.html",
        "imageSrc":"images/twitch.png",
        "title":"Twitch最受欢迎游戏排行",
        "briefIntro":"该作品利用jQuery的Ajax技术,通过Twitch的API实现Twitch上最受欢迎游戏前三名排行，且前两名的最近一周最热主播排行，点击可观看"
    },{
        "hrefValue":"indexdanmu.html",
        "imageSrc":"images/danmu.png",
        "title":"弹幕",
        "briefIntro":"该弹幕利用jQuery和bootstrap完成,可实现颜色随机，出现几率随机"
    },{
        "hrefValue":"indexquote.html",
        "imageSrc":"images/quote.png",
        "title":"随机引言",
        "briefIntro":"该作品利用jQuery、bootstrap及font-awesome完成,可实现颜色随机，出现几率随机"
    }
];