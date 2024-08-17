import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
         <img src='https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/02/02151550/Featured-Inside-7.jpeg' className='corouselimg'/>
        <Carousel.Caption>
          <h1 className='one-eight'>One 8</h1>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://images.unsplash.com/photo-1570112686309-69f7b934fe41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='corouselimg'/>
        <Carousel.Caption>
          <h1 className='one-eight'>One 8</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://media.assettype.com/newindianexpress%2F2024-05%2Fd9eff178-f967-4632-b6ae-3e2886e138e2%2Fvirat.jpg' className='corouselimg'/>
        <Carousel.Caption>
          <h1 className='one-eight'>One 8</h1>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src='https://images.unsplash.com/photo-1528830984461-4d5c3cc1abf0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='corouselimg'/>
        <Carousel.Caption>
          <h1 className='one-eight'>One 8</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;