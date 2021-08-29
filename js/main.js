'use strict'

// g maps init
function initMap() {
    let mapPosition = {lat: 43.24198572367169,  lng: 76.91007353001741},  // Центр карты но не цель
        opt = {
            zoom: 16,
            center: mapPosition,
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            }
        };
    let mainOffice = new google.maps.Map(document.getElementById('map'), opt);
    let mainOfficeMarker = new google.maps.Marker({
        position: mapPosition,
        map: mainOffice,
        title: "Байзакова, 263, 1 этаж, 5 офис",
        icon: 'http://localhost:63342/netLightTest/img/mapIcon.png'
    });
    mainOfficeMarker.setPosition(new google.maps.LatLng(43.241966206414055, 76.9139198230771));
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

let updateTextInput = (val) => {
    switch (parseInt(val)) {
        case 0:
            val = "7х3 м.";
            break
        case 1:
            val = "9х4 м."
            break
        case 2:
            val = "12х6 м."
            break
        case 3:
            val = "5х5 м."
            break
    }
    document.getElementById('textInput').textContent = val;
}