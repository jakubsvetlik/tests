import { Selector } from 'testcafe';

export default class HeaderContent{
    search = Selector("input[name='q']");
    button = Selector("button[type='submit']");
};
