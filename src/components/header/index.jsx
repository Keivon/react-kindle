
import './header.css';

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

export default function Header() {
    return(
        <ul>
        <li><i onClick={() => {openNav()}} >=</i></li>
        <li className="topnav-centered"><i >React Kindle</i></li>
        <li style={{float:"right"}}><i >Right</i></li>
      </ul>
    )
  }