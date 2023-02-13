import { Prices } from './Prices';
import { pricesData as prices, selectData as optionsOfSelect } from './Data';
import { Modal } from './Modal';
import { openAllSelect, closeAllSelect } from './Select';
import { Select } from './SelectGenerator';

//window.onresize = () => location.reload();

const score1 = 100,
      score2 = 75,
      score3 = 100;

console.log(`Score ${score1} from 110 for first part.
Score ${score2} from 85 for second part.
Score ${score3} from 125 for third part.`);

window.onload = function() {
  // Select menu
  openAllSelect();
  document.body.addEventListener('click', closeAllSelect);

  // Render Prices
  if (prices) {
    renderPricesToDOM();
  }

  // Render Options
  if (optionsOfSelect) {
    renderOptionsToDOM();
  }

  // Tags
  addTagsClickHandler();

  // Generate Base Modal from Modal Class
  addBtnClickHandler();

  if (window.matchMedia('(max-width: 768px)').matches) {
    replaceImagesInGallery();

    relocationPricesHeaderInDOM();

    relocationContactsHeaderInDOM();

    openMenu();

    closeMenuClickLinks();

    closeMenuClickIcon();

    closeMenuClickOverlay();
  }
};

const addTagsClickHandler = () => {
  document.querySelector('.section-third__list').addEventListener('click', (event) => {
    if (event.target.classList.contains('section-third__list__li')) {
      let clickedTag = event.target;
      if (clickedTag.classList.contains('tag_selected')) {
        removeSelectedTags();
        showAllServices();
        return;
      } else {
        filterServicesBySelectedTag(clickedTag.innerText);
      }
      removeSelectedTags();
      selectClickedTag(clickedTag);
    }
  });
};

const removeSelectedTags = () => {
  let tags = document.querySelectorAll('.section-third__list .section-third__list__li');
  tags.forEach(tag => {
    tag.classList.remove('tag_selected');
  });
};

const selectClickedTag = (clickedTag) => {
  clickedTag.classList.add('tag_selected');
};

const showAllServices = () => {
  let services = document.querySelectorAll('.section-third__content .content-item');
  services.forEach(service => {
    service.classList.remove('content-item_blur');
  })
};

const filterServicesBySelectedTag = (selectedTag) => {
  let services = document.querySelectorAll('.section-third__content .content-item');
  showAllServices();
  switch (selectedTag) {
    case 'Gardens':
      services[1].classList.add('content-item_blur');
      services[2].classList.add('content-item_blur');
      services[3].classList.add('content-item_blur');
      services[5].classList.add('content-item_blur');
      break;
    case 'Lawn':
      services[0].classList.add('content-item_blur');
      services[1].classList.add('content-item_blur');
      services[3].classList.add('content-item_blur');
      services[4].classList.add('content-item_blur');
      services[5].classList.add('content-item_blur');
      break;
    case 'Planting':
      services[0].classList.add('content-item_blur');
      services[2].classList.add('content-item_blur');
      services[4].classList.add('content-item_blur');
      break;
  }
};

const renderPricesToDOM = () => {
  document.querySelector('.prices').addEventListener('click', (event) => {
    let clickedPrice = event.target;
    if (clickedPrice.classList.contains('prices__list__li')) {
      openDetailsBySelectedPrice(clickedPrice.innerText);
    }
    if (clickedPrice.classList.contains('price-selected__title')) {
      let elem = document.querySelector('.price-selected');
      elem.classList.add('hidden');

      setTimeout(() => {
        elem.remove();
      }, 400);
    }
  });
};

const openDetailsBySelectedPrice = (selectedPrice) => {
  if(document.querySelector('.price-selected')) {
    return;
  }

  switch (selectedPrice) {
    case 'Basics':
      changeOpacityOfSelectedPrice(0);
      break;
    case 'Standard':
      changeOpacityOfSelectedPrice(1);
      break;
    case 'Pro care':
      changeOpacityOfSelectedPrice(2);
      break;
  }
};

const changeOpacityOfSelectedPrice = (index) => {
  let pricesItem = document.querySelector('.prices');
  let elem = generatePrices(prices)[index].generatePrices();
  pricesItem.append(elem);

  setTimeout(() => {
    elem.classList.remove('hidden');
  }, 0);
};

