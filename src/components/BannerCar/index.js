const BannerCar = (props) => {
  const{
    children,
    isDanger,
    clickCount
  } = props;

  return(
    <div>
      <span
        className={isDanger
          ? 'text-danger'
          : 'text-info'}
      >
        TAMPILAN MOBIL{clickCount}
      </span>
          {children}
    </div>

  )

};

export default BannerCar;