import { Grid } from '@material-ui/core';

import Navbar from '../Navbar/navbar.js';
import Footer from '../Footer/footer.js';


const AboutUs = () => {

  return (
    <Grid>
      <div> <Navbar /> </div>
      <div className='aboutUs'>
        <div className='about'></div>
      </div>
      <div className='contentA'>
        <div>
          <p>El Rowdy was founded in early 2025 right here in Austin, Texas — a city known for its creative energy, rebellious soul, and deep connection to western heritage. What began as a casual idea among friends quickly evolved into a full-fledged vision: to create a hat brand that honors the spirit of Texas while bringing something bold and fresh to the fashion world. Inspired by cowboy grit, desert landscapes, honky-tonk nights, and open road freedom, we set out to design headwear that doesn’t just look good — it <em>means</em> something. Every stitch is rooted in the culture we live and breathe, from late-night sketches to sunrise brainstorms, all fueled by the belief that what you wear on your head should tell a story.</p>
        </div>

        <div>
          <p>Our first big moment came in mid-June 2025 when we secured our first large order — a wave of support that validated everything we had been building toward. That milestone wasn’t just a business win; it was a turning point. We realized that people weren’t just buying hats — they were buying into the El Rowdy attitude: fearless, wild-hearted, and proud. That early success lit a fire under us, pushing us to finish our first full collection, which we’re incredibly excited to release in early August. This debut line is more than a product drop — it’s the introduction of our identity to the world. It reflects who we are and the raw, authentic energy that drives us.</p>
        </div>

        <div>
          <p>From day one, our mission has been clear: to deliver unmatched quality and an unforgettable experience to every customer. We’re not here to chase trends — we’re here to create timeless, durable, and distinctive hats that represent our community, our roots, and the stories we want to tell. Whether you’re a cowboy at heart, a city rebel with southern roots, or someone who just appreciates bold, well-made gear — El Rowdy is for you. We’re proud to be Austin-established, Texas-inspired, and driven by a commitment to stay true to who we are. This is just the beginning, and we’re honored to have you ride with us.</p>
        </div>
      </div>
      <div> <Footer /> </div>
    </Grid>
  )

}

export default AboutUs;