import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>
                                Posts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/post-creation"}>
                                Create Post
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Outlet/>
            </>
        </div>
    );
};

export default Layout;