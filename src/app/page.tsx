'use client';

import { useState } from 'react';
import FlashCard from '@/components/FlashCard';
import Quiz from '@/components/Quiz';
import DogGallery from '@/components/DogGallery';
import { DogIcon, CardIcon, QuizIcon, GalleryIcon, InfinityIcon } from '@/components/Icons';

type Mode = 'home' | 'flashcard' | 'quiz' | 'gallery';

export default function Home() {
  const [mode, setMode] = useState<Mode>('home');

  if (mode === 'flashcard') {
    return (
      <div className="min-h-screen bg-slate-50 py-8 px-4">
        <FlashCard onBack={() => setMode('home')} />
      </div>
    );
  }

  if (mode === 'quiz') {
    return (
      <div className="min-h-screen bg-slate-50 py-8 px-4">
        <Quiz onBack={() => setMode('home')} />
      </div>
    );
  }

  if (mode === 'gallery') {
    return (
      <div className="min-h-screen bg-slate-50 py-8 px-4">
        <DogGallery onBack={() => setMode('home')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <DogIcon className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            犬の種類を覚えよう
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            楽しく効率的に犬の種類を学べるアプリです。
            フラッシュカードやクイズで知識を定着させましょう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setMode('flashcard')}
              className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all card-shadow-lg flex items-center gap-2"
            >
              <CardIcon className="w-5 h-5" />
              フラッシュカードで学習
            </button>
            <button
              onClick={() => setMode('quiz')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all flex items-center gap-2"
            >
              <QuizIcon className="w-5 h-5" />
              クイズに挑戦
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            <span className="gradient-bg bg-clip-text text-transparent">3つの学習モード</span>で効率的に覚える
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Flashcard Feature */}
            <div
              onClick={() => setMode('flashcard')}
              className="bg-white rounded-2xl p-8 card-shadow hover:card-shadow-lg transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CardIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">フラッシュカード</h3>
              <p className="text-slate-600">
                写真を見て犬種を当てる練習ができます。カードをタップすると答えと詳細情報が表示されます。
              </p>
            </div>

            {/* Quiz Feature */}
            <div
              onClick={() => setMode('quiz')}
              className="bg-white rounded-2xl p-8 card-shadow hover:card-shadow-lg transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <QuizIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">クイズモード</h3>
              <p className="text-slate-600">
                4択問題で知識をテスト。10問のクイズで実力を試して、スコアを確認しましょう。
              </p>
            </div>

            {/* Gallery Feature */}
            <div
              onClick={() => setMode('gallery')}
              className="bg-white rounded-2xl p-8 card-shadow hover:card-shadow-lg transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GalleryIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">図鑑モード</h3>
              <p className="text-slate-600">
                全ての犬種を一覧で確認。サイズでフィルターして、じっくり学習できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <DogIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="text-4xl font-bold gradient-bg bg-clip-text text-transparent">20+</div>
              <div className="text-slate-600 mt-2">犬種を収録</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <CardIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="text-4xl font-bold gradient-bg bg-clip-text text-transparent">3</div>
              <div className="text-slate-600 mt-2">学習モード</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <InfinityIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="text-4xl font-bold gradient-bg bg-clip-text text-transparent">∞</div>
              <div className="text-slate-600 mt-2">何度でも学習可能</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            今すぐ始めよう
          </h2>
          <p className="text-slate-600 mb-8">
            犬種の知識を楽しく身につけましょう。まずはフラッシュカードから始めてみませんか?
          </p>
          <button
            onClick={() => setMode('flashcard')}
            className="px-8 py-4 gradient-bg text-white rounded-full font-bold text-lg hover:opacity-90 transition-all card-shadow-lg inline-flex items-center gap-2"
          >
            <CardIcon className="w-5 h-5" />
            学習を始める
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center flex items-center justify-center gap-2">
          <DogIcon className="w-5 h-5 opacity-70" />
          <p className="opacity-70">
            犬の種類を覚えよう | Dog Breeds Learning
          </p>
        </div>
      </footer>
    </div>
  );
}
