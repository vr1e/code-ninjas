import Link from 'next/link';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';

export default function Home() {
	return (
		<div>
			<h1>Homepage</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius itaque cum
				error quia a maxime amet consequuntur ipsa illum numquam veniam fugiat
				saepe, ratione quis sed, quae quas laudantium ea?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius itaque cum
				error quia a maxime amet consequuntur ipsa illum numquam veniam fugiat
				saepe, ratione quis sed, quae quas laudantium ea?
			</p>
			<Link href='/ninjas'>
				<a>See Ninja Listing</a>
			</Link>
		</div>
	);
}
