import Header from "../components/Header";
import Slider from "../components/Slider";
import Background from "../components/Background";
import Body1 from "../components/Body1";
import Body2 from "../components/Body2";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center">
      <Header />
      <Slider />
      <Background />
      <main className="w-full max-w-4xl flex flex-col gap-6 px-2 sm:px-6 mt-4">
        <div className="w-full flex flex-col items-center">
          <Body1 />
          <Body2 />
        </div>
      </main>
    </div>
  );
}
