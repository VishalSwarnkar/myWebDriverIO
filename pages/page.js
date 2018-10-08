class Page {
  constructor() {

  }

  getTitle() { return browser.getTitle();};

  open(path) {
    browser.url(`${path}`)
  }
}

module.exports = Page;
