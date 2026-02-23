import './footer.css';

function Footer(){

  // function Alert(Alert) { // For the submit button. 
  //   onclick(addEventListener () => {
      
  //   })
  // }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className='spread-em'>
          <div>
            <h4>Contact Us Now </h4>
            <p>Ogun State, Mowe. <br/>Redemption City, T.A 101011<br/>+234 (706) 142-5970</p>
          </div>

          <div>
            <h4>Follow Us</h4>
            <p>Instagram • Facebook • Twitter</p>
            <p>Tiktok • Youtube</p>
          </div>
        </div>

        <div className='news-letter'>
          <h4>Subscribe to our Daily Blog</h4>
          <form className="newsletter">
            <input placeholder="Your email" label="email" />
            <button className="btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Kings Kitchen - All rights reserved</div>
    </footer>    
  )
}

export default Footer;