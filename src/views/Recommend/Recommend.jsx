import React, {Component} from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import BScroll from 'better-scroll';

import './Recommend.css';
import HeaderTop from '../../containers/HeaderTop/HeaderTop'
import BestChoose from '../../containers/BestChoose/BestChoose'
import TenFifteen from '../../containers/TenFifteen/TenFifteen'
import FtWrap from '../../containers/FtWrap/FtWrap'

export default class Recommend extends Component {
  _initScroll() {
    //轮播图
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      loop: true,
    });
    //文章列表横向滑屏
    new BScroll('.article', {
      click: true,
      scrollX: true
    });
    //整体页面竖向滑屏
    new BScroll('.recoWrap', {
      click: true,
    });
  }

  componentDidMount() {
    this._initScroll()
  }

  render() {
    return (
      <section>
        <HeaderTop/>
        <div className="recoWrap">
          <section className="papaWrap">
            {/*<!--轮播图-->*/}
            <div className="bannerWarp">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/9c9bbc692ff2b98e729a67ecca003dff.jpg" alt=""/>
                  </div>
                  <div className="swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/9c9bbc692ff2b98e729a67ecca003dff.jpg" alt=""/>
                  </div>
                  <div className="swiper-slide">
                    <img src="https://yanxuan.nosdn.127.net/9c9bbc692ff2b98e729a67ecca003dff.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--推荐文章列表-->*/}
            <div className="article">
              <ul className="list">
                <li>
                  <img src="https://yanxuan.nosdn.127.net/cbcc9dcba30d4f8448a4412db4d9122f.png" alt=""/>
                  <span>丁磊的好货推荐</span>
                  <span className="number">25篇文章</span>
                </li>
                <li>
                  <img src="https://yanxuan.nosdn.127.net/cbcc9dcba30d4f8448a4412db4d9122f.png" alt=""/>
                  <span>丁磊的好货推荐</span>
                  <span className="number">25篇文章</span>
                </li>
                <li>
                  <img src="https://yanxuan.nosdn.127.net/cbcc9dcba30d4f8448a4412db4d9122f.png" alt=""/>
                  <span>丁磊的好货推荐</span>
                  <span className="number">25篇文章</span>
                </li>
                <li>
                  <img src="https://yanxuan.nosdn.127.net/cbcc9dcba30d4f8448a4412db4d9122f.png" alt=""/>
                  <span>丁磊的好货推荐</span>
                  <span className="number">25篇文章</span>
                </li>
                <li>
                  <img src="https://yanxuan.nosdn.127.net/cbcc9dcba30d4f8448a4412db4d9122f.png" alt=""/>
                  <span>丁磊的好货推荐</span>
                  <span className="number">25篇文章</span>
                </li>
              </ul>
            </div>
            {/*<!--严选推荐列表-->*/}
            <BestChoose/>
            {/*<!--十点一刻TenFifteen-->*/}
            <TenFifteen/>
            {/*<!--严选甄品RecommZhenpin-->*/}
            {/*<RecommZhenpin/>*/}
            {/*<!--严选Look-->*/}
            {/*<RecommLook/>*/}
            {/*<!--更多精彩-->*/}
            {/*<MoreThings/>*/}
            {/*<!--底部声明-->*/}
            <FtWrap/>
          </section>
        </div>
      </section>
    )
  }
}