import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';

class SearchMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const searchTerm = event.target.value;
    this.setState(() => ({ searchTerm }));
  } 

  render() {
    return (
      <div className="searchBar">
        <form>
        <Input className="searchfieldStyle"
              placeholder="Search…"
              disableUnderline
              
              onChange={this.handleOnChange}
              />
          <Button onClick={this.props.handleSearchMovie.bind(null, this.state.searchTerm)}><SearchIcon/></Button>
        </form>
      </div>
    );
  }
}


export default SearchMovie;