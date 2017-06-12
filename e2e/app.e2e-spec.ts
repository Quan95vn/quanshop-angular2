import { QuanshopAngular2Page } from './app.po';

describe('quanshop-angular2 App', () => {
  let page: QuanshopAngular2Page;

  beforeEach(() => {
    page = new QuanshopAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
