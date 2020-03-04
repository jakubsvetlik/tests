import { Selector } from 'testcafe';

export default class Request{
    question = Selector("a.question_link").nth(0);
    requestit = Selector(".ui_button_label").withText("Request");
    
};
