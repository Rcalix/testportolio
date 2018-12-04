import React, { Component } from 'react';
import '../../styles/my-theme.css';
import HeroData from '../../data/hero.json';

class HeroComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: HeroData.name,
      role: HeroData.role
    }
  }
  render() {
    return (
      <section className="main-section hero-header section--with-backdrop section--with-parallax">
        <h2 className="hero-header__subtitle">Hello there! I am</h2>
        <h1 className="hero-header__title">{this.state.name}</h1>
        <h2 className="hero-header__subtitle">{this.state.role}</h2>
    </section>
    );
  }
}

export default HeroComponent;
