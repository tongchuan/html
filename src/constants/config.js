
const baseURI = process.env.baseURI
export default {
	news: {
		typequery: `api/news/typequery`,
		typeadd: `api/news/typeadd`
	},
	newsType: {

	},
	admin: {
		getlist: 'api/admin/getlist',
		add: 'api/admin/add',
		modify: 'api/admin/modify',
		register: 'api/admin/register',
		signin: 'api/admin/signin',
		issignin: 'api/admin/issignin',
		signout: 'api/admin/signout',
		modifypwd: 'api/admin/modifypwd',
	},
	user: {
		user: `/user`,
	}

}
