import { youtubeVideo } from "./data.js";

console.log(youtubeVideo);

const videos = JSON.parse(sessionStorage.getItem("videos")) || youtubeVideo;

const containerCards = document.querySelector(".main_cards");
console.log(containerCards);

const printVideos = (container, videoList) => {
    container.innerHTML = "";
    videoList.forEach((video) => {
        container.innerHTML += `
        <article class="cards">
            <figure class="cards__figure">
                <img class="cards__image" 
                data-card='cards' name=${video.id}
                src=${video.thumbnail} alt=${video.name}>
            </figure>
            <div class="flex-div">
                <h3 class="" data-card='cards' name=${video.id}>${video.name}</h3>
                <p class="" name=${video.id}>${video.views}</p>
            </div>            
        </article>
        `;
    });
};

//3. Vamos a escuchar al evento DomContentLoad y cuando suceda este evento se deben imprimir los personajes
document.addEventListener("DOMContentLoaded", () => {
    printVideos(containerCards, videos);
});

//4. Vamos a escuchar el evento click sobre las cards
document.addEventListener("click", (event) => {

    const dataCardAttribute = event.target.getAttribute("data-card");
    if (dataCardAttribute === "cards") {
        const id = event.target.getAttribute("name");
        sessionStorage.setItem("idVideo", JSON.stringify(id));
        window.location.href = "../template/details.html";
    }
});

//-----------------------Filter---------------------
//1. Creamos un array con las categorías de los personajes
const categories = ["all"];
videos.forEach((item) => {
    if (!categories.includes(item.seenIn.category)) {
        categories.push(item.seenIn.category);
    }
});

categories.forEach((item) => {
    const filterButton = document.getElementsByName(item)[0];
  
    filterButton.addEventListener("click", () => {
      const filterVideos =
        item === "all"
          ? videos
          : videos.filter((element) => element.seenIn.category === item);
          printVideos(containerCards, filterVideos);
    });
});
