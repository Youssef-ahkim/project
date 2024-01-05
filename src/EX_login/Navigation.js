import React from "react";
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <ul className="list">
                <li className="link">
                    <Link to="./Home" className="white-link">Home</Link>
                </li>
            </ul>
        </nav>
    )
}
