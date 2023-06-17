"use client";

import countries from "../../public/globe/globe-data-min.json";
import travelHistory from "../../public/globe/my-flights.json";
import airportHistory from "../../public/globe/my-airports.json";
import * as THREE from "three";
import { Color } from "three";
import { useEffect, useRef } from "react";
import Globe from 'react-globe.gl'

const GlobeThree = () => {
  const globeEl = useRef();
  const MAP_CENTER = { lat: 37.6, lng: -16.6, altitude: 1.2 };
  //altitude es la altura

  const globeMaterial = new THREE.MeshPhongMaterial();
  globeMaterial.bumpScale = 10;
  new THREE.TextureLoader().load("/globe/earth-dark.jpg", (texture) => {
    globeMaterial.color = new Color(0x3a228a);
    globeMaterial.emissive = new Color(0x220038);
    globeMaterial.emissiveIntensity = 0.1;
    globeMaterial.shininess = 15;
    globeMaterial.specularMap = texture;
  });

  
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1;
      globeEl.current.pointOfView(MAP_CENTER, 4000);
    }
  }, []);

  return (
    <div>
      <Globe
        ref={globeEl}
        waitForGlobeReady={true}
        backgroundImageUrl="/globe/night-sky.png"
        objectRotation={{ y: -Math.PI * (5 / 9), z: -Math.PI / 6 }}
        animateIn={true}
        // globeImageUrl="/globe/earth-water.png"
        globeMaterial={globeMaterial}
        hexPolygonsData={countries.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.7}
        showAtmosphere={true}
        hexPolygonColor={(e: any) => {
          if (["PER"].includes(e.properties.ISO_A3)) {
            return "rgba(255,0,0, 0.8)";
          } else return "rgba(255,255,255, 0.7)";
        }}
        atmosphereAltitude={0.25}
        atmosphereColor="#3a228a"
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
        arcDashAnimateTime={1000}
        arcsTransitionDuration={1000}
        arcDashInitialGap={(e: any) => e.order * 1}
        labelsData={airportHistory.airports}
        labelColor={() => "#ffcb21"}
        labelDotOrientation={(e: any) => {
          return e.text === "ALA" ? "top" : "right";
        }}
        labelDotRadius={0.3}
        labelSize={(e: any) => e.size}
        labelText={"city"}
        labelResolution={6}
        labelAltitude={0.01}
        pointsData={airportHistory.airports}
        pointColor={() => "#ffffff"}
        pointsMerge={true}
        pointAltitude={0.07}
        pointRadius={0.05}
      />
    </div>
  );
};

export default GlobeThree;

