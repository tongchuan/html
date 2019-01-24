import Home from '@/containers/Home'
import NewsTypeAdd from '@/containers/news/NewsTypeAdd';
import AdminList from '@/containers/admin/AdminList';


const AppRouter = [
	{component: Home, exact: false, path: '/', isLogin: false},
	{component: NewsTypeAdd, exact: false, path: '/newstypeadd', isLogin: true},
	{component: AdminList, exact: true, path: '/admin', isLogin: true},
	{component: Home, exact: false, path: '/sddafsd', isLogin: false},
]

export default AppRouter