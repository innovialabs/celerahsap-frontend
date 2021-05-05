import App from 'next/app';
import { fetchAPI } from '../pages/api/api';

function Hizmetlerimiz({ hizmetlerimiz }) {
  return (
    <div className="page-section page-section--white">
      <div className="row row__medium-10">
        {/* <div className='page-section__heading'>{hizmetlerimiz.Baslik}</div> */}
        {/* <div className='page-section__text'>{hizmetlerimiz.Icerik}</div> */}
      </div>
      <div className="row__medium-4"></div>
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
