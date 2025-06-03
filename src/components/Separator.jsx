import styles from './separator.module.css'
import SeparatorImg from '../assets/images/separator.png'

const Separator = () => {
  return (
    <figure>
        <img className={styles.separator} src={SeparatorImg} alt="" />
    </figure>
  )
}

export default Separator