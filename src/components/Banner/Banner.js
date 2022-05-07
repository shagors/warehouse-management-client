import React from 'react';

const Banner = () => {
    return (
        <div>
          <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
              <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                  <img
                    src="https://westinghouseelectronics.com/wp-content/uploads/2019/10/WM32DX9019-Westinghouse-gaming-flat-monitor-32-inch-front.jpg"
                    className="block w-full h-96"
                    alt="..."
                  />
                  <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-3xl text-orange-600">Asus Gaming Monitor</h5>
                    <p className='text-orange-600 text-xl'>This is best gaming Monitor For the next generation</p>
                  </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                  <img
                    src="https://www.asus.com/media/global/products/xrXMW5mZU52WiWzI/P_setting_xxx_0_90_end_500.png"
                    className="block w-full h-96"
                    alt="..."
                  />
                  <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-3xl text-orange-600">Second slide label</h5>
                    <p className='text-xl text-orange-600'>This Monitor has real time sync and Aspect ration</p>
                  </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                  <img
                    src="https://m.media-amazon.com/images/I/51FbRGwrSSL._AC_SY780_.jpg"
                    className="block w-full h-96"
                    alt="..."
                  />
                  <div className="carousel-caption hidden md:block absolute text-center">
                    <h5 className="text-3xl text-orange-600">Third slide label</h5>
                    <p className='text-xl text-orange-600'>This monitor HDR+ and Gaming Booster</p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
        </div>
      </div>
    );
};

export default Banner;