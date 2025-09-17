import Bulldog from "../../assets/bulldog.png";

export default function Hero() {
  return (
    <div className="text-center mt-10 p-12 min-h-[25vh] max-h-[30vh]">
      <h1 className="text-8xl">Davide Cannerozzi</h1>
      <p className="mt-6 text-white italic">
        Frontend Developer | React Developer | Freelance
      </p>
      <div className="mt-12 flex flex-col items-center">
        <img src={Bulldog} alt="Bulldog" className="w-28" />
        <hr className="border-2 border-solid w-1/2 md:w-1/6" />
      </div>
    </div>
  );
}
