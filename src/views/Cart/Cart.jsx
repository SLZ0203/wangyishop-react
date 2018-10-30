import React, {Component} from 'react';
import './Cart.css'

export default class Cart extends Component {
  render() {
    return (
      <section className="cartWrap">
        <header className="cartHeader">
          <span>购物车</span>
          <a href="javascript:;">领券</a>
        </header>
        <section className="shopPromise">
          <ul>
            <li>
              <i className="iconfont icon-shixinxiaoyuandian"></i>
              <span>30天无忧退货</span>
            </li>
            <li>
              <i className="iconfont icon-shixinxiaoyuandian"></i>
              <span>48小时快速退款</span>
            </li>
            <li>
              <i className="iconfont icon-shixinxiaoyuandian"></i>
              <span>满88元免邮费</span>
            </li>
          </ul>
        </section>
        <section className="cartList">
          <img src='//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png' className="cartImg"/>
          <div className="noCart">
            <p>去添加点什么吧</p>
            <button className="login">登陆</button>
          </div>
        </section>
      </section>
    )
  }
}