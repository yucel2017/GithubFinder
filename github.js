class Github {

    //İstek atmak için gerkli olan bilgiler

    constructor() {
      this.clientId = '39899b4cd2b1c3692f92';
      this.clientSecret = 'c02a70d43045c6aee3d70ec4a362e104d3b532a7';
      this.perPage = 10;
      this.sort = 'asc';
    }
  
    //Api'den kullancı bilgisini alır
    async getUser(username) {
        
      // paramtre olarak gelen kullanıcı bilgisine göre istek atma
      const profileRes = await fetch(
        `https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
      );
  
      //Repo bilgilerini alma
      const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=${this.perPage}&sort=${this.sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
      );
  
      //Gelen cevabı json'a çevirme
      const profile = await profileRes.json();
      const repos = await repoRes.json();
  
      //Fonksiyonun çağrıldığı yere profile ve repo bilgisini gönderme
      return {
        profile,
        repos,
      };
    }
  }
  
  export default Github;
  