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
    image: "https://images.dog.ceo/breeds/shiba/shiba-2.jpg"
  },
  {
    id: 2,
    name: "Golden Retriever",
    nameJa: "ゴールデンレトリバー",
    origin: "イギリス",
    size: "large",
    description: "優しくフレンドリーな大型犬。家族向き。",
    image: "https://images.dog.ceo/breeds/retriever-golden/n02099601_215.jpg"
  },
  {
    id: 3,
    name: "Labrador Retriever",
    nameJa: "ラブラドールレトリバー",
    origin: "カナダ",
    size: "large",
    description: "賢くて訓練しやすい。盲導犬として活躍。",
    image: "https://images.dog.ceo/breeds/labrador/n02099712_5657.jpg"
  },
  {
    id: 4,
    name: "Poodle",
    nameJa: "プードル",
    origin: "フランス",
    size: "medium",
    description: "非常に賢く、抜け毛が少ない。様々なサイズがある。",
    image: "https://images.dog.ceo/breeds/poodle-standard/n02113799_5009.jpg"
  },
  {
    id: 5,
    name: "Chihuahua",
    nameJa: "チワワ",
    origin: "メキシコ",
    size: "small",
    description: "世界最小の犬種。勇敢で警戒心が強い。",
    image: "https://images.dog.ceo/breeds/chihuahua/n02085620_13383.jpg"
  },
  {
    id: 6,
    name: "French Bulldog",
    nameJa: "フレンチブルドッグ",
    origin: "フランス",
    size: "small",
    description: "コウモリのような耳が特徴。愛嬌があり人気。",
    image: "https://images.dog.ceo/breeds/bulldog-french/n02108915_5596.jpg"
  },
  {
    id: 7,
    name: "German Shepherd",
    nameJa: "ジャーマンシェパード",
    origin: "ドイツ",
    size: "large",
    description: "知性と忠誠心が高い。警察犬として有名。",
    image: "https://images.dog.ceo/breeds/german-shepherd/n02106662_16163.jpg"
  },
  {
    id: 8,
    name: "Beagle",
    nameJa: "ビーグル",
    origin: "イギリス",
    size: "medium",
    description: "嗅覚が優れた猟犬。好奇心旺盛で陽気。",
    image: "https://images.dog.ceo/breeds/beagle/n02088364_16689.jpg"
  },
  {
    id: 9,
    name: "Dachshund",
    nameJa: "ダックスフンド",
    origin: "ドイツ",
    size: "small",
    description: "胴長短足の愛らしい体型。活発で遊び好き。",
    image: "https://images.dog.ceo/breeds/dachshund/dachshund-123503_640.jpg"
  },
  {
    id: 10,
    name: "Siberian Husky",
    nameJa: "シベリアンハスキー",
    origin: "ロシア",
    size: "large",
    description: "美しい青い目が特徴。寒さに強くそり犬として活躍。",
    image: "https://images.dog.ceo/breeds/husky/n02110185_13704.jpg"
  },
  {
    id: 11,
    name: "Yorkshire Terrier",
    nameJa: "ヨークシャーテリア",
    origin: "イギリス",
    size: "small",
    description: "シルキーな被毛が美しい。活発で愛情深い。",
    image: "https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_745.jpg"
  },
  {
    id: 12,
    name: "Bulldog",
    nameJa: "ブルドッグ",
    origin: "イギリス",
    size: "medium",
    description: "しわくちゃの顔が特徴。穏やかで忠実。",
    image: "https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg"
  },
  {
    id: 13,
    name: "Pomeranian",
    nameJa: "ポメラニアン",
    origin: "ドイツ",
    size: "small",
    description: "ふわふわの被毛が特徴。活発で好奇心旺盛。",
    image: "https://images.dog.ceo/breeds/pomeranian/n02112018_1463.jpg"
  },
  {
    id: 14,
    name: "Border Collie",
    nameJa: "ボーダーコリー",
    origin: "イギリス",
    size: "medium",
    description: "最も賢い犬種の一つ。運動量が多く牧羊犬として有名。",
    image: "https://images.dog.ceo/breeds/collie-border/n02106166_549.jpg"
  },
  {
    id: 15,
    name: "Akita",
    nameJa: "秋田犬",
    origin: "日本",
    size: "large",
    description: "忠犬ハチ公で有名。威厳があり忠実。",
    image: "https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jpg"
  },
  {
    id: 16,
    name: "Maltese",
    nameJa: "マルチーズ",
    origin: "マルタ",
    size: "small",
    description: "純白の被毛が美しい。穏やかで甘えん坊。",
    image: "https://images.dog.ceo/breeds/maltese/n02085936_1556.jpg"
  },
  {
    id: 17,
    name: "Corgi",
    nameJa: "コーギー",
    origin: "イギリス",
    size: "small",
    description: "短い足と長い胴体が特徴。英国王室御用達。",
    image: "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_11073.jpg"
  },
  {
    id: 18,
    name: "Doberman",
    nameJa: "ドーベルマン",
    origin: "ドイツ",
    size: "large",
    description: "スマートな体型と高い知性。優れた番犬。",
    image: "https://images.dog.ceo/breeds/doberman/n02107142_14425.jpg"
  },
  {
    id: 19,
    name: "Miniature Schnauzer",
    nameJa: "ミニチュアシュナウザー",
    origin: "ドイツ",
    size: "small",
    description: "特徴的なひげが印象的。活発で賢い。",
    image: "https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_4443.jpg"
  },
  {
    id: 20,
    name: "Shih Tzu",
    nameJa: "シーズー",
    origin: "中国",
    size: "small",
    description: "ライオンのような被毛。愛情深く穏やか。",
    image: "https://images.dog.ceo/breeds/shihtzu/n02086240_4751.jpg"
  }
];
