import { Grid } from '@material-ui/core';

import Navbar from '../Navbar/navbar.js';
import Footer from '../Footer/footer.js';


const Questions = () => {

    return (
        <Grid>
            <div> <Navbar /> </div>
            <div className='bgfaq'>
                <div className='faqs'></div>
            </div>
            <div>
                <div className="faq">
                    <h1>Frequently Asked Questions</h1>

                    <div class="faq-item">
                        <h2>What is El Rowdy?</h2>
                        <p>El Rowdy is a Texas-based lifestyle and streetwear brand inspired by bold self-expression, rebellion, and authentic individuality. We release limited drops and host pop-up events with exclusive gear and designs.</p>
                    </div>

                    <div class="faq-item">
                        <h2>How do I find out when new drops or collections launch?</h2>
                        <p>The best way to stay in the loop is by signing up for our email list at <a href="https://www.elrowdy.com">www.elrowdy.com</a> or following us on Instagram <a href="https://instagram.com/elrowdy">@elrowdy</a>. Email subscribers get first access to product drops and event announcements.</p>
                    </div>

                    <div class="faq-item">
                        <h2>Are your products limited edition?</h2>
                        <p>Yes — all of our drops and pop-up releases are produced in limited quantities. Once an item sells out, it’s usually gone for good. No restocks unless we announce a special re-release.</p>
                    </div>

                    <div class="faq-item">
                        <h2>Where can I buy El Rowdy gear?</h2>
                        <p>You can shop exclusive collections online at <a href="https://www.elrowdy.com" >www.elrowdy.com</a> or in person at one of our pop-up shop events. Follow us online for event dates and locations.</p>
                    </div>

                    <div class="faq-item">
                        <h2>Do you restock sold-out items?</h2>
                        <p>Not typically. Our products are made in small batches. If a restock is planned, we’ll announce it via email and Instagram.</p>
                    </div>

                    <div class="faq-item">
                        <h2>Do you accept returns or exchanges?</h2>
                        <p>All sales are final. We only accept returns for items that are damaged or incorrect. If there's an issue with your order, email us at <a href="mailto:elrowdyatx@gmail.com">elrowdyatx@gmail.com</a> within 48 hours of receiving your item.</p>
                    </div>

                    <div class="faq-item">
                        <h2>Where do you ship?</h2>
                        <p>We currently ship within the U.S. only. Shipping rates and times are calculated at checkout.</p>
                    </div>

                    <div class="faq-item">
                        <h2>How long does it take to receive my order?</h2>
                        <p>Orders typically ship within 3–5 business days. During drops or high-demand periods, processing may take longer. You'll receive tracking info as soon as your order ships.</p>
                    </div>

                    <div class="faq-item">
                        <h2>Can I pick up an order at a pop-up?</h2>
                        <p>Pop-up events are first-come, first-served. Online orders are shipped only. We don’t currently offer local pickup unless specified during an event.</p>
                    </div>

                    <div class="faq-item">
                        <h2>How do I become a brand ambassador or collab with El Rowdy?</h2>
                        <p>We’re always open to creative collaborations. Shoot us an email at <a href="mailto:elrowdyatx@gmail.com">elrowdyatx@gmail.com</a> with your idea, links to your work, or your social media handle.</p>
                    </div>
                </div>

            </div>
            <div> <Footer /> </div>
        </Grid>
    )

}

export default Questions;