import { Nav } from './sections/Nav'
import { Hero } from './sections/Hero'
import { Fundamentals } from './sections/Fundamentals'
import { PlanningDesign } from './sections/PlanningDesign'
import { TestingIteration } from './sections/TestingIteration'
import { Distribution } from './sections/Distribution'
import { Patterns } from './sections/Patterns'
import { Troubleshooting } from './sections/Troubleshooting'
import { Resources } from './sections/Resources'
import { QuickChecklist } from './sections/QuickChecklist'
import { Footer } from './sections/Footer'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Fundamentals />
      <PlanningDesign />
      <TestingIteration />
      <Distribution />
      <Patterns />
      <Troubleshooting />
      <Resources />
      <QuickChecklist />
      <Footer />
    </>
  )
}

export default App
