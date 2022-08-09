import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Profile from '../../components/Profile';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../app/api/auth';

const Account = () => {
  const { isLoggedIn, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  console.log(isLoggedIn, user);
    return(
        <div className="container justify-content-center">
            <Card>
                <Card.Header>Account</Card.Header>
                <div className='coba'>
                <div className='sidebar'>
                      <ul>
                        <li>
                        <span className="item">Home</span>
                        </li>                      
                        <li>Pemesanan</li>                      
                        <li>Alamat</li>
                        <button onClick={()=>dispatch(logout())}>Logout</button>
                      </ul>
                </div>
                <div className='right'>
                      <Profile/>
                </div>
                </div>                
            </Card>
        </div>
    )
}

export default Account;