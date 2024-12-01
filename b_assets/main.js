 const dateItems = document.querySelectorAll('.date_item');
 
function getDateDaysAgo(daysAgo) {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });  
}
 
dateItems.forEach((item) => {
    const daysAgo = parseInt(item.dataset.daysAgo, 10);  
    item.textContent = getDateDaysAgo(daysAgo);  
});

 
const randomElement = document.querySelector('.random');
 
if (randomElement) { 
    const currentValue = parseInt(randomElement.textContent, 10);
    const randomDecrease = Math.floor(Math.random() * 6) + 1;
 
    randomElement.textContent = currentValue - randomDecrease;
}
