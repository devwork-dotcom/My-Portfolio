import { About } from './features/about';
import { Contact } from './features/contact';
import { Experience } from './features/experience';
import { Projects } from './features/projects';
import { Skills } from './features/skills';
import { Footer, Header } from './shared/layout';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <Header />

      <main className="space-y-16 pb-12">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
