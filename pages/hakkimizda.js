import { fetchAPI } from '../pages/api/api';

function Hakkimizda({ hakkimizda }) {
	return (
		<div className='page-section page-section--white'>
			<div className='row row__medium-10'>
				{<div className='page-section__heading'>Hakkımızda</div>}
				{
					<div className='page-section__text'>
						Firmamız Ali Çeler tarafından 1985 yılında Lefkoşa'da kuruldu.
						Kurulduğu dönemde Lefkoşa'da surlar içinde 25m2'lik iki adet dükkan
						içerisinde hizmet vermekteydi. 10 yılı aşkın bir süre ahşap ve
						dekorasyon hizmetlerine surlar içerisinde devam eden firmamız,
						Lefkoşa'da Organize sanayi bölgesinin kurulması ile kendisine ait
						1600m2'lik kapalı alanda son teknoloji makinalar ile hizmetlerine
						kalitesini arttırarak devam etmektedir.<br></br><br></br> Günümüzde Çeler Ahşap ve
						Dekorasyon, üç kardeş olan Ahmet Çeler, Musa Çeler ve Cenk Çeler'in
						ortaklığı ile yönetilmektedir. Kuzey Kıbrıs Türk Cumhuriyeti'nde
						kurulu olmasına rağmen tüm adaya ahşap ve dekorasyon hizmeti
						sunmaktadır. 25 yıllık deneyim ve tecrübesini, ürettiği ahşap kapı,
						dolap ve mutfak ürünlerine yansıtan firmamız üretimin yanı sıra
						dekorasyon konusunda da bu deneyim ile kendini ısbatlamıştır. 27
						kişilik çalışan kadrosu ile Çeler Ahşap ve Dekorasyon Kuzey
						Kıbrıs'ta sektörün önde gelen firmaları arasındadır. <br></br><br></br>Firmamız
						mutfak, kapı, dolap ve çardak ürünleri ve birbirinden farklı
						tasarımlara sahip dekorasyon hizmeti ile beklentilerinizi en üst
						seviyede karşılamak için yanı başınızdadır.
					</div>
				}
			</div>
			<div className='row__medium-4'></div>
		</div>
	);
}

// export async function getStaticProps() {
//   // Run API calls in parallel
//   const [hakkimizda] = await Promise.all([fetchAPI('/hakkimizda')]);

//   return {
//      props: { hakkimizda },
//      revalidate: 1,
//   };
// }

export default Hakkimizda;
