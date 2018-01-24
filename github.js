class Github {
	constructor() {
		this.client_id = '17dcb35a03dd281331c8',
		this.client_secret = '420c2d20a4d96a7e9ffec9277eef7595cc333330'
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
		const profile = await profileResponse.json()
		return {
			profile
		}
	}
}