const generatePrices = (prices) => {
  let pricesArr = [];
  prices.forEach (price => {
    pricesArr.push(new Prices(price));
  });
  return pricesArr;
};

const relocationPricesHeaderInDOM = () => {
  let wrapperPrices = document.querySelector('.wrapper-prices');
  let prices = document.querySelector('.prices__header');
  wrapperPrices.prepend(prices);
};

const relocationContactsHeaderInDOM = () => {
  let wrapperContacts = document.querySelector('.wrapper-contacts');
  let contacts = document.querySelector('.contacts__header');
  wrapperContacts.append(contacts);
};

const openMenu = () => {
  let nav = document.querySelector('.ul__list');
  let overlay = document.querySelector('.overlay');

  document.querySelector('.hamburger').addEventListener('click', () => {
    overlay.style.display = 'block';

    nav.classList.add('show');
    setTimeout(() => {
      nav.classList.toggle('change-opacity');
    }, 0);
  });
};

const closeMenuClickIcon = () => {
  let nav = document.querySelector('.ul__list');

  if (document.querySelector('.hamburger').classList.contains('change')) {
    nav.classList.toggle('change-opacity');
    setTimeout(() => {
      nav.classList.remove('show');
    }, 400);
  }
};

const closeMenuClickLinks = () => {
  let linksArr = document.querySelectorAll('.nav__link');
  let nav = document.querySelector('.ul__list');
  let overlay = document.querySelector('.overlay');

  linksArr.forEach(link => {
    link.addEventListener('click', () => {
      overlay.style.display = 'none';

      document.querySelector('.hamburger').classList.toggle('change');
      nav.classList.toggle('change-opacity');
      setTimeout(() => {
        nav.classList.toggle('show');
      }, 400);
    });
  });
};

const closeMenuClickOverlay = () => {
  let nav = document.querySelector('.ul__list');
  let navIcon = document.querySelector('.hamburger');
  let overlay = document.querySelector('.overlay');

  overlay.addEventListener('click', () => {
    nav.classList.toggle('change-opacity');
    setTimeout(() => {
      nav.classList.remove('show');
    }, 400);
    navIcon.classList.toggle('change');
    overlay.style.display = 'none';
  });
};

const addBtnClickHandler = () => {
  let btnModals = document.querySelectorAll('.btn_modal');
  btnModals.forEach((item, idx) => {
    if (idx === 0) {
      btnModals[idx].addEventListener('click', () => {
        generateBtnModal(idx);
      });
    } else {
      btnModals[idx].addEventListener('click', () => {
        generateBtnModal(idx);
      });
    }
  });
}

const generateBtnModal = (index) => {
  if (index === 0) {
    renderModalWindow('Learn more here');
  } else {
    renderModalWindow('Contact us');
  }
}

const renderModalWindow = (content) => {
  let modal = new Modal('button-modal');
  modal.buildModal(content);
}

const renderOptionsToDOM = () => {
  document.querySelector('.select-items').addEventListener('click', (event) => {
    let clickedOption = event.target;
    if (clickedOption.classList.contains('same-as-selected')) {
      openDetailsBySelectedOption(clickedOption.innerText);
    }
  });
};

const openDetailsBySelectedOption = (selectedOption) => {
  let prevSelectedOption = document.querySelector('.option-selected');
  if (prevSelectedOption) {
      prevSelectedOption.remove();
  }

  switch (selectedOption) {
    case 'Canandaigua, NY':
      changeOpacityOfSelectedOption(1);
      break;
    case 'New York City':
      changeOpacityOfSelectedOption(3);
      break;
    case 'Yonkers, NY':
      changeOpacityOfSelectedOption(0);
      break;
    case 'Sherrill, NY':
      changeOpacityOfSelectedOption(2);
      break;
  }
};

const changeOpacityOfSelectedOption = (index) => {
  let sectionContacts = document.querySelector('.wrapper-contacts');
  let elem = generateOptions(optionsOfSelect)[index].generateSelect();

  sectionContacts.prepend(elem);
};

const generateOptions = (options) => {
  let optionsArr = [];
  options.forEach (option => {
    optionsArr.push(new Select(option));
  });
  return optionsArr;
};

function replaceImagesInGallery() {
  const imgArr = document.querySelectorAll('.content-item__img');
  imgArr.forEach((img, idx) => {
    img.src = `images/gallery/${idx}-768.jpg`;
  });
}