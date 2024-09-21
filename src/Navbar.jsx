
function NavBar({ onNavSelection }){
    //onclick function
    //hover label

    const handleClick = (e) => {
        const id = e.target.closest('li').id;
        onNavSelection(id);
    }

    return(
        <nav id="navbar-container">
            <ul className="nav-bar-list">
                <li id="fruit" onClick={handleClick}><i className="fa-solid fa-apple-whole"></i></li>
                <li id="veggies" onClick={handleClick}><i className="fa-solid fa-carrot"></i></li>
                <li id="meat"><i className="fa-solid fa-drumstick-bite"></i></li>
                <li id="sauces"><i className="fa-solid fa-bottle-droplet"></i></li>
                <li id="spices"><i className="fa-solid fa-mortar-pestle"></i></li>
                <li id="dry-pantry-items"><i className="fa-solid fa-jar-wheat"></i></li>
                <li id="other-fridge-items"><i className="fa-solid fa-jug-detergent"></i></li>
            </ul>
        </nav>
    )
}
export default NavBar
