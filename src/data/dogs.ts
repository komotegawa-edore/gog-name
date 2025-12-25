export interface DogBreed {
  id: number;
  name: string;
  nameJa: string;
  origin: string;
  size: 'small' | 'medium' | 'large';
  description: string;
  images: string[];
  section: number;
}

export const sections = [
  { id: 1, name: "セクション1", description: "人気の犬種10問" },
  { id: 2, name: "セクション2", description: "人気の犬種10問" },
  { id: 3, name: "セクション3", description: "人気の犬種10問" },
  { id: 4, name: "セクション4", description: "やや珍しい犬種10問" },
  { id: 5, name: "セクション5", description: "やや珍しい犬種10問" },
  { id: 6, name: "セクション6", description: "やや珍しい犬種10問" },
  { id: 7, name: "セクション7", description: "やや珍しい犬種10問" },
  { id: 8, name: "セクション8", description: "珍しい犬種9問" },
  { id: 9, name: "セクション9", description: "珍しい犬種9問" },
  { id: 10, name: "セクション10", description: "珍しい犬種9問" },
];

export const dogBreeds: DogBreed[] = [
  // セクション1: 初級 (人気犬種)
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
    name: "Pug",
    nameJa: "パグ",
    origin: "中国",
    size: "small",
    description: "愛嬌のある顔と巻き尾が特徴。陽気で人懐っこい。",
    images: [
      "https://images.dog.ceo/breeds/pug/Alf.jpg",
      "https://images.dog.ceo/breeds/pug/Alf2.jpg",
      "https://images.dog.ceo/breeds/pug/AlfMNS.jpg",
      "https://images.dog.ceo/breeds/pug/DSCF7495-2.jpg"
    ],
    section: 2
  },
  {
    id: 19,
    name: "Cocker Spaniel",
    nameJa: "コッカースパニエル",
    origin: "イギリス",
    size: "medium",
    description: "垂れ耳と美しい被毛。陽気で愛情深い。",
    images: [
      "https://images.dog.ceo/breeds/spaniel-cocker/IMG_20181013_113821_520.jpg",
      "https://images.dog.ceo/breeds/spaniel-cocker/IMG_20181206_172949~2.jpg",
      "https://images.dog.ceo/breeds/spaniel-cocker/IMG_20181221_161745_654.jpg",
      "https://images.dog.ceo/breeds/spaniel-cocker/IMG_20181224_115048_680.jpg"
    ],
    section: 2
  },
  {
    id: 20,
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
    section: 2
  },
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
    name: "Boston Terrier",
    nameJa: "ボストンテリア",
    origin: "アメリカ",
    size: "small",
    description: "タキシードのような模様。愛嬌があり賢い。",
    images: [
      "https://images.dog.ceo/breeds/bulldog-boston/20200710_175933.jpg",
      "https://images.dog.ceo/breeds/bulldog-boston/20200710_175944.jpg",
      "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10380.jpg",
      "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10452.jpg"
    ],
    section: 3
  },
  {
    id: 23,
    name: "Bichon Frise",
    nameJa: "ビションフリーゼ",
    origin: "フランス",
    size: "small",
    description: "白いふわふわの被毛。陽気で愛嬌がある。",
    images: [
      "https://images.dog.ceo/breeds/frise-bichon/1.jpg",
      "https://images.dog.ceo/breeds/frise-bichon/2.jpg",
      "https://images.dog.ceo/breeds/frise-bichon/3.jpg",
      "https://images.dog.ceo/breeds/frise-bichon/4.jpg"
    ],
    section: 3
  },
  {
    id: 24,
    name: "Havanese",
    nameJa: "ハバニーズ",
    origin: "キューバ",
    size: "small",
    description: "シルキーな長毛。社交的で愛情深い。",
    images: [
      "https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191030212452971_COVER.jpg",
      "https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191103202017556_COVER.jpg",
      "https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191112123933390_COVER.jpg",
      "https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191126134713895_COVER.jpg"
    ],
    section: 3
  },
  {
    id: 25,
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
    section: 3
  },
  {
    id: 26,
    name: "Dalmatian",
    nameJa: "ダルメシアン",
    origin: "クロアチア",
    size: "large",
    description: "白地に黒の斑点が特徴。活発でエネルギッシュ。",
    images: [
      "https://images.dog.ceo/breeds/dalmatian/cooper1.jpg",
      "https://images.dog.ceo/breeds/dalmatian/cooper2.jpg"
    ],
    section: 3
  },
  {
    id: 27,
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
    id: 28,
    name: "Australian Shepherd",
    nameJa: "オーストラリアンシェパード",
    origin: "アメリカ",
    size: "medium",
    description: "美しいマーブル模様の被毛。賢く活発。",
    images: [
      "https://images.dog.ceo/breeds/australian-shepherd/forest.jpg",
      "https://images.dog.ceo/breeds/australian-shepherd/leroy.jpg",
      "https://images.dog.ceo/breeds/australian-shepherd/pepper.jpg",
      "https://images.dog.ceo/breeds/australian-shepherd/pepper2.jpg"
    ],
    section: 3
  },
  {
    id: 29,
    name: "Miniature Pinscher",
    nameJa: "ミニチュアピンシャー",
    origin: "ドイツ",
    size: "small",
    description: "小さいながらも勇敢。活発で好奇心旺盛。",
    images: [
      "https://images.dog.ceo/breeds/pinscher-miniature/2013-08-23_21.38.32.jpg",
      "https://images.dog.ceo/breeds/pinscher-miniature/2013-08-23_21.40.16.jpg",
      "https://images.dog.ceo/breeds/pinscher-miniature/2015-06-01_17.27.57x.jpg",
      "https://images.dog.ceo/breeds/pinscher-miniature/2016-06-16_13.13.45x.jpg"
    ],
    section: 3
  },
  {
    id: 30,
    name: "Pembroke Welsh Corgi",
    nameJa: "ペンブローク",
    origin: "イギリス",
    size: "small",
    description: "コーギーの一種。エリザベス女王の愛犬として有名。",
    images: [
      "https://images.dog.ceo/breeds/pembroke/n02113023_10636.jpg",
      "https://images.dog.ceo/breeds/pembroke/n02113023_10829.jpg",
      "https://images.dog.ceo/breeds/pembroke/n02113023_11091.jpg",
      "https://images.dog.ceo/breeds/pembroke/n02113023_11103.jpg"
    ],
    section: 3
  },
  {
    id: 31,
    name: "Labradoodle",
    nameJa: "ラブラドゥードル",
    origin: "オーストラリア",
    size: "large",
    description: "ラブラドールとプードルの交配種。アレルギーに優しい。",
    images: [
      "https://images.dog.ceo/breeds/labradoodle/Cali.jpg",
      "https://images.dog.ceo/breeds/labradoodle/labradoodle-forrest.jpg",
      "https://images.dog.ceo/breeds/labradoodle/lola.jpg"
    ],
    section: 4
  },
  {
    id: 32,
    name: "St. Bernard",
    nameJa: "セントバーナード",
    origin: "スイス",
    size: "large",
    description: "アルプスの救助犬。穏やかで優しい巨人。",
    images: [
      "https://images.dog.ceo/breeds/stbernard/n02109525_10032.jpg",
      "https://images.dog.ceo/breeds/stbernard/n02109525_10063.jpg",
      "https://images.dog.ceo/breeds/stbernard/n02109525_10146.jpg",
      "https://images.dog.ceo/breeds/stbernard/n02109525_10215.jpg"
    ],
    section: 4
  },

  // セクション4
  {
    id: 33,
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
    section: 4
  },
  {
    id: 34,
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
    section: 4
  },
  {
    id: 35,
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
    section: 4
  },
  {
    id: 36,
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
    section: 4
  },
  {
    id: 37,
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
    section: 4
  },
  {
    id: 38,
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
    section: 4
  },
  {
    id: 39,
    name: "Basset Hound",
    nameJa: "バセットハウンド",
    origin: "フランス",
    size: "medium",
    description: "長い耳と短い足が特徴。嗅覚に優れる。",
    images: [
      "https://images.dog.ceo/breeds/hound-basset/n02088238_10005.jpg",
      "https://images.dog.ceo/breeds/hound-basset/n02088238_10013.jpg",
      "https://images.dog.ceo/breeds/hound-basset/n02088238_10028.jpg",
      "https://images.dog.ceo/breeds/hound-basset/n02088238_10051.jpg"
    ],
    section: 4
  },
  {
    id: 40,
    name: "Vizsla",
    nameJa: "ビズラ",
    origin: "ハンガリー",
    size: "medium",
    description: "金褐色の美しい被毛。優れた狩猟犬。",
    images: [
      "https://images.dog.ceo/breeds/vizsla/n02100583_10249.jpg",
      "https://images.dog.ceo/breeds/vizsla/n02100583_10358.jpg",
      "https://images.dog.ceo/breeds/vizsla/n02100583_10367.jpg",
      "https://images.dog.ceo/breeds/vizsla/n02100583_10425.jpg"
    ],
    section: 4
  },
  {
    id: 41,
    name: "Whippet",
    nameJa: "ウィペット",
    origin: "イギリス",
    size: "medium",
    description: "スリムで優雅な体型。非常に速く走る。",
    images: [
      "https://images.dog.ceo/breeds/whippet/n02091134_10107.jpg",
      "https://images.dog.ceo/breeds/whippet/n02091134_10219.jpg",
      "https://images.dog.ceo/breeds/whippet/n02091134_10242.jpg",
      "https://images.dog.ceo/breeds/whippet/n02091134_10395.jpg"
    ],
    section: 5
  },
  {
    id: 42,
    name: "Airedale Terrier",
    nameJa: "エアデールテリア",
    origin: "イギリス",
    size: "large",
    description: "テリア最大種。知的で勇敢。",
    images: [
      "https://images.dog.ceo/breeds/airedale/n02096051_1017.jpg",
      "https://images.dog.ceo/breeds/airedale/n02096051_1110.jpg",
      "https://images.dog.ceo/breeds/airedale/n02096051_1111.jpg",
      "https://images.dog.ceo/breeds/airedale/n02096051_1121.jpg"
    ],
    section: 5
  },
  {
    id: 43,
    name: "Irish Setter",
    nameJa: "アイリッシュセッター",
    origin: "アイルランド",
    size: "large",
    description: "美しい赤褐色の被毛。優雅で活発。",
    images: [
      "https://images.dog.ceo/breeds/setter-irish/duke.jpg",
      "https://images.dog.ceo/breeds/setter-irish/duke2.jpg",
      "https://images.dog.ceo/breeds/setter-irish/n02100877_1020.jpg",
      "https://images.dog.ceo/breeds/setter-irish/n02100877_1061.jpg"
    ],
    section: 5
  },
  {
    id: 44,
    name: "English Setter",
    nameJa: "イングリッシュセッター",
    origin: "イギリス",
    size: "large",
    description: "斑点模様の被毛が美しい。穏やかで友好的。",
    images: [
      "https://images.dog.ceo/breeds/setter-english/englishsetter-mabel.jpg",
      "https://images.dog.ceo/breeds/setter-english/n02100735_10030.jpg",
      "https://images.dog.ceo/breeds/setter-english/n02100735_10038.jpg",
      "https://images.dog.ceo/breeds/setter-english/n02100735_10064.jpg"
    ],
    section: 5
  },
  {
    id: 45,
    name: "German Pointer",
    nameJa: "ジャーマンポインター",
    origin: "ドイツ",
    size: "large",
    description: "優れた狩猟能力。活発でエネルギッシュ。",
    images: [
      "https://images.dog.ceo/breeds/pointer-german/GSP-Jake.jpg",
      "https://images.dog.ceo/breeds/pointer-german/n02100236_1054.jpg",
      "https://images.dog.ceo/breeds/pointer-german/n02100236_111.jpg",
      "https://images.dog.ceo/breeds/pointer-german/n02100236_1164.jpg"
    ],
    section: 5
  },
  {
    id: 46,
    name: "Brittany Spaniel",
    nameJa: "ブリタニースパニエル",
    origin: "フランス",
    size: "medium",
    description: "活発な狩猟犬。愛情深く訓練しやすい。",
    images: [
      "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_10017.jpg",
      "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_10107.jpg",
      "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_10348.jpg",
      "https://images.dog.ceo/breeds/spaniel-brittany/n02101388_10373.jpg"
    ],
    section: 5
  },
  {
    id: 47,
    name: "English Springer Spaniel",
    nameJa: "イングリッシュスプリンガースパニエル",
    origin: "イギリス",
    size: "medium",
    description: "活発で友好的。優れた狩猟犬。",
    images: [
      "https://images.dog.ceo/breeds/springer-english/n02100735_216.jpg",
      "https://images.dog.ceo/breeds/springer-english/n02102040_1055.jpg",
      "https://images.dog.ceo/breeds/springer-english/n02102040_1082.jpg",
      "https://images.dog.ceo/breeds/springer-english/n02102040_113.jpg"
    ],
    section: 5
  },
  {
    id: 48,
    name: "Alaskan Malamute",
    nameJa: "アラスカンマラミュート",
    origin: "アメリカ",
    size: "large",
    description: "そり犬の代表格。力強く忍耐力がある。",
    images: [
      "https://images.dog.ceo/breeds/malamute/n02110063_10025.jpg",
      "https://images.dog.ceo/breeds/malamute/n02110063_1034.jpg",
      "https://images.dog.ceo/breeds/malamute/n02110063_10567.jpg",
      "https://images.dog.ceo/breeds/malamute/n02110063_1058.jpg"
    ],
    section: 5
  },
  {
    id: 49,
    name: "Belgian Malinois",
    nameJa: "ベルジアンマリノア",
    origin: "ベルギー",
    size: "large",
    description: "軍用犬や警察犬として活躍。非常に賢い。",
    images: [
      "https://images.dog.ceo/breeds/malinois/n02105162_10076.jpg",
      "https://images.dog.ceo/breeds/malinois/n02105162_10133.jpg",
      "https://images.dog.ceo/breeds/malinois/n02105162_10260.jpg",
      "https://images.dog.ceo/breeds/malinois/n02105162_10309.jpg"
    ],
    section: 5
  },
  {
    id: 50,
    name: "Shetland Sheepdog",
    nameJa: "シェットランドシープドッグ",
    origin: "イギリス",
    size: "small",
    description: "ミニチュアコリーとも呼ばれる。賢く忠実。",
    images: [
      "https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_10095.jpg",
      "https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_1013.jpg",
      "https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_10608.jpg",
      "https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_10619.jpg"
    ],
    section: 5
  },
  {
    id: 51,
    name: "Old English Sheepdog",
    nameJa: "オールドイングリッシュシープドッグ",
    origin: "イギリス",
    size: "large",
    description: "もこもこの長毛が特徴。穏やかで愛情深い。",
    images: [
      "https://images.dog.ceo/breeds/sheepdog-english/Finnigan_Chair_sml.jpg",
      "https://images.dog.ceo/breeds/sheepdog-english/Finnigan_Old_English_Sheepdog_sml.jpg",
      "https://images.dog.ceo/breeds/sheepdog-english/n02105641_10048.jpg",
      "https://images.dog.ceo/breeds/sheepdog-english/n02105641_10051.jpg"
    ],
    section: 6
  },
  {
    id: 52,
    name: "Newfoundland",
    nameJa: "ニューファンドランド",
    origin: "カナダ",
    size: "large",
    description: "水難救助で有名。優しく忍耐強い。",
    images: [
      "https://images.dog.ceo/breeds/newfoundland/n02111277_10160.jpg",
      "https://images.dog.ceo/breeds/newfoundland/n02111277_1018.jpg",
      "https://images.dog.ceo/breeds/newfoundland/n02111277_1029.jpg",
      "https://images.dog.ceo/breeds/newfoundland/n02111277_10333.jpg"
    ],
    section: 6
  },
  {
    id: 53,
    name: "Great Pyrenees",
    nameJa: "グレートピレニーズ",
    origin: "フランス",
    size: "large",
    description: "白い巨大な被毛。優れた番犬で穏やか。",
    images: [
      "https://images.dog.ceo/breeds/pyrenees/beau1.jpg",
      "https://images.dog.ceo/breeds/pyrenees/maggie1.jpg",
      "https://images.dog.ceo/breeds/pyrenees/n02111500_1031.jpg",
      "https://images.dog.ceo/breeds/pyrenees/n02111500_109.jpg"
    ],
    section: 6
  },
  {
    id: 54,
    name: "Rhodesian Ridgeback",
    nameJa: "ローデシアンリッジバック",
    origin: "南アフリカ",
    size: "large",
    description: "背中の逆毛が特徴。ライオン狩り犬として有名。",
    images: [
      "https://images.dog.ceo/breeds/ridgeback-rhodesian/20190720_161000-01.jpg",
      "https://images.dog.ceo/breeds/ridgeback-rhodesian/20190721_203803.jpg",
      "https://images.dog.ceo/breeds/ridgeback-rhodesian/boaz-1.jpg",
      "https://images.dog.ceo/breeds/ridgeback-rhodesian/boaz-2.jpg"
    ],
    section: 6
  },
  {
    id: 55,
    name: "West Highland White Terrier",
    nameJa: "ウエストハイランドホワイトテリア",
    origin: "スコットランド",
    size: "small",
    description: "白い被毛が特徴的。活発で自信家。",
    images: [
      "https://images.dog.ceo/breeds/terrier-westhighland/0B8855BD-51DD-48DB-B39E-14510B379441.jpg",
      "https://images.dog.ceo/breeds/terrier-westhighland/4B3A04A2-E38F-4CD8-AE12-31F1F456DD05.jpg",
      "https://images.dog.ceo/breeds/terrier-westhighland/E1D28A98-83F7-445E-90CA-B5C1F1DDD09D.jpg",
      "https://images.dog.ceo/breeds/terrier-westhighland/E2E733F5-3C33-4482-BD4B-053AC6633D30.jpg"
    ],
    section: 6
  },
  {
    id: 56,
    name: "Scottish Terrier",
    nameJa: "スコティッシュテリア",
    origin: "スコットランド",
    size: "small",
    description: "独特の横顔とひげ。独立心が強い。",
    images: [
      "https://images.dog.ceo/breeds/terrier-scottish/n02097298_1007.jpg",
      "https://images.dog.ceo/breeds/terrier-scottish/n02097298_10676.jpg",
      "https://images.dog.ceo/breeds/terrier-scottish/n02097298_10965.jpg",
      "https://images.dog.ceo/breeds/terrier-scottish/n02097298_11702.jpg"
    ],
    section: 6
  },
  {
    id: 57,
    name: "Cairn Terrier",
    nameJa: "ケアーンテリア",
    origin: "スコットランド",
    size: "small",
    description: "オズの魔法使いのトトで有名。活発で勇敢。",
    images: [
      "https://images.dog.ceo/breeds/terrier-cairn/n02096177_1000.jpg",
      "https://images.dog.ceo/breeds/terrier-cairn/n02096177_10093.jpg",
      "https://images.dog.ceo/breeds/terrier-cairn/n02096177_10333.jpg",
      "https://images.dog.ceo/breeds/terrier-cairn/n02096177_10414.jpg"
    ],
    section: 6
  },
  {
    id: 58,
    name: "Irish Terrier",
    nameJa: "アイリッシュテリア",
    origin: "アイルランド",
    size: "medium",
    description: "赤褐色の被毛。勇敢で忠実。",
    images: [
      "https://images.dog.ceo/breeds/terrier-irish/n02093991_1026.jpg",
      "https://images.dog.ceo/breeds/terrier-irish/n02093991_1038.jpg",
      "https://images.dog.ceo/breeds/terrier-irish/n02093991_1105.jpg",
      "https://images.dog.ceo/breeds/terrier-irish/n02093991_114.jpg"
    ],
    section: 6
  },
  {
    id: 59,
    name: "Fox Terrier",
    nameJa: "フォックステリア",
    origin: "イギリス",
    size: "small",
    description: "キツネ狩りで活躍。活発で賢い。",
    images: [
      "https://images.dog.ceo/breeds/terrier-fox/n02095314_1033.jpg",
      "https://images.dog.ceo/breeds/terrier-fox/n02095314_1043.jpg",
      "https://images.dog.ceo/breeds/terrier-fox/n02095314_105.jpg",
      "https://images.dog.ceo/breeds/terrier-fox/n02095314_1054.jpg"
    ],
    section: 6
  },
  {
    id: 60,
    name: "Australian Terrier",
    nameJa: "オーストラリアンテリア",
    origin: "オーストラリア",
    size: "small",
    description: "小さくてタフ。忠実で勇敢。",
    images: [
      "https://images.dog.ceo/breeds/terrier-australian/FB_IMG_1596625396617.jpg",
      "https://images.dog.ceo/breeds/terrier-australian/n02096294_1121.jpg",
      "https://images.dog.ceo/breeds/terrier-australian/n02096294_1133.jpg",
      "https://images.dog.ceo/breeds/terrier-australian/n02096294_1147.jpg"
    ],
    section: 6
  },
  {
    id: 61,
    name: "Border Terrier",
    nameJa: "ボーダーテリア",
    origin: "イギリス",
    size: "small",
    description: "カワウソのような顔。愛情深く活発。",
    images: [
      "https://images.dog.ceo/breeds/terrier-border/n02093754_1062.jpg",
      "https://images.dog.ceo/breeds/terrier-border/n02093754_1102.jpg",
      "https://images.dog.ceo/breeds/terrier-border/n02093754_1111.jpg",
      "https://images.dog.ceo/breeds/terrier-border/n02093754_1148.jpg"
    ],
    section: 7
  },
  {
    id: 62,
    name: "Soft Coated Wheaten Terrier",
    nameJa: "ソフトコーテッドウィートンテリア",
    origin: "アイルランド",
    size: "medium",
    description: "柔らかい小麦色の被毛。陽気で愛情深い。",
    images: [
      "https://images.dog.ceo/breeds/terrier-wheaten/clementine.jpg",
      "https://images.dog.ceo/breeds/terrier-wheaten/n02098105_100.jpg",
      "https://images.dog.ceo/breeds/terrier-wheaten/n02098105_1009.jpg",
      "https://images.dog.ceo/breeds/terrier-wheaten/n02098105_1024.jpg"
    ],
    section: 7
  },
  {
    id: 63,
    name: "Australian Cattle Dog",
    nameJa: "オーストラリアンキャトルドッグ",
    origin: "オーストラリア",
    size: "medium",
    description: "牧牛犬として有名。知的でエネルギッシュ。",
    images: [
      "https://images.dog.ceo/breeds/cattledog-australian/IMG_0206.jpg",
      "https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg",
      "https://images.dog.ceo/breeds/cattledog-australian/IMG_1062.jpg",
      "https://images.dog.ceo/breeds/cattledog-australian/IMG_1211.jpg"
    ],
    section: 7
  },
  {
    id: 64,
    name: "Italian Greyhound",
    nameJa: "イタリアングレーハウンド",
    origin: "イタリア",
    size: "small",
    description: "小さくて優雅。愛情深く敏感。",
    images: [
      "https://images.dog.ceo/breeds/greyhound-italian/n02091032_10079.jpg",
      "https://images.dog.ceo/breeds/greyhound-italian/n02091032_1030.jpg",
      "https://images.dog.ceo/breeds/greyhound-italian/n02091032_10314.jpg",
      "https://images.dog.ceo/breeds/greyhound-italian/n02091032_1034.jpg"
    ],
    section: 7
  },

  // セクション7
  {
    id: 65,
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
    section: 7
  },
  {
    id: 66,
    name: "Sharpei",
    nameJa: "シャーペイ",
    origin: "中国",
    size: "medium",
    description: "深いしわが特徴的。独立心が強く忠実。",
    images: [
      "https://images.dog.ceo/breeds/sharpei/noel.jpg"
    ],
    section: 7
  },
  {
    id: 67,
    name: "Affenpinscher",
    nameJa: "アーフェンピンシャー",
    origin: "ドイツ",
    size: "small",
    description: "猿のような顔が特徴。活発で好奇心旺盛。",
    images: [
      "https://images.dog.ceo/breeds/affenpinscher/n02110627_10185.jpg",
      "https://images.dog.ceo/breeds/affenpinscher/n02110627_10437.jpg",
      "https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg",
      "https://images.dog.ceo/breeds/affenpinscher/n02110627_10680.jpg"
    ],
    section: 7
  },
  {
    id: 68,
    name: "Appenzeller",
    nameJa: "アッペンツェラー",
    origin: "スイス",
    size: "medium",
    description: "スイスの牧畜犬。活発で忠実。",
    images: [
      "https://images.dog.ceo/breeds/appenzeller/n02107908_1030.jpg",
      "https://images.dog.ceo/breeds/appenzeller/n02107908_1176.jpg",
      "https://images.dog.ceo/breeds/appenzeller/n02107908_1195.jpg",
      "https://images.dog.ceo/breeds/appenzeller/n02107908_1235.jpg"
    ],
    section: 7
  },
  {
    id: 69,
    name: "Borzoi",
    nameJa: "ボルゾイ",
    origin: "ロシア",
    size: "large",
    description: "優雅なロシアの狩猟犬。穏やかで高貴。",
    images: [
      "https://images.dog.ceo/breeds/borzoi/n02090622_10281.jpg",
      "https://images.dog.ceo/breeds/borzoi/n02090622_10302.jpg",
      "https://images.dog.ceo/breeds/borzoi/n02090622_10343.jpg",
      "https://images.dog.ceo/breeds/borzoi/n02090622_10492.jpg"
    ],
    section: 7
  },
  {
    id: 70,
    name: "Bouvier des Flandres",
    nameJa: "ブービエデフランダース",
    origin: "ベルギー",
    size: "large",
    description: "力強い牧畜犬。忠実で勇敢。",
    images: [
      "https://images.dog.ceo/breeds/bouvier/PXL_20220130_185250212.jpg",
      "https://images.dog.ceo/breeds/bouvier/n02106382_1000.jpg",
      "https://images.dog.ceo/breeds/bouvier/n02106382_1005.jpg",
      "https://images.dog.ceo/breeds/bouvier/n02106382_1016.jpg"
    ],
    section: 7
  },
  {
    id: 71,
    name: "Briard",
    nameJa: "ブリアード",
    origin: "フランス",
    size: "large",
    description: "長い被毛の牧羊犬。忠実で保護本能が強い。",
    images: [
      "https://images.dog.ceo/breeds/briard/n02105251_12.jpg",
      "https://images.dog.ceo/breeds/briard/n02105251_1201.jpg",
      "https://images.dog.ceo/breeds/briard/n02105251_1240.jpg",
      "https://images.dog.ceo/breeds/briard/n02105251_1382.jpg"
    ],
    section: 8
  },
  {
    id: 72,
    name: "Clumber Spaniel",
    nameJa: "クランバースパニエル",
    origin: "イギリス",
    size: "medium",
    description: "重量感のあるスパニエル。穏やかで忠実。",
    images: [
      "https://images.dog.ceo/breeds/clumber/n02101556_1018.jpg",
      "https://images.dog.ceo/breeds/clumber/n02101556_129.jpg",
      "https://images.dog.ceo/breeds/clumber/n02101556_1469.jpg",
      "https://images.dog.ceo/breeds/clumber/n02101556_1665.jpg"
    ],
    section: 8
  },
  {
    id: 73,
    name: "Coton de Tulear",
    nameJa: "コトンドテュレアール",
    origin: "マダガスカル",
    size: "small",
    description: "綿のような白い被毛。陽気で愛情深い。",
    images: [
      "https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg",
      "https://images.dog.ceo/breeds/cotondetulear/100_2397.jpg",
      "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
      "https://images.dog.ceo/breeds/cotondetulear/IMG_20160830_202631573.jpg"
    ],
    section: 8
  },
  {
    id: 74,
    name: "Scottish Deerhound",
    nameJa: "スコティッシュディアハウンド",
    origin: "スコットランド",
    size: "large",
    description: "鹿狩り用の大型犬。優雅で友好的。",
    images: [
      "https://images.dog.ceo/breeds/deerhound-scottish/n02092002_1029.jpg",
      "https://images.dog.ceo/breeds/deerhound-scottish/n02092002_10693.jpg",
      "https://images.dog.ceo/breeds/deerhound-scottish/n02092002_10699.jpg",
      "https://images.dog.ceo/breeds/deerhound-scottish/n02092002_109.jpg"
    ],
    section: 8
  },
  {
    id: 75,
    name: "Norwegian Elkhound",
    nameJa: "ノルウェジアンエルクハウンド",
    origin: "ノルウェー",
    size: "medium",
    description: "バイキングの犬。勇敢で忠実。",
    images: [
      "https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_1110.jpg",
      "https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_1144.jpg",
      "https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_1213.jpg",
      "https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_1330.jpg"
    ],
    section: 8
  },
  {
    id: 76,
    name: "Entlebucher",
    nameJa: "エントレブッハー",
    origin: "スイス",
    size: "medium",
    description: "スイス山岳犬の一種。活発で忠実。",
    images: [
      "https://images.dog.ceo/breeds/entlebucher/n02108000_1044.jpg",
      "https://images.dog.ceo/breeds/entlebucher/n02108000_1060.jpg",
      "https://images.dog.ceo/breeds/entlebucher/n02108000_1073.jpg",
      "https://images.dog.ceo/breeds/entlebucher/n02108000_1087.jpg"
    ],
    section: 8
  },
  {
    id: 77,
    name: "Afghan Hound",
    nameJa: "アフガンハウンド",
    origin: "アフガニスタン",
    size: "large",
    description: "優雅な長い被毛。独立心が強く高貴。",
    images: [
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_10715.jpg",
      "https://images.dog.ceo/breeds/hound-afghan/n02088094_10822.jpg"
    ],
    section: 8
  },
  {
    id: 78,
    name: "Bloodhound",
    nameJa: "ブラッドハウンド",
    origin: "ベルギー",
    size: "large",
    description: "最も優れた嗅覚を持つ。穏やかで粘り強い。",
    images: [
      "https://images.dog.ceo/breeds/hound-blood/n02088466_10083.jpg",
      "https://images.dog.ceo/breeds/hound-blood/n02088466_1015.jpg",
      "https://images.dog.ceo/breeds/hound-blood/n02088466_10309.jpg",
      "https://images.dog.ceo/breeds/hound-blood/n02088466_10331.jpg"
    ],
    section: 8
  },
  {
    id: 79,
    name: "Keeshond",
    nameJa: "キースホンド",
    origin: "オランダ",
    size: "medium",
    description: "ふわふわの被毛と眼鏡模様。陽気で友好的。",
    images: [
      "https://images.dog.ceo/breeds/keeshond/n02112350_10023.jpg",
      "https://images.dog.ceo/breeds/keeshond/n02112350_10079.jpg",
      "https://images.dog.ceo/breeds/keeshond/n02112350_10085.jpg",
      "https://images.dog.ceo/breeds/keeshond/n02112350_10100.jpg"
    ],
    section: 8
  },
  {
    id: 80,
    name: "Komondor",
    nameJa: "コモンドール",
    origin: "ハンガリー",
    size: "large",
    description: "モップのような被毛。優れた番犬。",
    images: [
      "https://images.dog.ceo/breeds/komondor/n02105505_1024.jpg",
      "https://images.dog.ceo/breeds/komondor/n02105505_1077.jpg",
      "https://images.dog.ceo/breeds/komondor/n02105505_1145.jpg",
      "https://images.dog.ceo/breeds/komondor/n02105505_1159.jpg"
    ],
    section: 9
  },
  {
    id: 81,
    name: "Kuvasz",
    nameJa: "クーバース",
    origin: "ハンガリー",
    size: "large",
    description: "白い大型犬。優れた番犬で忠実。",
    images: [
      "https://images.dog.ceo/breeds/kuvasz/n02104029_1075.jpg",
      "https://images.dog.ceo/breeds/kuvasz/n02104029_110.jpg",
      "https://images.dog.ceo/breeds/kuvasz/n02104029_1138.jpg",
      "https://images.dog.ceo/breeds/kuvasz/n02104029_1150.jpg"
    ],
    section: 9
  },
  {
    id: 82,
    name: "Leonberger",
    nameJa: "レオンベルガー",
    origin: "ドイツ",
    size: "large",
    description: "ライオンのような外見。穏やかで優しい巨人。",
    images: [
      "https://images.dog.ceo/breeds/leonberg/n02111129_1042.jpg",
      "https://images.dog.ceo/breeds/leonberg/n02111129_1111.jpg",
      "https://images.dog.ceo/breeds/leonberg/n02111129_1153.jpg",
      "https://images.dog.ceo/breeds/leonberg/n02111129_1181.jpg"
    ],
    section: 9
  },
  {
    id: 83,
    name: "Lhasa Apso",
    nameJa: "ラサアプソ",
    origin: "チベット",
    size: "small",
    description: "チベットの聖なる犬。警戒心が強く忠実。",
    images: [
      "https://images.dog.ceo/breeds/lhasa/Snapchat-1341079954.jpg",
      "https://images.dog.ceo/breeds/lhasa/n02098413_10144.jpg",
      "https://images.dog.ceo/breeds/lhasa/n02098413_10285.jpg",
      "https://images.dog.ceo/breeds/lhasa/n02098413_10590.jpg"
    ],
    section: 9
  },
  {
    id: 84,
    name: "Bull Mastiff",
    nameJa: "ブルマスティフ",
    origin: "イギリス",
    size: "large",
    description: "力強い番犬。忠実で勇敢。",
    images: [
      "https://images.dog.ceo/breeds/mastiff-bull/n02108422_1013.jpg",
      "https://images.dog.ceo/breeds/mastiff-bull/n02108422_1016.jpg",
      "https://images.dog.ceo/breeds/mastiff-bull/n02108422_1017.jpg",
      "https://images.dog.ceo/breeds/mastiff-bull/n02108422_1079.jpg"
    ],
    section: 9
  },
  {
    id: 85,
    name: "Tibetan Mastiff",
    nameJa: "チベタンマスティフ",
    origin: "チベット",
    size: "large",
    description: "古代の番犬。威厳があり独立心が強い。",
    images: [
      "https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_10182.jpg",
      "https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_1025.jpg",
      "https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_103.jpg",
      "https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_1091.jpg"
    ],
    section: 9
  },
  {
    id: 86,
    name: "Otterhound",
    nameJa: "オッターハウンド",
    origin: "イギリス",
    size: "large",
    description: "カワウソ狩り用の犬。友好的で活発。",
    images: [
      "https://images.dog.ceo/breeds/otterhound/n02091635_1043.jpg",
      "https://images.dog.ceo/breeds/otterhound/n02091635_1058.jpg",
      "https://images.dog.ceo/breeds/otterhound/n02091635_1083.jpg",
      "https://images.dog.ceo/breeds/otterhound/n02091635_1102.jpg"
    ],
    section: 9
  },
  {
    id: 87,
    name: "Pekingese",
    nameJa: "ペキニーズ",
    origin: "中国",
    size: "small",
    description: "中国皇帝の愛犬。気品があり独立心が強い。",
    images: [
      "https://images.dog.ceo/breeds/pekinese/n02086079_10059.jpg",
      "https://images.dog.ceo/breeds/pekinese/n02086079_10159.jpg",
      "https://images.dog.ceo/breeds/pekinese/n02086079_1020.jpg",
      "https://images.dog.ceo/breeds/pekinese/n02086079_10294.jpg"
    ],
    section: 9
  },
  {
    id: 88,
    name: "Redbone Coonhound",
    nameJa: "レッドボーンクーンハウンド",
    origin: "アメリカ",
    size: "large",
    description: "赤褐色の被毛が特徴。優れた狩猟犬。",
    images: [
      "https://images.dog.ceo/breeds/redbone/n02090379_1006.jpg",
      "https://images.dog.ceo/breeds/redbone/n02090379_1020.jpg",
      "https://images.dog.ceo/breeds/redbone/n02090379_1102.jpg",
      "https://images.dog.ceo/breeds/redbone/n02090379_1199.jpg"
    ],
    section: 9
  },
  {
    id: 89,
    name: "Flat-Coated Retriever",
    nameJa: "フラットコーテッドレトリバー",
    origin: "イギリス",
    size: "large",
    description: "陽気で愛情深い。優れた回収犬。",
    images: [
      "https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_1018.jpg",
      "https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_1069.jpg",
      "https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_1095.jpg",
      "https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_1142.jpg"
    ],
    section: 10
  },
  {
    id: 90,
    name: "Saluki",
    nameJa: "サルーキ",
    origin: "中東",
    size: "large",
    description: "古代の優雅な犬。独立心が強く速い。",
    images: [
      "https://images.dog.ceo/breeds/saluki/n02091831_10215.jpg",
      "https://images.dog.ceo/breeds/saluki/n02091831_1036.jpg",
      "https://images.dog.ceo/breeds/saluki/n02091831_10576.jpg",
      "https://images.dog.ceo/breeds/saluki/n02091831_10593.jpg"
    ],
    section: 10
  },
  {
    id: 91,
    name: "Schipperke",
    nameJa: "スキッパーキ",
    origin: "ベルギー",
    size: "small",
    description: "小さな黒い犬。好奇心旺盛で活発。",
    images: [
      "https://images.dog.ceo/breeds/schipperke/middy.jpg",
      "https://images.dog.ceo/breeds/schipperke/n02104365_10071.jpg",
      "https://images.dog.ceo/breeds/schipperke/n02104365_10139.jpg",
      "https://images.dog.ceo/breeds/schipperke/n02104365_10247.jpg"
    ],
    section: 10
  },
  {
    id: 92,
    name: "Giant Schnauzer",
    nameJa: "ジャイアントシュナウザー",
    origin: "ドイツ",
    size: "large",
    description: "シュナウザー最大種。知的で警戒心が強い。",
    images: [
      "https://images.dog.ceo/breeds/schnauzer-giant/n02097130_1032.jpg",
      "https://images.dog.ceo/breeds/schnauzer-giant/n02097130_1070.jpg",
      "https://images.dog.ceo/breeds/schnauzer-giant/n02097130_1119.jpg",
      "https://images.dog.ceo/breeds/schnauzer-giant/n02097130_1159.jpg"
    ],
    section: 10
  },
  {
    id: 93,
    name: "Gordon Setter",
    nameJa: "ゴードンセッター",
    origin: "スコットランド",
    size: "large",
    description: "黒と茶の被毛。忠実で優れた狩猟犬。",
    images: [
      "https://images.dog.ceo/breeds/setter-gordon/n02101006_1016.jpg",
      "https://images.dog.ceo/breeds/setter-gordon/n02101006_1059.jpg",
      "https://images.dog.ceo/breeds/setter-gordon/n02101006_1126.jpg",
      "https://images.dog.ceo/breeds/setter-gordon/n02101006_114.jpg"
    ],
    section: 10
  },
  {
    id: 94,
    name: "Irish Water Spaniel",
    nameJa: "アイリッシュウォータースパニエル",
    origin: "アイルランド",
    size: "large",
    description: "カールした被毛。水中での活動が得意。",
    images: [
      "https://images.dog.ceo/breeds/spaniel-irish/n02102973_1037.jpg",
      "https://images.dog.ceo/breeds/spaniel-irish/n02102973_1066.jpg",
      "https://images.dog.ceo/breeds/spaniel-irish/n02102973_1116.jpg",
      "https://images.dog.ceo/breeds/spaniel-irish/n02102973_1140.jpg"
    ],
    section: 10
  },
  {
    id: 95,
    name: "Kerry Blue Terrier",
    nameJa: "ケリーブルーテリア",
    origin: "アイルランド",
    size: "medium",
    description: "青灰色の被毛。多才で勇敢。",
    images: [
      "https://images.dog.ceo/breeds/terrier-kerryblue/n02093859_10.jpg",
      "https://images.dog.ceo/breeds/terrier-kerryblue/n02093859_1003.jpg",
      "https://images.dog.ceo/breeds/terrier-kerryblue/n02093859_1120.jpg",
      "https://images.dog.ceo/breeds/terrier-kerryblue/n02093859_1136.jpg"
    ],
    section: 10
  },
  {
    id: 96,
    name: "Norfolk Terrier",
    nameJa: "ノーフォークテリア",
    origin: "イギリス",
    size: "small",
    description: "垂れ耳が特徴。愛嬌があり活発。",
    images: [
      "https://images.dog.ceo/breeds/terrier-norfolk/20201118-norfolk.jpg",
      "https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1020.jpg",
      "https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1076.jpg",
      "https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1173.jpg"
    ],
    section: 10
  },
  {
    id: 97,
    name: "Irish Wolfhound",
    nameJa: "アイリッシュウルフハウンド",
    origin: "アイルランド",
    size: "large",
    description: "最も背が高い犬種。穏やかで優しい巨人。",
    images: [
      "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1002.jpg",
      "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1026.jpg",
      "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1041.jpg",
      "https://images.dog.ceo/breeds/wolfhound-irish/n02090721_1085.jpg"
    ],
    section: 10
  }
];

export const getDogsBySection = (sectionId: number) => {
  return dogBreeds.filter(dog => dog.section === sectionId);
};
