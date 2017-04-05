import { QuizINPage } from './app.po';

describe('quiz-in App', () => {
  let page: QuizINPage;

  beforeEach(() => {
    page = new QuizINPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
