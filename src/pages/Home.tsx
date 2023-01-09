import { useContext } from 'react';
import { Product, ProductContext } from '../context/ProductContext';
import ProductCard from '../components/Product';

const Home = () => {
	const { listProduct } = useContext(ProductContext);
	return (
		<section className='py-16 lg:px-20'>
			<div className='container mx-auto'>
				<div className='grid gird-cols-1 md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
					{listProduct.map((product: Product) => (
						<ProductCard
							product={product}
							key={product.id}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Home;
