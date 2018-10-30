import React, {Component} from 'react';
import './BestChoose.css'

export default class BestChoose extends Component {
  render() {
    return (
      <section className="bestChoose">
        <header className="be_title">严选推荐</header>
        <section className="be_img">
          <img src="https://yanxuan.nosdn.127.net/09d83c97c9963495e6518cfbec776b4c.jpg" alt=""/>
          <div className="be_name">严选推荐</div>
        </section>
        <section className="be_list">
          <header className="list_title">
            <span>严选推荐</span>
            <span className="li_price">9.9元起</span>
            <p className="list_info">少年感养成必备好物，每满149立减20元</p>
          </header>
          <ul className="list_con">
            <li className="li_item">
              <div className="li_text">
                <img src="https://yanxuan.nosdn.127.net/0e01ded6e62a0d479ef6d3b9e4748305.png" className='avatar'/>
                <span className="li_name">丁磊</span>
                <p className="year ellipsis">今年世界杯喝什么？</p>
                <p className="youhui">拉格啤酒8.5折特价，买即赠小龙虾优惠券</p>
              </div>
              <img src="https://yanxuan.nosdn.127.net/7af712a2e7af35c752a45ab1451c33a2.jpg" alt=""
                   className="item_Img"/>
            </li>
            <li className="li_item">
              <div className="li_text">
                <img src="https://yanxuan.nosdn.127.net/0e01ded6e62a0d479ef6d3b9e4748305.png" className='avatar'/>
                <span className="li_name">丁磊</span>
                <p className="year ellipsis">今年世界杯喝什么？</p>
                <p className="youhui">拉格啤酒8.5折特价，买即赠小龙虾优惠券</p>
              </div>
              <img src="https://yanxuan.nosdn.127.net/7af712a2e7af35c752a45ab1451c33a2.jpg" alt=""
                   className="item_Img"/>
            </li>
          </ul>
        </section>
      </section>
    )
  }
}