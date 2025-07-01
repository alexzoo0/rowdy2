import { Grid } from '@material-ui/core';

import Navbar from '../Navbar/navbar.js';
import Footer from '../Footer/footer.js';


const Terms = () => {

    return (
        <Grid>
            <div> <Navbar /> </div>
            <div className='terms'>
                <div className='termsTitle'></div>
            </div>
            <div className='tc'>
                <div>
                    <h1><strong>El Rowdy </strong></h1>
                    <p>Effective Date: June 01, 2025</p>
                    <p>Website: <a href="https://www.elrowdy.com" >www.elrowdy.com</a></p>
                    <p>Contact: <a href="mailto:elrowdyatx@gmail.com">elrowdyatx@gmail.com</a></p>
                </div>

                <div>
                    <p><strong>1. Introduction</strong></p>
                    <p>Welcome to El Rowdy. These Terms and Conditions ("Terms") govern your use of our website, pop-up events, product drops, and any services provided by El Rowdy. By purchasing from or engaging with El Rowdy, you agree to be bound by these Terms.</p>
                </div>

                <div>
                    <p><strong>2. Brand Overview</strong></p>
                    <p>El Rowdy is a lifestyle brand based in Austin, Texas, offering limited-run products, pop-up experiences, and exclusive merchandise drops designed to reflect bold individuality and creative rebellion.</p>
                </div>

                <div>
                    <p><strong>3. Pop-Up Shops and Limited Drops</strong></p>
                    <p>- <strong>Exclusive Availability:</strong> Products offered at pop-up shops or limited online drops are often produced in small quantities. We cannot guarantee restocks.</p>
                    <p>- <strong>First Come, First Served:</strong> Inventory is limited and subject to availability. We reserve the right to limit quantities purchased per customer.</p>
                    <p>- <strong>No Holds or Reservations:</strong> Products at pop-up events are sold on a first-come, first-served basis and cannot be held or reserved.</p>
                    <p>- <strong>Event Changes:</strong> Dates, locations, and details of pop-up shops or drops may change. El Rowdy will post updates on our website and official social media channels.</p>
                </div>

                <div>
                    <p><strong>4. Orders & Payment</strong></p>
                    <p>- <strong>Online Orders:</strong> Purchases made through www.elrowdy.com are processed securely. Accepted payment methods include major credit cards and other options as displayed at checkout.</p>
                    <p>- <strong>Event Sales:</strong> In-person purchases may be limited to certain payment methods depending on the venue.</p>
                    <p>- <strong>Order Confirmation:</strong> You will receive a confirmation email upon successful order placement.</p>
                </div>

                <div>
                    <p><strong>5. Shipping & Delivery</strong></p>
                    <p>- <strong>Domestic Shipping Only:</strong> We currently only ship within the U.S.</p>
                    <p>- <strong>Processing Time:</strong> Please allow 3–5 business days for order processing. Delivery timelines may vary during drops or high-demand periods.</p>
                    <p>- <strong>Pop-Up Purchases:</strong> All sales made in person at pop-up events are final.</p>
                </div>

                <div>
                    <p><strong>6. Returns & Exchanges</strong></p>
                    <p>- <strong>Final Sale Policy:</strong> Due to the limited nature of our product drops and pop-up exclusives, all sales are final. No returns, refunds, or exchanges will be accepted unless a product arrives damaged or incorrect.</p>
                    <p>- <strong>Damaged Goods:</strong> Please notify us at elrowdyatx@gmail.com within 48 hours of receiving a damaged or incorrect item. Include your order number and photos.</p>
                </div>

                <div>
                    <p><strong>7. Intellectual Property</strong></p>
                    <p>All content, branding, designs, logos, and media presented by El Rowdy are the property of the brand and protected by copyright and trademark laws. No reproduction is permitted without express written permission.</p>
                </div>

                <div>
                    <p><strong>8. Email List & Notifications</strong></p>
                    <p>- <strong>Exclusive Access:</strong> Subscribers to our mailing list get first access to drops, early information about pop-ups, and exclusive content.</p>
                    <p>- <strong>Consent:</strong> By subscribing, you agree to receive marketing emails. You may unsubscribe at any time.</p>
                </div>

                <div>
                    <p><strong>9. Limitation of Liability</strong></p>
                    <p>El Rowdy shall not be liable for any indirect, incidental, or consequential damages resulting from your use of our services, events, or products.</p>
                </div>

                <div>
                    <p><strong>10. Governing Law</strong></p>
                    <p>These Terms are governed by the laws of the State of Texas.</p>
                </div>

                <div>
                    <p><strong>11. Updates to Terms</strong></p>
                    <p>We reserve the right to modify these Terms at any time. Updated terms will be posted on www.elrowdy.com with the effective date.</p>
                </div>

                <div>
                    <p>If you have any questions, contact us at <a href="mailto:elrowdyatx@gmail.com">elrowdyatx@gmail.com</a>.</p>
                </div>
            </div>

            <div> <Footer /> </div>
        </Grid>
    )

}

export default Terms;