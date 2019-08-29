import React, { Component } from 'react'

class SearchBar extends Component {
    onInputChange(e) {
        console.log('event.target.value: ', e.target.value);
    }

    onInputClick(e) {
        console.log('event.target.value: ', e.target.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input className="ui form" type="text" onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
