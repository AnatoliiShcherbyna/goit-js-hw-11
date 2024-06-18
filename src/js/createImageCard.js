function createImageCard(image) {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = image.webformatURL;
  img.alt = image.tags;
  img.dataset.largeImageURL = image.largeImageURL;

  const details = document.createElement('div');
  details.className = 'card-details';
  (details.innerHTML = <p>Likes: ${image.likes}</p>),
    (<p>Views: ${image.views}</p>),
    (<p>Comments: ${image.comments}</p>),
    (<p>Downloads: ${image.downloads}</p>);

  card.appendChild(img);
  card.appendChild(details);

  return card;
}
