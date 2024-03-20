import React, { useState, ChangeEvent } from "react";
import './search-bar.css'

interface Country {
  name: string,
  continent: string,
}

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [showResults, setShowResults] = useState<boolean>(false)

  const countries: Country[] = [
    { name: "Brazil", continent: "South America" },
    { name: "Ireland", continent: "Europe" },
    { name: "England", continent: "Europe" },
    { name: "Northern Ireland", continent: "Europe" },
    { name: "Scotland", continent: "Europe" },
    { name: "Wales", continent: "Europe" },
    { name: "Netherlands", continent: "Europe" },
    { name: "Belgium", continent: "Europe" },
    { name: "Norway", continent: "Europe" },
    { name: "Denmark", continent: "Europe" },
    { name: "Morocco", continent: "Africa" },
    { name: "Italy", continent: "Europe" },
    { name: "Vatican", continent: "Europe" },
    { name: "France", continent: "Europe" },
    { name: "Portugal", continent: "Europe" },
    { name: "Malta", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Czech Republic", continent: "Europe" },
    { name: "Poland", continent: "Europe" },
    { name: "Germany", continent: "Europe" },
    { name: "Austria", continent: "Europe" },
    { name: "Slovakia", continent: "Europe" },
    { name: "Hungary", continent: "Europe" },
    { name: "Monaco", continent: "Europe" },
    { name: "Albania", continent: "Europe" },
    { name: "Greece", continent: "Europe" },
    { name: "Sweden", continent: "Europe" },
    { name: "Luxembourg", continent: "Europe" },
    { name: "Andorra", continent: "Europe" },
    { name: "Spain", continent: "Europe" },
    { name: "Argentina", continent: "South America" },
    { name: "Uruguay", continent: "South America" },
    { name: "Chile", continent: "South America" },
    { name: "Paraguay", continent: "South America" },
    { name: "Bosnia and Herzegovina", continent: "Europe" },
    { name: "Croatia", continent: "Europe" },
    { name: "Montenegro", continent: "Europe" },
    { name: "San Marino", continent: "Europe" },
    { name: "Switzerland", continent: "Europe" },
    { name: "Liechestein", continent: "Europe" },
    { name: "Türkiye", continent: "Europe/Asia" },
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value)
    if (e.target.value === '') {
      setShowResults(false);
    }
  }

  let filteredCountries: Country[] = countries;
  if (searchInput.length > 0) {
    filteredCountries = countries.filter((country) => {
      return country.name.toLowerCase().includes(searchInput.toLowerCase());
    })
  }

  return (
    <div className='search-bar'>
      <div className="input-section">
        <input
          type='search'
          placeholder="Search..."
          value={searchInput}
          onChange={handleChange}
        />

        <button className="button is-primary is-small" onClick={() => setShowResults(true)}>
          <span className="icon">
            <i className="fas fa-search"></i>
          </span>
        </button>
      </div>

    {showResults && (
        <>
            {filteredCountries.length > 0 ? (
                <div className="table-section">
                  <table>
                      <thead>
                      <tr>
                          <th>Country</th>
                          <th>Continent</th>
                      </tr>
                      </thead>
                      <tbody>
                      {filteredCountries.map((country, index) => (
                          <tr key={index}>
                          <td>{country.name}</td>
                          <td>{country.continent}</td>
                          </tr>
                      ))}
                      </tbody>
                  </table>
                </div>
              ) : (
                  <p>No country found. Try another country.</p>
            )}
        </>
    )}
    </div>
  )
}

export default SearchBar