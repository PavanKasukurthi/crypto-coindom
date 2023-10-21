import styled from 'styled-components'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Join from '../components/Join'
import MarketUpdate from '../components/MarketUpdate'
import Navbar from '../components/Navbar'
import WhyUs from '../components/WhyUs'

const Home = () => {
  return (
    <Wrapper>
      {/* <Navbar /> */}
      <Hero />
      <MarketUpdate />
      <WhyUs />
      <Join />
      <Footer />
    </Wrapper>
  )
}
export default Home

const Wrapper = styled.main`
  padding: 0 5rem;
`
