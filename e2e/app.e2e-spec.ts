import { FarmshopPage } from './app.po';

describe('farmshop App', () => {
  let page: FarmshopPage;

  beforeEach(() => {
    page = new FarmshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
