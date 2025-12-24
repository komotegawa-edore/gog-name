'use client';

import { useState } from 'react';
import { dogBreeds } from '@/data/dogs';
import Image from 'next/image';
import { ArrowLeftIcon } from './Icons';

interface DogGalleryProps {
  onBack: () => void;
}

export default function DogGallery({ onBack }: DogGalleryProps) {
  const [filter, setFilter] = useState<'all' | 'small' | 'medium' | 'large'>('all');

  const filteredDogs = filter === 'all'
    ? dogBreeds
    : dogBreeds.filter((dog) => dog.size === filter);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          戻る
        </button>
        <div className="flex gap-2">
          {(['all', 'small', 'medium', 'large'] as const).map((size) => (
            <button
              key={size}
              onClick={() => setFilter(size)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === size
                  ? 'gradient-bg text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-400'
              }`}
            >
              {size === 'all' ? '全て' : size === 'small' ? '小型犬' : size === 'medium' ? '中型犬' : '大型犬'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDogs.map((dog) => (
          <div
            key={dog.id}
            className="bg-white rounded-xl card-shadow overflow-hidden hover:card-shadow-lg transition-shadow"
          >
            <div className="relative w-full h-48 bg-slate-100">
              <Image
                src={dog.image}
                alt={dog.nameJa}
                fill
                className="object-contain"
                unoptimized
              />
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  dog.size === 'small'
                    ? 'bg-green-100 text-green-700'
                    : dog.size === 'medium'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {dog.size === 'small' ? '小型' : dog.size === 'medium' ? '中型' : '大型'}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-slate-800">{dog.nameJa}</h3>
              <p className="text-sm text-slate-500 mb-2">{dog.name}</p>
              <p className="text-xs text-slate-400 mb-2">原産: {dog.origin}</p>
              <p className="text-sm text-slate-600">{dog.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-slate-500">
        全{filteredDogs.length}種類
      </div>
    </div>
  );
}
