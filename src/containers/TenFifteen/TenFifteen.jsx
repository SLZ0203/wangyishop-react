import React, {Component} from 'react';
import BScroll from 'better-scroll';
import './TenFifteen.css'

export default class TenFifteen extends Component {
  componentDidMount() {
    new BScroll('.qu_Scroll', {
      click: true,
      scrollX: true
    });
  }

  render() {
    return (
      <section className="queryTen">
        <header className="qu_title">十点一刻</header>
        <section className="qu_Scroll">
          <ul className="qu_list">
            <li className="qu_item">
              <p className="item_title">—<span>今日话题</span>—</p>
              <div className="item_name">生活中的哪些瞬间</div>
              <div className="item_text">曾经让你热泪盈眶</div>
              <div className="item_talking">
              <span>
              <img src="https://yanxuan.nosdn.127.net/7b43828bf9c1cb0d7d5acf538d8c4b08.jpg" className="avatar"/>
              </span>
              <div className="item_avatar">
                <div className="doc"></div>
                <div className="doc"></div>
                <div className="doc"></div>
              </div>
              <span className="item_person">1人参与话题</span>
              </div>
            </li>
            <li className="qu_item">
              <p className="item_title">
                —<span>今日话题</span>—
              </p>
              <div className="item_name">生活中的哪些瞬间</div>
              <div className="item_text">曾经让你热泪盈眶</div>
              <div className="item_talking">
              <span>
              <img src="https://yanxuan.nosdn.127.net/7b43828bf9c1cb0d7d5acf538d8c4b08.jpg" className="avatar"/>
              </span>
                <div className="item_avatar">
                  <div className="doc"></div>
                  <div className="doc"></div>
                  <div className="doc"></div>
                </div>
                <span className="item_person">1人参与话题</span>
              </div>
            </li>
            <li className="qu_more">
              <div className="seemore">
                <span>查看全部话题</span>
                <i className="iconfont icon-right-circle"></i>
              </div>
            </li>
          </ul>
        </section>
      </section>
    )
  }
}