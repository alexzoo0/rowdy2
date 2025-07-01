import { Grid } from '@material-ui/core';

import Navbar from '../Navbar/navbar.js';
import Footer from '../Footer/footer.js';


const ShopNow = () => {

  return (
    <Grid>
      <div> <Navbar /> </div>
      <div className='shop'>
        <div className='shopNow'>
        </div>
      </div>
      <div> <Footer /></div>
    </Grid>
  )

}

export default ShopNow;