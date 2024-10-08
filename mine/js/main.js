/* 
======================================================
画像のリストを読み込み
======================================================
*/
const item_list = document.querySelector('#item-list');
let item_img_path = "";
let item_img_alt = "";
const currentUrl = window.location.href;
const match = currentUrl.match(/[^\/]+\.html$/);
let fileName;
if(match) {
    fileName = match[0];
    console.log("URL : " + match);
}

function show_products(){
    console.log("URL : " + match);
    if(fileName === "products.html"){
        for(i=1;i<=12;i++){
            console.log("index : " + i);
            item_img_path = "../img/"+"item" + i+ ".jpg";
            item_img_alt = "item"+i;
            item_list.innerHTML += `<div class="item"><a href="item.html?id=${i}"><img src="${item_img_path}" alt="${item_img_alt}"></a><div class="product_name">Product Name</div><p>￥99,999 + tax</p></div>`;
            console.log("no : "+ i + " / " + item_list)
        }
    }else{
        for(i=1;i<=8;i++){
            console.log("products : " + i);
            item_img_path = "../img/"+"item" + i+ ".jpg";
            item_img_alt = "item"+i;
            item_list.innerHTML += `<div class="item"><a href="item.html?id=${i}"><img src="${item_img_path}" alt="${item_img_alt}"></a><div class="product_name">Product Name</div><p>￥99,999 + tax</p></div>`;
            console.log("no : "+ i + " / " + item_list)
        }
    }
}

document.addEventListener('DOMContentLoaded',show_products);

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

