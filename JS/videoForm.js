import { youtubeVideo } from "../JS/data.js";

const videos = 
    JSON.parse(sessionStorage.getItem("videos")) || youtubeVideo;

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formChildren = Array.from(form.children);

    const arrayInput = formChildren.filter(
        (item) => (item.localName === "input" || item.localName === "select")
    );

    const newVideo = {
        thumbnail: "",
        name: "",
        views: "",
        seenIn: {
            category: "",
        },
    };

        for (const key in newVideo){
            if (typeof newVideo[key]=== 'object') {
                for (const propertyName in newVideo[key]) {
                    const input =  arrayInput.find(item=> item.id == propertyName)
                    newVideo[key][propertyName] = input.value 
            }
        } else {
            const input = arrayInput.find((item) => item.id == key);
            newVideo[key] = input.value; 
        }
    }

    console.log(newVideo);
    const validateCampos = validateInputs(newVideo);
    if (validateCampos) {

        newVideo.id = videos.length + 1;

        videos.push(newVideo);

        sessionStorage.setItem("videos", JSON.stringify(videos));

        Swal.fire("Buen trabajo!", "El nuevo Video se agrego exitosamente", "success");
        
        form.reset();
    }
    console.log(youtubeVideo);



});

const validateInputs = (objetoData) => {
    let camposVacios = "";
    for (const key in objetoData) {
        if (typeof objetoData[key] === "object") {
            for (const propertyName in objetoData[key]) {
                const valueProperty = objetoData[key][propertyName]
                camposVacios += !valueProperty ? `${propertyName} ` : "";
            }
        }else {
            const valueProperty = objetoData[key];
            camposVacios += !valueProperty ? `${key} `: "";
      }
    }
    if (camposVacios) {
        Swal.fire("Oops!", `Hay campos vacíos: ${camposVacios}`, "error");
        return false;
    } else {
        return true;
    }

}