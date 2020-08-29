import React,{ Component } from 'react'
import styles from './styles/SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends Component{
    render()
    {
        return(
            <div className={styles.Search}>
                <FontAwesomeIcon icon={faSearch} className={styles.Icon} />
                <input className={styles.Round} placeholder="Search Messenger"></input>
                
            </div>
        )
    }
}

export default SearchBar