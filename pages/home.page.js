const Page = require('./page');

class HomePage extends Page{

  get a_link() {return browser.element("a[id='i m link']");};
  get input_comment() {return browser.element('#comment');};
  get submit_form() { return browser.element('#submit');};
  get comment_test() { return browser.element('#your_comment');};

  open() {
    super.open("https://www.google.co.uk");
  }

  setComment() {
    this.input_comment.setValue(comment);
  }

  follow_link() {
    this.a_link.click();
  }

  submit() {
    this.submit_form.click();

    let el = this.comment_text;

    browser.waitUntil(function() {
      return el.getText() != 'Your comments: None'
    }, 5000, 'expected text to be different after 5 seconds')
  }

  getComment() {
    return this.comment_text.getText().replace('Your commment:', '')
  }
};

module.exports = HomePage;
