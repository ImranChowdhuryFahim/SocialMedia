import React,{ Component } from 'react'
import styles from './App.module.css'
import NavBar from './components/NavBar'
import BodySection from './components/BodySection'

class App extends Component{
    render(){
        return(
            <div className={styles.Main}>
                <NavBar></NavBar>
                <BodySection></BodySection>
            </div>
            
        )
    }
}

export default App