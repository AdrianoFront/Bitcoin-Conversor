import styles from './coinInfo.module.css'
import CoinChart from '../coinChart/coinChart'

export default function CoinInfo({ prices }) {
  return (
    <div className={styles.CoinInfo}>
      <CoinChart prices={prices}/>
    </div>
  )
}