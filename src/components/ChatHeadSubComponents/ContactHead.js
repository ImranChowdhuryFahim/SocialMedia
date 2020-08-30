import React,{ Component } from 'react'
import styles from './styles/ContactHead.module.css'
import moti from './AbdMatin.jpg'

class ContactHead extends Component{
    render()
    {
        return(
            <div className={styles.ContactHead}>
                <div >
                    <img src={moti} alt="puppy" className={styles.ProfilePic}/>
                </div>
                <div className={styles.ProfileName}>
                    <span>Abdul Matin</span>
                </div>

            </div>

        )
    }
}

export default ContactHead