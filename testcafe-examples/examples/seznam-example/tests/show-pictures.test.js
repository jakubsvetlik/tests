import { Selector } from 'testcafe';
import HeaderContent from "../pages/header-content.po";
import Menu from "../pages/menu.po";
import SearchContent from "../pages/search-content.po";


const headerContent = new HeaderContent();
const menu = new Menu();
const searchContent = new SearchContent();


fixture `Seznam searching`
    .page `https://www.seznam.cz/`;

test('Verify showing pictures', async t => {
 await t
        .typeText(headerContent.search, 'auto')
        .click(headerContent.button)
        .click(menu.pictures)
        .expect(searchContent.display).ok();
});
