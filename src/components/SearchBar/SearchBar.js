import React from 'react';

class SearchBar extends React.Component{

  state = {term: ""}

  constructor(){
    super();
    // this.onFormSubmit = this.onFormSubmit.bind(this); // M:1 Creates a new copy of the function with this
  }

  //M-2 Arrow function
  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.term); //When not a arrow function => Rips of the function and calls it separately and hence this is undefined
    this.props.onSubmit(this.state.term);
  }

  render(){
    return(
      <div className = "ui segment">
        <form className = "ui form" onSubmit = {this.onFormSubmit /*or M:3 (e) => {this.onFormSubmit(e)}*/}>
          <div className = "field">
            <label>Image Search</label>
            <input
              type="text"
              value = {this.state.term}
              onChange = {(e) => {
                this.setState({term: e.target.value});
              }}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
