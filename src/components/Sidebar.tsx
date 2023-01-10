import {useContext} from 'react'
import {SidebarContext} from '../context/SidebarContext'
import {IoMdArrowForward} from 'react-icons/io'
import {CartContext} from '../context/CartContext'
import CartItemCard from './CartItem'
import {ProductContext} from '../context/ProductContext'

export default function Sidebar() {
	const {isClose, handleClose} = useContext(SidebarContext)
	const {cartItems} = useContext(CartContext)
	const cartNum = cartItems.length
	const {listProduct} = useContext(ProductContext)
	const total = cartItems.reduce((a, b) => {
		const {price} = listProduct.find((v) => v.id == b.id) || {price: ''}
		return a + Number(price) * b.amount
	}, 0)
	return (
		<div
			className={`w-full bg-white fixed top-0 h-full shadow-2xl md:w-[50vw] xl:max-w-[40vw] z-10
    transistion-all duration-300 mx-auto
		 ${isClose ? 'right-0' : '-right-full'} `}
		>
			<div className='h-full w-full relatvie '>
				<div
					className='flex items-center justify-between py-6 border-b sticky 
				top-0 z-10 bg-white right-0 px-8 md:pl-10 lg:pl-14 md:pr-4'
				>
					<div className='uppercase font-semibold text-sm'>
						Shopping Bags ({cartNum})
					</div>
					<div
						className='cursor-pointer w-8 h-8 flex justify-center items-center'
						onClick={handleClose}
					>
						<IoMdArrowForward className='text-2xl' />
					</div>
				</div>
				<div
					className='flex flex-col gap-y-4 pt-20 h-full overflow-y-scroll absolute top-0 
				right-0 left-0 scrollbar-hide px-8 md:pl-10 lg:pl-14 md:pr-4 pb-24'
				>
					{cartItems.map((v) => (
						<CartItemCard
							cartItem={v}
							key={v.id}
						/>
					))}
				</div>
				<div
					className='flex flex-col items-center gap-6 justify-between py-6 border-b absolute
				 bottom-0 left-0 z-10 bg-white right-0 px-8 md:pl-10 lg:pl-14 md:pr-4'
				>
					<div className='flex justify-between h-full w-full uppercase text-lg font-bold'>
						<div>Total</div>
						<div>${total}</div>
					</div>
					<button className='outline-none hover:underline uppercase font-semibold text-lg'>
						Check Out
					</button>
				</div>
			</div>
		</div>
	)
}
