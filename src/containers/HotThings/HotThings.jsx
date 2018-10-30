import React, {Component} from 'react';
import BScroll from 'better-scroll';
import './HotThings.css'

export default class HotThings extends Component {
  componentDidMount() {
    new BScroll('.hotWrap', {
      click: true,
      scrollX: true
    });
  }

  render() {
    return (
      <section className="hotThings">
        <header className="title">
          <span className="new">人气推荐·好物精选</span>
          <div className="more">
            <span>查看全部</span>
            <i className="iconfont icon-right"></i>
          </div>
        </header>
        <section className="hotWrap">
          <ul className="newList">
            <li className="item" v-for="(i,index) in hotItem">
              <img src="http://yanxuan.nosdn.127.net/cc4f4ce13dabc26d03c91c5e04824fb2.png" alt=""/>
              <p className="name ellipsis">超冷感吸放湿双面夏凉被</p>
              <p className="info ellipsis">冷感+亲肤，享受双面睡感</p>
              <p className="pirce">￥219</p>
            </li>
            <li className="item" v-for="(i,index) in hotItem">
              <img src="http://yanxuan.nosdn.127.net/cc4f4ce13dabc26d03c91c5e04824fb2.png" alt=""/>
              <p className="name ellipsis">超冷感吸放湿双面夏凉被</p>
              <p className="info ellipsis">冷感+亲肤，享受双面睡感</p>
              <p className="pirce">￥219</p>
            </li>
            <li className="item" v-for="(i,index) in hotItem">
              <img src="http://yanxuan.nosdn.127.net/cc4f4ce13dabc26d03c91c5e04824fb2.png" alt=""/>
              <p className="name ellipsis">超冷感吸放湿双面夏凉被</p>
              <p className="info ellipsis">冷感+亲肤，享受双面睡感</p>
              <p className="pirce">￥219</p>
            </li>
            <li className="item" v-for="(i,index) in hotItem">
              <img src="http://yanxuan.nosdn.127.net/cc4f4ce13dabc26d03c91c5e04824fb2.png" alt=""/>
              <p className="name ellipsis">超冷感吸放湿双面夏凉被</p>
              <p className="info ellipsis">冷感+亲肤，享受双面睡感</p>
              <p className="pirce">￥219</p>
            </li>
            <li className="item seeMore">查看全部</li>
          </ul>
        </section>
      </section>
    )
  }
}