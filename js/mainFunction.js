// 點擊sidebar按鈕-讓sidebar滑動 ▼▼▼
// var sidebarShow = false;
var sidebarOpen = function(){
    sidebarShow = !sidebarShow;
    if(sidebarShow) {
        $('.sidebar').css('left', '0px');
        $('.model-closer').show();
    } else {
        $('.sidebar').css('left', '-300px');
        $('.model-closer').hide();
    }
}

var modelOpen = function(){
    $('.aIcon-menu-rotate').click();
    $('.sidebar').css('left', '-300px');
    $('.model-closer').hide();
}



// window resize時 ▼▼▼
var resize = function(){
    if($(window).width() > 1024){
        $('.sidebar').css('left', '0px');
        $('.model-closer').hide();

    } else {        
        $('.sidebar-btn div, .sidebar-btn span').removeClass('icon-menu');
        $('.sidebar').css('left', '-300px');
    }
}
