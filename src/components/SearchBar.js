import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    onFormSubmit = e => {
        e.preventDefault();
        // to do: Make sure we call callback from parent component
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            onChange={e => this.setState({ term: e.target.value})} 
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;