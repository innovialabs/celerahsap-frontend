import { fetchAPI } from '../pages/api/api';

function Hakkimizda({ hakkimizda }) {
  return (
    <div className="page-section page-section--white">
      <div className="row row__medium-10">
        { <div className="page-section__heading">{hakkimizda.Baslik}</div> }
        { <div className="page-section__text">{hakkimizda.Icerik}</div> }
      </div>
      <div className="row__medium-4"></div>
    </div>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [hakkimizda] = await Promise.all([fetchAPI('/hakkimizda')]);

  return {
     props: { hakkimizda },
     revalidate: 1,
  };
}

export default Hakkimizda;
