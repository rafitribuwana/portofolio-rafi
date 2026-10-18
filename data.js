/* ---------------- DATA ---------------- */
// Certificates Data
const certificates = {
  'hcie-opengauss': {
    title: 'HCIE-openGauss V1.0 Course',
    issuer: 'Huawei ICT Academy',
    date: '2026',
    description: 'Menguasai konsep manajemen transaksi, mekanisme penguncian (lock mechanism), mesin SQL (SQL engine), manajemen penyimpanan, serta optimasi dan pemecahan masalah (troubleshooting) database.',
    credentialUrl: '#',
    imageUrl: '#'
  },
  'overview-ai': {
    title: 'Overview of AI',
    issuer: 'Huawei ICT Academy',
    date: '2026',
    description: 'Memahami konsep dasar kecerdasan buatan, tren perkembangan teknologi AI, dan implementasi dasarnya dalam industri teknologi.',
    credentialUrl: '#',
    imageUrl: '#'
  },
  'ai-ready-asean': {
    title: 'AI Ready ASEAN: AI Learning Modules',
    issuer: 'ASEAN Foundation & Google.org',
    date: '2026',
    description: 'Memahami mengenai fondasi Generative AI, AI Prompts, etika penggunaan AI, privasi data, serta dasar-dasar pengembangan alat bantu berbasis AI (AI-based tools).',
    credentialUrl: '#',
    imageUrl: '#'
  },
   'internship-cert': {
    title: 'Sertifikat Penyelesaian Magang',
    issuer: 'Telkom Access Pekalongan',
    date: '2026',
    description: 'Sertifikat penyelesaian program magang 1 bulan di Telkom Access Pekalongan sebagai Backend Developer.',
    credentialUrl: '#',
    imageUrl: '#'
  }
};

