import { Selector } from 'testcafe';


export default class SubCategory{
    hover = Selector("a[title='Computing']");
    display = Selector("a[title='Computing']").nextSibling("ul").child("li");
    ipads = Selector("a[title='Computing']").nextSibling("ul").child("li").nth(1);
    
    randomSubcategory = Selector("a[title='Computing']").nextSibling("ul").child("li").nth(1).child("div[data-element='Submenu']").child("ul").find("a");
    randomProduct = Selector("span[data-product='name']");
    addToBasket = Selector("div[data-component='add-to-basket-button-wrapper']");
   
};
