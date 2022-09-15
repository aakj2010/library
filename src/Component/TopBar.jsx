import React from 'react'

function TopBar() {
    return (
        <nav class="navbar-expand navbar-light bg-white topbar mb-4 static-top shadow  text-center">
            <div className="container my-auto">
                <div className="copyright text-center my-auto" style={{ color: "Blue", fontSize: "2.5rem" }}>
                    <span>Library Management</span>
                </div>
            </div>
        </nav>
    )


}

export default TopBar