'use client';

import { useState, useEffect, useCallback } from 'react';
import { DogBreed, dogBreeds } from '@/data/dogs';
import Image from 'next/image';
import { ArrowLeftIcon, TrophyIcon, StarIcon, TargetIcon, CheckCircleIcon } from './Icons';

interface QuizProps {
  onBack: () => void;
}

interface QuizQuestion {
  dog: DogBreed;
  options: DogBreed[];
  correctIndex: number;
}

export default function Quiz({ onBack }: QuizProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [shake, setShake] = useState(false);
  const [pulseCorrect, setPulseCorrect] = useState(false);

  const generateQuestions = useCallback(() => {
    const shuffled = [...dogBreeds].sort(() => Math.random() - 0.5);
    const questionCount = Math.min(10, shuffled.length);

    const newQuestions: QuizQuestion[] = shuffled.slice(0, questionCount).map((dog) => {
      const otherDogs = dogBreeds.filter((d) => d.id !== dog.id);
      const shuffledOthers = otherDogs.sort(() => Math.random() - 0.5).slice(0, 3);
      const correctIndex = Math.floor(Math.random() * 4);
      const options = [...shuffledOthers];
      options.splice(correctIndex, 0, dog);

      return { dog, options, correctIndex };
    });

    setQuestions(newQuestions);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setIsQuizComplete(false);
  }, []);

  useEffect(() => {
    generateQuestions();
  }, [generateQuestions]);

  const handleAnswer = (index: number) => {
    if (showResult) return;

    setSelectedAnswer(index);
    setShowResult(true);

    if (index === questions[currentIndex].correctIndex) {
      setScore((prev) => prev + 1);
      setPulseCorrect(true);
      setTimeout(() => setPulseCorrect(false), 500);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 300);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleRestart = () => {
    generateQuestions();
  };

  if (questions.length === 0) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (isQuizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    let message = '';
    let IconComponent = TrophyIcon;

    if (percentage === 100) {
      message = 'パーフェクト! 全問正解です!';
      IconComponent = TrophyIcon;
    } else if (percentage >= 80) {
      message = '素晴らしい! よく覚えていますね!';
      IconComponent = StarIcon;
    } else if (percentage >= 60) {
      message = '良い調子です! もう少し頑張りましょう!';
      IconComponent = CheckCircleIcon;
    } else {
      message = 'もう少し練習が必要ですね。頑張って!';
      IconComponent = TargetIcon;
    }

    return (
      <div className="w-full max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl card-shadow-lg p-8">
          <div className="w-20 h-20 mx-auto mb-4 gradient-bg rounded-full flex items-center justify-center">
            <IconComponent className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">クイズ完了!</h2>
          <div className="mb-6">
            <div className="text-6xl font-bold mb-2" style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #9333ea 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {score} / {questions.length}
            </div>
            <p className="text-slate-500">正解率: {percentage}%</p>
          </div>
          <p className="text-lg text-slate-600 mb-8">{message}</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onBack}
              className="px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors"
            >
              メニューに戻る
            </button>
            <button
              onClick={handleRestart}
              className="px-6 py-3 gradient-bg text-white rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              もう一度挑戦
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

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
        <div className="flex items-center gap-4">
          <span className="text-slate-500">
            問題 {currentIndex + 1} / {questions.length}
          </span>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
            スコア: {score}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl card-shadow-lg overflow-hidden mb-6">
        <div className="relative w-full h-64 bg-slate-100">
          <Image
            src={currentQuestion.dog.image}
            alt="犬の写真"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-800 text-center mb-4">
            この犬種は何でしょう?
          </h2>
        </div>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 ${shake ? 'shake' : ''} ${pulseCorrect ? 'pulse-correct' : ''}`}>
        {currentQuestion.options.map((option, index) => {
          let buttonClass = 'p-4 rounded-xl font-medium transition-all text-left border-2 ';

          if (showResult) {
            if (index === currentQuestion.correctIndex) {
              buttonClass += 'bg-green-100 border-green-500 text-green-800';
            } else if (index === selectedAnswer) {
              buttonClass += 'bg-red-100 border-red-500 text-red-800';
            } else {
              buttonClass += 'bg-slate-50 border-slate-200 text-slate-400';
            }
          } else {
            buttonClass += 'bg-white border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 text-slate-700 card-shadow';
          }

          return (
            <button
              key={option.id}
              onClick={() => handleAnswer(index)}
              disabled={showResult}
              className={buttonClass}
            >
              <div className="font-bold">{option.nameJa}</div>
              <div className="text-sm opacity-70">{option.name}</div>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="text-center">
          {selectedAnswer === currentQuestion.correctIndex ? (
            <p className="text-green-600 font-medium mb-4 flex items-center justify-center gap-2">
              <CheckCircleIcon className="w-5 h-5" />
              正解です!
            </p>
          ) : (
            <p className="text-red-600 font-medium mb-4">
              残念! 正解は「{currentQuestion.dog.nameJa}」です
            </p>
          )}
          <button
            onClick={handleNext}
            className="px-8 py-3 gradient-bg text-white rounded-full font-medium hover:opacity-90 transition-opacity card-shadow"
          >
            {currentIndex < questions.length - 1 ? '次の問題へ' : '結果を見る'}
          </button>
        </div>
      )}
    </div>
  );
}
