import { ElasticBillingPage } from './app.po';

describe('elastic-billing App', () => {
  let page: ElasticBillingPage;

  beforeEach(() => {
    page = new ElasticBillingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
