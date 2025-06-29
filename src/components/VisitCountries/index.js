import {Component} from 'react'

import './index.css'

import CountryCard from '../CountryCard'

class VisitCountries extends Component {
  state = {
    countriesList: [],
  }

  componentDidMount() {
    const {initialCountriesList} = this.props
    this.setState({
      countriesList: initialCountriesList,
    })
  }

  onClickVisitedButton = id => {
    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(country =>
        country.id === id ? {...country, isVisited: true} : country,
      ),
    }))
  }

  onClickRemoveButton = id => {
    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(country =>
        country.id === id ? {...country, isVisited: false} : country,
      ),
    }))
  }

  renderCountriesList = () => {
    const {countriesList} = this.state

    return (
      <>
        <ul className="countryList">
          {countriesList.map(country => (
            <li className="countryCard" key={country.id}>
              <p className="countryListName">{country.name}</p>
              {country.isVisited ? (
                <p className="countryVisitedList">Visited</p>
              ) : (
                <button
                  className="visitedButton"
                  type="button"
                  onClick={() =>
                    this.onClickVisitedButton(country.id, country.isVisited)
                  }
                >
                  Visit
                </button>
              )}
            </li>
          ))}
        </ul>
      </>
    )
  }

  renderCountryFlag = () => {
    const {countriesList} = this.state
    const visitedCountries = countriesList.filter(
      eachCountry => eachCountry.isVisited,
    )

    return (
      <>
        {visitedCountries.length === 0 ? (
          <p>No Countries Visited Yet!</p>
        ) : (
          <ul className="flagList">
            {visitedCountries.map(eachItem => (
              <CountryCard
                countriesList={eachItem}
                key={eachItem.id}
                removeButton={this.onClickRemoveButton}
              />
            ))}
          </ul>
        )}
      </>
    )
  }

  render() {
    return (
      <>
        <div className="bodyContainer">
          <h1 className="countryHeading">Countries</h1>
          {this.renderCountriesList()}
          <h1 className="countryHeading">Visited Countries</h1>
          {this.renderCountryFlag()}
        </div>
      </>
    )
  }
}

export default VisitCountries
