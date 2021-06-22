'use strict';
const gameDivided = document.getElementById('game-area');
const startButton = document.getElementById('start');
let score = 0;
let question = 1;
let nowcolor;
let correct;

startButton.onclick = () =>{
    if(window.confirm('Ready?')){
        // カウントダウンする秒数
        var sec = 10;
        // 開始日時を設定
        var dt = new Date();
        console.log("Start: ", dt);
        // 終了時刻を開始日時+カウントダウンする秒数に設定
        var endDt = new Date(dt.getTime() + sec * 1000);
        console.log("End : ", endDt);
        // 1秒おきにカウントダウン
        var cnt = sec;
        var id = setInterval(function(){
           cnt--;
            //console.log(cnt);
           // 現在日時と終了日時を比較
           dt = new Date();
           if(dt.getTime() >= endDt.getTime()){
             clearInterval(id);
             document.write("Finish!" + 'あなたのスコアは' + score + '/' + question + 'です。');//スコア/問題数を表示して終了
            }
        }, 1000);
        
        gameDivided.innerHTML = randomname();
        nowcolor = randomcolor();
        gameDivided.style.color = nowcolor;
        correct = nowcolor.slice(0,1);
        console.log(correct);
        document.onkeydown = () => {
            if(event.key === correct){
                console.log('ok');
                score++;
                question++;
            }else{
                console.log('no');
                question++;
            }
        }
        document.onkeyup = () => {//キーを離すたび名前と色が変わる
            gameDivided.innerHTML = randomname();
            nowcolor = randomcolor();
            gameDivided.style.color = nowcolor;
            correct = nowcolor.slice(0,1);
            console.log(correct);
        }
    }
};


const samplecolor = [
    'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'white'
];

const colorname = [
    '赤', '青', '緑', '黄', '紫', '橙', '白'
];//R,    B,   G,    Y,   P,    O,    Wが正解

function randomcolor(){//関数 @param {} @return{string} 色の名前
    var random1 = Math.floor(Math.random() * 7);
    return samplecolor[random1];
}


function randomname() {//ランダムに色の名前を表示する関数 @param {} @return{string} 色
    var random2 = Math.floor(Math.random() * 7);
    return colorname[random2];
}