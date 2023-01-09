import { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { IoMdArrowForward } from 'react-icons/io';

export default function Sidebar() {
	const { isClose, handleClose } = useContext(SidebarContext);
	return (
		<div
			className={`w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] z-10
    transistion-all duration-300 px-4 lg:px-[35px] ${
			isClose ? 'right-0' : '-right-full'
		} `}>
			<div className='flex items-center justify-between py-6 border-b'>
				<div className='uppercase font-semibold text-sm'>Shopping Bags (0)</div>
				<div
					className='cursor-pointer w-8 h-8 flex justify-center items-center'
					onClick={handleClose}>
					<IoMdArrowForward className='text-2xl' />
				</div>
			</div>
		</div>
	);
}
