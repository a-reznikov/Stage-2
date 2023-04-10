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
    let modalCard = document.createElement('div');
    modalCard.className = 'modal';

    // if (this.urlImage) {
    //   if (this.petName === 'Sophia') {
    //     template += '<div class="card__image image-horisontal">';
    //   } else {
    //     template += '<div class="card__image">';
    //   }
    //   template += `<img src="${this.urlImage}" alt="pets-${this.petName}" class="card__image-pets">`;
    //   template += '</div>';
    // } else {
    //   console.log("URl not");
    // }

    // if (this.petName) {
    //   template += `<h4 class="card__title">${this.petName}</h4>`;
    // }

    // template += '<button class="card__button button button_bordered">Learn more</button>';

    modalCard.innerHTML = template;
    return modalCard;
}
}