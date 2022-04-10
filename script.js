// fetch("https://api.quran.sutanlab.id/surah")
//   .then((response) => response.json())
//   .then((res) => console.log(res.data[0]));

let chiqish = document.querySelector(".texts");
let plus = document.querySelectorAll(".add");
let surah = document.querySelector(".surah");
let bush = [];
let audio = document.querySelector(".audio1");

// async function getFetchs() {
//   let jsonData = await fetch("https://api.quran.sutanlab.id/surah");
//   let datas = await jsonData.json();
//   let dataNames = datas.data;
//   console.log(dataNames);
//   // dataNames.forEach((element) => {
//   // renderHtml(element);
//   // });
// }
// getFetchs();

// function oyatlarRenderHtml(obj, objUzb) {
//   let html = `<div class="main__cart">
//   <h3 class="oyat__tartib-raqam"><span>${obj.number.inSurah}.</span>Oят</h3>
//   <h4 class="heading__cart">Arab</h4>
//   <h1 class="arab__oyat">${obj.text.arab}</h1>
//   <h4 class="heading__cart">English</h4>
//   <h1 class="english__oyat">
//     ${obj.translation.en}
//   </h1>
//   <h4 class="heading__cart">Uzbek</h4>
//   <h1 class="uzbek__oyat">
//     ${objUzb.text}
//   </h1>
//   <h4 class="heading__cart">Audio</h4>
//   <audio controls>
//     <source
//       src="${obj.audio.primary}"
//       type="audio/mpeg"
//     />
//     <source
//       src="${obj.audio.primary}"
//       type="audio/ogg"
//     />
//     <p>Ваш браузер не поддерживает HTML5 аудио. Вот взамен</p>
//   </audio>
// </div>`;
//   oyatlarMain.insertAdjacentHTML("beforeend", html);
// }
// async function fetchOyatlar(number) {
//   let dataJson = await fetch(`https://api.quran.sutanlab.id/surah/${number}`);
//   let data = await dataJson.json();
//   let datas = data.data;
//   let dataVerses = data.data.verses;
//   let dataUzbekcha = await fetch(
//     "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/uzb-alaaudeenmansou.json"
//   );
//   let dataUZbek = await dataUzbekcha.json();
//   let quran = dataUZbek.quran;
//   // sortSura(quran);
//   for (let i = 0; i < dataVerses.length; i++) {
//     oyatlarRenderHtml(dataVerses[i], arrayBig[number][i]);
//   }
// }
// fetchOyatlar(1);
// //let a = fetch("https://api.quran.sutanlab.id/surah")
// //let one = await fetch("http://api.alquran.cloud/v1/surah/1/ar.alafasy");

let arrayBig = [];

function sortSura(array) {
  let arr = [];
  let a = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i].chapter === a) {
      arr.push(array[i]);
    } else if (array[i].chapter !== a) {
      a++;
      arrayBig.push(arr);
      i--;
      arr = [];
    }
  }
  arrayBig.push(arr);
}
let oyatlarRenderHtml = function (obj, objUzb) {
  let html = `<div class="main__cart">
 <h3 class="oyat__tartib-raqam"><span>${obj.number.inSurah}-</span>oyat</h3>
  <h4 class="heading__cart">Arab</h4>
  <h1 class="arab__oyat">${obj.text.arab}</h1>
  <h4 class="heading__cart">English</h4>
  <h1 class="english__oyat">
    ${obj.translation.en}
  </h1>
  <h4 class="heading__cart">Uzbek</h4>
  <h1 class="uzbek__oyat">
    ${objUzb.text}
  </h1>
  <h4 class="heading__cart">Audio</h4>
  <audio controls>
    <source
      src="${obj.audio.primary}"
      type="audio/mpeg"
    />
    <source
      src="${obj.audio.primary}"
      type="audio/ogg"
    />
    <p>Ваш браузер не поддерживает HTML5 аудио. Вот взамен</p>
  </audio>
</div>`;
  chiqish.insertAdjacentHTML("beforeend", html);
};

async function fetchOyatlar(number) {
  let dataJson = await fetch(`https://api.quran.sutanlab.id/surah/${number}`);
  let data = await dataJson.json();
  let datas = data.data;
  let dataVerses = data.data.verses;
  console.log(dataVerses.length);
  let dataUzbekcha = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/uzb-alaaudeenmansou.json"
  );
  let dataUZbek = await dataUzbekcha.json();
  let quran = dataUZbek.quran;
  sortSura(quran);
  for (let i = 0; i < dataVerses.length; i++) {
    oyatlarRenderHtml(dataVerses[i], arrayBig[number][i]);
  }
}


  fetchOyatlar(2);

