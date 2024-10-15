import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Policy = () => {
    return (
        <>
            <Container style={{ padding:'2rem 2rem', backgroundColor: 'rgba(255,255,255,0.6)'}}>
                <h1>Terms and Conditions</h1>
                <Row style={{textAlign: 'justify'}}>
                    <Col md={11}>
                        <h6 style={{ marginTop: '1rem' }}><strong>⚆ General Terms</strong></h6>
                        <p style={{marginLeft: '2rem'}}>By yes accessing or using Pizzeria's services, you agree to comply with these Terms and Policies.
                            We reserve the right to modify these terms at any time. Changes will be posted on our website and are effective immediately.</p>
                    </Col>
                    <Col md={11}>
                        <h6 ><strong>⚆ Ordering and Payment</strong></h6>
                        <p style={{marginLeft: '2rem'}}>
                            Orders can be placed through our website, app, or by phone.<br />
                            Payment methods include credit/debit cards, digital wallets, and cash upon delivery.<br />
                            All prices are in INR or Indian Rupee and are subject to change without notice.
                        </p>
                    </Col>
                    <Col md={11}>
                        <h6 ><strong>⚆ Delivery & Pickup</strong></h6>
                        <p style={{marginLeft: '2rem'}}>
                            Delivery is available within 5 Kms. A delivery fee may apply.<br />
                            Estimated delivery times are provided at the time of order but may vary due to traffic, weather, or other conditions.<br />
                            Pickup orders must be collected within 30 minutes of the scheduled time.
                        </p>
                    </Col>
                    <Col md={11}>
                        <h6 ><strong>⚆ Cancellation and Refunds</strong></h6>
                        <p style={{marginLeft: '2rem'}}>
                            Orders can be canceled within 10 minutes of placement. After this period, cancellations may not be accommodated.<br />
                            Refunds are issued at our discretion, typically for incorrect or missing items. Please contact us within 24 hours of delivery for any issues.
                        </p>
                    </Col>
                    <Col md={11}>
                        <h6 ><strong>⚆ Allergies and Dietary Restrictions</strong></h6>
                        <p style={{marginLeft: '2rem'}}>
                            We offer gluten-free and vegan options, but cross-contamination is possible. Please inform us of any allergies or dietary restrictions when ordering.<br />
                            We cannot guarantee the absence of allergens in our food.
                        </p>
                    </Col>
                    <Col md={11}>
                        <h6 ><strong>⚆ Privacy Policy</strong></h6>
                        <p style={{marginLeft: '2rem'}}>
                            Your personal information is used solely for processing orders and improving our services. We do not share your information with third parties without your consent.<br />
                            For more details, please review our <Link to={'/privacy-policy'} style={{textDecoration: 'none'}}>Privacy Policy</Link> on our website.
                        </p>
                    </Col>
                    <Col md={11}>
                        <h6 ><strong>⚆ Loyalty Program</strong></h6>
                        <p style={{marginLeft: '2rem'}}>
                        Our loyalty program rewards frequent customers. Points are earned on eligible purchases and can be redeemed for discounts or special offers.<br />
                        Points have no cash value and are non-transferable.
                        </p>
                    </Col>
                    <Col md={11}>
                        <h6 ><strong>⚆ Intellectual Property</strong></h6>
                        <p style={{marginLeft: '2rem'}}>
                        All content on our website, including logos, images, and text, is the property of Pizzeria. Unauthorized use is prohibited.
                        </p>
                    </Col>
                    <Col md={11}>
                        <h6 ><strong>⚆ Governing Law</strong></h6>
                        <p style={{marginLeft: '2rem'}}>
                        These Terms and Policies are governed by the laws of India. Any disputes will be resolved in the courts of India.
                        </p>
                    </Col>
                    <Col md={11}>
                        <h6 ><strong>⚆ Contact Us</strong></h6>
                        <p style={{marginLeft: '2rem'}}>
                        For any questions or concerns, please contact us at support@pizzeria.com or +91 655 723 7234. We are here to assist you and ensure a pleasant experience.
                        </p>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Policy