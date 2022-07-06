import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tags from "../../components/Tags";

const Home = () => {

    const [product, setProduct] = useState([]);
    const [page, setPage] = useState([]);

    useEffect(()=>{
        axios
            .get('http://localhost:3000/api/products')
            .then((data) => {
                setProduct(data.data.data);
                setPage(data.data.count);
            })
            .catch(error => console.log(error));
    },[])

    
        let a = page % 8;
        let b;

        if (a === 0){
            b = (parseInt(page/8));
        } else {
            b = (parseInt(page / 8)+1)
        }
    

    return(
        <div>
            <div>Tags : <Tags/></div>
            <div>
            <Row xs={1} md={2} lg={4} className="g-4">
            {product.length > 0 ? product.map((msg,i)=>
                <Card style={{ width: '18rem' }} key={i}>
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
            <div>
                
            </div>
        </div>
    )
}

export default Home;