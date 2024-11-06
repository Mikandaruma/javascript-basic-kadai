//btnというidを取得し、定数に代入する
const btn = document.getElementById('btn');

//textというidを取得し、定数に代入する
const text = document.getElementById('text');

//ボタンがクリックされた時に、文字を変えるイベント処理を行う
btn.addEventListener('click', () => {

    //li要素を新しく作成する
    const childList = document.createElement('li');

    //作成したli要素に「ボタンをクリックしました」というテキストを追加する
    childList.textContent = 'ボタンをクリックしました';

    //作成したli要素をul要素の子要素として末尾に追加する
    text.textContent = "ボタンをクリックしました。";


});