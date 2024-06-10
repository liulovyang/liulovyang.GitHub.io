window.onload = function() {
    var countdownElement = document.getElementById('countdown');
    var targetDate = new Date("May 8, 2024 00:00:00").getTime();

    function updateCountdown() {
        var now = new Date().getTime();
        var distance = targetDate - now;

        if (distance < 0) {
            countdownElement.innerText = "时间已到！";
            return;
        }

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerText = days + "天 " + hours + "时 " + minutes + "分 " + seconds + "秒 ";
    }

    // 更新倒计时每秒钟
    setInterval(updateCountdown, 1000);
};
