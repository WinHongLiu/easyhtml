var flag = true;
$('.bg').on('click', () => {
    if (flag) {
        $('.table').animate({
            top: -100 + 'vh'
        }, 500)
        $('.window>img').animate({
            width: 120 + '%',
            height: 120 + '%',
            left: -10 + '%'
        }, 500)
        flag = false;
    }

})
$('.up').on('click', () => {
    if (!flag) {
        $('.table').animate({
            top: 0 + 'vh'
        }, 500)
        $('.table').animate({
            width: 100 + '%',
            height: 100 + '%',
            left: 0
        }, 500)
    }
    flag = true;

})
time();
setInterval(time, 1000);

function time() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDay();
    if (hour >= 0 && hour <= 9) {
        hour = '0' + hour;
    }
    if (min >= 0 && min <= 9) {
        min = '0' + min;
    }
    $('.bg h1').html(hour + ':' + min)
    $('.bg p').html(year + '年' + month + '月' + day + '日')

}