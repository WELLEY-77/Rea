import Status from "./components/Status"
import Sum from "./components/Sum"
import Title from "./components/Title"

export default function App() {
  const status = true
  return (
    <div>
      <Title/>
      <Sum/>
      <Status/>
    </div>
  )
}