import { Selector } from 'testcafe';

export default class Login{
    pass = Selector(".form_column").nth(1);
    email = Selector(".form_column").nth(0);
    button = Selector("input[value='Login']");
};
