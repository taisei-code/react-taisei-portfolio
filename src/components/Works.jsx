import React from 'react'

const Works = () => {
  return (
    <>
      <section id="works" className="works fade-in">
        <div className="inner">
          <h2 className="section-title"><span>制作実績</span>WORKS</h2>
          <div className="work-items">
            <div className="work-item">
              <a href="" target="_blank">
                <div className="zoom-in-img">
                  <img src="images/salad-cafe.jpg" className="work-lp-img" alt="" />
                </div>
                <div className="work-sentence-wrapper">
                  <h3 className="work-title">Garden Salad</h3>
                  <p className="work-head"> デザインカンプからコーディング（Figma）</p>
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
  )
}

export default Works