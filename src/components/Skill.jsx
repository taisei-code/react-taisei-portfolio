import React from 'react'

const Skill = () => {
  return (
    <>
      <section id="service" className="service fade-in">
        <div className="inner">
          <h2 className="section-title"><span>できること</span>SERVICE</h2>
          <div className="service-items">
            <div className="service-item">
              <h3 className="service-name">LP制作</h3>
              <p className="service-lead">
                お客様のご要望をヒヤリングした上で、オリジナルのLPを丁寧に制作させていただきます。PC・スマホどちらでも綺麗に表示されるサイトが制作可能です。
              </p>
            </div>
            <div className="service-item">
              <h3 className="service-name">コーディング</h3>
              <p className="service-lead">
                HTML /CSS /jQueryを使用して、デザインカンプをもとに、公開後も保守しやすい静的なコーディングを行います。 
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill