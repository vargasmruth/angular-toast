import { ToastPage } from './app.po';

describe('toast App', () => {
  let page: ToastPage;

  beforeEach(() => {
    page = new ToastPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
