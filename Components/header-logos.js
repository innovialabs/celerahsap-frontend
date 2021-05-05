import Image from 'next/image';

function HeaderLogos() {
	return (
		<div className='site-header__image'>
			<div className='site-header__image-left'>
				<Image src='/images/celer-logo.png' width='166' height='76' />
			</div>
            <div className='site-header__image-right'>
				<Image src='/images/musteri-destek.jpg' width='195' height='38' />
			</div>
		</div>
	);
}

export default HeaderLogos;
