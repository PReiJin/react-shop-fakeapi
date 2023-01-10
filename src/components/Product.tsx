import {Link} from 'react-router-dom'
import {Product} from '../context/ProductContext'
import {BsPlus, BsEyeFill} from 'react-icons/bs'
import {SyntheticEvent, useContext} from 'react'
import {CART_ACTION, CartContext} from '../context/CartContext'
interface Props {
	product: Product
}
const Product = ({product}: Props) => {
	const {price, category, title, image, id, description} = product
	const {dispatchCart} = useContext(CartContext)
	const handleAddToCart = (id: number) => {
		dispatchCart({
			type: CART_ACTION.add_item,
			payload: {id},
		})
	}
	return (
		<div>
			<div className='container overflow-hidden border border-[#e4e4e4] h-[300px] mb-4 relative group transition rounded-md'>
				<div className='w-full h-full flex justify-center items-center'>
					<div className='h-[200px] mx-auto flex justify-center items-center'>
						<img
							className='max-h-[160px] group-hover:scale-110 transition duration-300'
							src={image}
							alt={title}
						/>
					</div>
					<div
						className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col
          items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100
          transition-all duration-300 rounded-sm'
					>
						<button onClick={() => handleAddToCart(id)}>
							<div className='flex justify-center items-center text-white w-12 h-12 bg-red-500 rounded-sm'>
								<BsPlus className='text-3xl' />
							</div>
						</button>
						<Link
							to={`product/${product.id}`}
							className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl rounded-sm'
						>
							<BsEyeFill />
						</Link>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='font-sm capitalize text-gray-500 mb-1'>{category}</div>
				<Link
					to={`/product/${id}`}
					className='font-semibold mb-1'
				>
					<h2>{title}</h2>
				</Link>
				<div className='font-semibold'>$ {price}</div>
			</div>
		</div>
	)
}

export default Product
