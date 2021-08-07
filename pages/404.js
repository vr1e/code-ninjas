import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function NotFound() {
	const router = useRouter();
	const [time, setTime] = useState(5);

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, time * 1000);
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(time - 1);
		}, 1000);

		return () => clearTimeout(timer);
	});

	return (
		<div className='not-found'>
			<h1>404</h1>
			<h2>Oooops! That page cannot be found :(</h2>
			<p>
				Redirecting to <Link href='/'>Homepage</Link> for more marmite
				goodness... in <h2>{time}</h2> seconds
			</p>
			<style jsx>
				{`
					.not-found {
						background: #fff;
						padding: 30px;
						box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
						transform: rotateZ(-1deg);
					}
					h1 {
						font-size: 3em;
					}
				`}
			</style>
		</div>
	);
}
