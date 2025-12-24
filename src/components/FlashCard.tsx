'use client';

import { useState, useEffect } from 'react';
import { DogBreed, dogBreeds } from '@/data/dogs';
import Image from 'next/image';
import { ArrowLeftIcon, ShuffleIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface FlashCardProps {
  onBack: () => void;
}

export default function FlashCard({ onBack }: FlashCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledDogs, setShuffledDogs] = useState<DogBreed[]>([]);

  useEffect(() => {
    const shuffled = [...dogBreeds].sort(() => Math.random() - 0.5);
    setShuffledDogs(shuffled);
  }, []);

  const currentDog = shuffledDogs[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledDogs.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + shuffledDogs.length) % shuffledDogs.length);
    }, 150);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setCurrentIndex(0);
    const shuffled = [...dogBreeds].sort(() => Math.random() - 0.5);
    setShuffledDogs(shuffled);
  };

  if (!currentDog) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          戻る
        </button>
        <span className="text-slate-500 font-medium">
          {currentIndex + 1} / {shuffledDogs.length}
        </span>
      </div>

      <div
        className="flip-card h-96 cursor-pointer mb-6"
        onClick={handleFlip}
      >
        <div className={`flip-card-inner relative w-full h-full ${isFlipped ? 'flipped' : ''}`}>
          <div className="flip-card-front absolute w-full h-full rounded-2xl bg-white card-shadow-lg overflow-hidden">
            <div className="relative w-full h-64">
              <Image
                src={currentDog.image}
                alt={currentDog.nameJa}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="p-6 text-center">
              <p className="text-slate-400 text-sm mb-2">タップして答えを見る</p>
              <p className="text-lg text-slate-600">この犬種の名前は?</p>
            </div>
          </div>

          <div className="flip-card-back absolute w-full h-full rounded-2xl gradient-bg p-8 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold mb-2">{currentDog.nameJa}</h2>
            <p className="text-xl opacity-90 mb-4">{currentDog.name}</p>
            <div className="text-center space-y-2 opacity-80">
              <p>原産国: {currentDog.origin}</p>
              <p>サイズ: {currentDog.size === 'small' ? '小型' : currentDog.size === 'medium' ? '中型' : '大型'}</p>
              <p className="text-sm mt-4">{currentDog.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={handlePrev}
          className="px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors card-shadow flex items-center gap-2"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          前へ
        </button>
        <button
          onClick={handleShuffle}
          className="px-6 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-colors card-shadow flex items-center gap-2"
        >
          <ShuffleIcon className="w-5 h-5" />
          シャッフル
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-3 gradient-bg text-white rounded-full font-medium hover:opacity-90 transition-opacity card-shadow flex items-center gap-2"
        >
          次へ
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
