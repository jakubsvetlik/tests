import { Selector } from 'testcafe';


export default class SubCategory{
    hover = Selector("a[title='Computing']");
    display = Selector("a[title='Computing']").nextSibling("ul").child("li");
    ipads = Selector("a[title='Computing']").nextSibling("ul").child("li").nth(1);
    
    subSubCategory = Selector("a[title='Computing']").nextSibling("ul").child("li").nth(1).child("div[data-element='Submenu']").child("ul").find("a");
    product = Selector("span[data-product='name']");
    addToBasket = Selector(".space-b.center").nth(3);
   
};
