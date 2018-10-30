import React, {Component} from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import BScroll from 'better-scroll';

import './Home.css'
import NewStarter from '../../containers/NewStarter/NewStarter';
import HotThings from '../../containers/HotThings/HotThings';
import ProjectGoods from '../../containers/ProjectGoods/ProjectGoods';
import GoodThings from '../../containers/GoodThings/GoodThings';
import FtWrap from '../../containers/FtWrap/FtWrap';

export default class Home extends Component {
  _initScroll = () => {
    //导航栏滑动
    new BScroll('.swiperWrap', {
      click: true,
      scrollX: true
    });
    //页面竖向滑屏
    new BScroll('.scrollWrap', {
      click: true,
    })
  };

  componentDidMount() {
    this._initScroll();
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      loop: true,
      autoplay: true,
      speed: 800,
    });
  }

  render() {
    return (
      <div>
        {/*<!--头部-->*/}
        <header className="headerWrap">
          <div className="shopSearch">
            <h3>网易严选</h3>
            <input type="text" placeholder="搜索商品，共计9999款好物"/>
            <i className="iconfont icon-sousuo"></i>
          </div>
          <div className="swiperWrap">
            <ul className="shopNav">
              <li>推荐</li>
              <li>推荐</li>
              <li>推荐</li>
              <li>推荐</li>
              <li>推荐</li>
              <li>推荐</li>
              <li>推荐</li>
              <li>推荐</li>
              <li>推荐</li>
              <li>推荐</li>
            </ul>
          </div>
        </header>
        {/*<!--内容区域-->*/}
        <section className="scrollWrap">
          <div className="homeContainer">
            {/*<!--轮播图区域-->*/}
            <div className="swipeWrap">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img
                      src="https://yanxuan.nosdn.127.net/fc52e260d16abdff1a8777a713c67aa2.jpg?imageView&quality=75&thumbnail=750x0"/>
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://yanxuan.nosdn.127.net/fc52e260d16abdff1a8777a713c67aa2.jpg?imageView&quality=75&thumbnail=750x0"/>
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://yanxuan.nosdn.127.net/fc52e260d16abdff1a8777a713c67aa2.jpg?imageView&quality=75&thumbnail=750x0"/>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
              <ul className="shopPromise">
                <li>
                  <i className="iconfont icon-duigou01"></i>
                  <span>网易自营品牌</span>
                </li>
                <li>
                  <i className="iconfont icon-duigou01"></i>
                  <span>30天无忧退货</span>
                </li>
                <li>
                  <i className="iconfont icon-duigou01"></i>
                  <span>48小时快速退款</span>
                </li>
              </ul>
            </div>
            {/*<!--品牌制造商列表-->*/}
            <div className="shopList">
              <header className="title">
                <span>品牌制造商直供</span>
                <i className="iconfont icon-right"></i>
              </header>
              <ul className="brand">
                <li>
                  <div className="info">
                    <p>Nine West制造商</p>
                    <p>199元起</p>
                    <span><i className="iconfont icon-shangxin"></i></span>
                  </div>
                  <img src="http://yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png" alt=""/>
                </li>
                <li>
                  <div className="info">
                    <p>Nine West制造商</p>
                    <p>199元起</p>
                    <span><i className="iconfont icon-shangxin"></i></span>
                  </div>
                  <img src="http://yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png" alt=""/>
                </li>
                <li>
                  <div className="info">
                    <p>Nine West制造商</p>
                    <p>199元起</p>
                    <span><i className="iconfont icon-shangxin"></i></span>
                  </div>
                  <img src="http://yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png" alt=""/>
                </li>
                <li>
                  <div className="info">
                    <p>Nine West制造商</p>
                    <p>199元起</p>
                    <span><i className="iconfont icon-shangxin"></i></span>
                  </div>
                  <img src="http://yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png" alt=""/>
                </li>
              </ul>
            </div>
            {/*<!--新品首发列表newItem={this.state.home_new}-->*/}
            <NewStarter/>
            {/*<!--人气推荐列表-->*/}
            <HotThings/>
            {/*<!--福利社-->*/}
            <section className="boonWrap"></section>
            {/*<!--专题精选列表-->*/}
            <ProjectGoods/>
            {/*<!--好物列表-->*/}
            <GoodThings/>
            {/*<!--底部声明-->*/}
            <FtWrap/>
          </div>
        </section>
      </div>
    )
  }
}
    