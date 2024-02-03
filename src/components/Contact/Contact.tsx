import './Contact.css'

function Contact() {
    return (
      <>
        <p>
          <h1>Contact Us!</h1>
        </p>
        <p>
          You can contact us through social media, email or you can leave your message below.
        </p>
        <nav>
          <div className='menu'>
            <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>Facebook</a>
            <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>Instagram</a>
            <a href='mailto:' target='_blank' rel='noreferrer'>Email</a>
          </div>
        </nav>
        <nav>
          <div>
            <form className="contactForm">
              <label>
                Name:
                <input type='text' name='name' />
              </label>
              <label>
                Email:
                <input type='text' name='email' />
              </label>
              <label>
                Message:
                <textarea name='message' />
              </label>
              <input type='submit' value='Submit' />
            </form>
          </div>        
        </nav>
      </>
    )
  }
  
  export default Contact