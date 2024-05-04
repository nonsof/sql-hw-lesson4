// Массив с данными об опыте работы
var experienceData = [
    { position: "Frontend Developer", company: "ABC Company", duration: "2019-2021" },
    { position: "Software Engineer", company: "XYZ Inc.", duration: "2017-2019" },
    { position: "Web Developer", company: "123 Agency", duration: "2015-2017" }
];

// Функция для вывода данных из массива в HTML
function displayExperience() {
    var experienceList = document.getElementById("experience-list");

    // Очищаем список перед добавлением новых элементов
    experienceList.innerHTML = "";

    // Проходим по массиву данных и создаем элементы для каждого опыта работы
    experienceData.forEach(function (experience) {
        var listItem = document.createElement("li");
        listItem.textContent = experience.position + " в " + experience.company + ", " + experience.duration;
        experienceList.appendChild(listItem);
    });
}

// Вызываем функцию для отображения опыта работы при загрузке страницы
window.onload = displayExperience;
