import { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tags from "../../components/Tags";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getProducts } from "../../app/features/Product/actions";

const Home = () => {

    const params = {
        skip: 0,
        limit: 8,
        q:'',
        category: '',
        tags:[]
      };
    
    const [skip, setSkip] = useState(0);
    const item = useSelector((state) =>  state.products);
    const dispatch = useDispatch();
    
    useEffect(()=>{
            dispatch(getProducts(params));           
    },[dispatch]);

    let a = item?.payload?.count % 8;
    let b;
    let c = [];

            if (a === 0){
                b = (parseInt(item?.payload?.count/8));
            } else {
                b = (parseInt(item?.payload?.count / 8)+1)
            }

            for (let i = 0; i < b; i++){
                c.push(i)
            }

    const pages = (num) => {
            if ( num > 0){
                setSkip(num*8);
                params.skip = num*8;
            } else {
                setSkip(0);
                params.skip = 0;
            }
            dispatch(getProducts(params));
    }

    const increment = () => {
        if ( item?.payload?.count > skip+8){
            setSkip(skip+8);
            params.skip +=8; 
        }
        dispatch(getProducts(params));
    }

    const decrement = () => {
        if(item?.payload?.count > 0){
            setSkip(skip-8);
            params.skip -=8;
        }
        dispatch(getProducts(params));
    }

    return(
        <div>
            <div>Tags : <Tags/></div>
            <div>
            <Row xs={1} md={2} lg={4} className="g-4">
            {item?.payload?.data.length > 0 ? item.payload.data.map((msg,i)=>
                <Col key={i} >
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`http://localhost:3000/images/products/${msg.image_url}`}/>
                <Card.Body>
                    <Card.Title>{msg.name}</Card.Title>
                    <Card.Text>{msg.category.name}</Card.Text>
                    <Card.Text>Rp. {msg.price}</Card.Text>
                    <Button variant="primary"><i className="fa fa-cart-plus"></i></Button>
                </Card.Body>
                </Card>
                </Col>
            ) : ('Product Tidak Ditemukan') }
            </Row>
            </div>
            <br/>
            <div className="d-flex justify-content-center h-100 ">
                {c.length > 0 ? <Row >
                    <Col><button onClick={()=> pages(0)}><i className="fa fa-angle-double-left"/></button></Col>
                    <Col><button onClick={()=> decrement()}><i className="fa fa-angle-left"/></button></Col>
                        {c.map((i)=>
                            <Col key={i}><button onClick={()=> pages(c[i])}>{i+1}</button></Col>
                        )}
                    <Col><button onClick={()=> increment()}><i className="fa fa-angle-right"/></button></Col>
                    <Col><button onClick={()=> pages(c.length - 1)}><i className="fa fa-angle-double-right" /></button></Col>
                </Row> : (' ')}
            </div>
        </div>
    )
}

export default Home;


/*
if (skip === 0) {
            axios
            .get(`http://localhost:3000/api/products`)
            .then((data) => {
                setPage(data.data.count);
            })
            .catch(error => console.log(error));
        } else {
            axios
            .get(`http://localhost:3000/api/products?skip=${skip}`)
            .then((data) => {
                setPage(data.data.count);
            })
            .catch(error => console.log(error));
        }

*/