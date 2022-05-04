import React from 'react'

class Context2 extends React.Component{
    render(){
        return (
            <div className='border'>
                <h1>Class Context Component</h1>
                
                <h2>{this.props.counter}</h2>
                <hr></hr> 
              
            </div>
          )
    }
  
}

export default Context2
