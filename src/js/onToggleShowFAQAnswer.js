const faqListRef = document.querySelector('.js-faq-list');

const onToggleShowAnswer = event => {
  const targetListItem = event.target.closest('.js-faq-button')?.closest('.js-faq-list-item');

  [...faqListRef.children].forEach(
    questionItem => questionItem !== targetListItem && questionItem.classList.remove('active')
  );

  targetListItem?.classList.toggle('active');
};

faqListRef.addEventListener('click', onToggleShowAnswer);
