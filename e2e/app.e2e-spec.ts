import { BlockadePage } from './app.po';

describe('blockade App', function() {
  let page: BlockadePage;

  beforeEach(() => {
    page = new BlockadePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
