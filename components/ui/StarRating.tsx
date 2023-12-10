'use client';

import React, { useState } from 'react';
import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti';

const Star = ({ selected = false, onClick = () => {} }) => (
  <span onClick={onClick} className="cursor-pointer">
    {selected ? (
      <TiStarFullOutline className="text-yellow-400" size="25px" />
    ) : (
      <TiStarOutline className="text-gray-400" size="25px" />
    )}
  </span>
);

export const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <div className="flex items-center space-x-1 py-3">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < selectedStars}
          onClick={() => setSelectedStars(i + 1)}
        />
      ))}
      <p className="mt-2 text-sm text-gray-600">
        {selectedStars} de {totalStars} etoiles
      </p>
    </div>
  );
};