const projects = [
  {
    id: 'smartwater',
    title: 'SmartWater IoT System',
    tagline: 'Monitoring kualitas air pabrik berbasis IoT',
    short: 'Sistem IoT untuk memantau kualitas air pabrik secara real-time dengan alert otomatis saat parameter tidak normal.',
    status: 'progress', statusLabel: 'Dalam pengerjaan  · Competition',
    role: 'Backend Engineer', duration: '2 bulan', date: '2026',
    tags: ['Golang', 'MQTT', 'Python', 'PostgreSQL'],
    colors: ['#0f5c4a', '#0d1220'], initial: 'S',
    image: '', // Contoh: 'assets/smartwater.jpg'
    overview: 'Proyek tim untuk membantu pabrik memantau parameter kualitas air secara berkelanjutan menggunakan sensor IoT dan protokol komunikasi ringan.',
    problem: 'Pabrik memerlukan cara untuk mendeteksi anomali kualitas air secara cepat, karena pengecekan manual berkala tidak cukup responsif.',
    solution: 'Sensor mengirim data lewat protokol MQTT ke backend Golang untuk ingestion data, lalu dianalisis dengan Python untuk mendeteksi anomali dan memicu alert otomatis.',
    results: ['Deteksi anomali kualitas air secara real-time', 'Alert otomatis mengurangi waktu respons tim lapangan', 'Riwayat data tersimpan untuk analisis tren'],
    learnings: ['Bekerja dengan protokol IoT (MQTT) dari nol', 'Desain sistem yang tahan terhadap koneksi sensor yang tidak stabil'],
    github: '#', demo: '#'
  },
  {
    id: 'kpi-dashboard',
    title: 'KPI Dashboard Telkom',
    tagline: 'Dashboard monitoring KPI regional real-time',
    short: 'Dashboard real-time untuk memonitor 5+ metrik KPI Branch Regional, menggantikan proses manual berbasis spreadsheet.',
    status: 'done', statusLabel: 'Selesai · Magang',
    role: 'Backend Developer', duration: '1 bulan', date: '2026',
    tags: ['Node.Js', 'Express.Js', 'React', 'MySQL'],
    colors: ['#1c3d78', '#0d1220'], initial: 'K',
    image: 'assets/projek/TelkomKPI.png',
    overview: 'Dashboard internal untuk tim operasional Telkom regional, dibangun agar data performa bisa dipantau real-time tanpa perlu menyusun laporan manual setiap minggunya.',
    problem: 'Tim regional memantau 5+ metrik KPI lewat spreadsheet yang diperbarui manual, proses ini memakan waktu ±2 jam per laporan dan rawan salah input.',
    solution: 'Membangun REST API dengan Node.Js untuk agregasi data, disajikan lewat dashboard React dengan visualisasi grafik dan fitur ekspor/impor Excel.',
    results: ['Waktu pelaporan turun dari 2 jam menjadi 15 menit', 'Menghilangkan human error pada input manual', 'Mempercepat pengambilan keputusan tim regional'],
    learnings: ['Menangani query pada dataset besar secara efisien', 'Praktik terbaik desain dashboard untuk pengguna non-teknis'],
    github: 'https://github.com/vitonaryama/Telkom-KPI', demo: 'https://telkom-kpi.vercel.app/'
  },
  {
    id: 'hotel-reservation',
    title: 'Hotel Ambarukmo – Sistem Reservasi Hotel',
    tagline: 'Sistem pemesanan kamar terintegrasi pembayaran',
    short: 'Aplikasi web pemesanan hotel dengan dashboard admin dan integrasi pembayaran untuk mengurangi kasus overbooking.',
    status: 'done', statusLabel: 'Selesai · Akademik',
    role: 'Full Stack Developer', duration: '1.5 Month', date: '2026',
    tags: ['React', 'Java', 'Spring Boot', 'MySQL', 'Payment API',],
    colors: ['#7a4a13', '#0d1220'], initial: 'H',
    image: 'assets/projek/hotelambarukmo.png',
    overview: 'Sistem reservasi hotel yang mencakup alur booking untuk tamu dan dashboard pengelolaan properti untuk admin.',
    problem: 'Proses reservasi manual rentan menyebabkan overbooking dan sulit melacak data tamu secara terpusat.',
    solution: 'Membangun backend Spring Boot dengan validasi ketersediaan kamar real-time, terintegrasi payment gateway, dan dashboard admin untuk kelola properti.',
    results: ['Mengurangi kasus overbooking secara signifikan', 'Data tamu dan histori booking lebih terstruktur', 'Proses reservasi lebih cepat bagi pengguna'],
    learnings: ['Menangani concurrency saat banyak booking terjadi bersamaan', 'Integrasi payment gateway pihak ketiga'],
    github: 'https://github.com/rafitribuwana/Hotel-Ambarukmo', demo: '#'
  },
  {
    id: 'skin-analyzer',
    title: 'SkinSense - AI Skin Analyzer',
    tagline: 'Analisis kondisi kulit berbasis machine learning',
    short: 'Aplikasi web yang memakai model ML untuk menganalisis kondisi kulit dari foto secara real-time.',
    status: 'done', statusLabel: 'Selesai · Personal',
    role: 'Full Stack + ML', duration: '3 Month', date: '2026',
    tags: ['JavaScript', 'TensorFlow', 'Html/CSS'],
    colors: ['#7a1f4d', '#0d1220'], initial: 'A',
    image: 'assets/projek/SkinSense.png', 
    overview: 'Proyek pribadi untuk mengasah kemampuan machine learning terapan sekaligus memahami alur end-to-end dari model hingga antarmuka pengguna.',
    problem: 'Ingin membuktikan kemampuan membangun produk berbasis AI secara utuh, bukan hanya melatih model di notebook.',
    solution: 'Model TensorFlow untuk klasifikasi kondisi kulit, dikonsumsi oleh frontend React yang mendukung pengambilan foto langsung dari kamera.',
    results: ['Prototipe end-to-end berjalan dari kamera hingga hasil analisis', 'Proses inferensi dioptimalkan agar tetap responsif di web'],
    learnings: ['Deployment model ML ke layanan web nyata', 'Trade-off antara akurasi model dan kecepatan respons'],
    github: 'https://github.com/Septian-AS/SkinSense', demo: '#'
  },
  {
    id: 'kolutupa',
    title: 'Kolutupa – Platform Marketplace C2C Barang Secondhand',
    tagline: 'Platform Marketplace C2C Barang Secondhand',
    short: 'Mengembangkan platform marketplace berbasis web untuk barang secondhand dengan antarmuka responsif dan pengujian komprehensif.',
    status: 'done', statusLabel: 'Selesai · Akademik',
    role: 'Full Stack Developer', duration: '2 Month', date: '2026',
    tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap 5', 'PHPUnit'],
    colors: ['#4b2075', '#0d1220'], initial: 'K',
    image: '', // Contoh: 'assets/kolutupa.jpg'
    overview: 'Kolutupa adalah platform marketplace Customer-to-Customer (C2C) yang berfokus pada transaksi barang bekas atau secondhand. Platform ini dirancang untuk memudahkan pengguna dalam menjual dan membeli barang bekas dengan antarmuka yang ramah pengguna.',
    problem: 'Diperlukan platform terpusat untuk mewadahi transaksi barang secondhand antar mahasiswa/pengguna secara aman, serta memastikan kualitas kode melalui pengujian yang ketat.',
    solution: 'Membangun aplikasi web menggunakan PHP Laravel dan MySQL, menerapkan antarmuka responsif dengan Bootstrap 5, serta melakukan pengujian menyeluruh melalui Unit Testing, Feature Testing, dan User Acceptance Testing (UAT).',
    results: ['Sistem marketplace berhasil diuji secara komprehensif tanpa bug kritis pada saat UAT', 'Antarmuka responsif dan mulus diakses di berbagai perangkat'],
    learnings: ['Penerapan pengujian berlapis (Unit, Feature, UAT) pada pengembangan Laravel', 'Desain UI/UX yang responsif menggunakan framework Bootstrap'],
    github: 'https://github.com/kudabaggy/KOLUTUPA-PROJ', demo: '#'
  }
];

// Hero Typing Effect Data
const codeLines = [
  [['tok-kw','const'],['','  '],['tok-key','developer'],['',' = {']],
  [['','  '],['tok-key','name'],['tok-punc',': '],['tok-str','"Mohammad Rafi Tri Buwana"'],['tok-punc',',']],
  [['','  '],['tok-key','role'],['tok-punc',': '],['tok-str','"Backend Developer"'],['tok-punc',',']],
  [['','  '],['tok-key','stack'],['tok-punc',': ['],['tok-str','"Java"'],['tok-punc',', '],['tok-str','"Golang"'],['tok-punc',', '],['tok-str','"React"'],['tok-punc',','],['tok-str','"NodeJs"'],['tok-punc','],']],
  [['','  '],['tok-key','focus'],['tok-punc',': ['],['tok-str','"backend"'],['tok-punc',', '],['tok-str','"cloud"'],['tok-punc',', '],['tok-str','"AI"'],['tok-punc','],']],
  [['','  '],['tok-fn','isOpenToWork'],['tok-punc','() '],['tok-punc','{']],
  [['','    '],['tok-kw','return'],['',' '],['tok-str','true'],['tok-punc',';']],
  [['','  '],['tok-punc','}']],
  [['tok-punc','}']]
];
