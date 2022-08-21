import { useEffect, useState } from 'react'

import Container from '../components/container/Container'
import CoinInfo from '../components/coininfo/coinInfo'

function HomePage () {
    const [data, setData] = useState()
    const [qtDays, setQtDays] = useState(7)

    async function getCryptoData () {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=brl&days=${qtDays}`)
      const responseData = await response.json()
      setData(responseData)
    }
    useEffect(() => {
      getCryptoData()
  }, [qtDays])

  return (
    <Container>
      <h1>BitcoinDev</h1>
      <p>Acompanhe o gráfico da principal cryptomoeda da atualidade.</p>
      <label>Selecione a quantidade de dias:</label>
      <input type="number" value={qtDays} min={1} onChange={(e) => setQtDays(e.target.value)}/>
      <div>
        <CoinInfo
          prices={data?.prices}
        />
      </div>
    </Container>
  )
}
export default HomePage