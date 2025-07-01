import { Grid } from '@material-ui/core';

import Navbar from '../Navbar/navbar.js';
import Footer from '../Footer/footer.js';


const Products = () => {
  
  return (
    <Grid>
      <div> <Navbar /> </div>
      <div className='bgProduct'>
        <div className='product'></div>
      </div>
      <div> <Footer /> </div>
    </Grid>
  )

}

export default Products;