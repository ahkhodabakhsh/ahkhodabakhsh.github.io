import LandingPage from "@/components/LandingPage/LandingPage"
import ParticlesBackground from "@/components/ParticlesBackground/ParticlesBackground"
import IDCard from "@/components/Resume/Resume"

export default function Home() {
  return (
    <main className="flex flex-1 w-full h-full mx-auto my-auto p-0">
      <div id="background" className="relative overflow-hidden">
        <ParticlesBackground />
      </div>
      <div id="background-overlay" className="flex flex-1 items-center justify-center w-full h-full mx-auto my-auto backdrop-blur-sm bg-black bg-opacity-5">
        <div id="main-card" className="flex items-center justify-center w-90p h-90p mx-auto my-auto backdrop-blur-sm bg-white bg-opacity-5 rounded-2xl border border-gray-600">

          {/* <LandingPage /> */}

          <IDCard />
        </div>
      </div>
    </main>
  )
}