import { AngularSimpleWebsitePage } from './app.po';

describe('angular-simple-website App', () => {
  let page: AngularSimpleWebsitePage;

  beforeEach(() => {
    page = new AngularSimpleWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
