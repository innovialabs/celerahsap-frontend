import App from 'next/app';
import { fetchAPI } from '../api/api';

function MisyonVeVizyon({ misyonvevizyon }) {
  const createMarkup = htmlString => ({ __html: htmlString });
  return (
    <div className="page-section page-section--white">
      <div className="row row__medium-10">
        {/* <div className="page-section__heading">{misyonvevizyon.Baslik}</div> */}
        <div className="page-section__text" dangerouslySetInnerHTML={createMarkup()}>
          {/* {misyonvevizyon.Icerik} */}
        </div>
      </div>
      <div className="row__medium-4"></div>
    </div>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  // const [misyonvevizyon] = await Promise.all([fetchAPI('/misyon-ve-vizyon')]);

  return {
    // props: { misyonvevizyon },
    revalidate: 1
  };
}

export default MisyonVeVizyon;
