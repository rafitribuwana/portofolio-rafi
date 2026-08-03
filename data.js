/* ---------------- DATA ---------------- */
// Certificates Data
const certificates = {
  'backend-fundamental': {
    title: 'Belajar Fundamental Backend',
    issuer: 'Dicoding Indonesia',
    date: '2024',
    description: 'Sertifikat kompetensi untuk pembelajaran fundamental backend development termasuk REST API, database, dan best practices.',
    credentialUrl: '#',
    imageUrl: '#'
  },
  'spring-boot': {
    title: 'Java Spring Boot Developer',
    issuer: 'Kursus Daring Bersertifikat',
    date: '2024',
    description: 'Sertifikat penyelesaian kursus comprehensive Java Spring Boot development mencakup microservices dan enterprise patterns.',
    credentialUrl: '#',
    imageUrl: '#'
  },
  'gcp-fundamentals': {
    title: 'Google Cloud Fundamentals',
    issuer: 'Google Cloud / Coursera',
    date: '2023',
    description: 'Sertifikat dari Google Cloud untuk fundamental cloud computing concepts dan Google Cloud Platform basics.',
    credentialUrl: '#',
    imageUrl: '#'
  },
  'internship-cert': {
    title: 'Sertifikat Penyelesaian Magang',
    issuer: 'Telkom Indonesia',
    date: '2024',
    description: 'Sertifikat penyelesaian program magang 3 bulan di Telkom Indonesia sebagai Backend Developer.',
    credentialUrl: '#',
    imageUrl: '#'
  },
  'react-web': {
    title: 'Belajar Membuat Aplikasi Web dengan React',
    issuer: 'Dicoding Indonesia',
    date: '2023',
    description: 'Sertifikat kompetensi untuk frontend development dengan React, mencakup hooks, state management, dan modern patterns.',
    credentialUrl: '#',
    imageUrl: '#'
  },
  'hackathon-capstone': {
    title: 'Juara Harapan Hackathon Capstone',
    issuer: 'Kompetisi Internal Kampus',
    date: '2023',
    description: 'Penghargaan sebagai Juara Harapan dalam hackathon capstone dengan tim lintas jurusan.',
    credentialUrl: '#',
    imageUrl: '#'
  }
};

