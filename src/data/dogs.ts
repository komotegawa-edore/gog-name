export interface DogBreed {
  id: number;
  name: string;
  nameJa: string;
  origin: string;
  size: 'small' | 'medium' | 'large';
  description: string;
  images: string[]; // 複数画像
  section: number;
}

export const sections = [
  { id: 1, name: "初級", description: "人気の犬種10問" },
  { id: 2, name: "中級", description: "やや珍しい犬種10問" },
  { id: 3, name: "上級", description: "珍しい犬種10問" },
];

export const dogBreeds: DogBreed[] = [
  // セクション1: 初級
  {
    id: 1,
    name: "Shiba Inu",
    nameJa: "柴犬",
    origin: "日本",
    size: "medium",
    description: "日本原産の中型犬。忠実で独立心が強い。",
    images: [
      "https://images.dog.ceo/breeds/shiba/kurosuke01.jpg",
      "https://images.dog.ceo/breeds/shiba/mamehiko01.jpg",
      "https://images.dog.ceo/breeds/shiba/mamehiko02.jpg",
      "https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
    ],
    section: 1
  },
  {
    id: 2,
    name: "Golden Retriever",
    nameJa: "ゴールデンレトリバー",
    origin: "イギリス",
    size: "large",
    description: "優しくフレンドリーな大型犬。家族向き。",
    images: [
      "https://images.dog.ceo/breeds/retriever-golden/20200731_180910_200731.jpg",
      "https://images.dog.ceo/breeds/retriever-golden/20200801_174527_200801.jpg",
      "https://images.dog.ceo/breeds/retriever-golden/20200814_113907_200814.jpg",
      "https://images.dog.ceo/breeds/retriever-golden/20200814_163629_200814.jpg"
    ],
    section: 1
  },
  {
    id: 3,
    name: "Labrador Retriever",
    nameJa: "ラブラドールレトリバー",
    origin: "カナダ",
    size: "large",
    description: "賢くて訓練しやすい。盲導犬として活躍。",
    images: [
      "https://images.dog.ceo/breeds/labrador/Fury_01.jpg",
      "https://images.dog.ceo/breeds/labrador/Fury_02.jpg",
      "https://images.dog.ceo/breeds/labrador/IMG_2397.jpg",
      "https://images.dog.ceo/breeds/labrador/IMG_2752.jpg"
    ],
    section: 1
  },
  {
    id: 4,
    name: "Poodle",
    nameJa: "プードル",
    origin: "フランス",
    size: "medium",
    description: "非常に賢く、抜け毛が少ない。様々なサイズがある。",
    images: [
      "https://images.dog.ceo/breeds/poodle-standard/n02113799_1057.jpg",
      "https://images.dog.ceo/breeds/poodle-standard/n02113799_1121.jpg",
      "https://images.dog.ceo/breeds/poodle-standard/n02113799_1140.jpg",
      "https://images.dog.ceo/breeds/poodle-standard/n02113799_1144.jpg"
    ],
    section: 1
  },
  {
    id: 5,
    name: "Chihuahua",
    nameJa: "チワワ",
    origin: "メキシコ",
    size: "small",
    description: "世界最小の犬種。勇敢で警戒心が強い。",
    images: [
      "https://images.dog.ceo/breeds/chihuahua/Judy.jpg",
      "https://images.dog.ceo/breeds/chihuahua/Luna.jpg",
      "https://images.dog.ceo/breeds/chihuahua/black_chihuahua.jpg",
      "https://images.dog.ceo/breeds/chihuahua/flora.jpg"
    ],
    section: 1
  },
  {
    id: 6,
    name: "French Bulldog",
    nameJa: "フレンチブルドッグ",
    origin: "フランス",
    size: "small",
    description: "コウモリのような耳が特徴。愛嬌があり人気。",
    images: [
      "https://images.dog.ceo/breeds/bulldog-french/IMG_0846.jpg",
      "https://images.dog.ceo/breeds/bulldog-french/IMG_1657.jpg",
      "https://images.dog.ceo/breeds/bulldog-french/hunghung.jpg",
      "https://images.dog.ceo/breeds/bulldog-french/n02108915_10204.jpg"
    ],
    section: 1
  },
  {
    id: 7,
    name: "German Shepherd",
    nameJa: "ジャーマンシェパード",
    origin: "ドイツ",
    size: "large",
    description: "知性と忠誠心が高い。警察犬として有名。",
    images: [
      "https://images.dog.ceo/breeds/german-shepherd/Bagira_site.jpg",
      "https://images.dog.ceo/breeds/german-shepherd/Hannah.jpg",
      "https://images.dog.ceo/breeds/german-shepherd/IMG_20200801_005825_408.jpg",
      "https://images.dog.ceo/breeds/german-shepherd/IMG_20200801_005827_704.jpg"
    ],
    section: 1
  },
  {
    id: 8,
    name: "Beagle",
    nameJa: "ビーグル",
    origin: "イギリス",
    size: "medium",
    description: "嗅覚が優れた猟犬。好奇心旺盛で陽気。",
    images: [
      "https://images.dog.ceo/breeds/beagle/01-12Brady.jpg.jpg",
      "https://images.dog.ceo/breeds/beagle/1271553739_Milo.jpg",
      "https://images.dog.ceo/breeds/beagle/1374053345_Milo.jpg",
      "https://images.dog.ceo/breeds/beagle/166407056_Milo.jpg"
    ],
    section: 1
  },
  {
    id: 9,
    name: "Dachshund",
    nameJa: "ダックスフンド",
    origin: "ドイツ",
    size: "small",
    description: "胴長短足の愛らしい体型。活発で遊び好き。",
    images: [
      "https://images.dog.ceo/breeds/dachshund/Daschund-2.jpg",
      "https://images.dog.ceo/breeds/dachshund/Daschund_Wirehair.jpg",
      "https://images.dog.ceo/breeds/dachshund/Dash_Dachshund_With_Hat.jpg",
      "https://images.dog.ceo/breeds/dachshund/Miniature_Daschund.jpg"
    ],
    section: 1
  },
  {
    id: 10,
    name: "Siberian Husky",
    nameJa: "シベリアンハスキー",
    origin: "ロシア",
    size: "large",
    description: "美しい青い目が特徴。寒さに強くそり犬として活躍。",
    images: [
      "https://images.dog.ceo/breeds/husky/20180901_150234.jpg",
      "https://images.dog.ceo/breeds/husky/20180904_185604.jpg",
      "https://images.dog.ceo/breeds/husky/20180924_193829.jpg",
      "https://images.dog.ceo/breeds/husky/20250113_192336.jpg"
    ],
    section: 1
  },

  // セクション2: 中級
  {
    id: 11,
    name: "Yorkshire Terrier",
    nameJa: "ヨークシャーテリア",
    origin: "イギリス",
    size: "small",
    description: "シルキーな被毛が美しい。活発で愛情深い。",
    images: [
      "https://images.dog.ceo/breeds/terrier-yorkshire/20200319_143121.jpg",
      "https://images.dog.ceo/breeds/terrier-yorkshire/20200319_143130.jpg",
      "https://images.dog.ceo/breeds/terrier-yorkshire/IMG_3001.jpg",
      "https://images.dog.ceo/breeds/terrier-yorkshire/ema.jpg"
    ],
    section: 2
  },
  {
    id: 12,
    name: "Bulldog",
    nameJa: "ブルドッグ",
    origin: "イギリス",
    size: "medium",
    description: "しわくちゃの顔が特徴。穏やかで忠実。",
    images: [
      "https://images.dog.ceo/breeds/bulldog-english/bunz.jpg",
      "https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg",
      "https://images.dog.ceo/breeds/bulldog-english/jager-2.jpg",
      "https://images.dog.ceo/breeds/bulldog-english/mami.jpg"
    ],
    section: 2
  },
  {
    id: 13,
    name: "Pomeranian",
    nameJa: "ポメラニアン",
    origin: "ドイツ",
    size: "small",
    description: "ふわふわの被毛が特徴。活発で好奇心旺盛。",
    images: [
      "https://images.dog.ceo/breeds/pomeranian/Rockette_2025.jpg",
      "https://images.dog.ceo/breeds/pomeranian/n02112018_10129.jpg",
      "https://images.dog.ceo/breeds/pomeranian/n02112018_10158.jpg",
      "https://images.dog.ceo/breeds/pomeranian/n02112018_10174.jpg"
    ],
    section: 2
  },
  {
    id: 14,
    name: "Border Collie",
    nameJa: "ボーダーコリー",
    origin: "イギリス",
    size: "medium",
    description: "最も賢い犬種の一つ。運動量が多く牧羊犬として有名。",
    images: [
      "https://images.dog.ceo/breeds/collie-border/Jake.jpg",
      "https://images.dog.ceo/breeds/collie-border/Zoe.jpg",
      "https://images.dog.ceo/breeds/collie-border/brodie.jpg",
      "https://images.dog.ceo/breeds/collie-border/caesar.jpg"
    ],
    section: 2
  },
  {
    id: 15,
    name: "Akita",
    nameJa: "秋田犬",
    origin: "日本",
    size: "large",
    description: "忠犬ハチ公で有名。威厳があり忠実。",
    images: [
      "https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg",
      "https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg",
      "https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jpg",
      "https://images.dog.ceo/breeds/akita/Akita_hiking_in_Shpella_e_Pellumbasit.jpg"
    ],
    section: 2
  },
  {
    id: 16,
    name: "Maltese",
    nameJa: "マルチーズ",
    origin: "マルタ",
    size: "small",
    description: "純白の被毛が美しい。穏やかで甘えん坊。",
    images: [
      "https://images.dog.ceo/breeds/maltese/n02085936_10073.jpg",
      "https://images.dog.ceo/breeds/maltese/n02085936_10130.jpg",
      "https://images.dog.ceo/breeds/maltese/n02085936_10148.jpg",
      "https://images.dog.ceo/breeds/maltese/n02085936_10197.jpg"
    ],
    section: 2
  },
  {
    id: 17,
    name: "Corgi",
    nameJa: "コーギー",
    origin: "イギリス",
    size: "small",
    description: "短い足と長い胴体が特徴。英国王室御用達。",
    images: [
      "https://images.dog.ceo/breeds/corgi-cardigan/miss-muffin.jpg",
      "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10077.jpg",
      "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_1016.jpg",
      "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_1030.jpg"
    ],
    section: 2
  },
  {
    id: 18,
    name: "Doberman",
    nameJa: "ドーベルマン",
    origin: "ドイツ",
    size: "large",
    description: "スマートな体型と高い知性。優れた番犬。",
    images: [
      "https://images.dog.ceo/breeds/doberman/IMG-20160324-WA0018.jpg",
      "https://images.dog.ceo/breeds/doberman/doberman.jpg",
      "https://images.dog.ceo/breeds/doberman/n02107142_10009.jpg",
      "https://images.dog.ceo/breeds/doberman/n02107142_10036.jpg"
    ],
    section: 2
  },
  {
    id: 19,
    name: "Boxer",
    nameJa: "ボクサー",
    origin: "ドイツ",
    size: "large",
    description: "筋肉質で活発。家族に忠実で子供と相性が良い。",
    images: [
      "https://images.dog.ceo/breeds/boxer/28082007167-min.jpg",
      "https://images.dog.ceo/breeds/boxer/IMG_0002.jpg",
      "https://images.dog.ceo/breeds/boxer/IMG_3394.jpg",
      "https://images.dog.ceo/breeds/boxer/n02108089_1.jpg"
    ],
    section: 2
  },
  {
    id: 20,
    name: "Dalmatian",
    nameJa: "ダルメシアン",
    origin: "クロアチア",
    size: "large",
    description: "白地に黒の斑点が特徴。活発でエネルギッシュ。",
    images: [
      "https://images.dog.ceo/breeds/dalmatian/cooper1.jpg",
      "https://images.dog.ceo/breeds/dalmatian/cooper2.jpg"
    ],
    section: 2
  },

  // セクション3: 上級
  {
    id: 21,
    name: "Shih Tzu",
    nameJa: "シーズー",
    origin: "中国",
    size: "small",
    description: "ライオンのような被毛。愛情深く穏やか。",
    images: [
      "https://images.dog.ceo/breeds/shihtzu/Rudy_Small.jpg",
      "https://images.dog.ceo/breeds/shihtzu/n02086240_1011.jpg",
      "https://images.dog.ceo/breeds/shihtzu/n02086240_1016.jpg",
      "https://images.dog.ceo/breeds/shihtzu/n02086240_1059.jpg"
    ],
    section: 3
  },
  {
    id: 22,
    name: "Miniature Schnauzer",
    nameJa: "ミニチュアシュナウザー",
    origin: "ドイツ",
    size: "small",
    description: "特徴的なひげが印象的。活発で賢い。",
    images: [
      "https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_1028.jpg",
      "https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_1093.jpg",
      "https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_1115.jpg",
      "https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_1260.jpg"
    ],
    section: 3
  },
  {
    id: 23,
    name: "Great Dane",
    nameJa: "グレートデーン",
    origin: "ドイツ",
    size: "large",
    description: "世界最大級の犬種。穏やかで優しい巨人。",
    images: [
      "https://images.dog.ceo/breeds/dane-great/dane-0.jpg",
      "https://images.dog.ceo/breeds/dane-great/dane-1.jpg",
      "https://images.dog.ceo/breeds/dane-great/dane-2.jpg",
      "https://images.dog.ceo/breeds/dane-great/dane-3.jpg"
    ],
    section: 3
  },
  {
    id: 24,
    name: "Rottweiler",
    nameJa: "ロットワイラー",
    origin: "ドイツ",
    size: "large",
    description: "力強く忠実。優れた番犬として知られる。",
    images: [
      "https://images.dog.ceo/breeds/rottweiler/n02106550_10048.jpg",
      "https://images.dog.ceo/breeds/rottweiler/n02106550_10222.jpg",
      "https://images.dog.ceo/breeds/rottweiler/n02106550_1033.jpg",
      "https://images.dog.ceo/breeds/rottweiler/n02106550_10375.jpg"
    ],
    section: 3
  },
  {
    id: 25,
    name: "Samoyed",
    nameJa: "サモエド",
    origin: "ロシア",
    size: "large",
    description: "真っ白なふわふわの被毛と笑顔が特徴。",
    images: [
      "https://images.dog.ceo/breeds/samoyed/Ollie_Samoyed.jpg",
      "https://images.dog.ceo/breeds/samoyed/n02111889_1.jpg",
      "https://images.dog.ceo/breeds/samoyed/n02111889_10059.jpg",
      "https://images.dog.ceo/breeds/samoyed/n02111889_10084.jpg"
    ],
    section: 3
  },
  {
    id: 26,
    name: "Sharpei",
    nameJa: "シャーペイ",
    origin: "中国",
    size: "medium",
    description: "深いしわが特徴的。独立心が強く忠実。",
    images: [
      "https://images.dog.ceo/breeds/sharpei/noel.jpg"
    ],
    section: 3
  },
  {
    id: 27,
    name: "Basenji",
    nameJa: "バセンジー",
    origin: "コンゴ",
    size: "medium",
    description: "吠えない犬として有名。独立心が強い。",
    images: [
      "https://images.dog.ceo/breeds/basenji/n02110806_1013.jpg",
      "https://images.dog.ceo/breeds/basenji/n02110806_1033.jpg",
      "https://images.dog.ceo/breeds/basenji/n02110806_1035.jpg",
      "https://images.dog.ceo/breeds/basenji/n02110806_1100.jpg"
    ],
    section: 3
  },
  {
    id: 28,
    name: "Weimaraner",
    nameJa: "ワイマラナー",
    origin: "ドイツ",
    size: "large",
    description: "銀灰色の美しい被毛。エネルギッシュで賢い。",
    images: [
      "https://images.dog.ceo/breeds/weimaraner/n02092339_1013.jpg",
      "https://images.dog.ceo/breeds/weimaraner/n02092339_107.jpg",
      "https://images.dog.ceo/breeds/weimaraner/n02092339_110.jpg",
      "https://images.dog.ceo/breeds/weimaraner/n02092339_1100.jpg"
    ],
    section: 3
  },
  {
    id: 29,
    name: "Papillon",
    nameJa: "パピヨン",
    origin: "フランス",
    size: "small",
    description: "蝶のような大きな耳が特徴。活発で賢い。",
    images: [
      "https://images.dog.ceo/breeds/papillon/n02086910_10147.jpg",
      "https://images.dog.ceo/breeds/papillon/n02086910_10204.jpg",
      "https://images.dog.ceo/breeds/papillon/n02086910_103.jpg",
      "https://images.dog.ceo/breeds/papillon/n02086910_1048.jpg"
    ],
    section: 3
  },
  {
    id: 30,
    name: "Chow Chow",
    nameJa: "チャウチャウ",
    origin: "中国",
    size: "medium",
    description: "ライオンのようなたてがみと青い舌が特徴。",
    images: [
      "https://images.dog.ceo/breeds/chow/modi2.jpg",
      "https://images.dog.ceo/breeds/chow/n02112137_1005.jpg",
      "https://images.dog.ceo/breeds/chow/n02112137_10134.jpg",
      "https://images.dog.ceo/breeds/chow/n02112137_1015.jpg"
    ],
    section: 3
  }
];

export const getDogsBySection = (sectionId: number) => {
  return dogBreeds.filter(dog => dog.section === sectionId);
};
