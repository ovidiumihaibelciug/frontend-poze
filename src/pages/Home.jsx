import React, { Component } from 'react';
import classNames from 'classnames';

class Home extends Component {

  state = {
    anim: true,
    time: 3000,
    second: false
  };

  componentDidMount() {
    const { time } = this.state;
    setTimeout(() => {
      this.setState({
        second: true
      });
    }, time);
  }

  render() {
    const { anim, second, time } = this.state;
    
    return (
      <div className="home">
        <div className={classNames({ 'home__anim': anim, 'home__anim--second': second })}>
          {
            <div className="home__anim__line" style={{ animationDuration: time + 'ms' }} />
          }
        </div>
      </div>
    );
  }
}

export default Home;