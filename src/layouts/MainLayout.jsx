import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
	return (
		<div className="home-page">
			<Navbar />

			<main>{children}</main>
		</div>
	);
};

export default MainLayout;
