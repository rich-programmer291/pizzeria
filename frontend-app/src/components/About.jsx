import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const About = () => {
    return (
        <>
            <Container style={{ padding:'4rem', backgroundColor: 'rgba(255,255,255,0.6)'}}>
                <div style={{ textAlign: 'justify' }}>
                    <h1>Who we are</h1>
                    <p> Welcome to Pizzeria, where passion for pizza meets the finest ingredients!
                        <br />
                        Established in 2020, we are a family-owned pizzeria dedicated to bringing you authentic, hand-tossed pizzas that delight your taste buds. Our journey began with a simple mission: to craft delicious, high-quality pizzas using fresh, locally-sourced ingredients.
                        At Pizzeria, we believe in the art of traditional pizza making. Our dough is made from scratch daily, and each pizza is lovingly prepared with a blend of the best cheeses, homemade sauces, and a variety of fresh toppings. Whether you're a fan of classic Margherita, crave a meat lover's feast, or enjoy experimenting with unique flavors, we have something for everyone.
                        Join us in our cozy, welcoming environment, or enjoy our convenient delivery and takeaway options. We look forward to sharing our passion for pizza with you!</p>
                </div>

                <h1>Our Speciality</h1>
                <Row style={{ textAlign: 'justify' }}>
                    <Col md={6} >
                        <p>At Pizzeria, we pride ourselves on crafting the perfect pizza experience. Our dough is made fresh daily, using a traditional recipe that ensures a light, crispy crust with a deliciously chewy center. We source only the finest ingredients, from vine-ripened tomatoes for our zesty sauce to the freshest mozzarella that melts to perfection.
                            Our signature pizzas range from classic favorites like Margherita and Pepperoni to gourmet creations like Truffle Mushroom and Prosciutto Arugula. For those who crave something unique, our seasonal specials feature innovative combinations that delight the palate.
                            Beyond pizza, we offer a variety of fresh salads, mouthwatering pastas, and indulgent desserts, all made with the same commitment to quality and flavor. Whether you're dining in or ordering for delivery, Pizzeria promises an unforgettable taste experience that keeps you coming back for more. Come savor the difference today!</p>
                    </Col>
                    <Col md={6}>
                        <p>We specialize in artisanal pizzas crafted with passion and precision. Our dough is hand-tossed and baked to perfection, resulting in a crust that’s both crisp and airy. We use only premium, locally-sourced ingredients, including organic vegetables and free-range meats, to create flavorful toppings that elevate each bite. From our classic Neapolitan-style pizzas to innovative flavors like BBQ Chicken and Pesto Veggie, there's something for everyone. Pair your pizza with our curated selection of wines and craft beers for the ultimate dining experience.</p>
                    </Col>
                </Row>
                <Row style={{textAlign: 'justify'}}>
                    <h1>Our Chef</h1>
                    <Col md={3}>
                    <Image src='images/chef.png' style={{textAlign:'center', width:"80px", float:'left', margin:'0.5rem 0'}}/>
                    Our master chef, Porto Rosinno, brings a wealth of experience and a passion for culinary artistry to Pizzeria. Trained in the finest culinary traditions, Porto Rosinno has honed their skills in renowned kitchens worldwide, perfecting the art of pizza-making with a unique flair.
                    </Col>

                    <Col md={3}>
                    Porto Rosinno's dedication to quality is evident in every dish. They meticulously select the freshest ingredients and craft each pizza with precision and care. Their innovative approach blends traditional techniques with modern flavors, creating a memorable dining experience that delights the senses.
                    </Col>

                    <Col md={3}>
                    Known for their creativity and attention to detail, Porto Rosinno continually experiments with new ingredients and flavor combinations. This results in a dynamic menu that surprises and excites our guests. Each pizza reflects Porto Rosinno's commitment to excellence and passion for culinary innovation.
                    </Col>

                    <Col md={3}>
                    Under Porto Rosinno's leadership, Pizzeria has become a destination for pizza lovers seeking an exceptional dining experience. Their vision and expertise have transformed our pizzeria into a place where every meal is a celebration of flavor and craftsmanship. Join us and taste the artistry of Porto Rosinno today!
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default About