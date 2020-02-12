import React, { Component } from 'react';

class Blog extends Component {
    constructor (props){
        super(props);
      
        this.state = {
          title: {},
          date: "",
          content: {}
        };
      }

      componentDidMount() {
        return fetch(`http://localhost/wp5.0/wp-json/wp/v2/posts/`)
        .then((response) => response.json())
        .then((responseJson) => {
            const { title, date, content } =  responseJson[0];
         console.log(responseJson[0]);
          this.setState({ title, date, content }); 
                    
        })
        .catch((error) => {
          console.error(error);
        });         
  }

    render() {
       const dateFormat = new Date('07/29/2019 04:00:00').toLocaleString();
        return (
    <div className="row">
               <div className="leftcolumn">
                 <div className="card">
                   <div className= "title">
                   <h1> {this.state.title.rendered}</h1>
                     <p> {dateFormat} </p> 
                   </div>
                
                   <div
                     className= "content"
                     dangerouslySetInnerHTML={{ __html: this.state.content.rendered }} /> 
                 </div>
               </div>
             </div>
        )
    }
}

export default  Blog
