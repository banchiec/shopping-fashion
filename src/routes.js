import Shop from './pages/Shop/Shop'
import Home from './pages/Home/Home'

const routes = [
	{
		upgrade: true,
		path: '/upgrade',
		name: 'Upgrade to PRO',
		icon: 'nc-icon nc-alien-33',
		component: <Home />,
		// layout: '/admin',
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: 'nc-icon nc-chart-pie-35',
		component: <Shop />,
		// layout: '/admin',
	},
	{
		path: '/',
		name: 'Paciente',
		icon: 'nc-icon nc-circle-09',
		component: <Home />,
		// layout: '/admin',
	},
]
export { routes }
