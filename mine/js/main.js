const item_list = document.querySelector('#item_list');
let item_img_path = "";
let item_img_alt = "";

function(){
    for(i=1,i<=16,i++){
        item_img_path = "../img/"+"item" + i+ ".jpg";
        item_img_alt = "item"+i;
        item_list.append("<div class=\"item\"><img src=" + item_img_path + "alt="+ item_img_alt + "><div class=\"product_name\">Product Name</div><p>￥99,999 + tax</p></div>");
    }
}