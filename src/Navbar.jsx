import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ShopContext from './Context/ShopContext';
import { fetchCategoryProducts, fetchItems } from './Context/ShopAction';

const Navbar = () => {

    const { dispatch, cartItems } = useContext(ShopContext);

    const [search, setSearch] = useState("")
    console.log(search)



    const handleSearch = async (e) => {

        const products = await fetchItems(search)
        e.preventDefault()

        dispatch({
            type: "SEARCH",
            payload: products
        })
        setSearch("")
    }

    useEffect(() => {
        fetchItems()
    }, [])
    return (
        <nav id='navbar' className="navbar navbar-expand-lg p-2">
            <div className="container-fluid">
                <Link to={"/"} >
                    <img id='logo' src="https://static.wixstatic.com/media/abbf86_15da5a341f234c7584357c02ede9c0ed~mv2.png/v1/fill/w_340,h_330,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/abbf86_15da5a341f234c7584357c02ede9c0ed~mv2.png" alt="" />
                </Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav top me-auto mx-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to={"/electronic"}>Electronics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to={"/menswear"}>Men's Wear</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  " to={"/womenswear"}>Women's Wear</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to={"/jewellery"}>Jewellery</Link>
                        </li>
                    </ul>



                    <form className="d-flex" role="search" onSubmit={handleSearch}>
                        <input className="form-control me-2 rounded-5" type="search"
                            placeholder="Search" aria-label="Search"
                            value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button className="btn btn-success rounded-5 mx-1" type="submit">Search</button>
                    </form>

                    <Link to={"/cart"}>   <button className="btn btn-sm btn-primary">CART ({cartItems.length})</button>
                    </Link>
                    <Link to={"/login"}>   <button className="btn btn-sm btn-primary mx-2">Log in </button>
                    </Link>
                </div>
            </div >
        </nav >
    )

}

export default Navbar