import BoxItem from '../Components/home-box-item';
import HomeSlider from '../Components/home-slider';

function Home() {
	return (
		<div className='wrapper homepage'>
			<HomeSlider 
			src='https://i0.wp.com/www.farklifarkli.com/wp-content/uploads/2019/05/ahsap_hediye_dukkani1.jpg'
			style={{width:100}}
			 />
			<div className='homepage--wrapper'>
				<div className='row__medium-4'>
					<BoxItem
						text='Kuruluşumuzdan günümüze kadar Çeler Ahşap ve Dekorasyon hakkında herşey...'
						imageL='/images/hakkimizda-ornek.jpg'
						link='/hakkimizda'
						image='/images/hakkimizda.jpg'
						imageW='183'
						imageH='39'
					/>
				</div>
				<div className='row__medium-4'>
					{' '}
					<BoxItem
						text='Kuruluşumuzdan günümüze kadar Çeler Ahşap ve Dekorasyon hakkında herşey...'
						imageL='/images/tasarimlerimiz-ornek.jpg'
						link='/referanslar'
						image='/images/tasarimlarimiz.jpg'
						imageW='264'
						imageH='39'
					/>
				</div>
				<div className='row__medium-4'>
					{' '}
					<BoxItem
						text='Kuruluşumuzdan günümüze kadar Çeler Ahşap ve Dekorasyon hakkında herşey...'
						imageL='/images/urunlerimiz-ornek.jpg'
						link='/urunlerimiz'
						image='/images/urunlerimiz.jpg'
						imageW='230'
						imageH='41'
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
