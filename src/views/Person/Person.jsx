import React, {Component} from 'react';
import './Person.css';
import HeaderTop from '../../containers/HeaderTop/HeaderTop'
export default class Person extends Component {
  render() {
    return (
      <div>
        <HeaderTop/>
        <section className="loginTypes">
          <div className="logoWrap">
            <img src="./images/1.png" alt=""/>
          </div>
          <div className="btnWrap">
            <div className="loginWay phone">
              <i className="iconfont icon-mobilephone"></i>
              <span>手机号码登录</span>
            </div>
            <div className="loginWay email">
              <i className="iconfont icon-duanxin"></i>
              <span>邮箱账号登陆</span>
            </div>
            <div className="loginWay register">
              <span>手机号快捷注册</span>
              <i className="iconfont icon-right"></i>
            </div>
          </div>
          <div className="other">
           <span className="itemWrap">
              <i className="iconfont"></i>
              微信
            </span>
            <span className="itemWrap">
              <i className="iconfont"></i>
              QQ
            </span>
            <span className="itemWrap">
              <i className="iconfont"></i>
              微博
            </span>
          </div>
        </section>
      </div>
    )
  }
}