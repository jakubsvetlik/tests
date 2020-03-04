import { Selector } from 'testcafe';
import SubCategory from "../pages/subcategory.po";
import { getRandomInt } from "../functions/random.func";
let val = getRandomInt();
const subCategory = new SubCategory();
 
 fixture `Seznam searching`
    .page `https://www.currys.co.uk/gbuk/index.html`;

test('Verify showing pictures', async t => {
     
   
 await t

        .maximizeWindow()
        .hover(subCategory.hover)
        .expect(subCategory.display).ok()
        .hover(subCategory.ipads)
        .expect(subCategory.randomSubcategory.count).eql(8);
    
        const subcategoryCount = await subCategory.randomSubcategory.count;

        const index = getRandomInt(0, subcategoryCount); 
        await t
        .click(subCategory.randomSubcategory.nth(index))
        ;

        const productCount = await subCategory.randomProduct.count;

        const index2 = getRandomInt(0, productCount); 
        await t
        .click(subCategory.randomProduct.nth(index2))
        .expect(subCategory.addToBasket).ok();
        ;
});
