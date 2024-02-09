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
                <input type='text' name='name' placeholder='Input your name here' />
              </label>
              <label>
                Email:
                <input type='text' name='email' placeholder='example@email.com' />
              </label>
              <label>
                Message:
                <textarea name='message' placeholder='Write your message here' />
              </label>
              <button type='submit' className='contactButton'>Submit</button>
            </form>
          </div>        
        </nav>
      </>
    )
  }
  
  export default Contact