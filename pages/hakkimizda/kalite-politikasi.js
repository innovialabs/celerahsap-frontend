import App from 'next/app';
import { fetchAPI } from '../api/api';
import Image from 'next/image';
function KalitePolitikasi({ kalitepolitikasi }) {
	return (
		<div className='page-section page-section--white'>
			<div className='row row__medium-10'>
				{<div className='page-section__heading'>Kalite Politikamız</div>}
				<Image src='/images/celer004.png' width='800' height='400' />
				<div className='page-section__text'>
					Firma olarak 2012 yılı sonunda sahip olduğumuz hizmetin kalitesini
					ISO9001 ve CE Marking sertifikaları ile ısbat etmeyi hedefliyoruz.
					<div className='empty-space'></div>
					Günümüzün en önemli gereksinimi haline gelen kalite sertifikasının
					öneminin farkında olarak, mevcut sistemimizin işleyişini iyileştirerek
					ve geliştirirerek uluslararası kalite seviyesine çıkarmak istiyoruz.
					Bunun için 2010 yılının başlaması ile beraber belgelendirme
					çalışmalarımıza hız katarak bu süreci bir an önce tamamlamak ve kalite
					sertifikalarına, hakederek, sahip olmak için çalışıyoruz.
					<div className='empty-space'></div> Böylece siz değerli
					müşterilerimize sertifika ile taçlandırılmış kaliteli bir hizmetin
					sözünü veriyoruz.
				</div>
			</div>
			<div className='row__medium-4'></div>
		</div>
	);
}

// export async function getStaticProps() {
//   // Run API calls in parallel
//   // const [kalitepolitikasi] = await Promise.all([fetchAPI('/kalite-politikasi')]);

//   return {
//     // props: { kalitepolitikasi },
//     revalidate: 1
//   };
// }

export default KalitePolitikasi;
