export class Modal {
  constructor({ urlImage, petName, type, breed, description, age, inoculations, diseases, parasites}) {
    this.urlImage = urlImage;
    this.petName = petName;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
}

generateModal() {
    let template = '';
    let modalContainer = document.createElement('div');
    modalContainer.className = 'modal';

    if (this.urlImage) {
      if (this.petName === 'Sophia') {
        template += '<div class="modal__image image-horisontal">';
      } else {
        template += '<div class="modal__image">';
      }
      template += `<img src="${this.urlImage}" alt="pets-${this.petName}" class="modal-image">`;
      template += '</div>';
    }
    template += '<div class="modal__content modal-content">';
    if (this.petName) {
      template += `<h3 class="modal-content__title">${this.petName}</h3>`;
    }
    template += `<h4 class="modal-content__subtitle">${this.type} - ${this.breed}</h4>`;
    template += `<h5 class="modal-content__description">${this.description}</h5>`;
    template += `<ul class="modal-content__list">`;
    template += `<li class="modal-content__item"><span class="modal__feature modal__age">Age: </span><span class="modal__text modal__age-text">${this.age}</span></li>`;
    template += `<li class="modal-content__item"><span class="modal__feature modal__inoculations">Inoculations: </span><span class="modal__text modal__inoculations-text">${this.inoculations}</span></li>`;
    template += `<li class="modal-content__item"><span class="modal__feature modal__diseases">Diseases: </span><span class="modal__text modal__diseases-text">${this.diseases}</span></li>`;
    template += `<li class="modal-content__item"><span class="modal__feature modal__parasites">Parasites: </span><span class="modal__text modal__parasites-text">${this.parasites}</span></li>`;        
    template += '</ul>';
    template += '</div>';
    template += '<div class="button__round button__round_bordered modal__button">';
    template += '<img src="../../assets/icons/cross.svg" alt="arrow" class="button__round_cross">';
    template += '</div>';

    // console.log(modalContainer);
    modalContainer.innerHTML = template;
    return modalContainer;
}


}