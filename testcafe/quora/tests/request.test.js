import { Selector } from 'testcafe';
import Login from "../pages/login.po";
import Request from "../pages/question-request.po";


const login = new Login();
const request = new Request();

fixture `Quora requests`
    .page `https://www.quora.com/`;

test('Login and request answer', async t => {

  
 await t
        .maximizeWindow()
        .typeText(login.email,'LovableWatermelon@centrum.cz')
        .typeText(login.pass, '8vE7CgcEzx')
        .click(login.button)
        .navigateTo ("https://www.quora.com/profile/Jakub-Svandrlik/questions")
        .click(request.question)
        .click(request.requestit)
        
    ;
    var paragraphElements = Selector('g.icon_svg-stroke');
    var count    = await paragraphElements.count;

    for (var i = 8; i < 33; i++)

    await t.click(paragraphElements.nth(i));

});