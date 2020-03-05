import { Selector } from 'testcafe';
import SubCategory from "../pages/subcategory.po";
import { getRandomInt } from "../functions/random.func";

const subCategory = new SubCategory();
 
 fixture `Adding goods to the basket`
    .page `https://www.currys.co.uk/gbuk/index.html`;

test('Can I add product to the basket?', async t => {
     
   
 await t

        .maximizeWindow()
        .hover(subCategory.hover)
        .expect(subCategory.display).ok()
        .hover(subCategory.ipads)
                
        const subcategoryCount = await subCategory.subSubCategory.count;

        const index = getRandomInt(0, subcategoryCount); 
        await t
        .click(subCategory.subSubCategory.nth(index))
        ;

        const productCount = await subCategory.product.count;

        const index2 = getRandomInt(0, productCount); 
        await t
        .click(subCategory.product.nth(index2))
        .click(subCategory.addToBasket);
        ;
});
