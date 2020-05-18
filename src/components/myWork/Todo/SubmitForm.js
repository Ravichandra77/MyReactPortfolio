import React from 'react';

export default class SubmitForm extends React.Component {
    
    constructor(props){
      super(props);
      this.newRef = React.createRef();
      this.state = { 
        hasValue: true,
        term: '' ,
        list: []
      };
    }


    componentDidMount(){
    //  console.log(this.myRef.current.value)
 
    }

    handleSubmit = (e) => { 
      e.preventDefault();     
      if(this.state.term === '') return;
      this.props.onFormSubmit(this.state.term);
     this.setState({ term: '' });
     this.newRef.current.value = "";
    }
    render() {
      return(

<form className="todoForm" onSubmit={this.handleSubmit}>
<div className="input-group"> 
<input type="text" className="form-control" placeholder='Enter Item' ref={this.newRef}
       onChange={(e) =>  this.setState({term: e.target.value})} />

  <div className="input-group-append">
    <button className="btn btn-primary" type="submit" >Add</button>
  </div>
</div>
</form>


      );
    }
  }
