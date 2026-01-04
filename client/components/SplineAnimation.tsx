import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineAnimationProps {
  className?: string;
  style?: React.CSSProperties;
}

const SplineAnimation: React.FC<SplineAnimationProps> = ({ 
  className = "", 
  style = {} 
}) => {
  return (
    <div className={`w-full h-full ${className}`} style={style}>
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center bg-transparent">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
            <p className="text-black">Loading 3D Animation...</p>
          </div>
        </div>
      }>
        <Spline 
          scene="https://prod.spline.design/n11sHPvkht7KdT5b/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            outline: 'none',
            borderRadius: '0',
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        />
      </Suspense>
    </div>
  );
};

export default SplineAnimation;
