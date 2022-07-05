import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap';

const Login = () => {
    return(
        <div className="container d-flex justify-content-center">
            <Card>
                <Card.Header>Login</Card.Header>
                <Card.Body>
                <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <br/>
                    <Button variant="primary">Login</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login;