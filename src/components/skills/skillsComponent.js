import React, {Component } from 'react';
import SkillData from '../../data/skills.json';
export default class SkillComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: SkillData.skillsData,
      images: [
          require('../../styles/img/service01.jpg'),
          require('../../styles/img/service02.jpg'),
          require('../../styles/img/service03.jpg'),
          require('../../styles/img/service04.jpg'),
      
      ]
    }
  }
  render() {
    const element = this.state.skills.map((item, i) => 
      <div className="service row" style={{backgroundImage: `url(${this.state.images[i]})`}}>
          <div className="service__img col-auto" style={{backgroundImage: `url(${this.state.images[i]})`}}></div>
          <div className="service-text col-auto">
          <h1>{i}</h1>
            <div className="service__title">{item.title}</div>
            <div className="service__description">{item.description}</div>
          </div>
        </div>
    );
    return(
    <section className="main-section my-services">
      <h1 className="my-services__title">My skills</h1>
      <h1 className="my-services__subtitle">What I can do & more...</h1>
      <div className="my-services__container">
        {element}
      </div>
    </section>
    )
  }
}