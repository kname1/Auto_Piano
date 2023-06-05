//更改背景
function ChangeBK1() {
    // document.getElementById("pressClick").play();
    document.getElementById('max').className="max1";
    const music = new Audio('./audio/keypress.mp3');
    music.play();
}
function ChangeBK2() {
    document.getElementById('max').className="max2";
    const music = new Audio('./audio/keypress.mp3');
    music.play();
}
function ChangeBK3() {
    document.getElementById('max').className="max3";
    const music = new Audio('./audio/keypress.mp3');
    music.play();
}
function ChangeBK4() {
    document.getElementById('max').className="max4";
    const music = new Audio('./audio/keypress.mp3');
    music.play();
}
function ChangeBK5() {
    document.getElementById('max').className="max5";
    const music = new Audio('./audio/keypress.mp3');
    music.play();
}

//点击和按压指定按键时透明度变成原来的50%	
function getOpacity(i) {
    $(".box").eq(i).css("opacity", "0.5");
}
function resort(i) {
    $(".box").eq(i).css("opacity", "0.8");
}

//按键播放指定音阶
function audioPlay1() {
    // document.getElementById("press1").play();
    const music = new Audio('./audio/1.MP3');
    music.play();
}
function audioPlay2() {
    // document.getElementById("press2").play();
    const music = new Audio('./audio/2.MP3');
    music.play();
}
function audioPlay3() {
    // document.getElementById("press3").play();
    const music = new Audio('./audio/3.MP3');
    music.play();
}
function audioPlay4() {
    // document.getElementById("press4").play();
    const music = new Audio('./audio/4.MP3');
    music.play();
}
function audioPlay5() {
    // document.getElementById("press5").play();
    const music = new Audio('./audio/5.MP3');
    music.play();
}
function audioPlay6() {
    // document.getElementById("press6").play();
    const music = new Audio('./audio/6.MP3');
    music.play();
}
function audioPlay7() {
    // document.getElementById("press7").play();
    const music = new Audio('./audio/7.MP3');
    music.play();
}
