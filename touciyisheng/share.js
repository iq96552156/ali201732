var friend_num = 0;
var sharedata = {
	//    以下有注释的部分可按求作修改

    'title':'《愉此一生》VIP免费看!!',//微信群配置(标题)
    'link':'https://iq96552156.github.io/ali201732/touciyisheng/index.html',//分享到群的链接
    'imgUrl':'https://chenshuju.github.io/xxoo02/static/images//73ac16eb8b7ae36d48fecf3555fabfff_256_256.png',//分享到群的连接上的图片
    'desc':'爱奇艺《愉此一生》免会员去广告直接观看。播放次数:32098768次',//分享到群的文字

    'qtitle':'爱奇艺新版《愉此一生》免费看',//朋友圈配置
    'qlink':'https://iq96552156.github.io/ali201732/touciyisheng/index.html',//分享到朋友圈的链接
    'qimgUrl':'https://chenshuju.github.io/xxoo02/static/images//73ac16eb8b7ae36d48fecf3555fabfff_256_256.png',//分享到朋友圈的链接上的图片
    'qdesc':'爱奇艺《愉此一生》免会员去广告直接观看。播放次数:32098768次',//分享到朋友圈的链接的标题
    'success':function(res){
        if(res == "friend"){
            friend_num++;
			$.cookie('touciyisheng_friend_num', friend_num); 
            if (friend_num >= 3) {
                layer.open({type: 1,title: false,shadeClose: true,area: '300px',offset:'160px',closeBtn:0,  content: '<div style="padding: 18px; line-height: 26px;text-align:center;font-size:16px;">分享到【微信群】成功，播放视频只差最后一步分享到朋友圈!</div>'});
            }else{
                layer.open({type: 1,title: false,shadeClose: true,area: '300px',offset:'160px',closeBtn:0, content: '<div style="padding: 18px; line-height: 26px;text-align:center;font-size:16px;">分享到【微信群】成功，播放视频还需分享 <font color="red">' + (3- friend_num) + '次</font>!</div>'});
            }
        }else if(res == "timeline"){
            if(friend_num >= 3){

                 location.href = 'play.html';//所有分享完成后，最后跳转的链接 -->
            }else{
                layer.open({type: 1,title: false,shadeClose: true,area: '300px',offset:'160px',closeBtn:0, content: '<div style="padding: 18px; line-height: 26px;text-align:center;font-size:16px;">请先分享到微信群!</div>'});
            }
        }
    }
};