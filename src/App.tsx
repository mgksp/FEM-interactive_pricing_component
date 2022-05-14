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

      <div className="relative text-center py-9 mb-8">
        <img
          className="absolute top-0 left-1/2 -translate-x-1/2 -z-40"
          src={patternCircles}
          alt=""
        />
        <h1 className="text-xl text-dkDesaturatedBlue font-extrabold mb-2">
          Simple, traffic-based pricing
        </h1>
        <p className="text-13">
          Sign-up for our 30-day trail. <br /> No credit card required.
        </p>
      </div>

      <PricingCard />
    </>
  );
}

export default App;
