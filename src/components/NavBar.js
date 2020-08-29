import React,{ Component } from 'react'
import styles from '../styles/NavBar.module.css'

class NavBar extends Component{
    render()
    {
        return(
            <div className={styles.NavContainer}>
                 <div className={styles.Logo}>Chat App</div>
                <nav >
                    <ul className={styles.NavBar}>
                        <li>UserName</li>
                        <li>Home</li>
                        <li>Logout</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar