import { BsTwitter, BsDiscord } from 'react-icons/bs'
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
          <a href="/" className="title">
            CoinDOM
          </a>

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
            <BsTwitter className="icon" />
            <BsDiscord className="icon" />
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

    .title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--clr-white);
    }
  }

  ul {
    display: flex;
    gap: 4rem;
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
        cursor: pointer;
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    gap: 2rem;

    .icon {
      cursor: pointer;

      @media (max-width: 750px) {
        display: none;

        &:hover {
          transition: all 0.3s;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-image: $color-blue-purp;
        }
      }
    }
  }

  .hamburger-menu {
    display: none;

    @media (max-width: 750px) {
      display: block !important;
      cursor: pointer;
      font-size: 2rem;
    }

    .sticky-nav {
      background-color: var(--bg-black);
      box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.16);
      position: fixed;
    }
  }
`
