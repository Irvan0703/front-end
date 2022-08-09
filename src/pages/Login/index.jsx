import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../app/api/auth';

const Login = () => {

    const { isLoggedIn, user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = () => {
        dispatch(login(username, password));
        
    }

    if (isLoggedIn) {
        return <Link to="/"/>;
    }

    console.log(user);

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
                        <Form.Control type="email" placeholder="name@example.com" 
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={onChangeUsername}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" 
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={onChangePassword}/>
                    </FloatingLabel>
                    <br/>
                    <Button variant="primary" onClick={handleLogin}>Login</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login;

/*
axios
            .post(`http://localhost:3000/auth/login`,{email:username, password})
            .then(function (response) {
                console.log(response);
                localStorage.setItem("user", response.data.token);
            })
            .catch(function (error) {
                console.log(error);
            });
*/