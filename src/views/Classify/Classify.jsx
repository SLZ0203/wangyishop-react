import React, {Component} from 'react';
import BScroll from 'better-scroll';
import ClassItem from '../../views/ClassItem/ClassItem'
import './Classify.css'

export default class Classify extends Component {
  //初始化滚动方法
  _initScroll() {
    new BScroll('.navWrap', {
      click: true,
      scrollX: true
    });
    new BScroll('.scrollWrap', {
      click: true,
    })
  }

  componentDidMount() {
    this._initScroll()
  }

  render() {
    return (
      <section className="classWrap">
        <header className="search">
          <div className="text">
            <span>
              <i className="iconfont icon-sousuo"></i>
              <span>搜索商品，共16808款好物</span>
            </span>
          </div>
        </header>
        <div className="navWrap">
          <ul className="list">
            {/*<!-- className="on"-->*/}
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
            <li>推荐专区</li>
          </ul>
        </div>
        <div className="scrollWrap">
          <ClassItem/>
        </div>
      </section>
    )
  }
}