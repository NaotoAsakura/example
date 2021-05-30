'use strict';
const gameDivided = document.getElementById('game-area');
//console.log('example.js');

/*if (confirm('READY?')){
    randomcolor();
}*/

document.getElementById('start').click(
    //randomcolor()
    //console.log('クリックされました')
);



const colorname = [
    '赤', '青', '緑', '黄', '紫'
]; //0,   1,    2,    3,     4  の5種類

/**
 * STARTを押すとランダムに色の名前を表示する関数
 * @param {}
 * @return{string} 色の名前
 */

let startTime = null;
function randomcolor() {
  //TODO 30秒間ランダムに色を表示する関数を実装する
    //startTime = Date.now();
    console.log('スタートしました');

    let now = new Date();
    let gametimeseconds = (now.getTime() - startTime);
}
