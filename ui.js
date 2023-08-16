class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.reposArea = document.getElementById('repos');
    this.alertArea = document.getElementById('alert');
  }
  //Profil arayüzünü ekrana basma
  showProfile(data) {
    console.log(data);
    this.profile.innerHTML = `
    <div class="row border p-4 my-4">
 
        <div class="col-md-3">
          <img
            class="img-fluid rounded shadow"
            src=${data.avatar_url}
          />
          <a target="_blank" class="btn btn-primary my-4 w-100" href=${
            data.html_url
          }>Profili Göster</a>
        </div>
    
        <div class="col-md-9">
          <span class="badge bg-primary fs-6 mt-1">Açık Repolar: ${
            data.public_repos
          }</span>
          <span class="badge bg-secondary fs-6 mt-1">Açık Gistler: ${
            data.public_gists
          }</span>
          <span class="badge bg-success fs-6 mt-1">Takipçiler: ${
            data.followers
          }</span>
          <span class="badge bg-info fs-6 mt-1">Takip Edilenler: ${
            data.following
          }</span>

          <ul class="list-group mt-5">
            <li class="list-group-item">Hakkında: ${data.bio}</li>
            <li class="list-group-item">Şirket: ${data.company}</li>
            <li class="list-group-item">Website: ${data.blog}</li>
            <li class="list-group-item">Konum: ${data.location}</li>
            <li class="list-group-item">Hesap Oluşturma: ${new Date(
              data.created_at
            ).toLocaleDateString()}</li>
          </ul>
        </div>
      </div>
    `;
  }

  //Repoları ekrana basma fonksiyonu
  showRepos(repos) {

    //Diziyi dönme
    repos.forEach((repo) => {
      console.log(repo);

      //Dizideki herbir eleman için bir repoyu temsil eden html oluşturma
      this.reposArea.innerHTML += `
     <div class="border row p-3 mb-4">
        <div class="col-md-6">
          <a href=${repo.html_url}>${repo.name}</a>
        </div>
        <div class="col-md-6">
          <span class="badge bg-primary">Yıldız: ${repo.stargazers_count}</span>
          <span class="badge bg-secondary">İzleyenler: ${repo.watchers_count}</span>
          <span class="badge bg-success">Fork'lar: ${repo.forks_count}</span>
        </div>
      </div>
        `;
    });
  }

  //Uyarı mesajı oluşturma
  showAlert(message, classname) {

    //Div oluşturma
    const div = document.createElement('div');

    //Sabit classını belirleme
    div.classList.add('alert');

    //Parametre olarak gelen alertin ringini tanımla
    div.classList.add(classname);

    //Uyarı yazısını ekleme
    div.innerText = message;

    //Htmle gönderme
    //Eski alertleri silme
    this.alertArea.innerHTML = '';
    
    //Yeni alerti gönderme
    this.alertArea.appendChild(div);

    //Ona verdiğimiz  fonksiyonu  belli bir süre sonra çalıştırır
    setTimeout(() => {
      div.remove();
    }, 3000);
  }
}

export default UI;
