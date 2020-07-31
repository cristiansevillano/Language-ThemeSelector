// - Theme stuff ------------------------------------------
// - Theme elements
const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const body = document.body;

// - Apply cached theme
const theme = localStorage.getItem("theme");

if (theme) {
    body.classList.add(theme);
}

// - Switch theme buttons
darkButton.onclick = () => {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
};
lightButton.onclick = () => {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
};

// - Language stuff -----------------------------------------
const engButton = document.getElementById("english");
const espButton = document.getElementById("español");
const engArray = document.getElementsByClassName("eng");
const espArray = document.getElementsByClassName("esp");

// - Apply cached language
const language = localStorage.getItem("language");

if (language) {
    if (language == "english") {
        var i;
        for (i = 0; i < espArray.length; i++) {
            const engOpenArr = engArray[i];
            const espOpenArr = espArray[i];
            if(engOpenArr.id == "tableeng"){
                engOpenArr.style.display = "table";
            }
            else{
                engOpenArr.style.display = "inline";
            }
            espOpenArr.style.display = "none";
        }
    } else {
        var i;
        for (i = 0; i < engArray.length; i++) {
            const engOpenArr = engArray[i];
            const espOpenArr = espArray[i];
            if(espOpenArr.id == "tableesp"){
                espOpenArr.style.display = "table";
            }
            else{
                espOpenArr.style.display = "inline";
            }
            engOpenArr.style.display = "none";
        }
    }
}

// - Switch language buttons
engButton.onclick = () => {
    var i;
    for (i = 0; i < espArray.length; i++) {
        const engOpenArr = engArray[i];
        const espOpenArr = espArray[i];
        if(engOpenArr.id == "tableeng"){
            engOpenArr.style.display = "table";
        }
        else{
            engOpenArr.style.display = "inline";
        }
        espOpenArr.style.display = "none";
    }
    localStorage.setItem("language", "english");
};
espButton.onclick = () => {
    var i;
    for (i = 0; i < engArray.length; i++) {
        const engOpenArr = engArray[i];
        const espOpenArr = espArray[i];
        if(espOpenArr.id == "tableesp"){
            espOpenArr.style.display = "table";
        }
        else{
            espOpenArr.style.display = "inline";
        }
        engOpenArr.style.display = "none";
    }
    localStorage.setItem("language", "español");
};
