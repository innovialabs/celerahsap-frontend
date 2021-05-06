import App from 'next/app';
import { fetchAPI } from '../pages/api/api';

function Hizmetlerimiz({ hizmetlerimiz }) {
	return (
		<div className='page-section page-section--white'>
			<div className='row row__medium-10'>
				<div className='page-section__heading'>Hizmetlerimiz</div>
				<div className='page-section__text'>
					Çeler Ahşap ve Dekorasyon, üç kardeş olan Ahmet Çeler, Musa Çeler ve
					Cenk Çeler'in ortaklığı ile yönetilmektedir. Kuzey Kıbrıs Türk
					Cumhuriyeti'nde kurulu olmasına rağmen tüm adaya ahşap ve dekorasyon
					hizmeti sunmaktadır. <div className='empty-space'></div>25 yıllık
					deneyim ve tecrübesini, ürettiği ahşap kapı, dolap ve mutfak
					ürünlerine yansıtan firmamız üretimin yanı sıra dekorasyon konusunda
					da bu deneyim ile kendini ısbatlamıştır. 27 kişilik çalışan kadrosu
					ile Çeler Ahşap ve Dekorasyon Kuzey Kıbrıs'ta sektörün önde gelen
					firmaları arasındadır.<div className='empty-space'></div> Firmamız;
					<ul>
						<li>Mutfak</li>
						<li>Kapı</li>
						<li>Dolap</li>
						<li>Çardak Ürünleri</li>
					</ul>
					ve birbirinden farklı tasarımlara sahip dekorasyon hizmeti ile
					beklentilerinizi en üst seviyede karşılamak için yanı başınızdadır.
				</div>
			</div>
			<div className='row__medium-4'></div>
		</div>
	);
}

// export async function getStaticProps() {
//   // Run API calls in parallel
//   // const [hizmetlerimiz] = await Promise.all([fetchAPI('/hizmetlerimiz')]);

//   return {
//     // props: { hizmetlerimiz },
//     // revalidate: 1,
//   };
// }

export default Hizmetlerimiz;
