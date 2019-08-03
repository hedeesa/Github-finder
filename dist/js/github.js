class Github {
  constructor() {
    this.client_id = "445d706eacee96143f62";
    this.client_secret = "9285a3106c6c9db4d27c3f397f84f5716a7490bd";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async get(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&${
        this.client_secret
      }`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}
