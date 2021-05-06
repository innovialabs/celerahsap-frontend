import Image from 'next/image';
import Link from 'next/link';

function References() {
  return (
    <div className="references">
      <div className="page-section page-section--white">
        <h1 className="references__title">Referanslar</h1>
        <div className="references__container">
          <div className="references__wrapper">
            <Link href="https://www.facebook.com/celer.ahsap/videos/915756715172246/">
              <a target="_blank">
                <Image className="references__img" src="/images/referans03.png" alt="Referans Video" width={350} height={200} />
              </a>
            </Link>

            <Link href="https://www.facebook.com/celer.ahsap/videos/932754780139106/">
              <a target="_blank">
                <Image className="references__img" src="/images/referans02.png" alt="Referans Video" width={350} height={200} />
              </a>
            </Link>
          </div>
          <div className="references__wrapper">
            <Link href="https://www.facebook.com/celer.ahsap/videos/946464808768103/">
              <a target="_blank">
                <Image className="references__img" src="/images/referans01.png" alt="Referans Video" width={350} height={200} />
              </a>
            </Link>

            <Link href="https://www.facebook.com/celer.ahsap/videos/912402508841000/">
              <a target="_blank">
                <Image className="references__img" src="/images/referans04_720.png" alt="Referans Video" width={350} height={200} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default References;
