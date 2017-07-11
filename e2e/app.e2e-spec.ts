import { TestMaterialPage } from './app.po';

describe('test-material App', () => {
  let page: TestMaterialPage;

  beforeEach(() => {
    page = new TestMaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
