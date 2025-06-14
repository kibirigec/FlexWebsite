import React from "react";
import { Navbar6 } from "./components/Navbar6";
import { Header5 } from "./components/Header5";
import { Layout237 } from "./components/Layout237";
import { Layout1 } from "./components/Layout1";
import { Stats25 } from "./components/Stats25";
import { Testimonial5 } from "./components/Testimonial5";
import { Gallery1 } from "./components/Gallery1";
import { Cta1 } from "./components/Cta1";
import { Cta14 } from "./components/Cta14";
// import WeddingDecorBookingForm  from "./components/WeddingDecorBookingForm";
// import { Footer3 } from "./components/Footer3";
import { Footer3 } from "../../globalComps/Footer3";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../../components/Experience";
import { UI } from "../../components/UI";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";

export default function Page() {
  return (
    <div>
      <Header5 />
      <Layout237 />
      <Layout1 />
      <Stats25 />
      <Testimonial5 />
      <Gallery1 />
      
      {/* 3D Flip Book Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interactive Portfolio Book
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our work in an immersive 3D flip book experience. Click and drag to interact, 
              or use the controls to navigate through our portfolio.
            </p>
          </div>
          
          <div className="h-[600px] w-full relative">
            <UI />
            <Canvas
              shadows
              camera={{
                position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
                fov: 45,
                near: 0.1,
                far: 1000
              }}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance"
              }}
            >
              <color attach="background" args={["#f3f4f6"]} />
              <fog attach="fog" args={["#f3f4f6", 5, 20]} />
              <Suspense fallback={null}>
                <Experience />
              </Suspense>
            </Canvas>
            <Loader />
          </div>
        </div>
      </section>
      
      <Cta1 />
      {/* <WeddingDecorBookingForm /> */}
      {/* <Cta14 /> */}
      <Footer3 />
    </div>
  );
}
