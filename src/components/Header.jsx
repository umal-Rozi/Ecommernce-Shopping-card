import "../style.css";

const Header = () =>{

   const menustyle ={
    backgroundColor: "yellow", 
    padding:20, 
    borderRadius: 10
   };

    return (
        <div className="menu">
        <a href="">logo</a>
        <ul className="menu-itmes">
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
            <li>
                <a href="">Cart</a>
            </li>
        </ul>
        <a href="">5</a>
    </div>
    );
};

export default Header;