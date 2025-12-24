export interface DogBreed {
  id: number;
  name: string;
  nameJa: string;
  origin: string;
  size: 'small' | 'medium' | 'large';
  description: string;
  image: string;
  section: number; // 1: 初級, 2: 中級, 3: 上級
}

export const sections = [
  { id: 1, name: "初級", description: "人気の犬種10問" },
  { id: 2, name: "中級", description: "やや珍しい犬種10問" },
  { id: 3, name: "上級", description: "珍しい犬種10問" },
];

export const dogBreeds: DogBreed[] = [
  // セクション1: 初級（人気の犬種）
  {
    id: 1,
    name: "Shiba Inu",
    nameJa: "柴犬",
    origin: "日本",
    size: "medium",
    description: "日本原産の中型犬。忠実で独立心が強い。",
    image: "https://images.dog.ceo/breeds/shiba/shiba-2.jpg",
    section: 1
  },
  {
    id: 2,
    name: "Golden Retriever",
    nameJa: "ゴールデンレトリバー",
    origin: "イギリス",
    size: "large",
    description: "優しくフレンドリーな大型犬。家族向き。",
    image: "https://images.dog.ceo/breeds/retriever-golden/n02099601_215.jpg",
    section: 1
  },
  {
    id: 3,
    name: "Labrador Retriever",
    nameJa: "ラブラドールレトリバー",
    origin: "カナダ",
    size: "large",
    description: "賢くて訓練しやすい。盲導犬として活躍。",
    image: "https://images.dog.ceo/breeds/labrador/n02099712_5657.jpg",
    section: 1
  },
  {
    id: 4,
    name: "Poodle",
    nameJa: "プードル",
    origin: "フランス",
    size: "medium",
    description: "非常に賢く、抜け毛が少ない。様々なサイズがある。",
    image: "https://images.dog.ceo/breeds/poodle-standard/n02113799_5009.jpg",
    section: 1
  },
  {
    id: 5,
    name: "Chihuahua",
    nameJa: "チワワ",
    origin: "メキシコ",
    size: "small",
    description: "世界最小の犬種。勇敢で警戒心が強い。",
    image: "https://images.dog.ceo/breeds/chihuahua/n02085620_13383.jpg",
    section: 1
  },
  {
    id: 6,
    name: "French Bulldog",
    nameJa: "フレンチブルドッグ",
    origin: "フランス",
    size: "small",
    description: "コウモリのような耳が特徴。愛嬌があり人気。",
    image: "https://images.dog.ceo/breeds/bulldog-french/n02108915_5596.jpg",
    section: 1
  },
  {
    id: 7,
    name: "German Shepherd",
    nameJa: "ジャーマンシェパード",
    origin: "ドイツ",
    size: "large",
    description: "知性と忠誠心が高い。警察犬として有名。",
    image: "https://images.dog.ceo/breeds/german-shepherd/n02106662_16163.jpg",
    section: 1
  },
  {
    id: 8,
    name: "Beagle",
    nameJa: "ビーグル",
    origin: "イギリス",
    size: "medium",
    description: "嗅覚が優れた猟犬。好奇心旺盛で陽気。",
    image: "https://images.dog.ceo/breeds/beagle/n02088364_16689.jpg",
    section: 1
  },
  {
    id: 9,
    name: "Dachshund",
    nameJa: "ダックスフンド",
    origin: "ドイツ",
    size: "small",
    description: "胴長短足の愛らしい体型。活発で遊び好き。",
    image: "https://images.dog.ceo/breeds/dachshund/dachshund-123503_640.jpg",
    section: 1
  },
  {
    id: 10,
    name: "Siberian Husky",
    nameJa: "シベリアンハスキー",
    origin: "ロシア",
    size: "large",
    description: "美しい青い目が特徴。寒さに強くそり犬として活躍。",
    image: "https://images.dog.ceo/breeds/husky/n02110185_13704.jpg",
    section: 1
  },

  // セクション2: 中級（やや珍しい犬種）
  {
    id: 11,
    name: "Yorkshire Terrier",
    nameJa: "ヨークシャーテリア",
    origin: "イギリス",
    size: "small",
    description: "シルキーな被毛が美しい。活発で愛情深い。",
    image: "https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_745.jpg",
    section: 2
  },
  {
    id: 12,
    name: "Bulldog",
    nameJa: "ブルドッグ",
    origin: "イギリス",
    size: "medium",
    description: "しわくちゃの顔が特徴。穏やかで忠実。",
    image: "https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg",
    section: 2
  },
  {
    id: 13,
    name: "Pomeranian",
    nameJa: "ポメラニアン",
    origin: "ドイツ",
    size: "small",
    description: "ふわふわの被毛が特徴。活発で好奇心旺盛。",
    image: "https://images.dog.ceo/breeds/pomeranian/n02112018_1463.jpg",
    section: 2
  },
  {
    id: 14,
    name: "Border Collie",
    nameJa: "ボーダーコリー",
    origin: "イギリス",
    size: "medium",
    description: "最も賢い犬種の一つ。運動量が多く牧羊犬として有名。",
    image: "https://images.dog.ceo/breeds/collie-border/n02106166_549.jpg",
    section: 2
  },
  {
    id: 15,
    name: "Akita",
    nameJa: "秋田犬",
    origin: "日本",
    size: "large",
    description: "忠犬ハチ公で有名。威厳があり忠実。",
    image: "https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jpg",
    section: 2
  },
  {
    id: 16,
    name: "Maltese",
    nameJa: "マルチーズ",
    origin: "マルタ",
    size: "small",
    description: "純白の被毛が美しい。穏やかで甘えん坊。",
    image: "https://images.dog.ceo/breeds/maltese/n02085936_1556.jpg",
    section: 2
  },
  {
    id: 17,
    name: "Corgi",
    nameJa: "コーギー",
    origin: "イギリス",
    size: "small",
    description: "短い足と長い胴体が特徴。英国王室御用達。",
    image: "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_11073.jpg",
    section: 2
  },
  {
    id: 18,
    name: "Doberman",
    nameJa: "ドーベルマン",
    origin: "ドイツ",
    size: "large",
    description: "スマートな体型と高い知性。優れた番犬。",
    image: "https://images.dog.ceo/breeds/doberman/n02107142_14425.jpg",
    section: 2
  },
  {
    id: 19,
    name: "Boxer",
    nameJa: "ボクサー",
    origin: "ドイツ",
    size: "large",
    description: "筋肉質で活発。家族に忠実で子供と相性が良い。",
    image: "https://images.dog.ceo/breeds/boxer/n02108089_14460.jpg",
    section: 2
  },
  {
    id: 20,
    name: "Dalmatian",
    nameJa: "ダルメシアン",
    origin: "クロアチア",
    size: "large",
    description: "白地に黒の斑点が特徴。活発でエネルギッシュ。",
    image: "https://images.dog.ceo/breeds/dalmatian/cooper1.jpg",
    section: 2
  },

  // セクション3: 上級（珍しい犬種）
  {
    id: 21,
    name: "Shih Tzu",
    nameJa: "シーズー",
    origin: "中国",
    size: "small",
    description: "ライオンのような被毛。愛情深く穏やか。",
    image: "https://images.dog.ceo/breeds/shihtzu/n02086240_4751.jpg",
    section: 3
  },
  {
    id: 22,
    name: "Miniature Schnauzer",
    nameJa: "ミニチュアシュナウザー",
    origin: "ドイツ",
    size: "small",
    description: "特徴的なひげが印象的。活発で賢い。",
    image: "https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_4443.jpg",
    section: 3
  },
  {
    id: 23,
    name: "Great Dane",
    nameJa: "グレートデーン",
    origin: "ドイツ",
    size: "large",
    description: "世界最大級の犬種。穏やかで優しい巨人。",
    image: "https://images.dog.ceo/breeds/dane-great/n02109047_1672.jpg",
    section: 3
  },
  {
    id: 24,
    name: "Rottweiler",
    nameJa: "ロットワイラー",
    origin: "ドイツ",
    size: "large",
    description: "力強く忠実。優れた番犬として知られる。",
    image: "https://images.dog.ceo/breeds/rottweiler/n02106550_10602.jpg",
    section: 3
  },
  {
    id: 25,
    name: "Samoyed",
    nameJa: "サモエド",
    origin: "ロシア",
    size: "large",
    description: "真っ白なふわふわの被毛と笑顔が特徴。",
    image: "https://images.dog.ceo/breeds/samoyed/n02111889_4656.jpg",
    section: 3
  },
  {
    id: 26,
    name: "Sharpei",
    nameJa: "シャーペイ",
    origin: "中国",
    size: "medium",
    description: "深いしわが特徴的。独立心が強く忠実。",
    image: "https://images.dog.ceo/breeds/sharpei/noel.jpg",
    section: 3
  },
  {
    id: 27,
    name: "Basenji",
    nameJa: "バセンジー",
    origin: "コンゴ",
    size: "medium",
    description: "吠えない犬として有名。独立心が強い。",
    image: "https://images.dog.ceo/breeds/basenji/n02110806_4178.jpg",
    section: 3
  },
  {
    id: 28,
    name: "Weimaraner",
    nameJa: "ワイマラナー",
    origin: "ドイツ",
    size: "large",
    description: "銀灰色の美しい被毛。エネルギッシュで賢い。",
    image: "https://images.dog.ceo/breeds/weimaraner/n02092339_1037.jpg",
    section: 3
  },
  {
    id: 29,
    name: "Papillon",
    nameJa: "パピヨン",
    origin: "フランス",
    size: "small",
    description: "蝶のような大きな耳が特徴。活発で賢い。",
    image: "https://images.dog.ceo/breeds/papillon/n02086910_7457.jpg",
    section: 3
  },
  {
    id: 30,
    name: "Chow Chow",
    nameJa: "チャウチャウ",
    origin: "中国",
    size: "medium",
    description: "ライオンのようなたてがみと青い舌が特徴。",
    image: "https://images.dog.ceo/breeds/chow/n02112137_10389.jpg",
    section: 3
  }
];

export const getDogsBySection = (sectionId: number) => {
  return dogBreeds.filter(dog => dog.section === sectionId);
};
