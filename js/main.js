"use strict";

// g maps init
function initMap() {
  let mapPosition = { lat: 43.24198572367169, lng: 76.91007353001741 }, // Центр карты но не цель
    opt = {
      zoom: 16,
      center: mapPosition,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
      },
    };
  let mainOffice = new google.maps.Map(document.getElementById("map"), opt);
  let mainOfficeMarker = new google.maps.Marker({
    position: mapPosition,
    map: mainOffice,
    title: "Байзакова, 263, 1 этаж, 5 офис",
    icon: "https://abukajary.github.io/pool/img/mapIcon.png",
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth < 858) {
      mainOfficeMarker.setPosition(
        new google.maps.LatLng(43.24198572367169, 76.91007353001741)
      );
    } else {
      mainOfficeMarker.setPosition(
        new google.maps.LatLng(43.241966206414055, 76.9139198230771)
      );
    }
  });
}

let updateTextInput = (val) => {
  switch (parseInt(val)) {
    case 0:
      val = "7х3 м.";
      break;
    case 1:
      val = "9х4 м.";
      break;
    case 2:
      val = "12х6 м.";
      break;
    case 3:
      val = "5х5 м.";
      break;
  }
  document.getElementById("poolSizeText").textContent = val;
};

const customSelect = document.querySelectorAll(".js-selectCustom");

customSelect.forEach((select) => {
  select.addEventListener("click", () => {
    const customSelectOption = select.querySelector(".selectCustom-trigger");
    const customSelectOptions = select.querySelectorAll(
      ".selectCustom-option"
    );
    customSelectOptions.forEach((selectCustomOption) => {
      selectCustomOption.addEventListener("click", () => {
        customSelectOption.innerHTML = selectCustomOption.dataset.value;
        customSelectOption.dataset.value = selectCustomOption.dataset.value;
      });
    });
    if (select.classList.contains("isActive")) {
      select.classList.remove("isActive");
    } else {
      select.classList.add("isActive");
    }
  });
});

const applyPoolSettings = document.querySelector(".applyPoolSetts");
let poolSetting = [];
applyPoolSettings.addEventListener("click", (e) => {
  customSelect.forEach((select) => {
    const customSelectOption = select.querySelector(".selectCustom-trigger");

    poolSetting.push(customSelectOption.getAttribute("data-value"));
  });
  poolSetting.push(document.getElementById("poolSizeText").textContent);
  alert(poolSetting);
  e.preventDefault();
  poolSetting = [];
});

function onlyNumberKey(evt) {
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}
