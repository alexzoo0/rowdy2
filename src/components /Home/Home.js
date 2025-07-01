import { useRef, useState } from 'react';
import { Grid } from '@material-ui/core';
import emailjs from '@emailjs/browser';

import Navbar from '../Navbar/navbar.js';
import Footer from '../Footer/footer.js';


const Home = () => {
  const form = useRef();
    const [ result, showResult ] = useState(false);

    const Result = () => {
        return (
            <p className='sucess'>Your message has beeen sent successfully!</p>
        )
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rq258tl', 'template_cwi9z8i', form.current, '-I3mJJN-b4ZKB1AfZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };
  return (

    <Grid>
      <div> <Navbar /> </div>
      <div className='three'>
        <div className='img'></div>
      </div>
        <div className='boxImg'>
          <div className='featuredImg'></div>
        </div>
        <div className='news'>
          <form ref={form} onSubmit={sendEmail}  className='newsletter'>
          <input  type="email" name="email" placeholder="Type Email Here" required></input>
          <button className='buttonN' type="submit" value="Send" >Submit</button>
        </form>
        </div>
        <div className='result'> 
          {result ? <Result /> : null}
        </div>
      <div> <Footer /> </div>
    </Grid>
  )

}

export default Home;