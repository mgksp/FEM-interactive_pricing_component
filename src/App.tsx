import PricingCard from "./components/PricingCard";
import bgPattern from "./images/bg-pattern.svg";
import patternCircles from "./images/pattern-circles.svg";

function App() {
  return (
    <>
      <img
        className="h-[50vh] w-full absolute top-0 left-0 object-left-bottom object-cover -z-50"
        src={bgPattern}
        alt=""
      />

      <div className="relative text-center py-9 mb-8 md:mb-12 md:py-16">
        <img
          className="absolute top-0 left-1/2 -translate-x-1/2 -z-40"
          src={patternCircles}
          alt=""
        />
        <h1 className="text-xl md:text-[1.75rem] text-dkDesaturatedBlue font-extrabold mb-2 md:mb-3">
          Simple, traffic-based pricing
        </h1>
        <p className="text-13">
          Sign-up for our 30-day trail. <br className="md:hidden" /> No credit
          card required.
        </p>
      </div>

      <PricingCard />

      <Footer />
    </>
  );
}

export default App;

const Footer = () => {
  return (
    <footer className="text-xs text-center w-full py-1 text-mediumGray absolute bottom-0 left-0">
      Challenge by&nbsp;
      <a
        className="text-sm font-bold text-almostBlack"
        href="https://www.frontendmentor.io?ref=challenge"
        rel="noreferrer"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by&nbsp;
      <a
        className="text-sm font-bold text-almostBlack"
        href="https://www.github.com/mgksp"
        rel="noreferrer"
        target="_blank"
      >
        Prabu
      </a>
      .
    </footer>
  );
};
