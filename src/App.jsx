import Content from "./components/Content"
import Picture from "./components/Picture"
import Socials from "./components/Socials"

export default function App() {
  return (
    <div className="business-card">
      <Picture />
      <Content />
      <Socials />
    </div>
  )
}