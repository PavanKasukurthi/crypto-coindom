import { BsTwitter } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'
import styled from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)

  return (
    <Wrapper>
      <nav className={sticky ? 'sticky-nav' : ''}>
        <div className="navbar">
          <Link to="/">
            <p>CoinDOM</p>
          </Link>

          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#market">Market</a>
            </li>
            <li>
              <a href="#choose-us">Choose Us</a>
            </li>
            <li>
              <a href="#join">Join</a>
            </li>
          </ul>

          <span>
            <BsTwitter />
            <RxHamburgerMenu className="hamburger-menu" />
          </span>
        </div>
      </nav>
    </Wrapper>
  )
}
export default Navbar

const Wrapper = styled.main`
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    align-items: center;
    margin: 0 auto;

    color: var(--clr-white);

    p {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  ul {
    display: flex;
    gap: 5rem;
    color: var(--clr-white);

    @media (max-width: 750px) {
      display: none;
    }

    a {
      color: var(--clr-white);
      font-weight: 500;

      &:hover {
        transition: all 0.3s;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        background-image: var(--blue-purple-gradient);
      }
    }
  }

  .hamburger-menu {
    display: none;
  }
`
