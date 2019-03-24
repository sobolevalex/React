import React, { PureComponent } from 'react';

class Life extends PureComponent {
    // 1 get default props

    //2 set default state 
    state = {
        title:'Life cycle'
    }
    
    // componentWillMount(){
    //     console.log('before render');
        
    // }

    // componentWillUpdate(){
    //     console.log('Before update');
        
    // }

    // componentDidUpdate(){
    //     console.log('After update' );
        
    // }

    // componentWillReceiveProps(){
    //     console.log('Before receive props'); 
        
    // }

    // componentWillUnmount(){
    //     console.log('Wil unmount!!!');
        
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextState);
    //     return true;

    // }

    render(){
        console.log(this.props);
        
        return (
            <div>
                <h3>{this.state.title}</h3>
                <button onClick={
                    () => this.setState({
                        title:'Something else'
                    })
                } >CLICK TO CHANGE</button>
            </div>
        )
    }

    componentDidMount(){
        console.log('after render');
        document.querySelector('h3').style.color = 'red'
        
    }
}

export default Life;
