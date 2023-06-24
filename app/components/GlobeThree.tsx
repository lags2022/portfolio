"use client";

import countries from "../../public/globe/globe-data-min.json";
import travelHistory from "../../public/globe/my-flights.json";
import airportHistory from "../../public/globe/my-airports.json";
import * as THREE from "three";
import { Color } from "three";
import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { toast } from "react-hot-toast";
import { SizeMe } from "react-sizeme";

const GlobeThree = () => {
  const globeEl = useRef();
  const MAP_CENTER = { lat: -8.635861, lng: -75.372869, altitude: 2 };
  //altitude es la altura

  const [hoverD, setHoverD] = useState<any>();

  // const globeMaterial = new THREE.MeshPhongMaterial();
  // globeMaterial.bumpScale = 10;
  // new THREE.TextureLoader().load("/globe/earth-dark.jpg", (texture) => {
  //   globeMaterial.color = new Color(0x3a228a);
  //   globeMaterial.emissive = new Color(0x220038);
  //   globeMaterial.emissiveIntensity = 0.1;
  //   globeMaterial.shininess = 15;
  //   globeMaterial.specularMap = texture;
  // });

  // const globeMaterial = new THREE.MeshPhongMaterial();
  // globeMaterial.bumpScale = 10;
  // new THREE.TextureLoader().load("/globe/earth-blue-marble.jpg", (texture) => {
  //   // globeMaterial.specularMap = texture;
  //   // globeMaterial.specular = new THREE.Color("grey");
  //   // globeMaterial.shininess = 15;
  //   globeMaterial.color = new Color(0x3a228a);
  //   globeMaterial.emissive = new Color(0x220038);
  //   globeMaterial.emissiveIntensity = 0.1;
  //   globeMaterial.shininess = 15;
  //   globeMaterial.specularMap = texture;
  // });

  useEffect(() => {
    if (globeEl.current) {
      const glob = globeEl.current as any;
      // setTimeout(() => {
      //   // wait for scene to be populated (asynchronously)
      //   const directionalLight = glob
      //     .scene()
      //     .children.find((obj3d: any) => obj3d.type === "DirectionalLight");
      //   directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
      // });
      glob.controls().autoRotate = true;
      glob.controls().autoRotateSpeed = -1;
      glob.pointOfView(MAP_CENTER, 4000);
    }
  }, []);

  return (
    <div className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px]">
      <SizeMe>
        {({ size: { width } }: any) => (
          <Globe
            onGlobeRightClick={() => toast("Contact me 👉")}
            width={width}
            height={width}
            ref={globeEl}
            waitForGlobeReady={true}
            backgroundColor="#f5f5f500"
            // backgroundImageUrl="/globe/night-sky.png"
            // objectRotation={{ y: -Math.PI * (5 / 9), z: -Math.PI / 6 }}
            animateIn={true}
            // globeImageUrl="/globe/earth-water.png"
            // globeMaterial={globeMaterial}
            globeImageUrl="/globe/earth-blue-marble.jpg"
            // bumpImageUrl="/globe/earth-topology.png"
            // hexPolygonsData={countries.features}
            // hexPolygonResolution={3}
            // hexPolygonMargin={0.7}
            showAtmosphere={false}
            // hexPolygonColor={(e: any) => {
            //   if (["PER"].includes(e.properties.ISO_A3)) {
            //     return "rgba(255,0,0, 0.8)";
            //   } else return "rgba(255,255,255, 0.7)";
            // }}
            polygonsData={countries.features.filter(
              (d) => d.properties.ISO_A3 === "PER"
            )}
            polygonAltitude={(d) => (d === hoverD ? 0.12 : 0.005)}
            polygonCapColor={() => "#922B21"}
            polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
            polygonStrokeColor={() => "#111"}
            onPolygonHover={setHoverD}
            polygonsTransitionDuration={300}
            // atmosphereAltitude={0.25}
            // atmosphereColor="#3a228a"
            arcsData={travelHistory.flights}
            arcColor={(e: any) => {
              return e.status ? "#9cff00" : "#FF4000";
            }}
            arcAltitude={(e: any) => {
              return e.arcAlt;
            }}
            arcStroke={(e: any) => {
              return e.status ? 0.5 : 0.3;
            }}
            arcDashLength={0.9}
            arcDashGap={4}
            arcDashAnimateTime={2000}
            arcsTransitionDuration={3000}
            arcDashInitialGap={(e: any) => e.order * 1}
            labelsData={airportHistory.airports}
            labelColor={() => "#ffcb21"}
            labelDotOrientation={(e: any) => {
              return e.text === "ALA" ? "top" : "right";
            }}
            labelDotRadius={0.3}
            labelSize={(e: any) => e.size}
            labelText={"country"}
            labelResolution={6}
            labelAltitude={0.01}
            pointsData={airportHistory.airports}
            pointColor={() => "#ffffff"}
            pointsMerge={true}
            pointAltitude={0.07}
            pointRadius={0.05}
          />
        )}
      </SizeMe>
    </div>
  );
};

export default GlobeThree;
