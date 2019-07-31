class Github {
  constructor() {
    this.client_id = "445d706eacee96143f62";
    this.client_secret = "7f0a50cb63e7d024cafbadf495e152ad83f907fe";
  }

  async get(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
