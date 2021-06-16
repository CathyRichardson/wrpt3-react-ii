import React from 'react';

class Favorite extends React.Component{
    constructor(){
        super()

        this.state = {
            favorite: '',
        }
    }

    handleInput = (e) => {
        this.setState({ favorite: e.target.value })
    }

    render(){
        const { faveType } = this.props;
        return(
            <div>
              <span>{`input your favorite ${faveType}: `}</span>
              <input onChange={this.handleInput} placeholder={`Favorite ${faveType}`}></input>
              <h1>{this.state.favorite}</h1>
            </div>
        )
    }
}

export default Favorite;


// function Favorite(props){
//     return(
//         <h1>{props.myFave}</h1>
//     )
// }