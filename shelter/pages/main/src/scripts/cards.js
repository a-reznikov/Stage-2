export class Cards {
  constructor({ urlImage, petName }) {
    this.urlImage = urlImage;
    this.petName = petName;
}

generateCard() {
    let template = '';
    let cardArticle = document.createElement('article');
    cardArticle.className = 'layout-3-row card our-friends__card';

    if (this.urlImage) {
      if (this.petName === 'Sophia') {
        template += '<div class="card__image image-horisontal">';
      } else {
        template += '<div class="card__image">';
      }
      template += `<img src="${this.urlImage}" alt="pets-${this.petName}" class="card__image-pets">`;
      template += '</div>';
    } else {
      console.log("URl not");
    }

    if (this.petName) {
      template += `<h4 class="card__title">${this.petName}</h4>`;
    }

    template += '<button class="card__button button button_bordered">Learn more</button>';

    cardArticle.innerHTML = template;
    return cardArticle;
}
}