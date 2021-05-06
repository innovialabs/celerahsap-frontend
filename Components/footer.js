import Image from 'next/image';

function Footer() {
  return (
    <div>
      <div className="site-footer">
        <div className="site-footer__text float-left">Telif Hakkı © 2021 Çeler Ahşap & Dekor. Tüm Hakları Saklıdır.</div>
        <div className="float-right">
          <Image src="/images/siteby.jpg" width="147" height="40" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
