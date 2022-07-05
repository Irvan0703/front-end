import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tags from "../../components/Tags";

const Home = () => {

    const [product, setProduct] = useState([]);

    useEffect(()=>{
        axios
            .get('http://localhost:3000/api/products')
            .then((data) => {
                setProduct(data.data.data);
            })
            .catch(error => console.log(error));
    },[])

    console.log(product);

    return(
        <div>
            Tags : <Tags/>
            <Row xs={1} md={2} lg={4} className="g-4">
            {product.length > 0 ? product.map((msg)=>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={``}/>
                <Card.Body>
                    <Card.Title>{msg.name}</Card.Title>
                    <Card.Text>{msg.category.name}</Card.Text>
                    <Card.Text>Rp. {msg.price}</Card.Text>
                    <Button variant="primary"><i className="fa fa-cart-plus"></i></Button>
                </Card.Body>
                </Card>
            ) : ('Product Tidak Ditemukan') }
            </Row>
        </div>
    )
}

export default Home;