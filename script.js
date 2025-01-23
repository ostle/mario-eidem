function toggleFlip(card) {
    const flipCardInner = card.querySelector('.flip-card-inner');
    flipCardInner.style.transform = flipCardInner.style.transform === 'rotateY(180deg)' ? '' : 'rotateY(180deg)';
  }