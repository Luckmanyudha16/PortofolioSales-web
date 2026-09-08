export type Language = 'id' | 'en';

export interface ProductItem {
  id: string;
  category: 'custom' | 'pre-harvest' | 'harvest' | 'post-harvest' | 'modular';
  name: {
    id: string;
    en: string;
  };
  tagline: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  specs: {
    label: { id: string; en: string };
    value: string;
  }[];
  features: { id: string; en: string }[];
  image: string;
  badge?: { id: string; en: string };
}

export const PRODUCTS_DATA: ProductItem[] = [
  // CUSTOM ENGINEERING PLANTS
  {
    id: 'bensa',
    category: 'custom',
    name: {
      id: 'BENSA (Bensin Sawit)',
      en: 'BENSA (Palm Gasoline Biofuel Plant)',
    },
    tagline: {
      id: 'Pabrik Pengolahan Sawit Menjadi Bensin Nabati Berkualitas Tinggi',
      en: 'Advanced Catalytic Plant Converting Palm Oil into High-Octane Gasoline',
    },
    description: {
      id: 'Inovasi rekayasa proses katalitik yang mengubah minyak sawit mentah (CPO) dan turunannya menjadi bahan bakar bensin bernilai oktan tinggi. Dirancang untuk mendukung ketahanan dan kemandirian energi nasional secara berkelanjutan.',
      en: 'Proprietary catalytic process plant engineered to convert crude palm oil (CPO) and derivatives into high-octane drop-in biofuel gasoline, fostering sustainable energy self-reliance.',
    },
    specs: [
      { label: { id: 'Tipe Pabrik', en: 'Plant Type' }, value: 'Catalytic Cracking & Biofuel Refinery' },
      { label: { id: 'Bahan Baku', en: 'Feedstock' }, value: 'Crude Palm Oil (CPO) / Industrial Palm Oil' },
      { label: { id: 'Output Produk', en: 'Output Product' }, value: 'High Octane Gasoline / Bensin Biofuel' },
      { label: { id: 'Model Pengadaan', en: 'Procurement Model' }, value: 'Turnkey EPCC (Engineering, Procurement, Construction, Commissioning)' },
    ],
    features: [
      { id: 'Substitusi impor bahan bakar fosil', en: 'Import substitution for fossil fuels' },
      { id: 'Desain rekayasa mandiri ramah lingkungan', en: 'Proprietary eco-friendly process engineering' },
      { id: 'Dukungan EPCC lengkap dari hulu hingga siap produksi', en: 'Complete end-to-end EPCC turnkey delivery' }
    ],
    image: '/assets/products/custom_plants_showcase.png',
    badge: { id: 'Pionir Energi Terbarukan', en: 'Renewable Pioneer' }
  },
  {
    id: 'pamigo',
    category: 'custom',
    name: {
      id: 'PAMIGO (Pabrik Mini Minyak Goreng)',
      en: 'PAMIGO (Mini Palm Cooking Oil Plant)',
    },
    tagline: {
      id: 'Pabrik Mini Pengolahan Minyak Goreng Higienis Skala Komunitas',
      en: 'Compact Modular Palm Cooking Oil Processing Plant',
    },
    description: {
      id: 'Solusi pabrik mini terdesentralisasi untuk mengolah kelapa sawit langsung di dekat perkebunan rakyat menjadi minyak goreng bermutu tinggi. Mendorong kemandirian pangan lokal serta efisiensi rantai pasok.',
      en: 'Decentralized modular processing facility designed for regional farmer cooperatives and plantations to process fresh palm fruit directly into certified consumable cooking oil.',
    },
    specs: [
      { label: { id: 'Model Unit', en: 'Unit Model' }, value: 'Modular Mini Refinery Plant' },
      { label: { id: 'Kapasitas', en: 'Capacity' }, value: 'Dapat Disesuaikan (Custom Scalable)' },
      { label: { id: 'Integrasi', en: 'Integration' }, value: 'Sterilisasi, Pengepresan, Pemurnian (Refining) & Filtrasi' },
      { label: { id: 'Sertifikasi Mesin', en: 'Standards' }, value: 'SNI & Standar Higienis Pangan' },
    ],
    features: [
      { id: 'Mengurangi ketergantungan pada pabrik raksasa terpusat', en: 'Reduces reliance on centralized mega refineries' },
      { id: 'Efisien energi dan biaya investasi terjangkau', en: 'Energy-efficient with optimized capital expenditure' },
      { id: 'Turnkey installation dengan pelatihan operator', en: 'Turnkey installation with comprehensive operator training' }
    ],
    image: '/assets/products/custom_plants_showcase.png',
    badge: { id: 'Kemandirian Pangan', en: 'Food Security' }
  },
  {
    id: 'salt-washing',
    category: 'custom',
    name: {
      id: 'Salt Washing Plant (Pencucian Garam)',
      en: 'Industrial Salt Washing & Refining Plant',
    },
    tagline: {
      id: 'Pabrik Pemurnian & Pencucian Garam Industri dan Konsumsi',
      en: 'Industrial & Food-Grade Salt Purification and Refining Plant',
    },
    description: {
      id: 'Instalasi terpadu pembersihan, pencucian, pemisahan sentrifugal, dan pengeringan garam rakyat guna meningkatkan kemurnian NaCl memenuhi standar garam industri dan konsumsi nasional.',
      en: 'Integrated washing, centrifugal separation, crushing, and drying plant engineered to elevate domestic raw salt purity (NaCl) to meet strict industrial and food-grade standards.',
    },
    specs: [
      { label: { id: 'Proses', en: 'Process' }, value: 'Crushing, Hydro-Washing, Centrifuge, Drying' },
      { label: { id: 'Target Kemurnian', en: 'Purity Target' }, value: 'Tinggi (Memenuhi Kebutuhan Industri & Pangan)' },
      { label: { id: 'Material Konstruksi', en: 'Material' }, value: 'Stainless Steel Tahan Korosi Tinggi' },
      { label: { id: 'Otomasi', en: 'Automation' }, value: 'Sistem Kontrol PLC Terpusat' },
    ],
    features: [
      { id: 'Meningkatkan nilai jual garam petani lokal', en: 'Dramatically upgrades raw domestic salt market value' },
      { id: 'Konstruksi tahan korosi garam jangka panjang', en: 'Corrosion-resistant alloys for decades of durability' },
      { id: 'Sistem daur ulang air cuci efisien', en: 'Efficient wash-water recycling loop' }
    ],
    image: '/assets/products/custom_plants_showcase.png',
  },
  {
    id: 'seaweed-processing',
    category: 'custom',
    name: {
      id: 'Mesin Pengolahan Rumput Laut',
      en: 'Seaweed Processing Machine',
    },
    tagline: {
      id: 'Sistem Terpadu Pengolahan & Pengeringan Komoditas Rumput Laut',
      en: 'Integrated Seaweed Processing and Extraction System',
    },
    description: {
      id: 'Lini permesinan khusus untuk pencucian, perlakuan alkali, pengeringan higienis, dan penepungan rumput laut guna memenuhi standar ekspor bahan baku karaginan dan agar-agar.',
      en: 'Specialized industrial processing line for washing, alkali treatment, continuous drying, and grinding seaweed for export-grade carrageenan and agar extraction.',
    },
    specs: [
      { label: { id: 'Aplikasi', en: 'Application' }, value: 'Komoditas Rumput Laut (Eucheuma Cottonii, Gracilaria)' },
      { label: { id: 'Tahapan Mesin', en: 'Process Stages' }, value: 'Pencucian, Perendaman Kimia, Pengeringan, Penggilingan' },
      { label: { id: 'Efisiensi Termal', en: 'Thermal Efficiency' }, value: 'Tinggi dengan Pengendalian Suhu Presisi' },
    ],
    features: [
      { id: 'Mempertahankan mutu gel dan kadar air optimal', en: 'Preserves optimal gel strength and moisture control' },
      { id: 'Kapasitas industri skala menengah hingga besar', en: 'Scalable for medium to large-scale coastal processors' }
    ],
    image: '/assets/products/custom_plants_showcase.png',
  },
  {
    id: 'nitrogliserin',
    category: 'custom',
    name: {
      id: 'Mesin / Fasilitas Nitrogliserin',
      en: 'Nitroglycerin Synthesis Facility',
    },
    tagline: {
      id: 'Peralatan Rekayasa Khusus Kimia Berstandar Keamanan Tinggi',
      en: 'Specialized Chemical Reaction Equipment with Strict Safety Controls',
    },
    description: {
      id: 'Peralatan rekayasa presisi tinggi untuk sintesis dan pemrosesan bahan kimia khusus dengan protokol keselamatan ekstrem, instrumentasi otomatis, dan pemantauan termal kontinu.',
      en: 'High-precision engineering machinery tailored for specialized chemical synthesis operating under stringent safety standards, automated cooling, and continuous failsafe monitoring.',
    },
    specs: [
      { label: { id: 'Sektor', en: 'Industry Sector' }, value: 'Bahan Kimia Khusus & Industri Strategis' },
      { label: { id: 'Kontrol Termal', en: 'Thermal Control' }, value: 'Multi-Redundant Precision Cooling' },
      { label: { id: 'Tingkat Keamanan', en: 'Safety Standard' }, value: 'Protokol Industri Ekstrem' },
    ],
    features: [
      { id: 'Instrumentasi kontrol otomatis tanpa henti', en: 'Continuous multi-redundant PLC automation' },
      { id: 'Fabrikasi dengan toleransi presisi tinggi', en: 'Manufactured with high-precision fabrication tolerances' }
    ],
    image: '/assets/products/custom_plants_showcase.png',
  },
  {
    id: 'pertashop',
    category: 'custom',
    name: {
      id: 'Pertashop (SPBU Mini)',
      en: 'Pertashop (Certified Modular Mini Fuel Station)',
    },
    tagline: {
      id: 'Unit SPBU Modular Terintegrasi Berstandar Resmi',
      en: 'Certified Modular Fuel Dispensing Station for Regional Distribution',
    },
    description: {
      id: 'Unit SPBU modular bersertifikasi resmi yang dirancang dan difabrikasi presisi untuk menyalurkan BBM berkualitas hingga ke wilayah pelosok desa dan sentra pertanian.',
      en: 'Official certified modular fuel station manufactured with integrated storage tanks, certified dispensers, and automated safety systems to extend fuel supply to rural areas.',
    },
    specs: [
      { label: { id: 'Konstruksi', en: 'Construction' }, value: 'Modular Steel Frame & Underground / Aboveground Tank' },
      { label: { id: 'Sistem Dispenser', en: 'Dispenser System' }, value: 'Certified High-Accuracy Flow Meter' },
      { label: { id: 'Fitur Keamanan', en: 'Safety Feature' }, value: 'Sistem Pemadam Otomatis & Emergency Cut-off' },
    ],
    features: [
      { id: 'Pemasangan cepat dan siap operasional', en: 'Rapid on-site installation and immediate commissioning' },
      { id: 'Memenuhi standar sertifikasi keselamatan migas', en: 'Complies with rigorous national petroleum safety regulations' }
    ],
    image: '/assets/products/custom_plants_showcase.png',
  },

  // ALSINTAN PRA-PANEN (PRE-HARVEST)
  {
    id: 'traktor-tangan',
    category: 'pre-harvest',
    name: {
      id: 'Traktor Tangan INARI',
      en: 'INARI Hand Tractor (Walk-Behind)',
    },
    tagline: {
      id: 'Traktor Pengolah Lahan Tangguh untuk Lahan Basah dan Kering',
      en: 'Robust 2-Wheel Walk-Behind Tractor for Wet and Dry Soil Tillage',
    },
    description: {
      id: 'Traktor tangan tangguh bertenaga diesel 9 HP, dirancang ergonomis untuk membajak dan mengolah tanah sawah berlumpur maupun tegalan dengan efisiensi bahan bakar maksimal.',
      en: 'Durable 9 HP diesel-powered hand tractor ergonomically engineered for primary tillage, plowing, and harrowing in both waterlogged rice paddies and dry agricultural soils.',
    },
    specs: [
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Engine China Diesel (9 HP)' },
      { label: { id: 'Aplikasi', en: 'Application' }, value: 'Lahan Basah (Sawah) & Lahan Kering' },
      { label: { id: 'Transmisi', en: 'Transmission' }, value: 'Heavy-Duty Gear & Belt Drive' },
      { label: { id: 'Kelengkapan', en: 'Implements' }, value: 'Roda Besi, Roda Karet, Bajak Singkal, Gelebeg' },
    ],
    features: [
      { id: 'Konsumsi bahan bakar irit dan perawatan mudah', en: 'Fuel-efficient and easy to maintain with readily available parts' },
      { id: 'Konstruksi baja kokoh tahan beban berat di lumpur', en: 'Reinforced steel chassis built for deep paddy conditions' }
    ],
    image: '/assets/products/tractors_lineup.png',
  },
  {
    id: 'traktor-arbos-4wd',
    category: 'pre-harvest',
    name: {
      id: 'Traktor Roda 4 ARBOS',
      en: 'ARBOS 4-Wheel Tractor 4WD',
    },
    tagline: {
      id: 'Traktor 4 Roda 49 HP Bertenaga Yanmar 4TNV88 untuk Lahan Luas',
      en: 'Heavy-Duty 49 HP 4WD Tractor Powered by Yanmar 4TNV88 Engine',
    },
    description: {
      id: 'Traktor roda empat berdaya 49 HP ditenagai mesin Yanmar 4TNV88 berstandar Jepang. Memberikan traksi superior 4WD, manuver presisi, dan kenyamanan operator untuk persiapan lahan skala komersial.',
      en: 'High-performance 4-wheel 4WD agricultural tractor powered by the renowned Yanmar 4TNV88 (49 HP) diesel engine. Engineered for commercial farm tillage with superior traction and maneuverability.',
    },
    specs: [
      { label: { id: 'Mesin Penggerak', en: 'Engine Model' }, value: 'Yanmar 4TNV88 (49 HP, 4 Silinder Diesel)' },
      { label: { id: 'Sistem Penggerak', en: 'Drive System' }, value: '4 Wheel Drive (4WD)' },
      { label: { id: 'Kopling / PTO', en: 'Power Take-Off' }, value: 'Dual-Stage Clutch & Multi-Speed PTO' },
      { label: { id: 'Kategori Lahan', en: 'Field Suitability' }, value: 'Sawah Skala Menengah-Besar & Perkebunan' },
    ],
    features: [
      { id: 'Mesin Yanmar 4TNV88 dengan torsi tinggi dan umur pakai panjang', en: 'Yanmar 4TNV88 engine offering high torque and legendary longevity' },
      { id: 'Sistem hidrolik bertenaga untuk implement bajak rotary dan piringan', en: 'Heavy-duty hydraulic 3-point linkage for rotary and disc plows' }
    ],
    image: '/assets/products/tractors_detailed.jpg',
    badge: { id: 'Mesin Yanmar 49 HP', en: 'Yanmar 49 HP Engine' }
  },
  {
    id: 'traktor-crawler-trc101',
    category: 'pre-harvest',
    name: {
      id: 'Traktor Roda Crawler INARI TRC101',
      en: 'INARI TRC101 Rubber Crawler Tractor',
    },
    tagline: {
      id: 'Traktor Crawler 102 HP dengan Lebar Rotary 2.3 Meter untuk Lahan Ekstrem',
      en: '102 HP Heavy Crawler Tractor with 2.3m Rotary for Challenging Terrains',
    },
    description: {
      id: 'Traktor beroda rantai karet (crawler) berkekuatan 102 HP dengan rotary ekstra lebar 2.3 meter. Dirancang khusus untuk menaklukkan lahan sawah berlumpur dalam, rawa gambut, dan tanah lembek tanpa resiko terperosok.',
      en: 'Heavy-duty rubber track crawler tractor boasting 102 HP and a 2.3-meter wide rotary implement. Specifically engineered for deep mud rice fields, wetlands, and peat soils where wheeled tractors get stuck.',
    },
    specs: [
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Engine China High-Power Diesel (102 HP)' },
      { label: { id: 'Lebar Rotary', en: 'Rotary Width' }, value: '2.3 Meter' },
      { label: { id: 'Tipe Roda', en: 'Undercarriage' }, value: 'Continuous High-Tread Rubber Track (Crawler)' },
      { label: { id: 'Ground Pressure', en: 'Ground Pressure' }, value: 'Sangat Rendah (Anti Amblas di Lumpur Dalam)' },
    ],
    features: [
      { id: 'Lebar kerja 2.3 meter mempercepat olah tanah hingga 3x lipat', en: '2.3-meter working width triples land preparation throughput' },
      { id: 'Daya apung crawler tinggi untuk lahan basah ekstrem', en: 'High flotation crawler tracks guarantee zero sinking in deep silt' }
    ],
    image: '/assets/products/tractors_lineup.png',
    badge: { id: '102 HP - Lebar 2.3m', en: '102 HP - 2.3m Rotary' }
  },
  {
    id: 'pompa-3-honda',
    category: 'pre-harvest',
    name: {
      id: 'Pompa Air 3 Inch Inari (Engine Honda)',
      en: 'INARI 3-Inch Water Pump (Honda Engine)',
    },
    tagline: {
      id: 'Pompa Irigasi 3 Inch Bertenaga Engine Honda 6.5 HP',
      en: 'Reliable 3-Inch Agricultural Irrigation Pump Powered by Honda 6.5 HP',
    },
    description: {
      id: 'Pompa irigasi bervolume tinggi 3 inch yang digerakkan oleh mesin bensin Honda 6.5 HP teruji. Memberikan debit air melimpah untuk irigasi sawah dan pengurasan kolam.',
      en: 'High-discharge 3-inch agricultural water pump powered by a reliable Honda 6.5 HP engine, providing steady flow for field irrigation and water management.',
    },
    specs: [
      { label: { id: 'Diameter Pipa', en: 'Inlet/Outlet' }, value: '3 Inch (75 mm)' },
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Honda 6.5 HP Gasoline Engine' },
      { label: { id: 'Tipe Pompa', en: 'Pump Type' }, value: 'Centrifugal High-Flow Self-Priming' },
    ],
    features: [
      { id: 'Mesin Honda terbukti hemat bahan bakar dan mudah dihidupkan', en: 'Honda engine renowned for easy starting and low fuel consumption' },
      { id: 'Impeller besi cor tahan abrasi pasir dan lumpur', en: 'Abrasion-resistant cast iron impeller and casing' }
    ],
    image: '/assets/products/pre_harvest_equipment.png',
  },
  {
    id: 'pompa-3-kubota',
    category: 'pre-harvest',
    name: {
      id: 'Pompa Air 3 Inch Inari (Engine Kubota)',
      en: 'INARI 3-Inch Water Pump (Kubota Diesel Engine)',
    },
    tagline: {
      id: 'Pompa Irigasi 3 Inch Bertenaga Mesin Diesel Kubota 6.5 HP',
      en: 'Heavy-Duty 3-Inch Irrigation Pump with Kubota 6.5 HP Diesel Engine',
    },
    description: {
      id: 'Pompa air pertanian 3 inch bertenaga diesel Kubota 6.5 HP untuk operasional terus menerus (heavy-duty continuous pumping) dengan efisiensi solar tinggi.',
      en: 'Industrial-grade 3-inch irrigation pump powered by a Kubota 6.5 HP diesel engine, built for continuous non-stop operation and low running costs.',
    },
    specs: [
      { label: { id: 'Diameter Pipa', en: 'Inlet/Outlet' }, value: '3 Inch (75 mm)' },
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Kubota 6.5 HP Diesel Engine' },
      { label: { id: 'Bahan Bakar', en: 'Fuel' }, value: 'Solar / Biosolar' },
    ],
    features: [
      { id: 'Torsi mesin diesel Kubota stabil untuk jam kerja panjang', en: 'Consistent Kubota diesel torque for prolonged pumping cycles' },
      { id: 'Rangka pelindung baja tahan benturan', en: 'Rugged tubular protective steel cage' }
    ],
    image: '/assets/products/pumps_detailed.jpg',
  },
  {
    id: 'pompa-4-kubota',
    category: 'pre-harvest',
    name: {
      id: 'Pompa Air 4 Inch Inari (Engine Kubota)',
      en: 'INARI 4-Inch Water Pump (Kubota Diesel Engine)',
    },
    tagline: {
      id: 'Pompa Debit Besar 4 Inch Bertenaga Diesel Kubota 8.5 HP',
      en: 'High-Capacity 4-Inch Flood & Irrigation Pump with Kubota 8.5 HP Diesel',
    },
    description: {
      id: 'Pompa air berkapasitas ekstra besar 4 inch digerakkan oleh mesin diesel Kubota 8.5 HP. Sangat ideal untuk irigasi hamparan luas, pompanisasi banjir, dan suplai tambak.',
      en: 'High-capacity 4-inch agricultural pump equipped with a Kubota 8.5 HP diesel engine. Engineered for large-scale drainage, flood mitigation, and expansive canal irrigation.',
    },
    specs: [
      { label: { id: 'Diameter Pipa', en: 'Inlet/Outlet' }, value: '4 Inch (100 mm)' },
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Kubota 8.5 HP Diesel Engine' },
      { label: { id: 'Aplikasi', en: 'Application' }, value: 'Irigasi Skala Besar, Pengendali Banjir, Perikanan' },
    ],
    features: [
      { id: 'Debit air masif mempercepat pengairan lahan luas', en: 'Massive water throughput speeds up field flooding' },
      { id: 'Keandalan mesin Kubota 8.5 HP untuk operasional berat', en: 'Kubota 8.5 HP reliability under sustained peak load' }
    ],
    image: '/assets/products/pumps_detailed.jpg',
    badge: { id: 'Debit Besar 4 Inch', en: 'High Flow 4-Inch' }
  },
  {
    id: 'rice-transplanter',
    category: 'pre-harvest',
    name: {
      id: 'Rice Transplanter INARI',
      en: 'INARI Rice Transplanter',
    },
    tagline: {
      id: 'Mesin Penanam Padi Otomatis Bertenaga Yamaha 5.5 HP',
      en: 'Automated High-Speed Paddy Transplanter Powered by Yamaha 5.5 HP',
    },
    description: {
      id: 'Mesin penanam bibit padi presisi yang digerakkan oleh mesin Yamaha 5.5 HP. Memastikan jarak tanam seragam (metode jajar legowo), kerapatan optimal, dan menghemat waktu tanam hingga 80%.',
      en: 'Precision mechanized paddy transplanter powered by a Yamaha 5.5 HP engine. Ensures uniform plant spacing, consistent planting depth, and cuts planting labor by over 80%.',
    },
    specs: [
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Yamaha 5.5 HP Engine' },
      { label: { id: 'Sistem Tanam', en: 'Planting System' }, value: 'Rotary Precision Finger Transplanter' },
      { label: { id: 'Kerapatan Tanam', en: 'Planting Depth' }, value: 'Dapat Disesuaikan (Adjustable Row Spacing)' },
    ],
    features: [
      { id: 'Mempercepat penanaman bibit secara presisi dan seragam', en: 'Speeds up seedling planting with precision row alignment' },
      { id: 'Bobot ringan dengan distribusi beban seimbang di lumpur', en: 'Lightweight design prevents deep ruts in wet paddy mud' }
    ],
    image: '/assets/products/pre_harvest_equipment.png',
  },
  {
    id: 'handsprayer-electric',
    category: 'pre-harvest',
    name: {
      id: 'Handsprayer Electric INARI',
      en: 'INARI Electric Agricultural Handsprayer',
    },
    tagline: {
      id: 'Alat Semprot Hama & Pupuk Elektrik Bertekanan Konstan',
      en: 'Rechargeable Electric Sprayer with Constant Pressure Delivery',
    },
    description: {
      id: 'Alat semprot elektrik ergonomis dengan baterai isi ulang performa tinggi. Menghasilkan butiran kabut semprotan merata untuk pemupukan dan pengendalian hama tanpa perlu memompa manual.',
      en: 'Ergonomic backpack electric sprayer powered by a long-lasting rechargeable battery. Provides continuous constant misting pressure for pesticide and fertilizer application without manual pumping.',
    },
    specs: [
      { label: { id: 'Tipe Tenaga', en: 'Power Source' }, value: 'Electric Rechargeable Battery' },
      { label: { id: 'Nozzle', en: 'Nozzle Type' }, value: 'Multi-Pattern High-Atomization Brass/Polymer' },
      { label: { id: 'Bahan Tangki', en: 'Tank Material' }, value: 'UV-Resistant High-Density Polyethylene' },
    ],
    features: [
      { id: 'Tekanan semprot stabil dan tidak melelahkan operator', en: 'Zero fatigue with steady continuous spraying pressure' },
      { id: 'Baterai tahan lama untuk pemakaian seharian di sawah', en: 'Extended battery life for full-day field spraying' }
    ],
    image: '/assets/products/pre_harvest_equipment.png',
  },

  // ALSINTAN PANEN (HARVESTING)
  {
    id: 'power-thresher',
    category: 'harvest',
    name: {
      id: 'Power Thresher INARI',
      en: 'INARI Power Thresher',
    },
    tagline: {
      id: 'Mesin Perontok Padi & Palawija Bertenaga Kubota 8.5 HP',
      en: 'High-Efficiency Grain & Paddy Thresher Powered by Kubota 8.5 HP',
    },
    description: {
      id: 'Mesin perontok gabah dan biji-bijian bertenaga mesin Kubota 8.5 HP. Memisahkan gabah dari malai dengan cepat, menghasilkan gabah bersih dan meminimalkan susut panen (losses).',
      en: 'Mechanical grain and paddy thresher powered by an 8.5 HP Kubota diesel engine. Delivers rapid grain separation with minimal grain damage and near-zero post-harvest loss.',
    },
    specs: [
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Kubota 8.5 HP Diesel Engine' },
      { label: { id: 'Komoditas', en: 'Crops' }, value: 'Padi, Kedelai, Jagung, dan Palawija' },
      { label: { id: 'Tingkat Kebersihan', en: 'Cleaning System' }, value: 'Blower Pembersih Terintegrasi' },
    ],
    features: [
      { id: 'Tingkat susut panen sangat rendah (< 1%)', en: 'Extremely low threshing losses (< 1%)' },
      { id: 'Struktur rangka kokoh tahan getaran tinggi', en: 'Rigid vibration-damped structural steel frame' }
    ],
    image: '/assets/products/combine_harvesters.png',
  },
  {
    id: 'combine-rg118',
    category: 'harvest',
    name: {
      id: 'Combine Harvester Padi INARI RG118',
      en: 'INARI RG118 Paddy Combine Harvester',
    },
    tagline: {
      id: 'Mesin Pemanen Padi 100 HP Quanchai Dilengkapi Pencacah Jerami (Apo)',
      en: '100 HP Quanchai Paddy Combine Harvester with Integrated Straw Chopper',
    },
    description: {
      id: 'Combine harvester modern berkekuatan 100 HP dari mesin diesel Quanchai. Dilengkapi sistem pemotong, perontok, pembersih gabah, serta pencacah jerami otomatis (apo) yang langsung mengembalikan bahan organik ke tanah sawah.',
      en: 'Full-featured heavy paddy combine harvester powered by a Quanchai 100 HP diesel engine. Integrates precision cutting, threshing, cleaning, and an automatic straw chopper (apo) for immediate field mulching.',
    },
    specs: [
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Engine China Quanchai Diesel (100 HP)' },
      { label: { id: 'Fitur Unggulan', en: 'Key Feature' }, value: 'Plus Pencacah Jerami Otomatis (Apo Chopper)' },
      { label: { id: 'Tipe Roda', en: 'Tracks' }, value: 'High-Clearance Rubber Crawler' },
      { label: { id: 'Kapasitas Tampung', en: 'Grain Tank' }, value: 'High-Volume Hydraulic Unloading Grain Tank' },
    ],
    features: [
      { id: 'Pencacah jerami terintegrasi menghemat biaya olah tanah berikutnya', en: 'Integrated straw chopper eliminates field burning and enriches soil' },
      { id: 'Tenaga 100 HP tangguh untuk panen di lahan berlumpur tebal', en: '100 HP powertrain conquers deep mud harvest conditions without stalling' }
    ],
    image: '/assets/products/combine_harvesters.png',
    badge: { id: '100 HP + Pencacah Jerami', en: '100 HP + Straw Chopper' }
  },
  {
    id: 'combine-multy-guna',
    category: 'harvest',
    name: {
      id: 'Combine Harvester INARI Multy-Guna',
      en: 'INARI Multi-Purpose Combine Harvester',
    },
    tagline: {
      id: 'Mesin Pemanen Padi & Palawija Bertenaga Mesin Kubota V3800 (87 HP)',
      en: 'Versatile Multi-Crop Combine Harvester Powered by Kubota V3800 (87 HP)',
    },
    description: {
      id: 'Mesin panen multiguna bertenaga Kubota V3800 (87 HP) 4-silinder. Fleksibel untuk memanen padi dan aneka biji-bijian dengan performa stabil dan konsumsi bahan bakar teramat efisien.',
      en: 'Versatile multi-crop harvester powered by the renowned Kubota V3800 87 HP turbo-diesel engine. Engineered to harvest paddy, corn, and grain crops with Japanese reliability and low operating overhead.',
    },
    specs: [
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Kubota V3800 Diesel (87 HP, 4 Silinder)' },
      { label: { id: 'Tipe', en: 'Type' }, value: 'Multy-Guna (Multi-Crop Harvest System)' },
      { label: { id: 'Sistem Roda', en: 'Undercarriage' }, value: 'Wide Rubber Tracks with Mud Discharge Design' },
      { label: { id: 'Pengeringan Awal', en: 'Cleaning System' }, value: 'Multi-Stage Air Sieve Separator' },
    ],
    features: [
      { id: 'Mesin Kubota V3800 bertenaga besar dan terkenal awet', en: 'Kubota V3800 powertrain delivers unmatched durability' },
      { id: 'Mampu panen multi komoditas dengan penggantian saringan cepat', en: 'Quick concave adjustment enables multi-crop adaptability' }
    ],
    image: '/assets/products/combine_harvesters.png',
    badge: { id: 'Engine Kubota V3800', en: 'Kubota V3800 Engine' }
  },

  // ALSINTAN PASCA-PANEN (DRYERS & RICE MILLING UNITS)
  {
    id: 'bed-dryer-35',
    category: 'post-harvest',
    name: {
      id: 'Bed Dryer Automixing (3.5 Ton)',
      en: 'Bed Dryer Automixing (3.5 Ton Capacity)',
    },
    tagline: {
      id: 'Mesin Pengering Gabah Datar Otomatis Kapasitas 3.5 Ton Bertenaga Kubota 11 HP',
      en: 'Flat Bed Batch Grain Dryer with Automatic Stirring & Kubota 11 HP Engine',
    },
    description: {
      id: 'Mesin pengering gabah sistem bed datar dengan pengaduk otomatis (automixing auger). Menjamin pengeringan gabah merata tanpa gosong, digerakkan mesin diesel Kubota 11 HP.',
      en: 'Batch flat-bed grain dryer featuring an automated mixing auger system. Guarantees uniform moisture extraction without hot spots, powered by an 11 HP Kubota diesel engine.',
    },
    specs: [
      { label: { id: 'Kapasitas Pengeringan', en: 'Batch Capacity' }, value: '3.5 Ton Gabah / Batch' },
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Kubota 11 HP Diesel Engine' },
      { label: { id: 'Sistem Pengadukan', en: 'Mixing System' }, value: 'Automixing Auger Motorized Traversing' },
      { label: { id: 'Sumber Panas', en: 'Heat Source' }, value: 'Tungku Biomassa (Sekam) / Burner Solar' },
    ],
    features: [
      { id: 'Pengadukan otomatis memastikan kadar air seragam (14%)', en: 'Automated stirring ensures uniform 14% target grain moisture' },
      { id: 'Dapat memanfaatkan limbah sekam padi sebagai bahan bakar hemat', en: 'Utilizes rice husk biomass for near-zero fuel drying costs' }
    ],
    image: '/assets/products/dryers_lineup.png',
  },
  {
    id: 'vertical-dryer-6t',
    category: 'post-harvest',
    name: {
      id: 'Vertical Dryer 6 Ton',
      en: 'Vertical Recirculating Grain Dryer (6 Ton)',
    },
    tagline: {
      id: 'Pengering Gabah Vertikal Sirkulasi 6 Ton Bertenaga Yanmar 23 HP',
      en: '6-Ton Recirculating Vertical Grain Dryer Powered by Yanmar 23 HP',
    },
    description: {
      id: 'Tower pengering vertikal bersirkulasi kontinu berkapasitas 6 ton dengan mesin Yanmar 23 HP. Pengendalian suhu otomatis mencegah retak gabah (broken rice) dan memaksimalkan rendemen.',
      en: 'Continuous recirculating vertical grain drying tower with a 6-ton capacity powered by a Yanmar 23 HP diesel engine. Temperature sensors prevent thermal shock and preserve high milling yield.',
    },
    specs: [
      { label: { id: 'Kapasitas', en: 'Capacity' }, value: '6 Ton / Batch' },
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Yanmar 23 HP Diesel Engine' },
      { label: { id: 'Tipe Pengeringan', en: 'Drying Method' }, value: 'Continuous Recirculating Cross-Flow' },
      { label: { id: 'Sensor', en: 'Sensors' }, value: 'Digital Moisture & Temperature Sensors' },
    ],
    features: [
      { id: 'Mencegah gabah patah saat digiling dengan sirkulasi lambat terkontrol', en: 'Prevents broken rice by gently tempering grains during drying' },
      { id: 'Hemat tempat dengan konstruksi menara vertikal', en: 'Vertical footprint saves valuable warehouse space' }
    ],
    image: '/assets/products/dryers_lineup.png',
  },
  {
    id: 'vertical-dryer-10t',
    category: 'post-harvest',
    name: {
      id: 'Vertical Dryer 10 Ton',
      en: 'Vertical Recirculating Grain Dryer (10 Ton)',
    },
    tagline: {
      id: 'Pengering Gabah Vertikal 10 Ton Bertenaga Yanmar 30 HP',
      en: '10-Ton Industrial Vertical Grain Dryer with Yanmar 30 HP Diesel',
    },
    description: {
      id: 'Pengering vertikal berkapasitas 10 ton gabah per proses dengan mesin Yanmar 30 HP. Dirancang untuk sentra penggilingan padi menengah dan Koperasi Unit Desa (KUD).',
      en: 'Industrial 10-ton recirculating grain dryer powered by a Yanmar 30 HP diesel engine. Engineered for medium commercial rice mills and regional agricultural centers.',
    },
    specs: [
      { label: { id: 'Kapasitas', en: 'Capacity' }, value: '10 Ton / Batch' },
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Yanmar 30 HP Diesel Engine' },
      { label: { id: 'Sistem Sirkulasi', en: 'Elevator' }, value: 'Heavy Bucket Elevator With Rubber Belt' },
      { label: { id: 'Konsumsi Energi', en: 'Energy Efficiency' }, value: 'Tinggi dengan Burner Sekam / Solar Presisi' },
    ],
    features: [
      { id: 'Proses pengeringan 10 ton tuntas dalam 8-12 jam', en: 'Dries 10 tons of wet paddy to safe storage moisture in 8-12 hours' },
      { id: 'Dilengkapi elevator pengisi dan penguras otomatis', en: 'Automated loading and discharge bucket elevator integration' }
    ],
    image: '/assets/products/dryers_lineup.png',
  },
  {
    id: 'vertical-dryer-30t',
    category: 'post-harvest',
    name: {
      id: 'Vertical Dryer 30 Ton (Industrial Motor)',
      en: 'Vertical Grain Dryer 30 Ton (18 kW Industrial Electric Motor)',
    },
    tagline: {
      id: 'Pabrik Pengering Gabah Skala Industri 30 Ton Bertenaga Motor Listrik 18 kW',
      en: '30-Ton Industrial Scale Grain Drying Plant Driven by 18 kW Electric Motor',
    },
    description: {
      id: 'Instalasi pengeringan gabah skala besar 30 ton dengan sistem penggerak motor listrik 18 kW. Dirancang untuk pabrik penggilingan padi modern dan gudang sentra logistik pangan nasional.',
      en: 'Large-scale 30-ton industrial vertical grain drying installation powered by an 18 kW electric motor system. Engineered for high-throughput commercial rice processing complexes.',
    },
    specs: [
      { label: { id: 'Kapasitas', en: 'Capacity' }, value: '30 Ton / Batch' },
      { label: { id: 'Motor Penggerak', en: 'Drive Motor' }, value: 'Motor Listrik Industri 18 kW' },
      { label: { id: 'Struktur Menara', en: 'Tower Structure' }, value: 'Baja Galvanis Tahan Cuaca Berat' },
      { label: { id: 'Kontrol Otomasi', en: 'Control System' }, value: 'Panel Kontrol Otomasi Lengkap' },
    ],
    features: [
      { id: 'Kapasitas raksasa 30 ton untuk operasional pabrik penggilingan besar', en: 'Giant 30-ton capacity supports non-stop commercial milling lines' },
      { id: 'Penggerak listrik 18 kW berbiaya operasional rendah dan tenang', en: 'Quiet, low-emission 18 kW electric drive system' }
    ],
    image: '/assets/products/dryers_lineup.png',
    badge: { id: 'Kapasitas Industri 30 Ton', en: '30-Ton Industrial Scale' }
  },

  // RICE MILLING UNITS (RMU)
  {
    id: 'rmu-1-elevator',
    category: 'post-harvest',
    name: {
      id: 'Rice Milling Unit (RMU) 1 Elevator',
      en: 'Rice Milling Unit (RMU) 1 Elevator',
    },
    tagline: {
      id: 'Unit Penggilingan Padi Terpadu Mesin Diesel China 48 HP (1 Husker, 1 Separator, 2 Polisher)',
      en: 'Integrated Rice Milling Unit with 48 HP Diesel (1 Husker, 1 Separator, 2 Polishers)',
    },
    description: {
      id: 'Unit penggilingan padi terintegrasi bertenaga mesin diesel China 48 HP dengan 1 elevator vertikal. Terdiri dari 1 unit Husker pemecah kulit, 1 Separator pemisah gabah, dan 2 Polisher pemoles beras.',
      en: 'Integrated rice milling plant driven by a 48 HP diesel engine with 1 vertical bucket elevator. Includes 1 Husker, 1 Paddy Separator, and 2 Rice Polishers for clean white rice production.',
    },
    specs: [
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Diesel China 48 HP' },
      { label: { id: 'Konfigurasi Unit', en: 'Configuration' }, value: '1 Husker, 1 Separator, 2 Polisher' },
      { label: { id: 'Sistem Elevator', en: 'Elevator' }, value: '1 Bucket Elevator Terintegrasi' },
    ],
    features: [
      { id: 'Desain kompak menghemat ruang pabrik', en: 'Compact footprint maximizes mill workshop space' },
      { id: 'Dua kali pemolesan menghasilkan beras putih mengkilap', en: 'Dual polishing stages yield bright, translucent white rice' }
    ],
    image: '/assets/products/rmu_units.png',
  },
  {
    id: 'rmu-2-elevator',
    category: 'post-harvest',
    name: {
      id: 'Rice Milling Unit (RMU) 2 Elevator',
      en: 'Rice Milling Unit (RMU) 2 Elevator',
    },
    tagline: {
      id: 'Penggilingan Padi 2 Elevator Diesel Yanmar 45.5 HP Plus Mesin Grader Pemilah',
      en: '2-Elevator Rice Mill with Yanmar 45.5 HP Diesel Plus Rotary Grader',
    },
    description: {
      id: 'Unit penggilingan padi canggih dengan mesin Yanmar 45.5 HP dan 2 elevator. Dilengkapi 1 Husker, 1 Separator, 2 Polisher, serta 1 Grader pemilah beras kepala dan patah secara presisi.',
      en: 'Advanced rice milling setup powered by a Yanmar 45.5 HP diesel engine with 2 bucket elevators. Features 1 Husker, 1 Separator, 2 Polishers, and 1 Grader for grading head rice from broken grains.',
    },
    specs: [
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Diesel Yanmar 45.5 HP' },
      { label: { id: 'Konfigurasi Unit', en: 'Configuration' }, value: '1 Husker, 1 Separator, 2 Polisher, 1 Grader' },
      { label: { id: 'Sistem Elevator', en: 'Elevator' }, value: '2 Bucket Elevator' },
    ],
    features: [
      { id: 'Dilengkapi Grader untuk memisahkan beras kepala dan menir', en: 'Integrated Grader separates whole head rice from broken kernels' },
      { id: 'Mesin Yanmar 45.5 HP terkenal efisien bahan bakar dan tahan banting', en: 'Yanmar 45.5 HP powertrain renowned for unmatched reliability' }
    ],
    image: '/assets/products/rmu_units.png',
  },
  {
    id: 'rmu-3-elevator',
    category: 'post-harvest',
    name: {
      id: 'Rice Milling Unit (RMU) 3 Elevator',
      en: 'Rice Milling Unit (RMU) 3 Elevator',
    },
    tagline: {
      id: 'Penggilingan Padi 3 Elevator Yanmar 45.5 HP untuk Alur Kerja Kontinu Tanpa Sentuh',
      en: '3-Elevator Rice Mill with Yanmar 45.5 HP for Seamless Hands-Free Workflow',
    },
    description: {
      id: 'Lini penggilingan padi otomatis dengan 3 elevator vertikal dan mesin Yanmar 45.5 HP. Gabah mengalir kontinu dari pemecahan kulit, pemisahan, hingga pemolesan ganda tanpa penanganan manual.',
      en: 'Seamless continuous rice milling line featuring 3 vertical elevators and a Yanmar 45.5 HP engine. Automates grain flow from husking to separating and dual polishing with zero manual handling.',
    },
    specs: [
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Diesel Yanmar 45.5 HP' },
      { label: { id: 'Konfigurasi Unit', en: 'Configuration' }, value: '1 Husker, 1 Separator, 2 Polisher' },
      { label: { id: 'Sistem Elevator', en: 'Elevator' }, value: '3 Bucket Elevator' },
    ],
    features: [
      { id: '3 Elevator mandiri mencegah penumpukan dan hambatan aliran gabah', en: '3 dedicated elevators prevent grain bottlenecks and throughput delays' },
      { id: 'Efisiensi tenaga kerja tinggi dengan alur proses otomatis', en: 'High labor efficiency with streamlined continuous processing' }
    ],
    image: '/assets/products/rmu_units.png',
  },
  {
    id: 'rmu-premium',
    category: 'post-harvest',
    name: {
      id: 'Rice Milling Unit (RMU) PREMIUM',
      en: 'Rice Milling Unit (RMU) PREMIUM Industrial Line',
    },
    tagline: {
      id: 'Pabrik Penggilingan Beras Premium Lengkap dengan 9 Elevator, Color Sorter, Destoner & Kibi',
      en: 'Complete Industrial Rice Plant with 9 Elevators, Color Sorter, Destoner & Kibi Polisher',
    },
    description: {
      id: 'Instalasi pabrik penggilingan beras premium kelas industri tertinggi dari Pura Engineering. Dilengkapi 9 elevator, pembersih batu (Destoner), Color Sorter optik mutakhir, Poliser Kibi, Grader multi-tingkat, Polis Abrasive, dan Poliser Friksi untuk menghasilkan beras kristal premium standar ekspor.',
      en: 'Flagship industrial-grade automated rice milling complex engineered by Pura Engineering. Equipped with 9 heavy elevators, Destoner, optical Color Sorter, Kibi water polisher, multi-stage Grader, Abrasive polisher, and Friction polisher to produce crystal-grade export rice.',
    },
    specs: [
      { label: { id: 'Sistem Elevator', en: 'Elevator Network' }, value: '9 Heavy-Duty Vertical Bucket Elevators' },
      { label: { id: 'Komponen Pembersih', en: 'Cleaning System' }, value: 'Destoner (Pembersih Batu & Logam)' },
      { label: { id: 'Sistem Pemolesan', en: 'Polishing Stages' }, value: 'Polis Abrasive, Poliser Friksi, & Poliser Kibi' },
      { label: { id: 'Sistem Pemilah', en: 'Sorting & Grading' }, value: 'Optical Color Sorter & Rotary Grader' },
      { label: { id: 'Komponen Utama', en: 'Core Machinery' }, value: 'Husker & Gravity Paddy Separator' },
    ],
    features: [
      { id: 'Color Sorter optik menyingkirkan beras kuning, hitam, dan kotoran asing', en: 'Optical Color Sorter rejects discolored grains, chalky kernels, and foreign matter' },
      { id: 'Poliser Kibi menghasilkan kilau beras premium tanpa bahan kimia', en: 'Kibi polishing technology imparts crystal shine without chemical additives' },
      { id: 'Standar beras super premium untuk pasar modern dan ekspor', en: 'Produces export-grade premium table rice meeting strict national retail standards' }
    ],
    image: '/assets/products/rmu_premium_detailed.jpg',
    badge: { id: 'Flagship 9 Elevator + Color Sorter', en: 'Flagship 9 Elevators + Color Sorter' }
  },

  // RMU MODULAR STANDALONE UNITS
  {
    id: 'modular-husker',
    category: 'modular',
    name: {
      id: 'Husker Parsial (Pengupas Gabah)',
      en: 'Modular Grain Husker (Hull Separator)',
    },
    tagline: {
      id: 'Mesin Pemecah Kulit Gabah Kapasitas 1.5 Ton/Jam Bertenaga Yanmar 8.5 HP',
      en: '1.5 Ton/Hour Rubber Roll Husker Powered by Yanmar 8.5 HP Diesel',
    },
    description: {
      id: 'Unit pengupas kulit gabah mandiri berkecepatan tinggi dengan roll karet presisi. Memiliki kapasitas kupas 1.5 ton/jam ditenagai mesin Yanmar 8.5 HP dengan rasio pemecahan gabah di atas 90%.',
      en: 'High-speed standalone rubber roll husker unit with automatic feeding. Features a 1.5 tons/hour husking capacity powered by a Yanmar 8.5 HP diesel engine, achieving over 90% husking efficiency.',
    },
    specs: [
      { label: { id: 'Kapasitas', en: 'Capacity' }, value: '1.5 Ton / Jam' },
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Yanmar 8.5 HP Diesel Engine' },
      { label: { id: 'Tipe Roll', en: 'Roll Type' }, value: 'Precision Rubber Roller with Fast Cooling' },
    ],
    features: [
      { id: 'Kapasitas 1.5 ton/jam menjaga kelancaran alur produksi', en: '1.5 ton/hour throughput prevents upstream husking delays' },
      { id: 'Tingkat gabah patah sangat minimal', en: 'Gentle rubber roller pressure prevents grain breakage' }
    ],
    image: '/assets/products/rmu_modular.png',
  },
  {
    id: 'modular-polisher',
    category: 'modular',
    name: {
      id: 'Polisher Parsial (Pemoles Beras)',
      en: 'Modular Rice Polisher Unit',
    },
    tagline: {
      id: 'Mesin Pemoles Beras 1.1 Ton/Jam Bertenaga Mesin Yanmar 19 HP',
      en: '1.1 Ton/Hour Rice Polishing Unit Driven by Yanmar 19 HP Engine',
    },
    description: {
      id: 'Unit pemoles beras mandiri dengan kapasitas 1.1 ton/jam bertenaga Yanmar 19 HP. Menghilangkan lapisan bekatul secara sempurna untuk menghasilkan beras putih, bersih, dan beraroma segar.',
      en: 'High-efficiency rice polishing unit with a 1.1 ton/hour throughput powered by a Yanmar 19 HP engine. Effectively removes bran layers to produce shiny, clean white rice.',
    },
    specs: [
      { label: { id: 'Kapasitas', en: 'Capacity' }, value: '1.1 Ton / Jam' },
      { label: { id: 'Mesin Penggerak', en: 'Engine' }, value: 'Yanmar 19 HP Diesel Engine' },
      { label: { id: 'Sistem Pendingin', en: 'Cooling' }, value: 'Air-Suction Chamber Anti-Overheating' },
    ],
    features: [
      { id: 'Chamber pendingin mencegah beras panas saat proses pemolesan', en: 'Cooling air suction chamber prevents heat-induced grain chalkiness' },
      { id: 'Tingkat keputihan beras dapat diatur sesuai kebutuhan pasar', en: 'Adjustable milling degree satisfies varied consumer preferences' }
    ],
    image: '/assets/products/rmu_modular.png',
  },
  {
    id: 'modular-color-sorter',
    category: 'modular',
    name: {
      id: 'Color Sorter Parsial (Pemilah Warna Optik)',
      en: 'Modular Optical Color Sorter',
    },
    tagline: {
      id: 'Mesin Pemilah Optik Cerdas Kapasitas 2.2 Ton/Jam Motor Listrik 2.2 kW',
      en: '2.2 Ton/Hour Precision Optical Color Sorter with 2.2 kW Electric Drive',
    },
    description: {
      id: 'Mesin sortasi warna optik berkecepatan tinggi dengan sensor kamera ultra-presisi dan motor listrik 2.2 kW. Menolak butir beras berpenyakit, kuning, hitam, kapur, dan benda asing dengan hembusan katup udara cepat.',
      en: 'High-speed optical color sorter equipped with ultra-precision cameras and a 2.2 kW electric motor. Rejects yellow, black, chalky grains, and micro-contaminants with rapid pneumatic micro-ejectors.',
    },
    specs: [
      { label: { id: 'Kapasitas', en: 'Capacity' }, value: '2.2 Ton / Jam' },
      { label: { id: 'Motor Penggerak', en: 'Power' }, value: 'Motor Listrik 2.2 kW' },
      { label: { id: 'Sistem Deteksi', en: 'Optical System' }, value: 'Full-Spectrum High-Resolution CCD Cameras' },
      { label: { id: 'Ejektor', en: 'Ejection' }, value: 'High-Frequency Pneumatic Solenoid Micro-Valves' },
    ],
    features: [
      { id: 'Akurasi sortasi mencapai 99.9% menyingkirkan cacat beras', en: '99.9% sorting accuracy removes minute discoloration' },
      { id: 'Antarmuka layar sentuh intuitif memudahkan pergantian parameter', en: 'Intuitive touchscreen interface simplifies sorting parameter calibration' }
    ],
    image: '/assets/products/rmu_modular.png',
    badge: { id: 'Akurasi Optik 99.9%', en: '99.9% Optical Precision' }
  },
  {
    id: 'modular-auto-weighing',
    category: 'modular',
    name: {
      id: 'Auto Weighing & Packing (Penimbang Otomatis)',
      en: 'Automated Weighing & Packaging System',
    },
    tagline: {
      id: 'Sistem Penimbangan & Pengantongan Beras Kapasitas Silo 5 Ton Motor 6.4 HP',
      en: 'Automated Bagging System with 5-Ton Buffer Silo & 6.4 HP Electric Motor',
    },
    description: {
      id: 'Mesin penimbang dan pengemas beras otomatis dilengkapi tangki silo penyimpan berkapasitas 5 ton dan penggerak motor 6.4 HP. Memastikan takaran karung akurat dan mempercepat distribusi beras ke pasar.',
      en: 'Automated bagging and weighing system integrated with a 5-ton buffer storage silo and a 6.4 HP electric motor. Delivers precise digital batching and high-speed packaging into commercial bags.',
    },
    specs: [
      { label: { id: 'Kapasitas Silo', en: 'Silo Capacity' }, value: '5 Ton Gabah / Beras' },
      { label: { id: 'Motor Listrik', en: 'Drive Motor' }, value: 'Motor Listrik 6.4 HP' },
      { label: { id: 'Sistem Timbangan', en: 'Load Cell' }, value: 'Digital Precision Load Cell & Auto Seal' },
    ],
    features: [
      { id: 'Akurasi timbangan digital mengeliminasi selisih berat kemasan', en: 'Precision load cells eliminate bag weight discrepancies' },
      { id: 'Silo 5 ton menjaga pasokan beras kontinu ke jalur pengemasan', en: '5-ton storage buffer ensures continuous packaging line flow' }
    ],
    image: '/assets/products/rmu_modular.png',
  },
];
