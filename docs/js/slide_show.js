// Вначале пишем специальное условие-обёртку, что весь документ загрузил и только потом выполнит код
$(document).ready(function() {

    var slideIndex = 0; // активное изображение
  
    showPhotos();

    // Напишем функцию, которая будет показывать фотографии
    function showPhotos() {

        // Сначала выберем все изображения, на которые мы хотим наложить эффект слайд-шоу (создаем переменную)
        var slides = $('.photo img');
        console.log(slides);

        for ( i = 0; i < slides.length; i++ ) {
            
            // Обращаемся к каждому слайду и скрываем его
            $(slides[i]).hide();

        }

        // Далее показываем нужные слайды
        slideIndex++;
        console.log(slideIndex);
        
        // Если индекс превысил кол-во слайдов, обнуляем его
        if (slideIndex > slides.length) slideIndex = 1;

        $(slides[slideIndex-1]).show();

        // Далее запускаем рекурсию для данной функции с заданным интервалом
        setTimeout(() => {

            showPhotos();

        }, 2000);

    }

})