const Services_card = document.createElement('div');
Services_card.className = 'services_card';

const work = document.createElement('div');
work.className = 'works';
work.innerText = 'What can I do for you?';
Services_card.appendChild(work);

const unordered_list = document.createElement('ul');
services.forEach((info) => {
  const serviceslist = document.createElement('li');
  serviceslist.className = 'services';
  serviceslist.innerText = info;
  unordered_list.appendChild(serviceslist);
});

Services_card.appendChild(unordered_list);
