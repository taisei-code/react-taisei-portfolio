import React from 'react'

const HomePage = () => {
  return (
    <>
      <div className="mv">
        <div className="mv-wrapper">
          <p className="mv-text">
            I'm TAISEI<br />
            Web Developer
          </p>
        </div>
      </div>

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

      <section id="service" className="service fade-in">
        <div className="inner">
          <h2 className="section-title"><span>できること</span>SERVICE</h2>
          <div className="service-items">
            <div className="service-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
              <div className="skill-bg">
                <div className='skill-range'>70%</div>
              </div>
            </div>
            <div className="service-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
              <div className="skill-bg">
                <div className='skill-range'>70%</div>
              </div>
            </div>
            <div className="service-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <div className="skill-bg">
                <div className='skill-range'>40%</div>
              </div>
            </div>
            <div className="service-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
              <div className="skill-bg">
                <div className='skill-range'>10%</div>
              </div>
            </div>

          </div>
        </div>
      </section>

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

      <section id="contact" className="contact title-position_right fade-in">
        <div className="inner">
          <h2 className="section-title secContact-title"><span>お問い合わせ</span>CONTACT</h2>
          <p className="contact-lead">
            お仕事のご依頼やお問い合わせは下記フォームから受け付けています。<br className="pc_only" />
            24時間以内に回答いたしますので、些細なことでもお気軽にご相談ください。
          </p>
          <form action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSdQ9YAK2Zosa1QJ8KRmfdomHZff975uhwHMVGjsILCeNIn0Ig/formResponse" id="form">
            <div className="item">
              <label className="label"  for="name">お名前</label>
              <input className="inputs" id="name" type="text" name="entry.280387875"required />
            </div>
            
            <div className="item">  
              <label className="label"  for="email">メールアドレス</label>
              <input className="inputs" id="email" type="email" name="entry.945328814"required />
            </div>
            
            <div className="item">
              <label className="label" for="comment">メッセージ本文</label>
              <textarea className="inputs" id="comment" name="entry.1921610804"required></textarea>
            </div>

            <div className="btn-area">
              <input type="submit" className="submit_btn" value="送信する" />
            </div>
          </form>
          {/* <p className="end_message">お問い合わせありがとうございました</p>
          <p className="false_message">送信失敗です</p> */}
        </div>
      </section>
      
    </>
  )
}

export default HomePage