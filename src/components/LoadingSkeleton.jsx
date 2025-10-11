import React from "react";

export const LoadingSkeleton = ({ className = "" }) => {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`}>
      <div className="h-full w-full"></div>
    </div>
  );
};

export const ImageSkeleton = () => {
  return (
    <div className="w-full h-64 md:h-96 bg-gray-200 animate-pulse rounded-lg"></div>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm animate-pulse">
      <div className="h-48 bg-gray-200 rounded mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
};

export default LoadingSkeleton;
