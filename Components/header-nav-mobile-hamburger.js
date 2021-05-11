function NavigationMobileHamburger(props) {
  return (
    <div onClick={props.toggleMenuHandler} className={`hamburger ${props.mobileNav ? 'hamburger--active' : ''}`}>
      <div className={`hamburger-btn ${props.mobileNav ? 'hamburger-btn--show' : ''}`}></div>
    </div>
  );
}

export default NavigationMobileHamburger;
