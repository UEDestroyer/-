const text = `Oppan gangnam style Gangnam style 
Najeneun ttasaroun inganjeogin yeoja 
Keopi hanjanui yeoyureul aneun pumgyeok issneun yeoja 
Bami omyeon simjangi tteugeowojineun yeoja 
Geureon banjeon issneun yeoja 

Naneun sanai 
Najeneun neomankeum ttasaroun geureon sanai 
Keopi sikgido jeone wonsyat ttaerineun sanai 
Bami omyeon simjangi teojyeobeorineun sanai 
Geureon sanai 

Areumdawo sarangseureowo 
Geurae neo hey geurae baro neo hey 
Areumdawo sarangseureowo 
Geurae neo hey geurae baro neo hey 
Jigeumbuteo gal dekkaji gabolkka 

Oppan gangnam style

Gangnam style
Oppan gangnam style

Gangnam style

Oppan gangnam style

Eh Sexy lady

Oppan gangnam style

Eh Sexy lady

Jeongsukhae boijiman nol ttaen noneun yeoja

Ittaeda sipeumyeon mukkeossdeon meori puneun yeoja

Garyeossjiman wenmanhan nochulboda yahan yeoja

Geureon gamgakjeogin yeoja

Naneun sanai

Jeomjanha boijiman nol ttaen noneun sanai

Ttaega doemyeon wanjeon michyeobeorineun sanai

Geunyukboda sasangi ultungbultunghan sanai

Geureon sanai

Areumdawo sarangseureowo 
Geurae neo hey geurae baro neo hey 
Areumdawo sarangseureowo 
Geurae neo hey geurae baro neo hey 
Jigeumbuteo gal dekkaji gabolkka 

Oppan gangnam style 
Gangnam style 
Oppan gangnam style 
Gangnam style 
Oppan gangnam style 

Eh Sexy Lady 
Oppan gangnam style 
Eh Sexy Lady 

Ttwineun nom geu wie naneun nom 
Baby baby naneun mwol jom aneun nom 
Ttwineun nom geu wie naneun nom 
Baby baby naneun mwol jom aneun nom 
You know what Im saying 
Oppan gangnam style  
Eh Sexy Lady 
Oppan gangnam style 
Eh Sexy Lady 
Oppan gangnam style 
`;

const texts = text.split(" ");

const obj = document.getElementById("asd");


function connectedCallback(a){
    a.innerHTML="<h1 id =" +a.getAttribute("id") +">вот так можно потому что это воспр как обычный div</h1><button onclick=" + a.getAttribute("onclick") + ">" + a.innerText + "</button>";
}



let elements=document.getElementsByTagName("my-elem");
Array.from(elements).forEach(b => {
    connectedCallback(b);
});




function hi() {
    let index = 0;
    let interval = setInterval(() => {
        obj.textContent = texts[index];
        index++;

        if (index >= texts.length) {
            clearInterval(interval);
        }
    }, 500);
    playMusic(); 
    setTimeout(() => {
        pauseMusic(); 
    }, 300000);
}
const audio = new Audio("https://eu.hitmo-top.com/get/music/20170902/PSY_-_Gangnam_Style__47995629.mp3");

function playMusic() {
  audio.play();
}

function pauseMusic() {
  audio.pause();
}

