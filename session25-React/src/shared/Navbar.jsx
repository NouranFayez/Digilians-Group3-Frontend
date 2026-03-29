import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../context/DataContext"

export const Navbar = () => {
    const { token, setToken, userName, setUserName } = useContext(DataContext)
    console.log(token)
    function handleLogOut(){
        localStorage.removeItem('token')
        setToken(null)
        setUserName(null)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" >Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="products" className="nav-link" >Products</Link>
                            </li>

                            {
                                token ? <>
                                    <li className="nav-item">
                                        <Link to="login" className="nav-link" onClick={handleLogOut} >Logout</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="login" className="nav-link" >welcome {userName} </Link>
                                    </li>
                                </> :
                                    <li className="nav-item">
                                        <Link to="login" className="nav-link" >Login</Link>
                                    </li>

                            }



                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}