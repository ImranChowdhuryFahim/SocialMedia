import React,{ Component } from 'react'
import styles from '../styles/NavBar.module.css'
import { withRouter } from 'react-router-dom'
import Auth from '../../Auth'


class NavBar extends Component{
    logout()
    {
        const { history } = this.props
        history.push('/')
        Auth.signout()
    }
    render()
    {
        return(
            <div className={styles.NavContainer}>
                 <div className={styles.Logo}>Chat App</div>
                <nav >
                    <ul className={styles.NavBar}>
                        <li>UserName</li>
                        <li>Home</li>
                        <li onClick={this.logout.bind(this)}>Logout</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withRouter(NavBar)