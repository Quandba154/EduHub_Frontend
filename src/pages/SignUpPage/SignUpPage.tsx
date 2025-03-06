// import React, { JSX, Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Image, OrbitControls, useGLTF } from "@react-three/drei";
// import { MeshStandardMaterial, Color } from "three";
// import RuleModel from "../../models/RuleModel";
// import TapeModel from "../../models/TapeModel";
// import Triangle from "../../models/Triangle";
// import StickyNote from "../../models/StickyNote";
// import Pencil from "../../models/Pencil";
// import CoffeeModel from "../../models/CoffeeModel";
// import BookModel from "../../models/BookModel";
// import ModelHourseDance from "../../models/ModelHourseDance";
// import SignInForm from "./SignInForm";

// function SignInPage() {
//   return (
//     <div className="relative top-10 flex justify-center items-center w-full h-screen">
//       <div style={{ width: "100%", height: "100%" }}>
//         <Canvas>
//           <ambientLight />
//           <BookModel
//             position={[-4, 0, 0]}
//             rotation={[0, 1.2, -1.2]}
//             scale={[0.005, 0.005, 0.005]}
//           />
//           <StickyNote
//             position={[5, -2, 0]}
//             rotation={[0.24, 0.8, 0]}
//             scale={[0.05, 0.05, 0.05]}
//           />
//           <Pencil
//             position={[5, 2, 0]}
//             rotation={[0, 1.2, -1.2]}
//             scale={[0.005, 0.005, 0.005]}
//           />
//           <RuleModel
//             position={[-5, 3, 0]}
//             rotation={[0, 1.2, -1.2]}
//             scale={[0.005, 0.005, 0.005]}
//           ></RuleModel>
//           <OrbitControls />
//           <CoffeeModel
//             position={[4, 2, 0]}
//             rotation={[2, 1.5, -1.2]}
//             scale={[0.005, 0.005, 0.005]}
//           ></CoffeeModel>
//           <Triangle
//             position={[-4, -2, 0]}
//             rotation={[2, 1.5, -1.3]}
//             scale={[0.009, 0.009, 0.009]}
//           ></Triangle>
//         </Canvas>
//         <img
//           src="../../school-bag.svg"
//           alt="Mô tả ảnh"
//           style={{
//             position: "absolute",
//             top: "150px",
//             left: "20px",
//             width: "400px",
//             height: "200px",
//           }}
//         />
//       </div>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50  rounded-lg shadow-lg">
//         <SignInForm />
//       </div>
//     </div>
//   );
// }

// export default SignInPage;

import React, { useRef, ComponentType } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RuleModel from "../../models/RuleModel";
import * as THREE from "three";
import TapeModel from "../../models/TapeModel";
import Triangle from "../../models/Triangle";
import StickyNote from "../../models/StickyNote";
import Pencil from "../../models/Pencil";
import CoffeeModel from "../../models/CoffeeModel";
import BookModel from "../../models/BookModel";
import SignInForm from "./SignUpForm";

interface ModelProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  ref?: React.Ref<THREE.Object3D>;
}

interface RotatingModelProps extends ModelProps {
  ModelComponent: ComponentType<ModelProps>;
}

function RotatingModel({
  ModelComponent,
  position,
  rotation,
  scale,
}: RotatingModelProps) {
  const ref = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
      ref.current.rotation.x += 0.002;
    }
  });

  return (
    <ModelComponent
      ref={ref}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
}

function SignInPage() {
  return (
    <div className="relative flex justify-center items-center w-full h-screen">
      <div className="absolute inset-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <pointLight position={[-2, 2, 2]} intensity={5} />

          <RotatingModel
            ModelComponent={BookModel}
            position={[-5, 1.5, -1]}
            rotation={[0, 1, -1.2]}
            scale={[0.004, 0.004, 0.004]}
          />
          <RotatingModel
            ModelComponent={BookModel}
            position={[5, -1.5, -2]}
            rotation={[0, 1, -1.2]}
            scale={[0.004, 0.004, 0.004]}
          />

          <RotatingModel
            ModelComponent={StickyNote}
            position={[-4.5, -3, 0]}
            rotation={[0.3, 0.8, 0.2]}
            scale={[0.04, 0.04, 0.04]}
          />
          <RotatingModel
            ModelComponent={StickyNote}
            position={[2, 2, 0]}
            rotation={[0.3, 0.8, 0.2]}
            scale={[0.04, 0.04, 0.04]}
          />

          <RotatingModel
            ModelComponent={Pencil}
            position={[5, -2, -0.5]}
            rotation={[0, 1, -1.1]}
            scale={[0.003, 0.003, 0.003]}
          />
          <RotatingModel
            ModelComponent={Pencil}
            position={[-5, -2, -0.5]}
            rotation={[0, 1, -1.1]}
            scale={[0.003, 0.003, 0.003]}
          />

          <RotatingModel
            ModelComponent={RuleModel}
            position={[3, -2, -1]}
            rotation={[0.1, 1, -1.3]}
            scale={[0.0035, 0.0035, 0.0035]}
          />
          <RotatingModel
            ModelComponent={RuleModel}
            position={[8, 4, -1]}
            rotation={[0.1, 1, -1.3]}
            scale={[0.0035, 0.0035, 0.0035]}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />

          <RotatingModel
            ModelComponent={CoffeeModel}
            position={[4, 1.5, -1]}
            rotation={[2, 1.2, -1]}
            scale={[0.003, 0.003, 0.003]}
          />
          <RotatingModel
            ModelComponent={CoffeeModel}
            position={[-2, 1.5, -1]}
            rotation={[2, 1.2, -1]}
            scale={[0.003, 0.003, 0.003]}
          />

          <RotatingModel
            ModelComponent={Triangle}
            position={[-3.5, -2, -0.5]}
            rotation={[2, 1.5, -1.3]}
            scale={[0.007, 0.007, 0.007]}
          />
          <RotatingModel
            ModelComponent={Triangle}
            position={[3.5, 2, -0.5]}
            rotation={[2, 1.5, -1.3]}
            scale={[0.007, 0.007, 0.007]}
          />
        </Canvas>
      </div>

      <img
        src="../../school-bag.svg"
        alt="Mô tả ảnh"
        className="absolute top-[10px] left-0 w-[400px] h-[200px] animate-rotate-full"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-lg shadow-lg">
        <SignInForm />
      </div>
    </div>
  );
}

export default SignInPage;
