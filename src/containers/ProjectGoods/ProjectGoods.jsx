import React, {Component} from 'react';
import BScroll from 'better-scroll';
import './ProjectGoods.css';

export default class ProjectGoods extends Component {
  componentDidMount() {
    new BScroll('.pro_wrap', {
      click: true,
      scrollX: true
    });
  }

  render() {
    return (
      <section className="projectGoods">
        <header className="pro_title">
          <span>专题精选</span>
          <i className="iconfont icon-right-circle"></i>
        </header>
        <section className="pro_wrap">
          <ul className="pro_list">
            <li className="pro_item">
              <img src="https://yanxuan.nosdn.127.net/22c06cba5722e5fd0e9561cf5b7b1800.jpg" alt=""/>
              <div className="pro_name">
                <span>硅胶洁面仪，洗出会发光的素颜肌</span>
                <span className="price">107.1元起</span>
              </div>
              <div className="pro_msg">给毛孔来一次深度清洁</div>
            </li>
            <li className="pro_item">
              <img src="https://yanxuan.nosdn.127.net/22c06cba5722e5fd0e9561cf5b7b1800.jpg" alt=""/>
              <div className="pro_name">
                <span>硅胶洁面仪，洗出会发光的素颜肌</span>
                <span className="price">107.1元起</span>
              </div>
              <div className="pro_msg">给毛孔来一次深度清洁</div>
            </li>
            <li className="pro_item">
              <img src="https://yanxuan.nosdn.127.net/22c06cba5722e5fd0e9561cf5b7b1800.jpg" alt=""/>
              <div className="pro_name">
                <span>硅胶洁面仪，洗出会发光的素颜肌</span>
                <span className="price">107.1元起</span>
              </div>
              <div className="pro_msg">给毛孔来一次深度清洁</div>
            </li>
          </ul>
        </section>
      </section>
    )
  }
}