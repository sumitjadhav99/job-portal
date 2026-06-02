import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
	return (
		<div className='home-page'>
			<Navbar />

			<main>{children}</main>

			<footer>Footer</footer>
		</div>
	);
};

export default MainLayout;
