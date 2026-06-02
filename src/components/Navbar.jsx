import { Link } from 'react-router-dom';
import '../css/Navbar.css'

const Navbar = () => {
	return (
		<nav className='navbar'>
			<h2>Job Portal</h2>

			<div className="nav-links">
				<Link to="/">Home</Link>
				<Link to="/saved-jobs">Saved Jobs</Link>
			</div>
		</nav>
	);
};

export default Navbar;
