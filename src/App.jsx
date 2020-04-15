import React from 'react';
import WithCovidData from './services';
import Input from './components/input';
import WithDataRender from './components/countries-list';

class App extends React.Component {

  state = {
    country: '',
    filterArray: []
  }

  handleInput = ({ target }) => {
    const value = target.value.toLowerCase();

    this.setState({
      country: value,
      filterArray: this.props.data.filter(({ Country }) => Country.toLowerCase().includes(value))
    })
  }

  render() {
    const { country, filterArray } = this.state;
    const { isLoading, data } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <Input onChange={this.handleInput} value={country} />
        </header>
        {isLoading ? 'loading' : <WithDataRender data={country !== '' ? filterArray : data} />}
      </div>
    );
  }

}

export default WithCovidData(App);