const projects = [
  {
    id: 'kpi-dashboard',
    title: 'KPI Dashboard Telkom',
    tagline: 'Dashboard monitoring KPI regional real-time',
    short: 'Dashboard real-time untuk memonitor 5+ metrik KPI Branch Regional, menggantikan proses manual berbasis spreadsheet.',
    status: 'done', statusLabel: 'Selesai · Magang',
    role: 'Backend Developer', duration: '1 bulan', date: '2026',
    tags: ['Node.Js', 'Express.Js', 'React', 'MySQL'],
    colors: ['#1c3d78', '#0d1220'], initial: 'K',
    overview: 'Dashboard internal untuk tim operasional Telkom regional, dibangun agar data performa bisa dipantau real-time tanpa perlu menyusun laporan manual setiap minggunya.',
    problem: 'Tim regional memantau 5+ metrik KPI lewat spreadsheet yang diperbarui manual, proses ini memakan waktu ±2 jam per laporan dan rawan salah input.',
    solution: 'Membangun REST API dengan Node.Js untuk agregasi data, disajikan lewat dashboard React dengan visualisasi grafik dan fitur ekspor/impor Excel.',
    results: ['Waktu pelaporan turun dari 2 jam menjadi 15 menit', 'Menghilangkan human error pada input manual', 'Mempercepat pengambilan keputusan tim regional'],
    learnings: ['Menangani query pada dataset besar secara efisien', 'Praktik terbaik desain dashboard untuk pengguna non-teknis'],
    github: '#', demo: '#'
  },
  {
    id: 'smartwater',
    title: 'SmartWater IoT System',
    tagline: 'Monitoring kualitas air pabrik berbasis IoT',
    short: 'Sistem IoT untuk memantau kualitas air pabrik secara real-time dengan alert otomatis saat parameter tidak normal.',
    status: 'done', statusLabel: 'Selesai · Akademik',
    role: 'Backend Engineer', duration: '2 bulan', date: '2024',
    tags: ['Golang', 'MQTT', 'Python', 'PostgreSQL'],
    colors: ['#0f5c4a', '#0d1220'], initial: 'S',
    overview: 'Proyek tim untuk membantu pabrik memantau parameter kualitas air secara berkelanjutan menggunakan sensor IoT dan protokol komunikasi ringan.',
    problem: 'Pabrik memerlukan cara untuk mendeteksi anomali kualitas air secara cepat, karena pengecekan manual berkala tidak cukup responsif.',
    solution: 'Sensor mengirim data lewat protokol MQTT ke backend Golang untuk ingestion data, lalu dianalisis dengan Python untuk mendeteksi anomali dan memicu alert otomatis.',
    results: ['Deteksi anomali kualitas air secara real-time', 'Alert otomatis mengurangi waktu respons tim lapangan', 'Riwayat data tersimpan untuk analisis tren'],
    learnings: ['Bekerja dengan protokol IoT (MQTT) dari nol', 'Desain sistem yang tahan terhadap koneksi sensor yang tidak stabil'],
    github: '#', demo: '#'
  },
  {
    id: 'hotel-reservation',
    title: 'Hotel Reservation System',
    tagline: 'Sistem pemesanan kamar terintegrasi pembayaran',
    short: 'Aplikasi web pemesanan hotel dengan dashboard admin dan integrasi pembayaran untuk mengurangi kasus overbooking.',
    status: 'done', statusLabel: 'Selesai · Akademik',
    role: 'Full Stack Developer', duration: '1.5 bulan', date: '2023',
    tags: ['Spring Boot', 'React', 'MySQL', 'Payment API'],
    colors: ['#7a4a13', '#0d1220'], initial: 'H',
    overview: 'Sistem reservasi hotel yang mencakup alur booking untuk tamu dan dashboard pengelolaan properti untuk admin.',
    problem: 'Proses reservasi manual rentan menyebabkan overbooking dan sulit melacak data tamu secara terpusat.',
    solution: 'Membangun backend Spring Boot dengan validasi ketersediaan kamar real-time, terintegrasi payment gateway, dan dashboard admin untuk kelola properti.',
    results: ['Mengurangi kasus overbooking secara signifikan', 'Data tamu dan histori booking lebih terstruktur', 'Proses reservasi lebih cepat bagi pengguna'],
    learnings: ['Menangani concurrency saat banyak booking terjadi bersamaan', 'Integrasi payment gateway pihak ketiga'],
    github: '#', demo: '#'
  },
  {
    id: 'skin-analyzer',
    title: 'AI Skin Analyzer',
    tagline: 'Analisis kondisi kulit berbasis machine learning',
    short: 'Aplikasi web yang memakai model ML untuk menganalisis kondisi kulit dari foto secara real-time.',
    status: 'progress', statusLabel: 'Dalam Pengerjaan · Personal',
    role: 'Full Stack + ML', duration: 'Berjalan', date: '2025',
    tags: ['Python', 'FastAPI', 'TensorFlow', 'React'],
    colors: ['#7a1f4d', '#0d1220'], initial: 'A',
    overview: 'Proyek pribadi untuk mengasah kemampuan machine learning terapan sekaligus memahami alur end-to-end dari model hingga antarmuka pengguna.',
    problem: 'Ingin membuktikan kemampuan membangun produk berbasis AI secara utuh, bukan hanya melatih model di notebook.',
    solution: 'Model TensorFlow untuk klasifikasi kondisi kulit di-serve lewat FastAPI, dikonsumsi oleh frontend React yang mendukung pengambilan foto langsung dari kamera.',
    results: ['Prototipe end-to-end berjalan dari kamera hingga hasil analisis', 'Proses inferensi dioptimalkan agar tetap responsif di web'],
    learnings: ['Deployment model ML ke layanan web nyata', 'Trade-off antara akurasi model dan kecepatan respons'],
    github: '#', demo: '#'
  }
];

// Hero Typing Effect Data
const codeLines = [
  [['tok-kw','const'],['','  '],['tok-key','developer'],['',' = {']],
  [['','  '],['tok-key','name'],['tok-punc',': '],['tok-str','"Mohammad Rafi Tri Buwana"'],['tok-punc',',']],
  [['','  '],['tok-key','role'],['tok-punc',': '],['tok-str','"Backend Developer"'],['tok-punc',',']],
  [['','  '],['tok-key','stack'],['tok-punc',': ['],['tok-str','"Java"'],['tok-punc',', '],['tok-str','"Spring Boot"'],['tok-punc',', '],['tok-str','"React"'],['tok-punc','],']],
  [['','  '],['tok-key','focus'],['tok-punc',': ['],['tok-str','"backend"'],['tok-punc',', '],['tok-str','"cloud"'],['tok-punc',', '],['tok-str','"AI"'],['tok-punc','],']],
  [['','  '],['tok-fn','isOpenToWork'],['tok-punc','() '],['tok-punc','{']],
  [['','    '],['tok-kw','return'],['',' '],['tok-str','true'],['tok-punc',';']],
  [['','  '],['tok-punc','}']],
  [['tok-punc','}']]
];
