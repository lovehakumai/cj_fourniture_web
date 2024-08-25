document.addEventListener('DOMContentLoaded', ()=>{
    // DOMContentLoadedが発火した後でURLパラメータから値を取得する。
    // DOMContentLoadedが完了する前にURLパラメータを取得することはできない
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log("id : "+id);

    const itemTag = document.querySelector("#product-image");
    console.log("itemTag : " + itemTag);

    if(itemTag){
        function insertItemImage (id){
        const imgPath = `../../img/item${id}.jpg`;
        itemTag.innerHTML = `<img src=${imgPath} alt=${imgPath}>`;
        };
        insertItemImage(id);
    };

});

/* 
======================================================
ハンバーガーメニューのトグル
メニューの表示アニメーション
======================================================
*/
const hamburgerBtn = document.querySelector('#hamburger-btn');
const hamburgerMenu = document.querySelector('#hamburger-menu');

const menuItems = document.querySelectorAll('#hamburger-menu li');

function toggleHamburger () {

    // メニューを開く時
    if(!hamburgerMenu.classList.contains('active')){
        hamburgerMenu.classList.add('active');

    // liタグを順番にアニメーション
        menuItems.forEach((item,index) => {
            /* 
                初期設定をDOMに反映してから、setTimeoutで50ms後にアニメーションを実行している
            */
            item.style.transform = 'translateX(-100%)';
            item.style.opacity = '0';
            item.style.transition = `transform 0.3s ease-in-out ${index * 0.1}s, opacity 0.3s ease-in-out ${index * 0.1}s` // 順番にアニメーションを適用
            setTimeout(() => {
                item.style.transform = 'translateX(0)';
                item.style.opacity = '1';
            },50)
        });
    }else{
        // メニューを閉じる時
        hamburgerMenu.classList.remove('active');

        // 閉じる時はすぐにアニメーションをリセット
        menuItems.forEach((item)=>{
            item.style.transform = 'translateX(-100%)';
            item.style.opacity = '0';
        });
    }
    hamburgerBtn.classList.toggle('active');
};

hamburgerBtn.addEventListener('click',toggleHamburger);
