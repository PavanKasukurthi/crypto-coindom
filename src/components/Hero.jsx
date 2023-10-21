import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Hero = () => {
  const [data, setData] = useState([])
  const [coinsLoad, setCoinsLoad] = useState(true)

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=4&page=1&sparkline=false`

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      // console.log(response)
      const jsonData = await response.json()
      // console.log(jsonData)
      setData(jsonData)
    } catch (error) {
      console.log(error)
    }
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  useEffect(() => {
    // fetchData()
  }, [data])

  return (
    <Wrapper>
      <h1>CRYPTO CURRENCIES</h1>

      <div className="coin-info" onLoad={() => setCoinsLoad(false)}>
        {coinsLoad && <span className="loader"></span>}
        {data.map((item) => (
          <Link to={`/coin/${item.id}`} key={item.id} className="slider-coin">
            <img src={item?.image} alt={item?.name} />
            <p className="slider-coin__name">
              {item?.name}{' '}
              <span
                className={
                  'slider-coin__price ' +
                  (item.price_change_percentage_24h <= 0
                    ? 'red-text'
                    : 'green-text')
                }
              >
                {item?.price_change_percentage_24h?.toFixed(2) + '%'}
              </span>
            </p>
            <p className="slider-coin__price">
              {'$ ' + numberWithCommas(item.current_price?.toFixed(2))}
            </p>
          </Link>
        ))}
      </div>
    </Wrapper>
  )
}
export default Hero

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    transition: all 0.3s;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: var(--blue-purple-gradient);
    cursor: default;
    font-size: 6rem;

    &:hover {
      transition: 0.7s;
      background-image: linear-gradient(205deg, #2600fc, #ff00ea);
    }
  }
`
