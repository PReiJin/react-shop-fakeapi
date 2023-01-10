import {Link} from 'react-router-dom'
import {CART_ACTION, CartContext, CartItem} from '../context/CartContext'
import {
	ChangeEvent,
	SyntheticEvent,
	useContext,
	useEffect,
	useState,
} from 'react'
import {Product, ProductContext} from '../context/ProductContext'
import {IoIosClose} from 'react-icons/io'
interface Props {
	cartItem: CartItem
}
const CartItemCard = ({cartItem}: Props) => {
	const {id, amount} = cartItem
	const {dispatchCart} = useContext(CartContext)
	const {listProduct} = useContext(ProductContext)
	const product = listProduct.find((v) => v.id == id) as Product
	const {image, title, price} = product
	const addAmount = (id: number, num = 1) => {
		dispatchCart({type: CART_ACTION.add_item, payload: {id, amount: num}})
	}
	const removeAmount = (id: number, num = 1) => {
		dispatchCart({type: CART_ACTION.remove_item, payload: {id, amount: num}})
	}
	const updateAmount = (e: ChangeEvent<HTMLInputElement>) => {
		const num = Number(e.currentTarget.value)
		dispatchCart({type: CART_ACTION.update_item, payload: {id, amount: num}}) //,300)
	}
	return (
		<div className='flex border-gray-200'>
			<div className='w-full min-h-[150px] flex items-center gap-x-4 group'>
				<div className='container w-full h-full'>
					<div className='flex gap-x-4 items-center justify-center h-full w-full'>
						<Link
							to={`/product/${id}`}
							className='flex justify-center items-center'
						>
							<img
								src={image}
								alt={title}
								className='max-w-[80px]'
							/>
						</Link>
						<div className='flex flex-col h-full justify-between gap-2 font-semibold grow'>
							<Link
								to={`/product/${id}`}
								className='flex flex-col justify-center h-3/4 grow pt-4'
							>
								<div className='text-sm uppercase text-primary group-hover:underline'>
									<h3>{title}</h3>
								</div>
								<div className='text-sm text-primary'>Price: ${price}</div>
							</Link>
							<div className='flex items-center justify-between w-full outline-none h-10 pr-10'>
								<label
									htmlFor='custom-input-number'
									className='w-full text-gray-700 font-semibold'
								>
									Amount:
								</label>
								<div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent max-w-[120px]'>
									<button
										onClick={() => removeAmount(id)}
										className='flex justify-center bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full
									 w-20 rounded-l cursor-pointer outline-none items-center'
									>
										<span className='m-auto text-2xl font-thin container'>
											−
										</span>
									</button>
									<input
										type='number'
										value={amount}
										readOnly
										min={1}
										className='outline-none text-center w-full bg-gray-300 font-semibold 
										text-md hover:text-black focus:text-black  md:text-basecursor-default 
										flex items-center text-gray-700'
									></input>
									<button
										onClick={() => addAmount(id)}
										className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full
									 w-20 rounded-r cursor-pointer'
									>
										<span className='m-auto text-2xl font-thin'>+</span>
									</button>
								</div>
							</div>
							<div className='flex items-center justify-between w-full outline-none h-10 pr-10'>
								<div>Total</div>
								<div>${amount * Number(price)}</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className='min-h-[100px] h-full group bg-red-500/50 text-white items-center flex
				 justify-center min-w-[30px] cursor-pointer hover:bg-red-500 transition-all duration-300'
				>
					<IoIosClose
						onClick={() => removeAmount(id, amount)}
						className='w-8 h-8 font-bold text-xl gorup-hover:scale-1.2 '
					/>
				</div>
			</div>
		</div>
	)
}

export default CartItemCard
