// menu

$(".menu-btn > a").on("click", function(){
	$("body").toggleClass("menu_active");
});

$(document).ready(function() {  
$(".button-toggle").on("click", function(){
    $(this).find(".add-friends-all-btn").toggleClass("active"); 
        return false;  
    });  
});  



$(document).ready(function() {  
$(".all_practices-info .post_topbar .usy-dt").on("click", function(){
    $(this).find(".fa-star").toggleClass("active"); 
        return false;  
    });  
}); 


// yandex map
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.661574, 37.573856],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),



        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: '',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
         myPlacemarkWithContent1 = new ymaps.Placemark([55.660937, 37.572935], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта',
            iconContent: '11'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: '',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        // .add(myPlacemark)
        .add(myPlacemarkWithContent)
        .add(myPlacemarkWithContent1);
});


ymaps.ready(function () {
    var myMap = new ymaps.Map('map-arenas', {
            center: [55.661574, 37.573856],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'Собственный значок метки с контентом',
            balloonContent: '<div class="col-lg-4 post-bar"><div class="post_topbar"><div class="job_descp"><h3><a href="#" title="">СПОРТИВНАЯ ШКОЛА ОЛИМПИЙСКОГО РЕЗЕРВА "МОСКВИЧ"</a></h3></div><div class="usy-name"><i class="fas fa-map-marker-alt"></i><span>Волгоградский просп., 46/15, Москва</span></div>'+
            '<div class="usy-dt"><i class="fas fa-location-arrow"></i><span>61 м</span></div></div><div class="epi-sec"><ul class="descp">'+
'<li><img src="img/time.png" alt=""><span>Работает ежедневно 9:00 – 22:00</span></li><li><img src="img/lists/time-arenas.png" alt=""><span>1000 ₽./час</span><div class="job-status-bar">'+
'<ul class="like-com"><li><img src="img/lists/star-arenas.png" alt=""><span>4.3</span></li></ul></div></li></ul></div></div>',
            iconContent: ''
        }, {

            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/resources/us-pic-1.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

         myPlacemarkWithContent1 = new ymaps.Placemark([55.660937, 37.572935], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: '<div class="col-lg-4 post-bar"><div class="post_topbar"><div class="job_descp"><h3><a href="#" title="">СПОРТИВНАЯ ШКОЛА ОЛИМПИЙСКОГО РЕЗЕРВА "МОСКВИЧ"</a></h3></div><div class="usy-name"><i class="fas fa-map-marker-alt"></i><span>Волгоградский просп., 46/15, Москва</span></div>'+
            '<div class="usy-dt"><i class="fas fa-location-arrow"></i><span>61 м</span></div></div><div class="epi-sec"><ul class="descp">'+
'<li><img src="img/time.png" alt=""><span>Работает ежедневно 9:00 – 22:00</span></li><li><img src="img/lists/time-arenas.png" alt=""><span>1000 ₽./час</span><div class="job-status-bar">'+
'<ul class="like-com"><li><img src="img/lists/star-arenas.png" alt=""><span>4.3</span></li></ul></div></li></ul></div></div>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/resources/us-pic-1.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
 
    myMap.geoObjects
        // .add(myPlacemark)
        .add(myPlacemarkWithContent)
        .add(myPlacemarkWithContent1);
});


ymaps.ready(function () {
    var myMap = new ymaps.Map('map-events', {
            center: [55.661574, 37.573856],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'Собственный значок метки с контентом',
            balloonContent: '<div class="post_topbar advanced-events-slider"><div class="usy-dt"><img src="img/resources/us-pic-1.png" alt=""></div><div class="job_descp"><h3><a href="#" title="" tabindex="0">Весенний заезд</a></h3></div><div class="usy-name"><span>21 октября</span></div></div>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/resources/us-pic-1.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
         myPlacemarkWithContent1 = new ymaps.Placemark([55.660937, 37.572935], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: '<div class="post_topbar advanced-events-slider"><div class="usy-dt"><img src="img/resources/us-pic-1.png" alt=""></div><div class="job_descp"><h3><a href="#" title="" tabindex="0">Весенний заезд</a></h3></div><div class="usy-name"><span>21 октября</span></div></div>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/resources/us-pic-1.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        // .add(myPlacemark)
        .add(myPlacemarkWithContent)
        .add(myPlacemarkWithContent1);
});








ymaps.ready(function () {
    var myMap = new ymaps.Map('map-arena-item', {
            center: [55.661574, 37.573856],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'Собственный значок метки с контентом',
            balloonContent: '',
            iconContent: '<i class="fas fa-map-marker-alt"></i>'
        }, {

            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: '',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

 
    myMap.geoObjects
        // .add(myPlacemark)
        .add(myPlacemarkWithContent)
        .add(myPlacemarkWithContent1);
});





ymaps.ready(function () {
    var myMap = new ymaps.Map('map-event-item', {
            center: [55.661574, 37.573856],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'Собственный значок метки с контентом',
            balloonContent: '',
            iconContent: '<i class="fas fa-map-marker-alt"></i>'
        }, {

            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: '',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

 
    myMap.geoObjects
        // .add(myPlacemark)
        .add(myPlacemarkWithContent)
        .add(myPlacemarkWithContent1);
});