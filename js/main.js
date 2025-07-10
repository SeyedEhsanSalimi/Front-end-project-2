/*clock*/
let clock=document.getElementById(`root`)
setInterval(function () {
    let date=new Date()
    clock.innerHTML=`<h3 style="color: whitesmoke">${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</h3>`
})
/*clock*/
/*scroll*/
$(document).scroll(()=>{
    let st=$(this).scrollTop()
    if (st>1800){
        $(`div.scroll`).fadeIn(500)
    }else {
        $(`div.scroll`).fadeOut(500)
    }
})
$(`div.scroll`).click(()=>{
    $(`html,body`).animate({
        "scrollTop":0
    },500,`linear`)
})
/*scroll*/
/*id*/
$(`a`).click(function () {
    let attr=$(this).attr(`data-address`)
    let attrScroll=$(attr).offset().top
    $(`html,body`).animate({
        "scrollTop":attrScroll
    },500,`linear`)
})
/*id*/