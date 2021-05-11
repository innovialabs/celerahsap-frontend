// * Api
import { fetchAPI } from '../../api/api';

// * Components
import Products from '../../../Components/products';

function UrunSayfasi(props) {
  const { products } = props;

  return <Products products={products} />;
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
  const products = await fetchAPI(`/urunlers?urun_kategori.kategori_slug=${params.slug}`);

  return {
    props: {
      products
    },
    revalidate: 180
  };
};

export default UrunSayfasi;
