export class Modal {
  constructor(classes) {
    this.classes = classes;
    this.modal = '';
    this.modalContent = '';
    this.modalCloseBtn = '';
    this.overlay = '';
  }

  buildModal(content) {
    // Overlay
    this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');

    // Modal
    this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

    // Modal content
    this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');

    // Close button
    this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');
    this.modalCloseBtn.innerHTML = '<img src="images/navigation/close.png" width="16" height="16" alt="close">';

    this.setContent(content);

    this.appendModalElements();

    // Bind Events
    this.bindEvents();

    // Open Modal
    this.openModal();
  }

  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  setContent(content) {
    if(typeof content === 'string') {
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = '';
      this.modalContent.append(content);
    }
  }

  appendModalElements() {
    this.modal.append(this.modalCloseBtn);
    this.modal.append(this.modalContent);
    this.overlay.append(this.modal);
  }

  bindEvents() {
    this.modalCloseBtn.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
  }

  openModal() {
    document.body.prepend(this.overlay);
  }

  closeModal(event) {
    let classes = event.target.classList;
    if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
      try {
        document.querySelector('.overlay').remove();
      } catch (error) {
        console.log(`Something's going wrong when trying to close modal window two or more times: '${ error.message }'`);
      }
    }
  }
}