import React from 'react'

const Contact = () => {
  return (
    <>
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

export default Contact