import React from 'react'
import { Container, Row, Col, Table, Image } from 'react-bootstrap'
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";



const Contact = () => {
    return (
        <>
            <Container style={{ padding:'3rem 2rem', backgroundColor: 'rgba(255,255,255,0.6)'}}>
                <Row>
                    <Col md={6}  style={{paddingRight:'15px'}}>
                        <h1>Contact Us</h1>
                        <p style={{textAlign: 'justify'}}>
                            Thank you for choosing Pizzeria! We're here to make your pizza experience delightful and hassle-free. Whether you have a question, feedback, or need assistance with your order, we're always happy to help.
                            <br /> <br />
                            <strong>Customer Support : </strong><br />
                            Our customer support team is available daily from 9 AM to 9 PM. You can reach us at +91 655 723 7234 for any inquiries, order issues, or general information. We're committed to providing prompt and friendly service.
                            <br /> <br />
                            <strong>Email Us : </strong><br />
                            Prefer to write to us? Send your questions or feedback to support@pizzeria.com. We strive to respond to all emails within 24 hours. Your suggestions help us improve our services, so don't hesitate to share your thoughts.
                            <br /> <br />
                            <strong>Live Chat : </strong><br />
                            For instant support, use our live chat feature available on our website. Our representatives are ready to assist you in real-time with any concerns or questions you might have.
                            <br /> <br />
                            <strong>Social Media : </strong><br />
                            Connect with us on social media! Follow us on @pizzeria_love for the latest updates, promotions, and pizza news. You can also send us messages or leave comments—we love hearing from our customers.
                            <br /><br />
                            Your satisfaction is our top priority. Thank you for choosing us for your pizza cravings!
                        </p>
                        <Table striped bordered hover className='text-center' >
                            <thead>
                                <tr>
                                    <th className='bg-warning text-center' colSpan={3}>Contact Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><IoMdCall /></td>
                                    <td>Phone</td>
                                    <td>+91 655 723 7234</td>
                                </tr>
                                <tr>
                                    <td><MdOutlineEmail /></td>
                                    <td>Email</td>
                                    <td>support@pizzeria.com</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: '20px' }} src='images/contact.jpg' />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact