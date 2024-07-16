import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2uHlpxBQqBsckpOwzV8XV6qvsm4Ep4Fmzhst7lUtKQruJJAQ_xfrEAZ9peiHKbJfnti0&usqp=CAU" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2uHlpxBQqBsckpOwzV8XV6qvsm4Ep4Fmzhst7lUtKQruJJAQ_xfrEAZ9peiHKbJfnti0&usqp=CAU" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2uHlpxBQqBsckpOwzV8XV6qvsm4Ep4Fmzhst7lUtKQruJJAQ_xfrEAZ9peiHKbJfnti0&usqp=CAU" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;