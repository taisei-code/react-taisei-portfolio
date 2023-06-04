import React from 'react'

const About = () => {
  return (
    <>
       <section id="about" className="about fade-in">
        <div className="inner">
          <h2 className="section-title"><span>私について</span>ABOUT</h2>
          <div className="about-wrapper">
            <div className="about-left">
              <img src="images/about-taisei.jpg" alt="" />
            </div>
            <div className="about-right">
              <h3 className="about-title">シンプルで分りやすく、心を動かす。</h3>
              <p className="about-lead">
                はじめまして！埼玉県在住のTAISEIと申します。<br /><br />
                【経歴】<br />
                大学卒業後に飲食店フリーターを経て、現在は、都内の制作会社でWebエンジニアをしています。制作会社で得られたノウハウを活かすことはもちろんのこと、個人事業主として経営目線を持つことで、お客様に寄り添い、お客様の課題に正面から向き合ってまいります。
                <br /><br />
                【スキル一覧】<br />
                HTML | CSS | JavaScript（jQuery）<br /><br />
                【趣味】<br />
                筋トレ | サウナ | カフェ巡り
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About