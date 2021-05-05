import React from 'react';

import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import  'splide-nextjs/splide/dist/css/themes/splide-default.min.css';


function HomeSlider(props) {
    
	const [width, setWidth ] = React.useState(0);
	React.useEffect(() => {
		setWidth(window.innerWidth);
		
	});
	return (
		<Splide>
			<SplideSlide>
				<img src={props.src} style={({ width: width })} />
			</SplideSlide>
		</Splide>
	);
};

export default HomeSlider;
