import Image from 'next/image';

// * Api
import getStrapiImage from '../pages/api/media';

function Products(props) {
  const { products } = props;

  return (
    <div className="page-section page-section--white">
      <div className="products">
        <h1 className="products__title">{products[0].urun_kategori.kategori_ad}</h1>
        <ul className="products__list">
          {products.map((product, index) => {
            return (
              <li key={index} className="products__item">
                <Image src={getStrapiImage(product.urun_fotograf.url)} alt={product.urun_kategori.kategori_ad} layout="fill" objectFit="cover" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Products;
