import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../services/authSlice' 

function Navbar() {
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const {user} =useSelector((state) =>state.auth)


    const onLogout =() =>{
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return ( 
        <div className="header">
            <h1 className="title">Grocerix</h1>
            <ul className='navlinks'>
              {user ? (
              <li>
                  <Link to='/' className='login-register' onClick={onLogout}>
                      Log Out
                  </Link>
              </li>
              ):(
              <>
                  <li>
                      <Link to="/login" className='login-register'>
                        Login
                      </Link>
                  </li>
                  <li>
                      <Link to='/register' className='login-register'>
                        Register
                      </Link>
                  </li>
              </>
              )}
          </ul>
        </div>
     );
}
export default Navbar