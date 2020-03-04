import { Selector } from 'testcafe';

export default class Menu{
    pictures = Selector(".Services-item-link").withText("Obrázky");
};
