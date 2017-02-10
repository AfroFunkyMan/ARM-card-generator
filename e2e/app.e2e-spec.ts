import { CardGeneratorPage } from './app.po';

describe('card-generator App', function() {
  let page: CardGeneratorPage;

  beforeEach(() => {
    page = new CardGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
