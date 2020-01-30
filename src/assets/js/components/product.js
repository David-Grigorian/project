export class Product {
  constructor(url, title, text, element) {
    this.product = this.createElement('div', 'product', `<div class="product">${url}</div>
                                                        <h3>${title}</h3>
                                                        <p>${text}</p>`)
    element.append(this.product);
  }
  createElement(tagName, className, text) {
    const element = document.createElement(tagName);
    if (tagName) element.classList.add(className);
    if (text) element.innerHTML = text;
    return element;
  }
}