export class Prices {
  constructor({ id, title, description, currency, price, time }) {
    this.id = id,
    this.title = title,
    this.description = description,
    this.currency = currency,
    this.price = price,
    this.time = time
  }

  generatePrices() {
    let template = '';
    let price = document.createElement('div');
    price.className = 'price-selected hidden';
    price.setAttribute('data-id', this.id);

    if (this.title || this.description || this.price || this.time) {
      template += `<div class="price-selected__content">`
      template += `<h3 class="price-selected__title">${this.title}</h3>`
      template += `<p class="price-selected__description">${this.description}</p>`
      template += `<p class="price-selected__price">
                    <span class="price-selected__currency">${this.currency}</span><span class="price-selected__count">${this.price}</span>
                    <span class="price-selected__time">${this.time}</span>
                  </p>`
      template += `<div class="price-selected__button">`
      template += `<a class="price-selected__btn" href="#contacts">Order</a>`
      template += `</div>`
      template += `</div>`;
    }

    price.innerHTML = template;
    return price;
  }
}