import { BottomSection } from './components/bottom-section'
import { UpButton } from './components/up-button'
import { Footer } from './components/footer'
import { MainSection } from './components/main-section'
import { TopSection } from './components/top-section'

function App() {

  return (
    <div className="App">
      <UpButton />
      <TopSection />
      <MainSection />
      <BottomSection />
      <Footer />
    </div>
  )
}

export default App
