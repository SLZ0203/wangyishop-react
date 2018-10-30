import React, {Component} from 'react'
import './HeaderTop.css'

export default class HeaderTop extends Component {
  render() {
    return (
      <header className="topHeader">
        <div className="headerWrap">
          <span className="home">
            <i className="iconfont icon-icontabbarhomeup"></i>
          </span>
          <span className="title">网易严选</span>
          <span className="search">
            <i className="iconfont icon-sousuo"></i>
          </span>
          <span className="cart">
            <i className="iconfont icon-shoppingcart" f></i>
          </span>
        </div>
      </header>
    )
  }
}