import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { STLLoader } from 'three/addons/loaders/STLLoader';

function MaterialSelector({
  selectedMaterial,
  setSelectedMaterial,
  selectedColor,
  setSelectedColor,
  selectedInfill,
  setSelectedInfill,
}) {
  return (
    <div className="flex space-x-4 mb-8">
      <div>
        <h1 className="text-2xl font-semibold mb-4">3D Printing Service</h1>
        <label htmlFor="material" className="block text-sm font-medium text-gray-700">
          Material:
        </label>
        <select
          id="material"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={selectedMaterial}
          onChange={(e) => setSelectedMaterial(e.target.value)}
        >
          <option value="ABS+ White">ABS+ White</option>
          <option value="ABS+">ABS+</option>
          <option value="PETG+">PETG+</option>
          <option value="PLA+">PLA+</option>
        </select>
        <button
        className="mt-4 p-2 bg-blue-500 text-white rounded-md">
        NEXT
      </button>
      </div>


      <div>
        <br></br><br></br>
        <label htmlFor="color" className="block text-sm font-medium text-gray-700">
          Color:
        </label>
        <select
          id="color"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="White">White</option>
          <option value="Black">Black</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
        </select>
      </div>

      <div>
        <br></br><br></br>
      <label htmlFor="infill" className="block text-sm font-medium text-gray-700">
          Infill:
        </label>
        <select
          id="infill"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={selectedInfill}
          onChange={(e) => setSelectedInfill(e.target.value)}
        >
          <option value="20%">20%</option>
          <option value="40%">40%</option>
          <option value="60%">60%</option>
          <option value="80%">80%</option>
          <option value="100%">100%</option>
        </select>
      </div>

      
    </div>
  );
}

function ModelUploader({ handleFileChange, handleUploadModel, errorMessage, selectedFile }) {
  return (
    <div className="upload-box p-8 bg-white rounded-md shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Upload a 3D Model</h3>
      <p className="text-gray-500 mb-4">Supported files: .STL, .OBJ, .STP, .STEP, .IGS, .IGES</p>
      <form className="space-y-4">
        <div>
          <label htmlFor="modelFile" className="block text-sm font-medium text-gray-700">
            Choose File:
          </label>
          <input
            type="file"
            id="modelFile"
            onChange={handleFileChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          type="button"
          disabled={!selectedFile}
          onClick={handleUploadModel}
          className="p-2 bg-blue-500 text-white rounded-md ${!selectedFile && 'opacity-50 cursor-not-allowed'}"
        >
          UPLOAD AND VIEW MODEL
        </button>
      </form>
    </div>
  );
}

function ModelViewer({ modelFile }) {
  const { nodes } = useLoader(STLLoader, modelFile);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <React.Suspense fallback={null}>
          {nodes ? (
            <mesh>
              <primitive object={nodes} />
            </mesh>
          ) : null}
        </React.Suspense>
      </Suspense>
    </Canvas>
  );
}

const Service = () => {
  const [selectedMaterial, setSelectedMaterial] = useState('ABS+');
  const [selectedColor, setSelectedColor] = useState('White');
  const [selectedInfill, setSelectedInfill] = useState('20%');
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModel, setShowModel] = useState(false);

  const modelViewerRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const validFormats = ['stl'];
    const extension = file.name.split('.').pop().toLowerCase();

    if (!validFormats.includes(extension)) {
      setErrorMessage('Unsupported file format. Please upload an STL file.');
      setSelectedFile(null); // Clear the selected file
    } else {
      setErrorMessage(''); // Clear any previous error message
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const handleUploadModel = () => {
    // Your model analysis logic goes here
    // For now, just set the state to show the model
    if (selectedFile) {
      setShowModel(true);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-8">
      <div className="grid grid-cols-2 gap-8">
        <ModelUploader
          handleFileChange={handleFileChange}
          handleUploadModel={handleUploadModel}
          errorMessage={errorMessage}
          selectedFile={selectedFile}
        />
        <MaterialSelector
          selectedMaterial={selectedMaterial}
          setSelectedMaterial={setSelectedMaterial}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedInfill={selectedInfill}
          setSelectedInfill={setSelectedInfill}
        />
      </div>

      {/* 3D Model Viewer */}
      {showModel && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">3D Model Visualization</h2>
          <div className="border p-4 rounded-md" ref={modelViewerRef}>
            <ModelViewer modelFile={selectedFile} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;