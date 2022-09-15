import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBook } from '@fortawesome/free-solid-svg-icons'
function SideBar() {
    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <br /><br />
            {/* <!-- Sidebar - Brand --> */}
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">LIBRARY MANAGEMENT</div>
            </a>

            {/* <!-- Divider --> */}
            <hr class="sidebar-divider my-1" />
            

            <br /><br /><br />
            <li class="nav-item active">
                <Link class="nav-link" to="/members">
                    <FontAwesomeIcon icon={faUsers} />
                    <span>  Members</span></Link>
            </li>

            <hr class="sidebar-divider" />

            <li class="nav-item active">
                <Link class="nav-link" to="/books">
                <FontAwesomeIcon icon={faBook} />
                    <span>  Books</span></Link>
            </li>
            <hr class="sidebar-divider" />

        </ul>
    )
}

export default SideBar;