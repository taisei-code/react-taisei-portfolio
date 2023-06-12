import React from 'react'
import ProgramingIcon from './ProgramingIcon';

const Home = () => {
  return (
    <>
      <div className="mv">
        <div className="mv-wrapper">
          {/* <span></span>
          <span></span> */}
          <p className="mv-text">
            I'm TAISEI
            <br />
            Web Developer
          </p>
        </div>
      </div>

      <section id="about" className="about fade-in">
        <div className="inner">
          <h2 className="section-title">
            <span>私について</span>ABOUT
          </h2>
          <div className="about-wrapper">
            <div className="about-left">
              <img src="images/about-taisei.jpg" alt="" />
            </div>
            <div className="about-right">
              <h3 className="about-title">
                シンプルで分りやすく、心を動かす。
              </h3>
              <p className="about-lead">
                はじめまして！<br className="sp-only" />埼玉県在住のTAISEIと申します。
                <br />
                <br />
                【経歴】
                <br />
                大学卒業後に飲食店フリーターを経て、2022年1月Web制作会社にWebエンジニアとして入社しました。大手旅行会社のWeb制作案件でフロントエンドの開発・運用・保守を担当しています。担当した業務はコーポレートサイト、ランディングページ、メディアサイトなど幅広く経験しています。
                <br />
                <br />
                【スキル一覧】
                <br />
                HTML | CSS | JavaScript
                <br />
                <br />
                【趣味】
                <br />
                筋トレ | サウナ | カフェ巡り
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="service fade-in">
        <div className="inner">
          <h2 className="section-title">
            <span>できること</span>SERVICE
          </h2>
          <div className="service-items">
            <div className="service-item">
              <ProgramingIcon src="images/html5.svg" />
              <ProgramingIcon src="images/css3.svg" />
              <h3 class="service-name">HTML/CSS</h3>
              <p class="service-lead">
                1つ1つのタグの意味を理解し、自分以外の誰が見ても分かりやすいクラス名を付けてホームページを公開後も運用しやすいコーディングを意識しています。また、CSSのグリットレイアウトの基本を理解しておりフレックスボックスでは難しいレイアウトにも柔軟に対応できます。
              </p>
            </div>
            <div className="service-item">
              <ProgramingIcon src="images/javascript_1.svg" />
              <div className="service-name">JavaScript</div>
              <div className="service-lead">
                HTMLの要素を操作するDOMで動的なUIを実装することができます。代表的なものでは、アコーディオンメニューなどWeb制作で頻出なものは実装経験があります。頻出なものは調べればコピペすることもできますが、JavaScriptの基礎を理解して自分で0から考えて実装することに達成感を得られると考えています。
              </div>
            </div>
            <div className="service-item">
              <ProgramingIcon src="images/react.svg" />
              <div className="service-name">React</div>
              <div className="service-lead">
                JavaScriptの壁を感じながらも新しいことに挑戦したいと思い、Reactの学習を始めました。
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="works fade-in">
        <div className="inner">
          <h2 className="section-title">
            <span>制作実績</span>WORKS
          </h2>
          <div className="work-items">
            <div className="work-item">
              <a href="" target="_blank">
                <div className="zoom-in-img">
                  <img
                    src="images/salad-cafe.jpg"
                    className="work-lp-img"
                    alt=""
                  />
                </div>
                <div className="work-sentence-wrapper">
                  <h3 className="work-title">Garden Salad</h3>
                  <p className="work-head">
                    {" "}
                    デザインカンプからコーディング（Figma）
                  </p>
                  <p className="work-detail">
                    HTML、CSS、jQueryで静的な架空のLPを制作しました。
                    PC、タブレット、スマートフォンなど、異なる画面サイズの
                    幅を基準にWebサイト表示を柔軟に調整しています。
                  </p>
                  <p className="work-period">制作期間目安：10日</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home