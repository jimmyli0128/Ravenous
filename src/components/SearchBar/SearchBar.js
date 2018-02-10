import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {term:'',location:'',sortBy:'best_match'};

  }
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOptions => {
      let sortByOptionsValue = sortByOptions[sortByOptions];
      return <li key = {sortByOptionsValue}>{sortByOptions}</li>;
    });
  }
  render() {
    return <div class="SearchBar">
             <div class="SearchBar-sort-options">
                <ul>
                  renderSortByOptions();
                </ul>
             </div>
             <div class="SearchBar-fields">
               <input placeholder="Search Businesses" />
               <input placeholder="Where?" />
             </div>
             <div class="SearchBar-submit">
               <a>"Let's Go"</a>
             </div>
           </div>
 }
}

export default SearchBar;
