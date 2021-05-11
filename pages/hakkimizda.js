import Image from 'next/image';

function Hakkimizda({ hakkimizda }) {
  return (
    <div className="page-section page-section--white">
      <div className="row row__medium-10">
        <div className="page-section__heading">Hakkımızda</div>
        <Image src="/images/celer001.png" width="800" height="400" />

        <div className="page-section__text">
          Firmamız Ali Çeler tarafından 1985 yılında Lefkoşa'da kuruldu. Kurulduğu dönemde Lefkoşa'da surlar içinde 25m2'lik iki adet dükkan içerisinde hizmet vermekteydi. 10 yılı aşkın bir süre ahşap ve dekorasyon hizmetlerine surlar içerisinde devam eden firmamız, Lefkoşa'da Organize sanayi bölgesinin kurulması ile kendisine ait 1600m2'lik kapalı alanda son teknoloji makinalar ile hizmetlerine kalitesini arttırarak devam etmektedir.
          <div className="empty-space"></div> Günümüzde Çeler Ahşap ve Dekorasyon, üç kardeş olan Ahmet Çeler, Musa Çeler ve Cenk Çeler'in ortaklığı ile yönetilmektedir. Kuzey Kıbrıs Türk Cumhuriyeti'nde kurulu olmasına rağmen tüm adaya ahşap ve dekorasyon hizmeti sunmaktadır. 25 yıllık deneyim ve tecrübesini, ürettiği ahşap kapı, dolap ve mutfak ürünlerine yansıtan firmamız üretimin yanı sıra dekorasyon konusunda da bu deneyim ile kendini ısbatlamıştır. 27 kişilik çalışan kadrosu ile Çeler Ahşap ve Dekorasyon Kuzey Kıbrıs'ta sektörün önde gelen firmaları arasındadır. <div className="empty-space"></div> Firmamız mutfak, kapı, dolap ve çardak ürünleri ve birbirinden farklı tasarımlara sahip dekorasyon hizmeti ile beklentilerinizi en üst seviyede karşılamak için yanı başınızdadır.
        </div>
      </div>
    </div>
  );
}

export default Hakkimizda;
