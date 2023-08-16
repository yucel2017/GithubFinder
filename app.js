//Diğer js dosyalarından gelenler
import Github from './github.js';
import UI from './ui.js';

//Github ve UI class'ının bir örneğini oluşturma
const github = new Github();
const ui = new UI();

//html'den gelenler
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const themeBtn = document.getElementById('theme-btn');
const body = document.querySelector('body');

//Olay izleyicleri
searchButton.addEventListener('click', getInput);

searchInput.addEventListener('keypress', (e) => {
  if (e.code === 'Enter') {
    getInput();
  }
});

themeBtn.addEventListener('click', changeTheme);

//Methodlar
function getInput() {
  //Arama terimi boş değilse
  if (searchInput.value !== '') {
    //Kullancı bilgileri ve repol'ları için api isteği at
    github.getUser(searchInput.value).then((data) => {
      //Eğer kullanıcı bulunamadıysa
      if (data.profile.message === 'Not Found') {
        ui.showAlert(
          'Aradığınız Kullanıcı Bulunamadı',
          'alert-danger'
        );
      } else {
        ui.showAlert('Kullanıcı Başarıyla Bulundu', 'alert-success');
        //Kullanıcı detay alanını ekrana bas
        ui.showProfile(data.profile);

        //Repoları ekrana bas
        ui.showRepos(data.repos);
      }
    });

    return;
  }

  //Arama terimi boş ise
  ui.showAlert('Form alanı boş olamaz', 'alert-info');
}

function changeTheme() {
  //Arkplanı değiştirme
  body.classList.toggle('bg-dark');
  body.classList.toggle('text-bg-dark');

  //Butonun yazısını değiştirme
  if (body.classList.contains('bg-dark')) {
    themeBtn.innerText = 'Açık Mod';
  } else {
    themeBtn.innerText = 'Koyu Mod';
  }
}
