// Получаем все элементы карточек проектов
const projectCards = document.querySelectorAll('.project-item');

// Добавляем обработчик клика на каждую карточку
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // Переключаем класс 'is-flipped' на карточке
        card.classList.toggle('is-flipped');
    });
}); 