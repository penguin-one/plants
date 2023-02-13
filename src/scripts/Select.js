export function openAllSelect() {
  let selectArea = document.getElementsByClassName('custom-select');
  let selectAreaLength = selectArea.length;

  for (let i = 0; i < selectAreaLength; i++) {
    let selectDefault = selectArea[i].getElementsByTagName('select')[0];
    let selectDefaultLength = selectDefault.length;
    let divSelect = document.createElement('div');
    let divOptions = document.createElement('div');

    divSelect.setAttribute('class', 'select-selected');
    divSelect.innerHTML = selectDefault.options[selectDefault.selectedIndex].innerHTML;
    selectArea[i].append(divSelect);
    divOptions.setAttribute('class', 'select-items select-hide');

    for (let j = 1; j < selectDefaultLength; j++) {
      let option = document.createElement('div');
      option.innerHTML = selectDefault.options[j].innerHTML;

      option.addEventListener('click', function() {
          let selectDefault = this.parentNode.parentNode.getElementsByTagName('select')[0];
          let selectDefaultLength = selectDefault.length;
          let nodeElem = this.parentNode.previousSibling;

          for (let i = 0; i < selectDefaultLength; i++) {
            if (selectDefault.options[i].innerHTML === this.innerHTML) {
              let selectedElem = this.parentNode.getElementsByClassName('same-as-selected');
              let selectedElemLength = selectedElem.length;

              selectDefault.selectedIndex = i;
              nodeElem.innerHTML = this.innerHTML;

              for (let k = 0; k < selectedElemLength; k++) {
                selectedElem[k].removeAttribute('class');
              }

              this.setAttribute('class', 'same-as-selected');
              break;
            }
          }

          nodeElem.click();
      });

      divOptions.append(option);
    }

    selectArea[i].append(divOptions);

    divSelect.addEventListener('click', function(event) {
      event.stopPropagation();
      closeAllSelect(this);

      this.nextSibling.classList.toggle('select-hide');
      this.classList.toggle('select-arrow-active');

      if (divSelect.innerHTML !== 'City') {
        divSelect.style.backgroundColor = '#C1E698';
      }
    });
  }
}

export function closeAllSelect(elem) {
  let arr = [];
  let options = document.getElementsByClassName('select-items');
  let selectedOption = document.getElementsByClassName('select-selected');
  let optionsLength = options.length;
  let selectedOptionLength = selectedOption.length;

  for (let i = 0; i < selectedOptionLength; i++) {
    if (elem === selectedOption[i]) {
      arr.push(i);
    } else {
      selectedOption[i].classList.remove('select-arrow-active');
    }
  }

  for (let i = 0; i < optionsLength; i++) {
    if (arr.indexOf(i)) {
      options[i].classList.add('select-hide');
    }
  }
}