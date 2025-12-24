'use client';

import { useState } from 'react';
import { DogBreed, dogBreeds, sections } from '@/data/dogs';
import Image from 'next/image';
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface DogGalleryProps {
  onBack: () => void;
}

export default function DogGallery({ onBack }: DogGalleryProps) {
  const [sizeFilter, setSizeFilter] = useState<'all' | 'small' | 'medium' | 'large'>('all');
  const [sectionFilter, setSectionFilter] = useState<number | 'all'>('all');
  const [selectedDog, setSelectedDog] = useState<DogBreed | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredDogs = dogBreeds.filter((dog) => {
    const sizeMatch = sizeFilter === 'all' || dog.size === sizeFilter;
    const sectionMatch = sectionFilter === 'all' || dog.section === sectionFilter;
    return sizeMatch && sectionMatch;
  });

  const openDetail = (dog: DogBreed) => {
    setSelectedDog(dog);
    setCurrentImageIndex(0);
  };

  const closeDetail = () => {
    setSelectedDog(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedDog && currentImageIndex < selectedDog.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          戻る
        </button>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          {/* セクションフィルター */}
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            <button
              onClick={() => setSectionFilter('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                sectionFilter === 'all'
                  ? 'gradient-bg text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-400'
              }`}
            >
              全レベル
            </button>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setSectionFilter(section.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                  sectionFilter === section.id
                    ? section.id === 1 ? 'bg-green-500 text-white' :
                      section.id === 2 ? 'bg-yellow-500 text-white' :
                      'bg-red-500 text-white'
                    : section.id === 1 ? 'bg-green-100 text-green-700 hover:bg-green-200' :
                      section.id === 2 ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' :
                      'bg-red-100 text-red-700 hover:bg-red-200'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
          {/* サイズフィルター */}
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {(['all', 'small', 'medium', 'large'] as const).map((size) => (
              <button
                key={size}
                onClick={() => setSizeFilter(size)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                  sizeFilter === size
                    ? 'gradient-bg text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-400'
                }`}
              >
                {size === 'all' ? '全サイズ' : size === 'small' ? '小型犬' : size === 'medium' ? '中型犬' : '大型犬'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDogs.map((dog) => (
          <div
            key={dog.id}
            onClick={() => openDetail(dog)}
            className="bg-white rounded-xl card-shadow overflow-hidden hover:card-shadow-lg transition-shadow cursor-pointer group"
          >
            <div className="relative w-full h-48 bg-slate-100">
              <Image
                src={dog.images[0]}
                alt={dog.nameJa}
                fill
                className="object-contain group-hover:scale-105 transition-transform"
                unoptimized
              />
              <div className="absolute top-2 left-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  dog.section === 1 ? 'bg-green-100 text-green-700' :
                  dog.section === 2 ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {sections.find(s => s.id === dog.section)?.name}
                </span>
              </div>
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  dog.size === 'small'
                    ? 'bg-blue-100 text-blue-700'
                    : dog.size === 'medium'
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {dog.size === 'small' ? '小型' : dog.size === 'medium' ? '中型' : '大型'}
                </span>
              </div>
              {dog.images.length > 1 && (
                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                  {dog.images.length}枚
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-slate-800">{dog.nameJa}</h3>
              <p className="text-sm text-slate-500 mb-2">{dog.name}</p>
              <p className="text-xs text-slate-400">原産: {dog.origin}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-slate-500">
        全{filteredDogs.length}種類
      </div>

      {/* 詳細モーダル */}
      {selectedDog && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={closeDetail}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto card-shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 画像カルーセル */}
            <div className="relative w-full h-64 sm:h-80 bg-slate-100">
              <Image
                src={selectedDog.images[currentImageIndex]}
                alt={selectedDog.nameJa}
                fill
                className="object-contain"
                unoptimized
              />
              {/* 閉じるボタン */}
              <button
                onClick={closeDetail}
                className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center card-shadow"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* バッジ */}
              <div className="absolute top-3 left-3 flex gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  selectedDog.section === 1 ? 'bg-green-100 text-green-700' :
                  selectedDog.section === 2 ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {sections.find(s => s.id === selectedDog.section)?.name}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  selectedDog.size === 'small'
                    ? 'bg-blue-100 text-blue-700'
                    : selectedDog.size === 'medium'
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {selectedDog.size === 'small' ? '小型犬' : selectedDog.size === 'medium' ? '中型犬' : '大型犬'}
                </span>
              </div>
              {/* 画像ナビゲーション */}
              {selectedDog.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    disabled={currentImageIndex === 0}
                    className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center card-shadow ${
                      currentImageIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''
                    }`}
                  >
                    <ChevronLeftIcon className="w-5 h-5 text-slate-700" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    disabled={currentImageIndex === selectedDog.images.length - 1}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center card-shadow ${
                      currentImageIndex === selectedDog.images.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
                    }`}
                  >
                    <ChevronRightIcon className="w-5 h-5 text-slate-700" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                    {currentImageIndex + 1} / {selectedDog.images.length}
                  </div>
                </>
              )}
            </div>

            {/* 詳細情報 */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-1">{selectedDog.nameJa}</h2>
              <p className="text-lg text-slate-500 mb-4">{selectedDog.name}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-400 mb-1">原産国</p>
                  <p className="font-medium text-slate-700">{selectedDog.origin}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-400 mb-1">サイズ</p>
                  <p className="font-medium text-slate-700">
                    {selectedDog.size === 'small' ? '小型犬' : selectedDog.size === 'medium' ? '中型犬' : '大型犬'}
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-xs text-slate-400 mb-2">特徴</p>
                <p className="text-slate-700">{selectedDog.description}</p>
              </div>

              {/* サムネイル一覧 */}
              {selectedDog.images.length > 1 && (
                <div className="mt-4">
                  <p className="text-xs text-slate-400 mb-2">写真一覧</p>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedDog.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden ${
                          currentImageIndex === idx ? 'ring-2 ring-indigo-500' : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${selectedDog.nameJa} ${idx + 1}`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
