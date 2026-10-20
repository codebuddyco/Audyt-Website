import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Benefits from './components/Benefits/Benefits.jsx';
import Comparison from './components/Comparison/Comparison.jsx';
import Scope from './components/Scope/Scope.jsx';
import Cta from './components/Cta/Cta.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <main className="page__main">
        <Hero />
        <Benefits />
        <div className="section-divider" aria-hidden="true" />
        <Comparison />
        <div className="section-divider" aria-hidden="true" />
        <Scope />
        <div className="section-divider section-divider--before-cta" aria-hidden="true" />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
