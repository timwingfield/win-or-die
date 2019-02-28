import React from 'react'
import PropTypes from 'prop-types'

const Header = () => {
  return (
    <div>
      <h1 id="title">A Game of Thrones: Office Pool</h1>
      <p id="rules">
        Select whether you think each character will be alive or dead by the end of the series.
        If you think they'll be dead, you may also select if you think they'll become a White Walker.
        Bonus points are available for correctly choosing who sits the Iron Throne at the end of the series,
        and for selecting who slays the Knight King.
      </p>
    </div>
  )
}

export default Header
