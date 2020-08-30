import React ,{ Component } from 'react'
import styles from './styles/ChatHeadDiv.module.css'
import puppy from './puppy.jpg'

class ChatHeadDiv extends Component{
    render()
    {
        return(
            <div className={styles.ChatHeadDiv}>
                <div >
                    <img src={ puppy } alt="puppy" className={styles.ProfilePicture}></img>
                </div>
                <div className={styles.Details}>
                    <div className={styles.ProfileName}>
                        <span >
                            Abdul Matin
                        </span>
                    </div>
                    
                    <div className={styles.TimeMsg}>
                        <div className={styles.LastMsg}>
                            <span >
                                Update kore Kaj korish
                            </span>
                        </div>
                        .
                        <div className={styles.Time}>
                            <span >
                                12:04  PM
                            </span>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default ChatHeadDiv