import {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {Product, ProductContext} from '../context/ProductContext'
import {CART_ACTION, CartContext} from '../context/CartContext'

const ProductDetails = () => {
	const {id} = useParams()
	const {listProduct} = useContext(ProductContext)
	const product = listProduct.find((v) => v.id == Number(id)) as Product
	if (!product)
		return (
			<div className='uppercase text-6xl grow w-full min-h-[545px] font-extrabold flex justify-center text-center items-center align-middle'>
				<div>Not Found</div>
			</div>
		)
	const {image, title, description, price} = product
	const {dispatchCart} = useContext(CartContext)
	const handleAddCart = () => {
		dispatchCart({type: CART_ACTION.add_item, payload: {id}})
	}
	return (
		<div className='pt-32 pb-12 lg:py-32 h-screen w-screen flex items-center'>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row items-center'>
					<div className='flex flex-1 justify-center item-center mb-8 lg:mb-8'>
						<img
							className='max-w-[200px] lg:max-w-sm'
							src={image}
							alt={title}
						/>
					</div>
					<div className='flex-1 text-center lg:text-left'>
						<h1 className='text-[26px] font-medium mb-2 max-w-[450px] max-auto'>
							{title}
						</h1>
						<div className='text-xl text-red-600 font-medium mb-6'>
							${price}
						</div>
						<p className='mb-6'>{description}</p>
						<button
							onClick={handleAddCart}
							className='bg-gray-600 text-white py-4 px-8'
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
