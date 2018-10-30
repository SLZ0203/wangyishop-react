import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './FooterGuide.css'

class FooterGuide extends Component {
  goTo = (path) => {
    this.props.history.replace(path)
  }

  render() {
    const path = this.props.location.pathname
    return (
      <footer className="footer_guide">
        <div className={path === '/home' ? 'on' : ''} onClick={() => this.goTo('/home')}>
          <div className="guide_item">
            <span>
              <i className="iconfont icon-icontabbarhomeup"></i>
            </span>
            首页
          </div>
        </div>
        <div className={path === '/recommend' ? 'on' : ''} onClick={() => this.goTo('/recommend')}>
          <div className="guide_item">
            <span>
              <i className="iconfont icon-shiwu"></i>
            </span>
            识物
          </div>
        </div>
        <div className={path === '/classify' ? 'on' : ''} onClick={() => this.goTo('/classify')}>
          <div className="guide_item">
            <span>
              <i className="iconfont icon-fenlei"></i>
            </span>
            分类
          </div>
        </div>
        <div className={path === '/cart' ? 'on' : ''} onClick={() => this.goTo('/cart')}>
          <div className="guide_item">
            <span>
              <i className="iconfont icon-shoppingcart"></i>
            </span>
            购物车
          </div>
        </div>
        <div className={path === '/person' ? 'on' : ''} onClick={() => this.goTo('/person')}>
          <div className="guide_item">
            <span>
              <i className="iconfont icon-gerenzhongxin"></i>
            </span>
            个人
          </div>
        </div>
      </footer>
    )
  }
}

export default withRouter(FooterGuide)