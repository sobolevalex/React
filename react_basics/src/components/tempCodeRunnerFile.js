import React, {Component} from 'react';
import '../css/styles.css';


class Header extends Component {

    state = {
        keywords: 'Hello'
    }


    inputChangeHandler(event){
        console.log(event.target.value);
        //console.log('hey');
    }

    render(){
        console.log(this.state.keywords)
        return (
            <header>
                <div 
                        className='logo'>Logo</div>
                <input type="text" onChange={ (e) => this.inputChangeHandler(e)}/> 
            </header>
        )
    }
}

export default Header; 