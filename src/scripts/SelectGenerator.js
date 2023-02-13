export class Select {
  constructor({ id, city, phone, address }) {
    this.id = id,
    this.city = city,
    this.phone = phone,
    this.address = address
  }

  generateSelect() {
    let template = '';
    let option = document.createElement('div');
    option.className = 'option-selected';
    option.setAttribute('data-id', this.id);

    if (this.city || this.phone || this.address) {
      template += `<div class="option-selected__content">`
        template += `<div class="option-selected__details">`
          template += `<div class="option-selected__items">`
            template += `<p>City:</p>`
            template += `<p>Phone:</p>`
            template += `<p>Office address:</p>`
          template += `</div>`;
          template += `<div class="option-selected__description">`
            template += `<p>${this.city}</p>`
            template += `<p>${this.phone}</p>`
            template += `<p>${this.address}</p>`
          template += `</div>`;
        template += `</div>`;
        template += `<div class="option-selected__button text__button">`;
          template += `<a class="option-selected__btn btn" href="tel:${this.phone}">Call us</a>`
        template += `</div>`;
      template += `</div>`;
    }

    option.innerHTML = template;
    return option;
  }
}