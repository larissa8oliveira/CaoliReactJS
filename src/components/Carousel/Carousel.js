import React from 'react';

const Carousel = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '600px' }}>
      <div id="carouselMain" className="carousel slide carousel-dark" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src="/slides/slide03.jpg" className="d-none d-md-block w-100 img-fluid" alt="BannerCaoli" />
            <img src="/slides/slide01.jpg" className="d-block d-md-none w-100 img-fluid" alt="BannerCaoli" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="/slides/slide03.jpg" className="d-none d-md-block w-100 img-fluid" alt="BannerCaoli" />
            <img src="/slides/slide01.jpg" className="d-block d-md-none w-100 img-fluid" alt="BannerCaoli" />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="/slides/slide03.jpg" className="d-none d-md-block w-100 img-fluid" alt="BannerCaoli" />
            <img src="/slides/slide01.jpg" className="d-block d-md-none w-100 img-fluid" alt="BannerCaoli" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselMain" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselMain" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
