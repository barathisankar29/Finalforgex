'use client';

import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';

export default function SplineScene() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay mount slightly to avoid blocking main thread
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 text-sm">
        Loading 3D...
      </div>
    );
  }

  return (
    <Spline
      scene="https://prod.spline.design/4cc6jbhoninVKfDv/scene.splinecode"
      style={{ width: '100%', height: '100%' }}
    />
  );
}