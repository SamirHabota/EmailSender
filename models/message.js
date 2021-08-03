const Message = class {
  constructor(from, to, subject, text) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.text = text;
  }
  content() {
    return {
      from: this.from,
      to: this.to,
      subject: this.subject,
      text: this.text,
      html: "<p>" + this.text + "</p>",
    };
  }
};

module.exports = {
  Message,
};
