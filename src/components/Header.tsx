import {useContext} from 'react'
import {SidebarContext} from '../context/SidebarContext'
import Sidebar from './Sidebar'
import {BsBag} from 'react-icons/bs'
import logo from '/wolf-1.png.webp'
import {Link} from 'react-router-dom'
import {CartContext} from '../context/CartContext'

export default function Header() {
	const {isClose, setIsOpen} = useContext(SidebarContext)
	const {cartItems} = useContext(CartContext)
	const total = cartItems.length
	return (
		<header className='stiky top-0 w-full flex items-center justify-between px-8 lg:px-20'>
			<Link to='/'>
				<img
					src={logo}
					alt='logo'
					className='w-30 h-20'
				/>
			</Link>
			<div
				className='cursor-pointer relative'
				onClick={() => setIsOpen(!isClose)}
			>
				<BsBag className='text-3xl' />
				<div
					className={`${
						total == 0 ? 'hidden' : ''
					} bg-red-500 text-white font-semibold rounded-full text-xs p-1 w-5 h-5
            absolute top-0 right-0 items-center text-center
          `}
				>
					{`${total > 99 ? '99+' : total}`}
				</div>
			</div>
			<Sidebar />
		</header>
	)
}
