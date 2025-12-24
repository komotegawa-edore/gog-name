export interface DogBreed {
  id: number;
  name: string;
  nameJa: string;
  origin: string;
  size: 'small' | 'medium' | 'large';
  description: string;
  image: string;
}

export const dogBreeds: DogBreed[] = [
  {
    id: 1,
    name: "Shiba Inu",
    nameJa: "柴犬",
    origin: "日本",
    size: "medium",
    description: "日本原産の中型犬。忠実で独立心が強い。",
    image: "https://images.unsplash.com/photo-1546238232-20216dec9f72?w=400"
  },
  {
    id: 2,
    name: "Golden Retriever",
    nameJa: "ゴールデンレトリバー",
    origin: "イギリス",
    size: "large",
    description: "優しくフレンドリーな大型犬。家族向き。",
    image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400"
  },
  {
    id: 3,
    name: "Labrador Retriever",
    nameJa: "ラブラドールレトリバー",
    origin: "カナダ",
    size: "large",
    description: "賢くて訓練しやすい。盲導犬として活躍。",
    image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?w=400"
  },
  {
    id: 4,
    name: "Poodle",
    nameJa: "プードル",
    origin: "フランス",
    size: "medium",
    description: "非常に賢く、抜け毛が少ない。様々なサイズがある。",
    image: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=400"
  },
  {
    id: 5,
    name: "Chihuahua",
    nameJa: "チワワ",
    origin: "メキシコ",
    size: "small",
    description: "世界最小の犬種。勇敢で警戒心が強い。",
    image: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=400"
  },
  {
    id: 6,
    name: "French Bulldog",
    nameJa: "フレンチブルドッグ",
    origin: "フランス",
    size: "small",
    description: "コウモリのような耳が特徴。愛嬌があり人気。",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400"
  },
  {
    id: 7,
    name: "German Shepherd",
    nameJa: "ジャーマンシェパード",
    origin: "ドイツ",
    size: "large",
    description: "知性と忠誠心が高い。警察犬として有名。",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400"
  },
  {
    id: 8,
    name: "Beagle",
    nameJa: "ビーグル",
    origin: "イギリス",
    size: "medium",
    description: "嗅覚が優れた猟犬。好奇心旺盛で陽気。",
    image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400"
  },
  {
    id: 9,
    name: "Dachshund",
    nameJa: "ダックスフンド",
    origin: "ドイツ",
    size: "small",
    description: "胴長短足の愛らしい体型。活発で遊び好き。",
    image: "https://images.unsplash.com/photo-1612195583950-b8fd34c87093?w=400"
  },
  {
    id: 10,
    name: "Siberian Husky",
    nameJa: "シベリアンハスキー",
    origin: "ロシア",
    size: "large",
    description: "美しい青い目が特徴。寒さに強くそり犬として活躍。",
    image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400"
  },
  {
    id: 11,
    name: "Yorkshire Terrier",
    nameJa: "ヨークシャーテリア",
    origin: "イギリス",
    size: "small",
    description: "シルキーな被毛が美しい。活発で愛情深い。",
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=400"
  },
  {
    id: 12,
    name: "Bulldog",
    nameJa: "ブルドッグ",
    origin: "イギリス",
    size: "medium",
    description: "しわくちゃの顔が特徴。穏やかで忠実。",
    image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?w=400"
  },
  {
    id: 13,
    name: "Pomeranian",
    nameJa: "ポメラニアン",
    origin: "ドイツ",
    size: "small",
    description: "ふわふわの被毛が特徴。活発で好奇心旺盛。",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400"
  },
  {
    id: 14,
    name: "Border Collie",
    nameJa: "ボーダーコリー",
    origin: "イギリス",
    size: "medium",
    description: "最も賢い犬種の一つ。運動量が多く牧羊犬として有名。",
    image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=400"
  },
  {
    id: 15,
    name: "Akita",
    nameJa: "秋田犬",
    origin: "日本",
    size: "large",
    description: "忠犬ハチ公で有名。威厳があり忠実。",
    image: "https://images.unsplash.com/photo-1612536057832-2ff7ead58194?w=400"
  },
  {
    id: 16,
    name: "Maltese",
    nameJa: "マルチーズ",
    origin: "マルタ",
    size: "small",
    description: "純白の被毛が美しい。穏やかで甘えん坊。",
    image: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=400"
  },
  {
    id: 17,
    name: "Corgi",
    nameJa: "コーギー",
    origin: "イギリス",
    size: "small",
    description: "短い足と長い胴体が特徴。英国王室御用達。",
    image: "https://images.unsplash.com/photo-1612940960267-4549a58fb257?w=400"
  },
  {
    id: 18,
    name: "Doberman",
    nameJa: "ドーベルマン",
    origin: "ドイツ",
    size: "large",
    description: "スマートな体型と高い知性。優れた番犬。",
    image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400"
  },
  {
    id: 19,
    name: "Miniature Schnauzer",
    nameJa: "ミニチュアシュナウザー",
    origin: "ドイツ",
    size: "small",
    description: "特徴的なひげが印象的。活発で賢い。",
    image: "https://images.unsplash.com/photo-1599451897608-94d96f2e9e4e?w=400"
  },
  {
    id: 20,
    name: "Shih Tzu",
    nameJa: "シーズー",
    origin: "中国",
    size: "small",
    description: "ライオンのような被毛。愛情深く穏やか。",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400"
  }
];
