import Status from "./components/Status"
import Sum from "./components/Sum"
import Title from "./components/Title"
import styles from './App.module.css'


export default function App() {
  return (
    <div className={styles.app} >
      <Title/>
      <Sum/>
      <Status/>
    </div>
  )
}