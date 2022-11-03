// ジャンケンの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');

// ジャンケンの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザーの手とJavaSctiptのジャンケンの手をくらべる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand,js_hand);

// 結果を表示する
alert('あなたの選んだ手は'+ user_hand + 'です。/nJavaScriptの選んだ手は' +js_hand+'です。/n結果は'+judge+'です。');

function getJShand(){
    let js_hand_num = Math.floor(Math.random()*3);
    let hand_name;
    
    if(js_hand_num == 0){
        hand_name = "グー";
    }else if(js_hand_num ==1){
        hand_name = "チョキ";
    }else if(js_hand_num == 2){
        hand_name = "パー";
    }
    
    return hand_name;
}