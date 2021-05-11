import Image from 'next/image';

function MisyonVeVizyon() {
  return (
    <div className="page-section page-section--white">
      <div className="row row__medium-10">
        {<div className="page-section__heading">Misyon & Vizyon</div>}
        <Image src="/images/celer003.png" width="800" height="400" />
        <div className="page-section__text">
          <h4>Misyon</h4>
          Firmamız mevcut kapasitesini ve hizmet kalitesini hızla arttırarak ahşap ve dekorasyon sektöründe ihracat yapıp ülke ekonomisine yüksek ölçekli katkılar koymayı ve Kıbrıs halkına hakettiği ürün ve hizmeti sunmayı kendisine misyon edinmiştir.
          <h4>Vizyon </h4>
          Çeler Ahşap ve Dekorasyon olarak önümüzdeki 10 yıl sonunda Akdeniz'in en büyük ahşap ve dekorasyon hizmeti veren firmaları arasında ön sıralarda olmayı kendimize vizyon edindik.
        </div>
      </div>
      <div className="row__medium-4"></div>
    </div>
  );
}

export default MisyonVeVizyon;
