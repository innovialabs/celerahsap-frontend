// * Api
import getStrapiImage from '../pages/api/media';

function Products(props) {
  const { category } = props;
  const products = category[0].urunlers;

  return (
    <div className="page-section page-section--white">
      <div className="products">
        <ul className="products__list">
          {products.map((product, index) => {
            return (
              <li key={index} className="products__item">
                <img className="products__img" src={getStrapiImage(product.urun_fotograf.url)} alt={product.urun_kategori.kategori_ad} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Products;
