'use client';

import { useState, useCallback } from 'react';
import { DogBreed, dogBreeds, sections, getDogsBySection } from '@/data/dogs';
import Image from 'next/image';
import { ArrowLeftIcon, ShuffleIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface FlashCardProps {
  onBack: () => void;
}

export default function FlashCard({ onBack }: FlashCardProps) {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledDogs, setShuffledDogs] = useState<DogBreed[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const generateCards = useCallback((sectionId: number) => {
    const sectionDogs = getDogsBySection(sectionId);
    const shuffled = [...sectionDogs].sort(() => Math.random() - 0.5);
    setShuffledDogs(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setCurrentImageIndex(0);
  }, []);

  const handleSectionSelect = (sectionId: number) => {
    setSelectedSection(sectionId);
    generateCards(sectionId);
  };

  const handleBackToSections = () => {
    setSelectedSection(null);
    setShuffledDogs([]);
  };

  const currentDog = shuffledDogs[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentImageIndex(0);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledDogs.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentImageIndex(0);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + shuffledDogs.length) % shuffledDogs.length);
    }, 150);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setCurrentImageIndex(0);
  };

  const handleShuffle = () => {
    if (selectedSection) {
      generateCards(selectedSection);
    }
  };

  const handleNextImage = () => {
    if (currentDog && currentImageIndex < currentDog.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  // セクション選択画面
  if (selectedSection === null) {
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
        </div>

        <h2 className="text-2xl font-bold text-center text-slate-800 mb-8">セクションを選択</h2>

        <div className="space-y-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionSelect(section.id)}
              className="w-full p-6 bg-white rounded-2xl card-shadow hover:card-shadow-lg transition-all text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full text-sm font-bold bg-indigo-100 text-indigo-700">
                      {section.name}
                    </span>
                  </div>
                  <p className="text-slate-600">{section.description}</p>
                </div>
                <div className="text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (!currentDog) {
    return <div className="text-center py-8">Loading...</div>;
  }

  const currentSection = sections.find(s => s.id === selectedSection);

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
      <div className="w-full flex justify-between items-center mb-4">
        <button
          onClick={handleBackToSections}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          戻る
        </button>
        <div className="flex items-center gap-4">
          <span className="px-2 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700">
            {currentSection?.name}
          </span>
          <span className="text-slate-500 font-medium">
            {currentIndex + 1} / {shuffledDogs.length}
          </span>
        </div>
      </div>

      <div
        className="flip-card w-full h-[28rem] sm:h-[32rem] cursor-pointer mb-4"
        onClick={handleFlip}
      >
        <div className={`flip-card-inner relative w-full h-full ${isFlipped ? 'flipped' : ''}`}>
          <div className="flip-card-front absolute w-full h-full rounded-2xl bg-white card-shadow-lg overflow-hidden">
            <div className="relative w-full h-80 sm:h-96 bg-slate-100">
              <Image
                src={currentDog.images[0]}
                alt={currentDog.nameJa}
                fill
                className="object-contain p-2"
                unoptimized
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-slate-400 text-sm mb-1">タップして答えを見る</p>
              <p className="text-lg text-slate-600">この犬種の名前は?</p>
            </div>
          </div>

          <div className="flip-card-back absolute w-full h-full rounded-2xl gradient-bg overflow-hidden cursor-pointer" onClick={handleFlip}>
            <div className="relative w-full h-72 sm:h-80 bg-white/10">
              <Image
                src={currentDog.images[currentImageIndex]}
                alt={currentDog.nameJa}
                fill
                className="object-contain p-2"
                unoptimized
              />
              {currentDog.images.length > 1 && (
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                    disabled={currentImageIndex === 0}
                    className={`p-1 rounded-full bg-white/80 ${currentImageIndex === 0 ? 'opacity-30' : 'hover:bg-white'}`}
                  >
                    <ChevronLeftIcon className="w-4 h-4 text-slate-700" />
                  </button>
                  <span className="text-white text-sm bg-black/30 px-2 py-1 rounded-full">
                    {currentImageIndex + 1} / {currentDog.images.length}
                  </span>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                    disabled={currentImageIndex === currentDog.images.length - 1}
                    className={`p-1 rounded-full bg-white/80 ${currentImageIndex === currentDog.images.length - 1 ? 'opacity-30' : 'hover:bg-white'}`}
                  >
                    <ChevronRightIcon className="w-4 h-4 text-slate-700" />
                  </button>
                </div>
              )}
            </div>
            <div className="p-3 text-white text-center">
              <h2 className="text-2xl font-bold">{currentDog.nameJa}</h2>
              <p className="text-base opacity-90">{currentDog.name}</p>
              <p className="text-xs opacity-70 mt-1">原産国: {currentDog.origin} | {currentDog.size === 'small' ? '小型犬' : currentDog.size === 'medium' ? '中型犬' : '大型犬'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 sm:gap-4">
        <button
          onClick={handlePrev}
          className="px-3 py-2 sm:px-6 sm:py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors card-shadow flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
        >
          <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">前へ</span>
        </button>
        <button
          onClick={handleShuffle}
          className="px-3 py-2 sm:px-6 sm:py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-colors card-shadow flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
        >
          <ShuffleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">シャッフル</span>
        </button>
        <button
          onClick={handleNext}
          className="px-3 py-2 sm:px-6 sm:py-3 gradient-bg text-white rounded-full font-medium hover:opacity-90 transition-opacity card-shadow flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
        >
          <span className="hidden sm:inline">次へ</span>
          <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
