import { Selector } from 'testcafe';



fixture `seznam vyhledávání`
    .page `https://www.seznam.cz/`;

test('Ověřit zobrazování obrázků', async t => {
    const hledat = Selector("input[name='q']");
    const button = Selector("button[type='submit']");
    const obrazky = Selector(".Services-item-link").withText("Obrázky");
    const zobrazeni = Selector("div.image").exists;
    await t
        .typeText(hledat, 'auto')
        .click(button)
        .click(obrazky)
        .expect(zobrazeni).ok();
});