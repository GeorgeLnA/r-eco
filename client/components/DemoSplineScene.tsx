import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const DemoSplineScene: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 rounded-xl flex items-center justify-center">
      <Suspense fallback={
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-black font-medium">Loading 3D Scene...</p>
        </div>
      }>
        <div className="text-center p-8">
          <div className="w-32 h-32 bg-black rounded-lg mx-auto mb-4 flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-black mb-2">Solar Panel Demo</h3>
          <p className="text-gray-600 text-sm">
            Replace this with your Spline scene URL
          </p>
          <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200">
            <p className="text-xs text-gray-500 font-mono">
              Scene URL: https://prod.spline.design/your-scene/scene.splinecode
            </p>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default DemoSplineScene;
