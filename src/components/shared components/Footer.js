import { FaFacebook,FaInstagram } from 'react-icons/fa'

export const Footer = () => {
	return (
		<footer>
			<section className='footer'>

				<div className='contact'>
					<h3>BakeShop</h3>
					<p>Open hour: 8:00 - 22:00</p>
					<p>Address: 300 Thanh Nhan, Hai Ba Trung, Ha Noi</p>
				</div>

				<div className='social-icon'>
					<p>
						<span>
							<FaFacebook className='fb-icon icon pointer' />
						</span>

						<span>
							< FaInstagram className='insta-icon icon pointer' />
						</span>
					</p>
				</div>

				<div className='faq'>
					<p>
						<a className='pointer'>Recuitment</a>
					</p>
					<p>
						<a className='pointer'>FAQ</a>
					</p>
				</div>

			</section>

			<div className='copyright text-center'>
				<p>&#169;2021 My Project</p>
			</div>

		</footer>
	)
}