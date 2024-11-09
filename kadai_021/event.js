//btnというidを取得し、定数に代入する
const btn = document.getElementById('btn');

//textというidを取得し、定数に代入する
const text = document.getElementById('text');

//ボタンがクリックされた時に、文字を変えるイベント処理を行う
btn.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = "ボタンをクリックしました";
    }, 2000);
});

   


