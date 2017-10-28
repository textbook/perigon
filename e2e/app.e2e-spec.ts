import { AppPage } from './app.po';

describe('perigon App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display a person', () => {
    expect(page.getName()).not.toEqual('');
  });

  it('should refresh the person when requested', () => {
    const startName = page.getName();

    page.refreshPerson();

    expect(page.getName()).not.toEqual(startName);
  });
});
