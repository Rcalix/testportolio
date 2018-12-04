import React, { Component } from 'react';
import WorkData from '../../data/work.json';

export default class WorkComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: WorkData.myWork,
      images: [
          require('../../styles/img/work01.jpg'),
          require('../../styles/img/work02.jpg'),
          require('../../styles/img/work03.jpg'),
          require('../../styles/img/work04.jpg'),
          require('../../styles/img/work05.jpg'),
          require('../../styles/img/work06.jpg'),
          require('../../styles/img/work07.jpg'),
          require('../../styles/img/work08.jpg'),
      
      ]
    }
  }
  render() {
    const element = this.state.work.map((item, i) => 
      <a  onClick={()=> window.open(item.link, "_blank")} 
          className="work col-xs-12 col-sm-6 col-md-4 col-lg-3" 
          style={{backgroundImage: `url(${this.state.images[i]})`}}>
      <div className="work-text">
        <div className="work__title">{item.title}</div>
        <div className="work__description">{item.description}</div>
      </div>
      </a>
    );
    return(
      <section className="main-section my-work">
      <h1 className="my-work__title">My work</h1>
      <h1 className="my-work__subtitle">What I have done...</h1>
      <div className="my-work__container row">
          {element}
          </div>
    </section>
    )
  }
}