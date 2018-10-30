import React, {Component} from 'react';
import './FtWrap.css'

export default class FtWrap extends Component {
  render() {
    return (
      <section className="ftWrap">
        <div className="f_wrap">
          <div className="phone_pc">
            <span>下载APP</span>
            <span>电脑版</span>
          </div>
          <p className="copyright">
            <span>网易公司版权所有 © 1997-</span>
            <span>2018</span><br/>
            <span>食品经营许可证：JY13301080111719</span>
          </p>
        </div>
      </section>
    )
  }
}