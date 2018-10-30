import React, {Component} from 'react';
import BScroll from 'better-scroll';
import './NewStarter.css'

export default class NewStarter extends Component {
  componentDidMount() {
    new BScroll('.newWrap', {
      click: true,
      scrollX: true
    });
  }

  render() {
    return (
      <section className="newStarter">
        <header className="title">
          <span className="new">新品首发</span>
          <div className="more">
            <span>查看全部</span>
            <i className="iconfont icon-right"></i>
          </div>
        </header>
        <section className="newWrap">
          <ul className="newList">
            <li className="item" v-for="(item,index) in newItem">
              <img src="http://yanxuan.nosdn.127.net/33148f20c32525c6dcb9f33577957e77.png" alt=""/>
              <p className="name ellipsis">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</p>
              <p className="info ellipsis">夏季爆品，媲美现煮</p>
              <p className="pirce">￥98</p>
            </li>
            <li className="item" v-for="(item,index) in newItem">
              <img src="http://yanxuan.nosdn.127.net/33148f20c32525c6dcb9f33577957e77.png" alt=""/>
              <p className="name ellipsis">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</p>
              <p className="info ellipsis">夏季爆品，媲美现煮</p>
              <p className="pirce">￥98</p>
            </li>
            <li className="item" v-for="(item,index) in newItem">
              <img src="http://yanxuan.nosdn.127.net/33148f20c32525c6dcb9f33577957e77.png" alt=""/>
              <p className="name ellipsis">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</p>
              <p className="info ellipsis">夏季爆品，媲美现煮</p>
              <p className="pirce">￥98</p>
            </li>
            <li className="item" v-for="(item,index) in newItem">
              <img src="http://yanxuan.nosdn.127.net/33148f20c32525c6dcb9f33577957e77.png" alt=""/>
              <p className="name ellipsis">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</p>
              <p className="info ellipsis">夏季爆品，媲美现煮</p>
              <p className="pirce">￥98</p>
            </li>
            <li className="item seeMore">查看全部</li>
          </ul>
        </section>
      </section>
    )
  }
}