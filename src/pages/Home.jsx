import React, {Component, Fragment} from 'react';
import classNames from 'classnames';
import Logo from "../components/svg/imgs/Logo";
import {Link, NavLink} from 'react-router-dom';
import IconSearch from "../components/svg/icons/IconSearch";

class Home extends Component {

  state = {
    anim: true,
    time: 3000,
    second: false
  };

  componentDidMount() {
    const {time} = this.state;
    setTimeout(() => {
      this.setState({
        second: true
      });
      setTimeout(() => {
        this.setState({
          anim: false
        })
      }, 500)
    }, time);
  }

  render() {
    const {anim, second, time} = this.state;

    return (
      <Fragment>
        <div className="home">
          {anim ? (
            <div className={classNames({'home__anim': anim, 'home__anim--second': second})}>
              <div className="home__anim__line" style={{animationDuration: time + 'ms'}}/>
            </div>
          ) : <Fragment>
            <div className="navbar">
              <div className="navbar__logo__container">
                <Logo className="navbar__logo"/>
              </div>
              <div className="navbar__links">
                <NavLink to={'/'} className="navbar__link" activeClassName="navbar__link--active">Home</NavLink>
                <NavLink to={'/categories'} className="navbar__link"
                         activeClassName="navbar__link--active">Categories</NavLink>
                <NavLink to={'/categories'} className="navbar__link"
                         activeClassName="navbar__link--active">Test</NavLink>
                <NavLink to={'/categories'} className="navbar__link"
                         activeClassName="navbar__link--active">Stuff</NavLink>
              </div>
            </div>
            <div className="home__inner">
              <div className="home__details">
                <div className="home__details__title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas!
                </div>
                <div className="home__details__description">
                  Lorem ipsum dolor sit amet.
                </div>
              </div>
              <div className="home__pics">
                <div className="home__pics__row">
                  <div className="home__pics__item asd"></div>
                  <div className="home__pics__item asd2"></div>
                </div>
                <div className="home__pics__row">
                  <div className="home__pics__item asd3"></div>
                  <div className="home__pics__item asd4"></div>

                </div>
              </div>
            </div>
            <div className="gallery">
              <div className="gallery__inner">
                <div className="gallery__input__container">
                  <input className="gallery__input" type="text" placeholder="asd" />
                  <IconSearch className="gallery__input__icon" />
                </div>
                <div className="gallery__images">
                  dadasdad
                  asdas
                  das
                  d
                  asd
                </div>
              </div>
            </div>
          </Fragment>

          }
        </div>

      </Fragment>
    );
  }
}

export default Home;