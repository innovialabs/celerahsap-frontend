// * Api
import { fetchAPI } from '../../api/api';

// * Components
import Products from '../../../Components/products';

function UrunSayfasi(props) {
  const { category } = props;

  return (
    <h1>Ürünler</h1>
    // <Products products={category.urunlers} />
  );
}

export const getStaticPaths = async () => {
  const categories = await fetchAPI(`/kategorilers`);

  return {
    paths: categories.map(category => {
      return {
        params: { slug: category.kategori_slug }
      };
    }),
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const category = await fetchAPI(`/kategorilers?kategori_slug=${params.slug}`);

  return {
    props: {
      category
    }
  };
};

export default UrunSayfasi;
