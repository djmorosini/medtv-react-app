import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import MyPic1 from './images/piron-guillaume-492639-unsplash.jpg'
import MyPic2 from './images/jesse-orrico-60373-unsplash.jpg'
import MyPic3 from './images/oneDoctor.jpg'
import MyPic4 from './images/rawpixel-584296-unsplash.jpg'



const items = [
  {
    src: MyPic1,
    altText: '',
    header: 'DO YOU WANT TO EXCEL AS A SURGEON?',
    caption: 'Find your educational resources here on MedTV.'
    
  },
  {
    src: MyPic2,
    altText: 'Slide 2',
    header:'GET THE WORD OUT TO DOCTORS AROUND THE WORLD.',
    caption: 'Market your medical device on MedTV.'
  },
  {
    src: MyPic3,
    altText: 'Slide 3',
    header: 'WHAT KIND OF SURGEON DO YOU WANT TO BE?',
    caption: 'Learn from the best surgeons in the world, right in the classroom.'
  },
  {
    src: MyPic4,
    altText: 'Slide 3',
    header: 'CUT, RECORD, UPLOAD. REPEAT.',
    caption: 'Your LEGACY as a doctor, right here.'
  }
];

class TheCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem className='carousel-image-holder'
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.header} />
        </CarouselItem>
      );
    });

    return (
      <Carousel id='the-carousel'
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default TheCarousel;