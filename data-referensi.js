// Data Referensi Tertanam (Embedded Reference Data)
// Digunakan sebagai standar (few-shot prompting) untuk memandu AI (Gemini API) dalam membuat soal berstandar HOTS SKD.

const BANK_REFERENSI = {
    // 1. SKD Full: Kombinasi referensi untuk generate 110 soal (tidak terpakai secara spesifik karena SKD Full memanggil masing-masing TWK, TIU, TKP)
    skd_full: [],
    
    // 2. TWK Only (Tes Wawasan Kebangsaan)
    twk_only: [
        {
            "kategori": "TWK",
            "pertanyaan": "Dalam negara demokrasi, mahasiswa sering disebut sebagai agent of social control. Namun, pada praktiknya terdapat perdebatan mengenai batas antara pengawasan kebijakan pemerintah dan upaya delegitimasi institusi negara. Sekelompok mahasiswa melakukan kajian terhadap program bantuan sosial dan menemukan indikasi ketidaktepatan sasaran. Hasil kajian kemudian dipublikasikan disertai rekomendasi perbaikan tanpa menyerukan penolakan terhadap pemerintah maupun program tersebut.<br><br>Berdasarkan ilustrasi tersebut, alasan yang paling tepat mengenai pentingnya pengawalan kebijakan pemerintah oleh mahasiswa adalah ...",
            "pilihan": {
                "A": "Pengawasan bertujuan memastikan setiap kebijakan sesuai dengan kepentingan kelompok masyarakat yang melakukan pengawasan.",
                "B": "Pengawasan dilakukan agar mahasiswa dapat memiliki kewenangan evaluasi yang dimiliki pemerintah.",
                "C": "Pengawasan merupakan instrumen demokrasi yang memperkuat akuntabilitas tanpa menghilangkan legitimasi pemerintah sebagai pelaksana kebijakan.",
                "D": "Pengawasan diperlukan karena pemerintah pada dasarnya tidak mampu mengawasi kebijakannya sendiri.",
                "E": "Pengawasan bertujuan membatasi kewenangan pemerintah agar tidak dapat menjalankan kebijakan secara otoriter."
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Dalam sebuah forum diskusi rancangan peraturan daerah, terjadi perdebatan sengit antara dua kelompok masyarakat. Kelompok pertama menginginkan agar aturan daerah diwarnai oleh syariat agama mayoritas karena mereka merasa sebagai penduduk asli dan terbanyak. Di sisi lain, kelompok kedua menolak hal tersebut dengan alasan bahwa daerah tersebut juga dihuni oleh warga pendatang dengan keyakinan berbeda yang berkontribusi besar pada perekonomian daerah. Ketegangan memuncak hingga salah satu tokoh kelompok pertama melakukan walk-out. Sikap yang paling mencerminkan implementasi Sila Ke-4 dan Ke-3 secara bersamaan dalam menanggapi situasi ini adalah...",
            "pilihan": {
                "A": "Mendukung kelompok pertama karena bagaimanapun juga suara mayoritas adalah wujud dari demokrasi kerakyatan yang dipimpin oleh hikmat kebijaksanaan.",
                "B": "Membatalkan rancangan peraturan daerah tersebut agar tidak terjadi konflik horizontal yang mengancam persatuan nasional.",
                "C": "Menunda sidang dan melakukan pendekatan persuasif (lobi) di luar forum kepada kedua belah pihak untuk mencari jalan tengah yang tidak mencederai identitas kebangsaan.",
                "D": "Meminta kelompok minoritas untuk mengalah demi menjaga stabilitas keamanan daerah sesuai dengan prinsip persatuan Indonesia.",
                "E": "Membawa permasalahan ini ke Mahkamah Konstitusi karena urusan keagamaan adalah wewenang pemerintah pusat, bukan pemerintah daerah."
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Di era digital, penyebaran hoaks atau berita bohong sangat masif terjadi menjelang Pemilu. Banyak Aparatur Sipil Negara (ASN) yang tanpa sadar ikut membagikan berita yang belum terverifikasi kebenarannya melalui grup pesan singkat keluarga, dengan dalih 'hanya sekadar berbagi informasi'. Tindakan ASN tersebut, apabila ditinjau dari perspektif Bela Negara di era modern, menunjukkan pelemahan pada nilai dasar Bela Negara yaitu...",
            "pilihan": {
                "A": "Cinta tanah air, karena merusak nama baik bangsa di mata internasional.",
                "B": "Sadar berbangsa dan bernegara, karena ASN terikat aturan netralitas dan UU ITE.",
                "C": "Setia pada Pancasila sebagai ideologi negara, karena hoaks berpotensi memecah belah sila ke-3.",
                "D": "Rela berkorban untuk bangsa dan negara, karena malas mengorbankan waktu untuk mencari kebenaran fakta.",
                "E": "Kemampuan awal bela negara, karena tidak memiliki literasi digital dan ketahanan mental dalam menyaring informasi."
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Kebijakan pemerintah untuk memberikan subsidi kendaraan listrik menuai pro dan kontra. Sebagian masyarakat menilai kebijakan ini tidak tepat sasaran karena hanya dinikmati kalangan menengah ke atas, sementara masyarakat bawah masih kesulitan mengakses transportasi umum yang layak. Namun, pemerintah berdalih bahwa ini adalah langkah strategis jangka panjang untuk mengurangi emisi karbon global dan menekan defisit anggaran akibat impor BBM. Kebijakan pemerintah ini paling mencerminkan pengamalan pokok pikiran Pembukaan UUD 1945 yaitu...",
            "pilihan": {
                "A": "Pokok pikiran pertama (Persatuan), karena melindungi seluruh tumpah darah Indonesia dari ancaman perubahan iklim.",
                "B": "Pokok pikiran kedua (Keadilan Sosial), karena berusaha mewujudkan kesejahteraan umum secara mandiri.",
                "C": "Pokok pikiran ketiga (Kedaulatan Rakyat), karena kebijakan ini telah disetujui oleh wakil rakyat di DPR.",
                "D": "Pokok pikiran keempat (Ketuhanan & Kemanusiaan), karena menjaga alam adalah bentuk amanah dari Tuhan YME.",
                "E": "Pokok pikiran kedua dan ketiga, karena memadukan kesejahteraan dan keputusan politik."
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Indonesia sebagai negara kepulauan yang sudah diatur batas-batasnya dalam undang-undang. Batas Indonesia paling barat adalah ...",
            "pilihan": {
                "A": "Pulau We",
                "B": "Pulau Nikobar",
                "C": "Pulau Halmahera",
                "D": "Pulau Ronde",
                "E": "Pulau Rote"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Berikut ini yang bukan merupakan latar belakang adanya wawasan nusantara dilihat dari falsafah Pancasila adalah ...",
            "pilihan": {
                "A": "Kemerdekaan sebagai hasil perjuangan seluruh rakyat Indonesia.",
                "B": "Mengutamakan kepentingan umum daripada individu atau golongan.",
                "C": "Penerapan hak asasi manusia.",
                "D": "Pengambilan keputusan dengan musyawarah.",
                "E": "Memberi kesempatan setiap pemeluk agama untuk beribadah."
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Semboyan Bhineka Tunggal Ika yang menjadi semboyan nasional bangsa Indonesia, diambil dari Kitab...",
            "pilihan": {
                "A": "Kitab Negarakertagama",
                "B": "Kitab Smaradahana",
                "C": "Kitab Sutasoma",
                "D": "Kitab Arjuna Wiwaha",
                "E": "Jangka Jayabaya"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Berdasarkan UUD 1945 pasal 23F, Pimpinan Badan Pemeriksa Keuangan dipilih dari dan oleh....",
            "pilihan": {
                "A": "Anggota DPR",
                "B": "Anggota MPR",
                "C": "Anggota Presiden",
                "D": "Anggota MA",
                "E": "Anggota BPK"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Kekuasaan Kehakiman dilakukan oleh MA, MK, dan KY. Berdasarkan pernyataan di atas, maka ...",
            "pilihan": {
                "A": "Pernyataan itu bernilai benar",
                "B": "Pernyataan itu bernilai salah karena MK bukan bagian dari Kekuasaan Kehakiman",
                "C": "Pernyataan itu bernilai salah karena MA bukan bagian dari Kekuasaan Kehakiman",
                "D": "Pernyataan itu bernilai salah karena KY bukan bagian dari Kekuasaan Kehakiman",
                "E": "Pernyataan itu bernilai salah karena kekuasaan kehakiman hanya dilakukan oleh sebuah Mahkamah Agung saja"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Penanganan sengketa hasil penghitungan suara pemilihan kepala daerah dan wakil kepala daerah oleh Mahkamah Agung dialihkan kepada Mahkamah Konstitusi paling lama .... Bulan sejak UU No 12 Tahun 2008 diundangkan.",
            "pilihan": {
                "A": "3",
                "B": "6",
                "C": "12",
                "D": "18",
                "E": "Semua salah"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Pancasila digunakan sebagai dasar untuk mengatur penyelenggaraan ketatanegaraan negara, hal ini sesuai dengan kedudukan Pancasila sebagai...",
            "pilihan": {
                "A": "Pandangan hidup bangsa",
                "B": "Moral pembangunan bangsa",
                "C": "Jiwa kepribadian bangsa",
                "D": "Dasar negara",
                "E": "Perjanjian luhur bangsa"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Mengembangkan sikap bahwa bangsa Indonesia merupakan bagian dari seluruh umat manusia merupakan perwujudan sila ke-...",
            "pilihan": {
                "A": "1",
                "B": "2",
                "C": "3",
                "D": "4",
                "E": "5"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Pancasila sebagai ideologi terbuka memiliki batas-batas sebagai berikut, kecuali...",
            "pilihan": {
                "A": "Mencegah berkembangnya paham dan ideologi liberal",
                "B": "Penciptaan norma baru tidak perlu memiliki konsensus",
                "C": "Larangan terhadap ideologi Marxisme, Leninisme, dan Komunisme",
                "D": "Larangan terhadap pandangan ekstrem yang meresahkan masyarakat",
                "E": "Menekankan pada stabilitas nasional yang sehat dan dinamis"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Perlawanan rakyat Maluku terhadap pemerintah Belanda diawali dengan tindakan Kapitan Patimura yang mengajukan daftar keluhan kepada...",
            "pilihan": {
                "A": "Van Der Capellen",
                "B": "Francois Wittert",
                "C": "J.P. Coen",
                "D": "Pieter Both",
                "E": "Van Den Bergh"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Pada masa pemerintahan Kerajaan Hayam Wuruk terjadi Perang Bubat yaitu perselisihan antara Gajah Mada dengan...",
            "pilihan": {
                "A": "Kerajaan Kediri",
                "B": "Kerajaan Padjajaran",
                "C": "Kerajaan Singasari",
                "D": "Kerajaan Sunda",
                "E": "Kerajaan Banten"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Salah satu strategi yang digunakan Belanda untuk menghadapi perlawanan rakyat Aceh adalah...",
            "pilihan": {
                "A": "Benteng Stelsel",
                "B": "Cultuur Stelsel",
                "C": "Devide et Impera",
                "D": "Continental Stelsel",
                "E": "Sistem geriliya"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Gratifikasi menurut UU No. 20 Tahun 2001 tentang Perubahan UU Nomor 31 tahun 1999 tentang Pemberantasan Tindak Pidana Korupsi dan penjelasannya didefinisikan sebagai pemberian dalam arti luas, yakni sebagai berikut, kecuali...",
            "pilihan": {
                "A": "rabat",
                "B": "pinjaman dengan bunga",
                "C": "komisi",
                "D": "fasilitas penginapan",
                "E": "perjalanan wisata"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Komisi Pengawas Kekayaan Pejabat Negara atau KPKPN adalah sebuah badan pemberantasan korupsi pemerintah Indonesia yang dibentuk pada masa kepemimpinan...",
            "pilihan": {
                "A": "Soekarno",
                "B": "Abdurrahman Wahid",
                "C": "B.J Habibie",
                "D": "Megawati",
                "E": "Susilo Bambang Yudhoyono"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Alasan pembubaran Tim Gabungan Pemberantasan Tindak Pidana Korupsi atau TGPTPK pada masa kepemimpinan Abdurrahman Wahid adalah...",
            "pilihan": {
                "A": "ketidakjelasan tupoksi",
                "B": "proses rekrutmen pegawai yang tidak transparan",
                "C": "adanya permasalahan legalitas hukum",
                "D": "kekurangan dana kesekretariatan",
                "E": "kinerja pemberantasan korupsi yang lambat"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Tim Gabungan Pemberantasan Tindak Pidana Korupsi atau TGPTPK adalah sebuah badan pemberantasan korupsi bentukan Presiden Abdurrahman Wahid lewat Keppres No. 19/2000. Namun, legalitas tim ini dipermasalahkan karena dasar pembentukannya berbenturan dengan UU Nomor 31/1999 tentang Pemberantasan Tindak Pidana Korupsi. Mahkamah Konstitusi akhirnya membubarkan lembaga tersebut. Dalam arti sempit, Pemerintahan meliputi...",
            "pilihan": {
                "A": "MPR, DPR, Rakyat",
                "B": "Presiden, Wakil Presiden, Menteri-menteri",
                "C": "Rakyat dan MPR",
                "D": "DPR, DPD, MPR",
                "E": "Presiden, MPR, Rakyat"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Menurut UU Nomor 25 Tahun 200 tentang Program Pembangunan Nasional (PROPENAS) Tahun 2000-2004, Sistematika Program Pembangunan Nasional (PROPENAS) Tahun 2000-2004 disusun sebagai berikut, kecuali...",
            "pilihan": {
                "A": "Pembangunan Hukum",
                "B": "Pembangunan Ekonomi",
                "C": "Pembangunan Politik",
                "D": "Pembangunan Kesehatan",
                "E": "Pembangunan Daerah"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Sistem ekonomi Gerakan Benteng yang diusulkan Sumitro dalam masa Kabinet Natsir yang menganjurkan pembangunan ekonomi baru dengan cara...",
            "pilihan": {
                "A": "Mengubah ekonomi liberal menjadi ekonomi sosial",
                "B": "Mengubah ekonomi liberal menjadi ekonomi campuran",
                "C": "Mengubah ekonomi kolonial menjadi ekonomi nasional",
                "D": "Menumbuhkan perkembangan ekonomi swasta",
                "E": "Menata ekonomi Indonesia ke arah yang baru"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Percampuran antara 2 atau beberapa kebudayaan pasti akan memberikan pengaruh terhadap kehidupan masing-masing budaya tersebut. Sebagai contoh, percampuran unsur Hindu-Budha dengan Islam akan memberikan pengaruh terhadap bentuk masjid kuno di Indonesia, yaitu berupa...",
            "pilihan": {
                "A": "Bangunan masjid yang selalu menghadap ke timur",
                "B": "Bentuk masjid yang bujur sangkar",
                "C": "Bentuk atap masjid yang seperti kubah",
                "D": "Arah kiblat bangunan masjid",
                "E": "Atap masjid yang berbentuk meru"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Sebagai masyarakat yang ber-Bhinneka Tunggal Ika, kita dilarang melakukan tindakan yang mengancam keutuhan bangsa Indonesia. Salah satu tindakan yang mengancam keutuhan bangsa Indonesia yaitu tindakan yang menggunakan kekerasan yang dapat menimbulkan rasa takut secara meluas. Tindakan tersebut disebut sebagai...",
            "pilihan": {
                "A": "Radikalisme",
                "B": "Terorisme",
                "C": "Kekerasan",
                "D": "Ancaman Kekerasan",
                "E": "Separatisme"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Interaksi masyarakat yang berorientasi ke atas, sangat mementingkan hubungan yang formal dan bersifat impersonal. Gambaran tersebut merupakan etos kebudayaan masyarakat...",
            "pilihan": {
                "A": "Elite",
                "B": "Birokrat",
                "C": "Petani",
                "D": "Buruh",
                "E": "Tradisional"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Negara mengatasi segala paham golongan, menghendaki persatuan yang meliputi segenap bangsa Indonesia, merupakan kandungan dalam pembukaan UUD 1945 alinea ke-...",
            "pilihan": {
                "A": "I",
                "B": "II",
                "C": "III",
                "D": "IV",
                "E": "Semua salah"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Kandungan yang terdapat dalam pembukaan UUD 1945 alinea ke-3 adalah...",
            "pilihan": {
                "A": "Negara persatuan adalah negara yang melindungi bangsa Indonesia seluruhnya.",
                "B": "Menunjukkan konsekuensi logis bahwa undang-undang dasar harus mengundang isi yang mewajibkan pemerintah dan lain-lain penyelenggara negara untuk memelihara budi pekerti kemanusiaan yang luhur, dan memegang teguh cita-cita moral rakyat yang luhur.",
                "C": "Keadilan sosial yang didasarkan pada kesadaran bahwa manusia mempunyai hak dan kewajiban yang sama untuk menciptakan keadilan sosial dalam kehidupan masyarakat.",
                "D": "Negara mengatasi segala paham golongan, menghendaki persatuan yang meliputi segenap bangsa Indonesia.",
                "E": "Sistem negara yang terbentuk dalam undang-undang dasar haruslah berdasar kedaulatan rakyat dan berdasar permusyawaratan/perwakilan. Pokok pikiran ketiga adalah penjelmaan sila keempat Pancasila."
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Fungsi pembukaan UUD 1945 yang mencantumkan dasar negara yang tersusun secara hierarki dan piramida dan piramida di Indonesia menjadi ciri dan karakteristik bangsa merupakan fungsi pembukaan UUD 1945 alinea ke-...",
            "pilihan": {
                "A": "I",
                "B": "II",
                "C": "III",
                "D": "IV",
                "E": "Semua salah"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Perhatikan pernyataan berikut ini! 1) Unsur-unsur dalam Pancasila belum secara langsung dirumuskan menjadi dasar filsafat negara 2) Nilai-nilai tersebut terkandung dalam pandangan hidup masyarakat Indonesia sebelum membentuk negara 3) Asal mula tidak langsung Pancasila hakikatnya berasal dari bangsa Indonesia itu sendiri. Pernyataan di atas merupakan uraian dari...",
            "pilihan": {
                "A": "Asal Mula Tujuan Pancasila",
                "B": "Asal Mula Bahan",
                "C": "Asal Mula Bentuk",
                "D": "Asal Mula Tidak Langsung",
                "E": "Asal Mula Karya"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Pancasila berasal dari kata panca yang berarti lima dan sila yang berarti sendi, asas, dasar atau peraturan tingkah laku yang penting dan baik. Dengan demikian, Pancasila merupakan lima dasar yang berisi pedoman atau aturan tentang tingkah laku yang penting dan baik, merupakan pengertian Pancasila yang diungkapkan oleh...",
            "pilihan": {
                "A": "Notonegoro",
                "B": "Moh. Yamin",
                "C": "Ir. Sukarno",
                "D": "Ki Hajar Dewantara",
                "E": "Soepomo"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Perhatikan pernyataan berikut ini! 1) Modal pembangunan 2) Satu-satunya asas bagi kehidupan bangsa Indonesia 3) Pendorong terciptanya pembangunan di segala sektor 4) Berasal dari rakyat Indonesia dan negara serumpun yang lain 5) Pandangan hidup bangsa sebelum bangsa Indonesia 6) Cita-cita dan tujuan seluruh bangsa Indonesia. Dari pernyataan di atas yang merupakan fungsi dan peranan Pancasila dalam kehidupan berbangsa dan bernegara Indonesia adalah nomor...",
            "pilihan": {
                "A": "1, 2, 3",
                "B": "2, 3, 4",
                "C": "3, 4, 5",
                "D": "4, 5, 6",
                "E": "1 dan 6"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Pada lambang polisi \"Rastra Sewakottama\" terdapat sebuah gambar \"pancaran obor\". Gambar \"pancaran obor\" tersebut bermakna...",
            "pilihan": {
                "A": "keteguhan Polri, Polri memiliki keteguhan hati, tidak pantang menyerah, dan mengutamakan kepentingan negara dalam mewujudkan perdamaian Indonesia",
                "B": "jiwa Polri, selalu berani dan pantang menyerah dalam membela NKRI",
                "C": "tugas Polri, disamping memberi sesuluh atau penerangan juga bermakna penyadaran hati nurani masyarakat agar selalu sadar akan perlunya kondisi kamtibmas yang mantap",
                "D": "lambang keabadian dan sikap tenang mantap yang bermakna harapan agar Polri selalu tidak goyah dalam situasi dan kondisi apapun",
                "E": "perisai Indonesia, yang bermakna pelindung rakyat dan negara"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Hal-ihwal yang berkaitan dengan fungsi dan lembaga polisi sesuai dengan peraturan perundang-undangan disebut sebagai ...",
            "pilihan": {
                "A": "Kepolisian",
                "B": "Anggota Kepolisian Negara Republik Indonesia",
                "C": "Pejabat Kepolisian Negara Republik Indonesia",
                "D": "Peraturan Kepolisian",
                "E": "Disiplin Kepolisian"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Upaya pemberantasan KKN harus dilaksanakan secara tegas terhadap siapapun juga, baik pejabat negara, mantan pejabat negara, keluarga dan kroninya maupun pihak swasta/konglomerat adalah isi...",
            "pilihan": {
                "A": "Ketetapan MPR RI TAP MPR RI No. XXI/1998",
                "B": "Ketetapan MPR RI Pasal 1 TAP MPR RI No. VI/1998",
                "C": "Ketetapan MPR RI Pasal 2 TAP MPR RI No. IX/1998",
                "D": "Ketetapan MPR RI Pasal 3 TAP MPR RI No. XX/1998",
                "E": "Ketetapan MPR RI Pasal 4 TAP MPR RI No. XI/1998"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Sejauh gerakan melawan korupsi dijalankan di berbagai belahan dunia, bisa diidentifikasi 4 (empat) pendekatan yang paling banyak diadopsi oleh berbagai kalangan (Wijayanto, 2010) yaitu sebagai berikut, kecuali...",
            "pilihan": {
                "A": "Pendekatan Pengacara",
                "B": "Pendekatan Bisnis",
                "C": "Pendekatan Pasar",
                "D": "Pendekatan Budaya",
                "E": "Pendekatan Sosial"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Pegawai negeri atau penyelenggara negara yang pada waktu menjalankan tugas, meminta atau menerima pekerjaan atau penyerahan barang, seolah-olah merupakan utang kepada dirinya, padahal diketahui bahwa hal tersebut bukan merupakan utang, merupakan salah satu bentuk korupsi yang tergolong...",
            "pilihan": {
                "A": "Kerugian Keuangan Negara",
                "B": "Suap Menyuap",
                "C": "Penggelapan dalam Jabatan",
                "D": "Pemerasan",
                "E": "Perbuatan Curang"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Tujuan pembangunan nasional adalah mewujudkan suatu masyarakat adil dan makmur yang merata materiil dan spirituil, hal ini berdasarkan...",
            "pilihan": {
                "A": "Ketuhanan YME",
                "B": "Pancasila dan UUD 1945",
                "C": "UUD 1945",
                "D": "Kemanusiaan yang Adil dan Beradab",
                "E": "Keadilan Sosial"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Hukum yang ditetapkan oleh negara-negara dalam suatu perjanjian Negara disebut dengan hukum...",
            "pilihan": {
                "A": "Hukum Doktrin",
                "B": "Hukum Traktat",
                "C": "Hukum Undang-undang",
                "D": "Hukum Yurisprudensi",
                "E": "Hukum Adat"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Perhatikan ciri-ciri masyarakat berikut ini! 1) Masyarakat industri 2) Nilai prestasi dan universalisme 3) Spesialisasi tinggi 4) Sistem politik demokratis 5) Birokrasi rasional. Ciri-ciri masyarakat di atas merupakan ciri-ciri masyarakat...",
            "pilihan": {
                "A": "Tradisional",
                "B": "Modern",
                "C": "Transisi",
                "D": "Heterogentitas",
                "E": "Plural"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Agus dan Ira merupakan status suami dan istri dari Negara B Ius Soli. Mereka tinggal di Negara A yang berasas Ius Sanguinis. Lalu Budi anak mereka lahir di negara A. Kewarganegaraan yang dianut oleh Budi yaitu...",
            "pilihan": {
                "A": "Apartheid",
                "B": "Apatride",
                "C": "Bipatride",
                "D": "Stelsel",
                "E": "Ius Sanguinis"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Sumpah Pemuda sebagai hasil Kongres Pemuda yang diselenggarakan oleh organisasi-organisasi kedaerahan telah memiliki semangat nasionalisme untuk mencapai Indonesia merdeka. Isi sumpah Pemuda butir kedua adalah ...",
            "pilihan": {
                "A": "Kami Putra Putri Indonesia, mengaku berbahasa satu bangsa Indonesia.",
                "B": "Kami putra dan putri Indonesia mengaku berbahasa yang satu, bahasa Indonesia",
                "C": "Kami Putra Putri Indonesia, mengaku bertumpah darah satu tanah air Indonesia.",
                "D": "Kami putra dan putri Indonesia mengaku berbangsa yang satu, bangsa Indonesia.",
                "E": "Kami Putra Putri Indonesia, menjunjung tinggi bahasa persatuan bahasa Indonesia."
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Apabila masyarakat ikut serta dalam perumusan suatu kebijakan publik, maka akan terbentuk masyarakat madani. Berikut ini yang merupakan salah satu ciri masyarakat madani adalah...",
            "pilihan": {
                "A": "Terbentuknya merupakan paksaan dari suatu kelompok tertentu.",
                "B": "Masyarakat bergantung kepada negara, lembaga, atau organisasi tertentu.",
                "C": "Tidak terikat nilai hukum yang telah ditetapkan.",
                "D": "Adanya ketergantungan satu sama lain.",
                "E": "Terbentuk secara sukarela."
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Ketentuan mengenai Majelis Permusyawaratan Rakyat telah diatur dalam bagian khusus di UUD 1945 khususnya pada bab...",
            "pilihan": {
                "A": "Bab I",
                "B": "Bab II",
                "C": "Bab III",
                "D": "Bab IV",
                "E": "Bab VI"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Kemerdekaan yang telah diperjuangkan oleh pahlawan Indonesia bukanlah akhir dari perjuangan, namun harus dilakukan dengan mewujudkan negara Indonesia merdeka, bersatu, berdaulat, adil, dan makmur. Hal tersebut sejalan dengan makna pembukaan UUD 1945 khususnya alinea ke...",
            "pilihan": {
                "A": "1",
                "B": "2",
                "C": "3",
                "D": "4",
                "E": "Semua salah"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Hasil perubahan UUD 1945 yang ketiga disahkan pada tanggal 10 November 2001, menambah jumlah pasal dalam pasal 24 tentang kekuasaan kehakiman, yaitu pasal...",
            "pilihan": {
                "A": "Pasal 24B dan 24C",
                "B": "Pasal 24C dan 24D",
                "C": "Pasal 24D dan 24E",
                "D": "Pasal 24E dan 24F",
                "E": "Pasal 24F dan 24G"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Pedoman Penghayatan dan Pengamalan Pancasila (disingkat P4) atau Eka Prasetya Pancakarsa adalah sebuah panduan tentang pengamalan Pancasila dalam kehidupan bernegara semasa Orde Baru. Panduan P4 dibentuk dengan dasar...",
            "pilihan": {
                "A": "Ketetapan MPR no. I/MPR/1978",
                "B": "Ketetapan MPR no. II/MPR/1978",
                "C": "Ketetapan MPR no. III/MPR/1978",
                "D": "Ketetapan MPR no. IV/MPR/1978",
                "E": "Ketetapan MPR no. V/MPR/1978"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Dalam rangka aktualisasi nilai-nilai Pancasila dalam kehidupan berbangsa dan bernegara, pemerintah Republik Indonesia memandang perlu dilakukan pembinaan ideologi Pancasila terhadap seluruh penyelenggara negara yang terencana, sistematis, dan terpadu. Oleh karena itu, Presiden Joko Widodo membentuk Badan Pembinaan Ideologi Pancasila pada tanggal...",
            "pilihan": {
                "A": "28 Februari 2018",
                "B": "1 Maret 2019",
                "C": "2 Maret 2018",
                "D": "3 Maret 2019",
                "E": "28 Februari 2019"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Sebagai masyarakat Indonesia yang ber-Pancasila, kita harus mengakui dan memperlakukan manusia sesuai dengan harkat dan martabatnya sebagai makhluk Tuhan Yang Maha Esa. Hal tersebut sejalan dengan pengamalan Pancasila, khususnya sila ke...",
            "pilihan": {
                "A": "sila ke-1",
                "B": "sila ke-2",
                "C": "sila ke-3",
                "D": "sila ke-4",
                "E": "sila ke-5"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Pelopor pendiri GNB adalah negara-negara yang sedang berkembang, negarawan Afrika yang termasuk sebagai pelopor GNB di antaranya adalah...",
            "pilihan": {
                "A": "Nelson Mandela, Tabo Embeki",
                "B": "Kwame Nikrumah, Ghana",
                "C": "Anwar Sadat, Gadaf",
                "D": "Gamal Abdul Nasir, Zambia",
                "E": "Idi Amin, Yosep Mobutu"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Kepala Kepolisian Republik Indonesia yang pertama kali menjabat sejak tanggal 29 September 1945 hingga 14 Desember 1959 adalah...",
            "pilihan": {
                "A": "Raden Said Soekanto Tjokrodiatmodjo",
                "B": "Soekarno Djojonegoro",
                "C": "Soetjipto Danoekoesoemo",
                "D": "Soetjipto Joedodihardjo",
                "E": "Mohamad Hasan"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Kepolisian Republik Indonesia memiliki sebuah lambang yang di dalamnya tertulis \"Rastra Sewakottama\", yang artinya...",
            "pilihan": {
                "A": "Polri adalah pelayan masyarakat Indonesia",
                "B": "Polri adalah penegak keadilan dan ketertiban hukum",
                "C": "Polri adalah abdi utama dari pada nusa dan bangsa",
                "D": "Polri adalah negara Indonesia",
                "E": "Polri adalah kesatuan penjaga sepanjang waktu"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Apabila seorang pegawai negeri atau penyelenggara negara menerima suatu pemberian yang berhubungan dengan jabatannya dan yang berlawanan dengan kewajiban atau tugasnya, maka ia wajib lapor kepada KPK paling lambat ... hari kerja terhitung sejak tanggal gratifikasi diterima.",
            "pilihan": {
                "A": "10",
                "B": "15",
                "C": "20",
                "D": "25",
                "E": "30"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Korupsi memiliki berbagai efek penghancuran yang hebat (an enermous destruction effects) terhadap berbagai sisi kehidupan bangsa dan negara, salah satunya yaitu dampak di bidang ekonomi. Berikut ini merupakan dampak korupsi terhadap bidang ekonomi, kecuali...",
            "pilihan": {
                "A": "lesunya pertumbuhan ekonomi dan investasi.",
                "B": "penurunan produktifitas.",
                "C": "rendahnya kualitas barang dan jasa bagi publik.",
                "D": "pengentasan kemiskinan berjalan lambat.",
                "E": "menurunnya pendapatan negara dari sektor pajak."
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Dapat mengajukan rancangan undang undang kepada DPR yang berkaitan dengan otonomi daerah, hubungan pusat dengan daerah, pembentukan dan pemekaran, serta penggabungan daerah, merupakan kewenangan DPD yang tercantum dalam ... UUD 1945",
            "pilihan": {
                "A": "Pasal 9 B ayat 2",
                "B": "Pasal 20 ayat 2",
                "C": "Pasal 20 A ayat 2",
                "D": "Pasal 22 D ayat 2",
                "E": "Pasal 23 ayat 2"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Pembukaan UUD 1945 dalam kaitannya dengan HAM adalah ...",
            "pilihan": {
                "A": "Piagam HAM Indonesia",
                "B": "Sumber HAM Indonesia",
                "C": "Pedoman pelaksanaan jaminan HAM Indonesia",
                "D": "Penjelasan pelaksanaan HAM Indonesia",
                "E": "Rumusan pelaksanaan HAM"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Yang bukan merupakan dampak/akibat dari Dekrit Presiden 5 Juli 1959 adalah ...",
            "pilihan": {
                "A": "Konstituante dibubarkan",
                "B": "UUDS tidak berlaku",
                "C": "Kembali ke UUD 1945",
                "D": "Dibentuk DPRS",
                "E": "Dibentuk DPAS"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Menteri-menteri negara adalah pembantu presiden. Hal tersebut diatur dalam UUD 1945, yaitu ...",
            "pilihan": {
                "A": "Pasal 18",
                "B": "Pasal 16",
                "C": "Pasal 19",
                "D": "Pasal 12",
                "E": "Pasal 17"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Berkenaan dengan perubahan isi dari UUD 1945 sebenarnya telah diatur oleh TAP MPR No. IV/MPR/1983 tentang ...",
            "pilihan": {
                "A": "Interpelasi",
                "B": "Budget",
                "C": "Referendum",
                "D": "Mosi tidak percaya",
                "E": "Angket"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "UUD 1945 sebelum diamandemen menegaskan bahwa kedaulatan diatur di tangan rakyat dan dilakukan sepenuhnya oleh ...",
            "pilihan": {
                "A": "MPR",
                "B": "DPR",
                "C": "Presiden",
                "D": "MA",
                "E": "Perdana Menteri"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "UUD 1945 merupakan konstitusi pertama negara Republik Indonesia yang berlaku mulai tanggal ...",
            "pilihan": {
                "A": "17 Agustus 1945 - 17 Agustus 1948",
                "B": "17 Agustus 1945 - 17 Agustus 1950",
                "C": "18 Agustus 1945 - 27 Desember 1949",
                "D": "17 Agustus 1945 - 17 Agustus 1949",
                "E": "20 Agustus 1945 - 17 Agustus 1949"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Alasan kembalinya pada UUD 1945 adalah bahwa UUD 1945 dianggap sebagai ...",
            "pilihan": {
                "A": "Konstitusi pertama yang berlaku",
                "B": "Warisan nenek moyang",
                "C": "Konstitusi yang dianggap mampu menjaga kesatuan dan persatuan bangsa",
                "D": "Konstitusi yang paling baik saat ini",
                "E": "Konstitusi yang cocok untuk bangsa indonesia"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Tujuan perubahan UUD 1945 yaitu menyempurnakan aturan dasar mengenai jaminan dan perlindungan HAM agar sesuai dengan perkembangan paham HAM dan peradaban umat manusia yang merupakan syarat bagi suatu negara hukum yang tercantum dalam ...",
            "pilihan": {
                "A": "Hukum Internasional",
                "B": "UUD 1945",
                "C": "Kitab Undang-Undang Hukum Pidana",
                "D": "Perjanjian Internasional",
                "E": "Pancasila"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Pada hakikatnya setiap warga negara berhak atas pekerjaan dan penghidupan yang layak bagi kemanusiaan. Aturan dasar ini tercantum dalam UUD 1945...",
            "pilihan": {
                "A": "Bab X Pasal 27 (1)",
                "B": "Bab X Pasal 27 (2)",
                "C": "Bab X Pasal 28 (1)",
                "D": "Bab XII Pasal 30 (1)",
                "E": "Bab XII Pasal 30 (2)"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Naskah proklamasi Kemerdekaan Indonesia dirumuskan oleh ....",
            "pilihan": {
                "A": "Soekarno, Moh. Hatta, dan Ahmad Subardjo",
                "B": "Soekarno, Moh. Hatta, dan Radjiman Wedyoningrat",
                "C": "Radjiman Wedyoningrat, Sukarni, dan Sudiro",
                "D": "Soekarno, Ahmad Subardjo, dan Sukarni",
                "E": "Moh. Hatta, Winaka, dan A. G. Pringgodigdo"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Keputusan penting yang diambil oleh golongan pemuda dalam rapat tanggal 15 Agustus 1945 adalah ....",
            "pilihan": {
                "A": "kemerdekaan harus dibicarakan dengan golongan tua",
                "B": "golongan muda siap untuk melaksanakan proklamasi kemerdekaan",
                "C": "kemerdekaan Indonesia harus dibicarakan dengan pihak Jepang",
                "D": "kemerdekaan Indonesia adalah hak dan merupakan masalah rakyat Indonesia sendiri",
                "E": "mendesak kepada Soekarno dan Hatta untuk segera memproklamasikan kemerdekaan"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Sebelum terbentuknya MPR (Majelis Permusyawaratan Rakyat), dalam menjalankan pekerjaannya presiden dibantu oleh ....",
            "pilihan": {
                "A": "komite nasional",
                "B": "wakil presiden",
                "C": "perdana menteri",
                "D": "dewan menteri",
                "E": "kabinet"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Faktor ekstern dari ketidakstabilan politik dan pemerintahan pada awal kemerdekaan adalah ....",
            "pilihan": {
                "A": "adanya persaingan antarpartai politik",
                "B": "adanya gangguan keamanan dalam negeri",
                "C": "bangsa Indonesia masih mencari sistem pemerintahan yang cocok",
                "D": "pelabukan ekspor dipindah dari Pulau Jawa ke Pulau Sumatra",
                "E": "kedatangan Sekutu yang diboncengi NICA dan Jepang masih mempertahankan status quo samapi sekutu datang"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Daerah Republik Indonesia pada tanggal 19 Agustus 1945 terdiri atas ....",
            "pilihan": {
                "A": "6 provinsi",
                "B": "7 provinsi",
                "C": "8 provinsi",
                "D": "9 provinsi",
                "E": "10 provinsi"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Berikut ini yang tidak menyebabkan inflasi pada awal kemerdekaan adalah ....",
            "pilihan": {
                "A": "tidak terkendalinya jumlah mata uang penduduk Jepang",
                "B": "dikuasainya bank-bank oleh tentara Sekutu",
                "C": "diedarkannya uang cadangan untuk membiayai operasi-operasi Sekutu",
                "D": "kas negara kosong",
                "E": "sistem autarki lokal warisan Jepang"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "KNIP sibentuk pada tanggal ....",
            "pilihan": {
                "A": "18 Agustus 1945",
                "B": "19 Agustus 1945",
                "C": "21 Agustus 1945",
                "D": "22 Agustus 1945",
                "E": "23 Agustus 1945"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Dalam kabinet pertama RI, menteri pengajaran dijabat oleh ....",
            "pilihan": {
                "A": "MR. Ahmad Soebardjo",
                "B": "Iwa Kusuma Sumantri",
                "C": "Kasman Singodimedjo",
                "D": "Muhammad Yamin",
                "E": "Ki Hajar Dewantara"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Komite Nasional Indonesia Pusat setelah terbentuknya diketuai oleh ....",
            "pilihan": {
                "A": "B.M. Diah",
                "B": "Kaman Singodimedjo",
                "C": "Gatot Subroto",
                "D": "Ahmad Soebardjo",
                "E": "Suwiryo"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Tujuan pembentukan Badan Keamanan Rakyat adalah ....",
            "pilihan": {
                "A": "sebagai persiapan menghadapi Belanda",
                "B": "sebagai syarat kelengkapan negara",
                "C": "memelihara keamanan dan keselamatan rakyat serta merawat korban perang",
                "D": "untuk mengimbangi tentara Jepang",
                "E": "persiapan menghadapi Sekutu"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Teks Pembukaan Undang Undang Dasar Negara Republik Indonesia Tahun 1945 terdiri dari ....",
            "pilihan": {
                "A": "3 alenia",
                "B": "4 alenia",
                "C": "5 alenia",
                "D": "6 alenia",
                "E": "7 alenia"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "\"Bahwa sesungguhnya kemerdekaan itu ialah hak segala bangsa dan oleh sebab itu, maka penjajahan di atas dunia harus dihapuskan karena tidak sesuai dengan perikemanusiaan dan perikeadilan\", merupakan bunyi pembukaan UUD 1945 alenia ke ....",
            "pilihan": {
                "A": "1",
                "B": "2",
                "C": "3",
                "D": "4",
                "E": "5"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "\"Atas berkat rahmat Allah Yang Maha Kuasa dan dengan didorongkan oleh keinginan luhur, supaya berkehidupan kebangsaan yang bebas, maka rakyat Indonesia menyatakan dengan ini kemerdekaannya\", merupakan bunyi pembukaan UUD 1945 alenia ke ....",
            "pilihan": {
                "A": "1",
                "B": "2",
                "C": "3",
                "D": "4",
                "E": "5"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Pokok pikiran yang mengandung tujuan nasional, menentukan adanya UUD, asas politik negara, dan dasar negara adalah pokok pikiran ke ....",
            "pilihan": {
                "A": "1",
                "B": "2",
                "C": "3",
                "D": "4",
                "E": "5"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Ketika bangsa Indonesia baru merdeka belum memiliki Undang Undang Dasar, kemudian PPKI mengesahkan UUD pada tanggal ...",
            "pilihan": {
                "A": "17 Agustus 1945",
                "B": "18 Agustus 1945",
                "C": "19 Agustus 1945",
                "D": "20 Agustus 1945",
                "E": "21 Agustus 1945"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "BPUPKI sebagai lembaga yang menyusun Undang Undang Dasar dibentuk pada tanggal ....",
            "pilihan": {
                "A": "21 Mei 1945",
                "B": "28 Mei 1945",
                "C": "28 Oktober 1928",
                "D": "18 Agustus 1945",
                "E": "16 Juli 1945"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Hasil dari Konferensi Meja Bundar (KMB) mengakibatkan UUD 1945 tidak berlaku kembali dan diganti dengan UUD Republik Indonesia Serikat. Masa berlaku UUD Republik Indonesia Serikat adalah ....",
            "pilihan": {
                "A": "18 Agustus 1945 – 27 Desember 1949",
                "B": "17 Agustus 1950 – 5 Juli 1959",
                "C": "17 Agustus 1959 – 10 Juli 1960",
                "D": "5 Juli 1959 – sekarang",
                "E": "27 Desember 1949 – 17 Agustus 1950"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Konstituante belum dapat menyelesaikan tugasnya meski sudah berjalan dua setengah tahun tahun. Kebuntuan konstituante dalam menyusun UUD dan situasi tanah air pada waktu itu mendorong Presiden Soekarno untuk mengeluarkan dekrit pada tanggal ....",
            "pilihan": {
                "A": "5 Juli 1959",
                "B": "6 Juli 1959",
                "C": "7 Juli 1959",
                "D": "8 Juli 1959",
                "E": "9 Juli 1959"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Teks Pembukaan UUD 1945 sebelum disahkan menjadi bagian dari UUD 1945 disebut sebagai ....",
            "pilihan": {
                "A": "DUHAM",
                "B": "Undang-Undang Dasar",
                "C": "Piagam Jakarta",
                "D": "Tap MPR",
                "E": "Pancasila"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TWK",
            "pertanyaan": "Yang merupakan sumber dari segala sumber hukum, sumber dari segala kewenangan dan sumber dari segala badan kenegaraan adalah ....",
            "pilihan": {
                "A": "Pancasila",
                "B": "Pembukaan UUD 1945",
                "C": "Peraturan Daerah",
                "D": "UUD 1945",
                "E": "Undang-undang"
            },
            "kunci": "A",
            "bobotTKP": null
        }
    ],

    // 3. TIU Only (Tes Inteligensia Umum)
    tiu_only: [
        {
            "kategori": "TIU",
            "pertanyaan": "Perhatikan urutan gambar berikut:<br><br><img src=\"./soal/Screenshot 2026-08-23 132255.png\" style=\"max-width: 100%; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);\"><br><br>Pola gambar selanjutnya yang tepat untuk mengisi seri tersebut adalah ...",
            "pilihan": {
                "A": "Gambar dengan dua garis rotasi 90 derajat searah jarum jam",
                "B": "Gambar dengan satu garis bertambah di sisi kiri bawah",
                "C": "Gambar dengan rotasi garis 45 derajat berlawanan arah jarum jam",
                "D": "Gambar heksagon dengan garis vertikal di tengah",
                "E": "Gambar heksagon tanpa garis diagonal"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Sebuah perusahaan sedang menyeleksi 7 calon manajer: P, Q, R, S, T, U, dan V. Wawancara dilakukan dalam satu hari dengan aturan urutan sebagai berikut:\n1. Q harus diwawancarai sebelum R.\n2. S tidak boleh diwawancarai pertama atau terakhir.\n3. Jarak urutan wawancara antara T dan U harus tepat 2 orang (contoh: T, _, _, U).\n4. V harus diwawancarai tepat setelah P.\n5. T diwawancarai pada urutan ketiga.\n\nJika Q diwawancarai pada urutan pertama, maka siapakah yang mungkin diwawancarai pada urutan kelima?",
            "pilihan": {
                "A": "P",
                "B": "R",
                "C": "S",
                "D": "U",
                "E": "V"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Jika x = 2025² - 2024² dan y = 2026² - 2025², maka hubungan x dan y yang paling tepat adalah...",
            "pilihan": {
                "A": "x > y",
                "B": "x < y",
                "C": "x = y",
                "D": "x + y = 0",
                "E": "Hubungan x dan y tidak dapat ditentukan"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua pelamar CPNS yang memiliki skor TOEFL di atas 500 akan lulus seleksi administrasi instansi X. \nBeberapa peserta bimbingan belajar Y adalah pelamar CPNS instansi X. \nTidak ada peserta bimbingan belajar Y yang memiliki skor TOEFL di atas 500.\n\nKesimpulan yang paling logis adalah...",
            "pilihan": {
                "A": "Semua pelamar CPNS instansi X dari bimbingan belajar Y lulus seleksi administrasi.",
                "B": "Semua peserta bimbingan belajar Y tidak lulus seleksi administrasi instansi X.",
                "C": "Beberapa pelamar CPNS instansi X yang tidak lulus seleksi administrasi adalah peserta bimbingan belajar Y.",
                "D": "Beberapa peserta bimbingan belajar Y lulus seleksi administrasi instansi X.",
                "E": "Tidak ada pelamar CPNS instansi X yang lulus seleksi administrasi dari bimbingan belajar Y."
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua yang bulat adalah biji. Sebagian biji rasanya pahit.",
            "pilihan": {
                "A": "Semua yang bulat rasanya tidak pahit",
                "B": "Semua yang rasanya tidak pahit adalah biji",
                "C": "Semua biji adalah bulat",
                "D": "Sebagian yang bulat rasanya tidak pahit",
                "E": "Semua yang rasanya tidak pahit tidak bulat"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua toko di blok A menjual parfum atau menjual buku. Sebagian toko di blok A yang menjual buku mempekerjakan karyawan perempuan.",
            "pilihan": {
                "A": "Semua karyawan yang bekerja di toko parfum adalah perempuan",
                "B": "Tak ada perempuan yang bekerja di toko parfum dan toko buku",
                "C": "Semua karyawan yang bekerja di toko buku adalah laki-laki",
                "D": "Sebagian karyawan toko di blok A adalah perempuan",
                "E": "Sebagian toko di blok A tidak mempekerjakan karyawan laki-laki"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Beberapa diplomat menguasai lebih dari satu bahasa. Semua yang menguasai lebih dari satu bahasa pandai berbicara.",
            "pilihan": {
                "A": "Yang menguasai beberapa bahasa adalah diplomat",
                "B": "Sebagian yang pandai berbicara adalah diplomat",
                "C": "Semua diplomat pandai berbicara",
                "D": "Semua yang pandai berbicara adalah diplomat",
                "E": "Diplomat itu menguasai beberapa bahasa"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Di rumah sakit, semua dokter berbaju putih dan membawa stetoskop. Anton ada di rumah sakit, ia tidak berbaju putih dan tidak membawa stetoskop.",
            "pilihan": {
                "A": "Anton seorang dokter yang tidak berbaju putih",
                "B": "Anton bukan seorang dokter yang berbaju putih",
                "C": "Anton seorang dokter yang tidak membawa stetoskop",
                "D": "Anton bukan seorang dokter",
                "E": "Anton seorang dokter yang tidak membawa stetoskop dan tidak berbaju putih"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua penerima beasiswa berprestasi istimewa. Beberapa siswa menerima beasiswa.",
            "pilihan": {
                "A": "Semua siswa berprestasi istimewa menerima beasiswa",
                "B": "Tak ada siswa berprestasi istimewa yang tak menerima beasiswa",
                "C": "Beberapa siswa berprestasi istimewa",
                "D": "Ada siswa penerima beasiswa yang tak berprestasi istimewa",
                "E": "Tak ada siswa berprestasi istimewa yang menerima beasiswa"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Jika cuaca buruk, penerbangan ditunda. Hari ini penerbangan maskapai X ditunda.",
            "pilihan": {
                "A": "Penerbangan maskapai X ditunda karena cuaca buruk",
                "B": "Semua penerbangan ditunda karena cuaca buruk",
                "C": "Cuaca tidak buruk, tidak ada penerbangan yang ditunda",
                "D": "Hanya maskapai X yang ditunda penerbangannya karena cuaca buruk",
                "E": "Penerbangan maskapai X tidak ditunda, maka cuaca tidak buruk"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua petani di Desa Sukamaju suka bekerja keras. Sebagian petani di Desa Sukamaju adalah pedagang.",
            "pilihan": {
                "A": "Semua petani di Desa Sukamaju adalah pedagang dan suka bekerja keras",
                "B": "Sebagian petani di Desa Sukamaju adalah pedagang dan suka bekerja keras",
                "C": "Ada pedagang di Desa Sukamaju yang tidak suka bekerja keras",
                "D": "Sebagian petani di Desa Sukamaju adalah pedagang yang tidak suka bekerja keras",
                "E": "Semua petani yang suka bekerja keras berasal dari Desa Sukamaju"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua apel dari kota S harum baunya. Sebagian yang harum baunya rasanya manis.",
            "pilihan": {
                "A": "Semua apel dari kota S manis",
                "B": "Tak ada apel dari kota S yang manis",
                "C": "Sebagian apel dari kota S tak manis",
                "D": "Sebagian yang manis bukan apel",
                "E": "Semua apel yang manis berasal dari kota S"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Jika Koko tak berhenti merokok, maka penyakit jantungnya akan bertambah parah. Jika sakit jantungnya parah, maka Koko tidak bisa ikut pertandingan. Koko ikut pertandingan.",
            "pilihan": {
                "A": "Sakit jantung Koko tidak parah",
                "B": "Koko sudah kebal terhadap nikotin",
                "C": "Koko telah mengurangi dosis merokoknya",
                "D": "Koko tidak merokok lagi",
                "E": "Koko dipaksa bermain oleh pelatihnya"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Kenny, pemain bulu tangkis klub Jaya, dapat melakukan service forehand dengan baik. Setiap pemain yang bisa melakukan service forehand dengan baik dapat melakukan dropshot akurat.",
            "pilihan": {
                "A": "Beberapa pemain bulu tangkis klub Jaya dapat melakukan dropshot akurat",
                "B": "Semua pemain bulu tangkis klub Jaya dapat melakukan service forehand dengan baik dan dropshot akurat",
                "C": "Beberapa pemain bulu tangkis klub Jaya dapat melakukan service forehand dengan baik dan dropshot akurat",
                "D": "Beberapa pemain bulu tangkis klub Jaya tak dapat melakukan service forehand dengan baik tetapi bisa melakukan dropshot akurat",
                "E": "Semua pemain bulu tangkis dapat melakukan service forehand dengan baik dan dropshot akurat"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua santri pandai berbahasa Arab. Santri yang pandai berbahasa Arab pandai berpidato. Sebagian santri yang pandai berpidato tak suka matematika.",
            "pilihan": {
                "A": "Sebagian santri tidak suka matematika dan tak pandai berbahasa Arab",
                "B": "Sebagian santri suka matematika dan pandai berbahasa Arab",
                "C": "Sebagian santri suka matematika, tetapi tak pandai berbahasa Arab",
                "D": "Sebagian santri suka matematika dan tak pandai berbahasa Arab",
                "E": "Sebagian santri suka matematika, tetapi tak suka berbahasa Arab"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua pesawat berkabin dan berjendela. Anda berada di tempat yang tidak berkabin dan tidak berjendela.",
            "pilihan": {
                "A": "Anda berada di pesawat berkabin",
                "B": "Anda berada di pesawat berjendela",
                "C": "Anda berada di bukan pesawat",
                "D": "Anda berada di pesawat tidak berkabin",
                "E": "Anda berada di pesawat tidak berkabin dan tidak berjendela"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua wanita senang perhiasan dan kosmetik. A tidak senang kosmetik, tetapi senang perhiasan.",
            "pilihan": {
                "A": "A wanita yang tidak senang kosmetik",
                "B": "A wanita yang senang perhiasan",
                "C": "A wanita yang tidak senang kosmetik meskipun senang perhiasan",
                "D": "A bukan wanita, walaupun senang perhiasan",
                "E": "A bukan wanita, ia senang kosmetik"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua pelaut adalah perenang. Sebagian perenang bukan penyelam.",
            "pilihan": {
                "A": "Semua penyelam adalah pelaut",
                "B": "Semua penyelam bukan pelaut",
                "C": "Sebagian penyelam bukan perenang",
                "D": "Semua pelaut adalah penyelam",
                "E": "Sebagian pelaut bukan penyelam"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua tanaman memiliki buah. Sebagian tanaman berbunga merah.",
            "pilihan": {
                "A": "Semua tanaman yang memiliki buah, berbunga bukan merah",
                "B": "Semua tanaman yang memiliki buah, berbunga merah",
                "C": "Semua tanaman yang tidak memiliki buah, berbunga bukan merah",
                "D": "Sebagian tanaman yang memiliki buah, berbunga merah",
                "E": "Sebagian tanaman yang memiliki buah, berbunga bukan merah"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "1, 3, 5, 7, ...",
            "pilihan": {
                "A": "6",
                "B": "8",
                "C": "9",
                "D": "10",
                "E": "11"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "1, 3, 9, 27, ...",
            "pilihan": {
                "A": "36",
                "B": "45",
                "C": "63",
                "D": "72",
                "E": "81"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "4, 9, 16, 25, ...",
            "pilihan": {
                "A": "36",
                "B": "29",
                "C": "49",
                "D": "45",
                "E": "64"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "1024, 512, 256, ..., 64, 32",
            "pilihan": {
                "A": "128",
                "B": "124",
                "C": "80",
                "D": "192",
                "E": "16"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "1, 2, 3, 5, 8, 13, ...",
            "pilihan": {
                "A": "20",
                "B": "21",
                "C": "22",
                "D": "23",
                "E": "24"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "3, 4, 7, 19, 13, 39, 21, 64, ...",
            "pilihan": {
                "A": "26",
                "B": "28",
                "C": "30",
                "D": "31",
                "E": "40"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "32, 31, 30, 20, 19, 18, 17, ...",
            "pilihan": {
                "A": "9",
                "B": "8",
                "C": "7",
                "D": "6",
                "E": "5"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "98, 80, 64, 50, ...",
            "pilihan": {
                "A": "32",
                "B": "34",
                "C": "35",
                "D": "36",
                "E": "38"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "3, 7, 6, 12, 11, 17, 18, 22, ...",
            "pilihan": {
                "A": "25",
                "B": "26",
                "C": "27",
                "D": "28",
                "E": "29"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "0, 3, 9, 18, ...",
            "pilihan": {
                "A": "27",
                "B": "28",
                "C": "29",
                "D": "30",
                "E": "31"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Hewan golongan unggas berkembang biak dengan cara bertelur. Buaya hewan bukan unggas yang berkembang biak dengan cara bertelur. Kesimpulan yang tepat tentang buaya adalah...",
            "pilihan": {
                "A": "Memiliki cara berkembang biak yang tidak sama dengan unggas",
                "B": "Memiliki ciri-ciri yang sama dengan unggas",
                "C": "Memiliki cara berkembang biak yang sama dengan unggas",
                "D": "Memiliki telur yang sama dengan golongan unggas",
                "E": "Memiliki cara bertelur yang sama dengan unggas"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua siswa kelas X dapat berbahasa Inggris. Semua siswa kelas X yang menduduki ranking 10 besar, juga harus berbahasa Jepang. Kesimpulan yang tepat tentang semua siswa kelas X adalah...",
            "pilihan": {
                "A": "Yang dapat berbahasa Jepang, menduduki ranking 10 besar dan tidak dapat berbahasa Inggris",
                "B": "Yang dapat berbahasa Jepang tidak menduduki ranking 10 besar dan dapat berbahasa Inggris",
                "C": "Yang tidak dapat berbahasa Jepang, tidak menduduki ranking 10 besar dan dapat berbahasa Inggris",
                "D": "Yang tidak dapat berbahasa Jepang menduduki ranking 10 besar dan dapat berbahasa Inggris",
                "E": "Yang tidak dapat berbahasa Jepang, tidak menduduki ranking 10 besar dan tidak dapat berbahasa Inggris"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Teks untuk 4 soal berikutnya:\nDelapan orang, yaitu Dewi, Siska, Rita, Putri, Ali, Bagus, Rio dan Adi makan Bersama. Mereka duduk pada empat meja K, L, M, N yang berderet menempel secara berurutan. Pada setiap meja hanya ada 2 orang yang duduk berhadapan, sedangkan laki-laki dan perempuan tidak boleh duduk bersebelahan. Meja M terletak paling kiri. Meja L terletak diantara meja K dan N.\ni. Rio ada di meja N yang letaknya 2 meja di kanan meja K\nii. Siska ada di meja M\niii. Dewi duduk di kursi kedua sebelah kanan Putri\niv. Bagus duduk berhadapan dengan Siska dan Ali tidak mau duduk disebelah Rio\n\nSiapakah laki-laki yang duduk di meja K dan L?",
            "pilihan": {
                "A": "Bagus dan Ali",
                "B": "Ali dan Rio",
                "C": "Rio dan Adi",
                "D": "Rio dan Bagus",
                "E": "Ali dan Adi"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Berdasarkan teks sebelumnya (Meja K, L, M, N), siswa yang duduk berhadapan di meja M adalah...",
            "pilihan": {
                "A": "Siska dan Bagus",
                "B": "Ali dan Rita",
                "C": "Adi dan Rita",
                "D": "Adi dan Putri",
                "E": "Ali dan Dewi"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Berdasarkan teks sebelumnya (Meja K, L, M, N), siapakah yang duduk di sebelah Dewi?",
            "pilihan": {
                "A": "Hanya Putri",
                "B": "Hanya Rita",
                "C": "Rita dan Putri",
                "D": "Hanya Siska",
                "E": "Siska dan Rita"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Hanya pelukis ternama yang mampu meniru lukisan Monalisa. Leonardo mampu meniru lukisan Monalisa. Orang ini bukan pelukis ternama. Pernyataan yang sesuai dengan pernyataan di atas adalah?",
            "pilihan": {
                "A": "Orang ini pasti Leonardo",
                "B": "Lukisan Monalisa bisa dibuat Leonardo, namun Leonardo tidak bisa melukis objek lainnya",
                "C": "Orang ini mampu meniru lukisan Monalisa",
                "D": "Orang ini pasti bukan Leonardo",
                "E": "Leonardi pelukis tidak ternama"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Jika musim kemarau, maka tumbuh-tumbuhan meranggas. Saat tumbuh-tumbuhan meranggas, sampah berantakan.",
            "pilihan": {
                "A": "Saat kemarau sampau tidak berserakan",
                "B": "Sampah berserakan terjadi pada bukan musim kemarau",
                "C": "Sampah berserakan bukan karena tumbuh-tumbuhan meranggas",
                "D": "Saat musim kemarau sampah berserakan",
                "E": "Saat musim bukan kemarau sampah berserakan"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua penipu pandai bicara dan ramah, Tuan M tidak ramah, tetapi pandai bicara.",
            "pilihan": {
                "A": "Tuan M seorang penipu yang pandai bicara",
                "B": "Tuan M seorang penipu yang tidak ramah",
                "C": "Tuan M seorang penipu yang pandai bicara dan tidak ramah",
                "D": "Tuan M bukan seorang penipu, meskipun pandai bicara",
                "E": "Tuan M buka seorang penipu yang ramah"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Disebuah kebun, cangkul selalu dipakai dengan sabit. Memakai sabit selalu disertai sarung tangan.",
            "pilihan": {
                "A": "Jika cangkul tidak dipakai, maka sarung tangan dikenakan",
                "B": "Jika sabit dipakai, maka cangkul tidak dipakai",
                "C": "Jika sarung tangan tidak dikenakan, maka cangkul tidak dipakai",
                "D": "Jika sarung tangan dikenakan, maka cangkul tidak dipakai",
                "E": "Jika sarung tangan tidak dikenakan, maka cangkul dipakai"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua buah memiliki kulit dan memiliki biji. Ahmad makan makanan yang tidak memiliki kulit dan tidak memiliki biji.",
            "pilihan": {
                "A": "Ahmad makan buah yang tidak memiliki kulit dan tidak memiliki biji",
                "B": "Ahmad makan buah yang memiliki kulit dan tidak memiliki biji",
                "C": "Ahmad makan bukan buah yang tidak memiliki kulit dan tidak memiliki biji",
                "D": "Ahmad makan buah yang memiliki kulit dan memiliki biji",
                "E": "Ahmad makan bukan buah yang memiliki kulit tetapi memiliki biji"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua gerbong kereta api dilengkapi dengan toilet. Televisi hanya pada gerbong kereta X.",
            "pilihan": {
                "A": "Gerbong kereta api X dilengkapi toilet dan televisi",
                "B": "Gerbong kereta api X tidak dilengkapi toilet dan tidak dilengkapi televisi",
                "C": "Gerbong kereta api X dilengkapi toilet tanpa televisi",
                "D": "Gerbong kereta api X dilengkapi televisi tanpa toilet",
                "E": "Gerbong kereta api X dilengkapi sama dengan semua gerbong"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Disebuah pusat perawatan kesehatan, pasien selalu dipijat refleksi dan diberi ramuan. Jika diberi ramuan maka selalu disertai tusuk jarum.",
            "pilihan": {
                "A": "Jika tidak dipijat refleksi, maka tusuk jarum pasti diberikan",
                "B": "Jika diberu ramuan, maka pijat refleksi pasti tidak diberikan",
                "C": "Jika tusuk jarum tidak diberikan maka pijat refleksi pasti tidak diberikan",
                "D": "Jika diberikan tusuk jarum mak pijat refleksi pasti tidak diberikan",
                "E": "Jika tusuk jarum tidak diberikan maka pijat refleksi diberikan"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua limbah adalah cair dan berwarna. Materi B berwarna tetapi tidak cair.",
            "pilihan": {
                "A": "Materi B adalah limbah berwarna",
                "B": "Materi B adalah limbah yang tidak cair",
                "C": "Materi B adalah limbah berwarna yang tidak cair",
                "D": "Materi B adalah limbah tidak berwarna, tetapi limbah cair",
                "E": "Materi B adalah bukan limbah, baik limbah berwarna maupun limbah cair"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua radio memakai baterai. Sebagian radio tidak memakai antena panjang.",
            "pilihan": {
                "A": "Ada radio yang tidak memakai baterai, memakai antena panjang",
                "B": "Ada radio yang tidak memakai antena panjang, tidak memakai baterai",
                "C": "Ada radio yang memakai antena panjang tidak memakai baterai",
                "D": "Ada radio yang tidak memakai baterai, tidak memakai antena panjang",
                "E": "Ada radio yang tidak memakai antena panjang, memakai baterai"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Data usia beberapa siswa pada suatu sekolah sebagai berikut :\nKevin lebih tua dari pada wahyu\nOmbun kebih muda daripada Marchel\n\nJika Tino lebih tua daripada Marchel, maka manakah pernyataan berikut yang harus benar?",
            "pilihan": {
                "A": "Kevin lebih tua daripada Tino",
                "B": "Tino lebih tua daripada Kevin",
                "C": "Wahyu lebih tua daripada Tino",
                "D": "Tino lebih tua daripada Ombun",
                "E": "Semua salah"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Jika guru matematika menambah jam pelajaran di hari Rabu, nilai siswa banyak yang meningkat. Jika nilai siswa banyak yang meningkat, siswa dapat mengikuti kegiatan ekstrakurikuler. Simpulan yang tepat adalah ...",
            "pilihan": {
                "A": "Jika guru matematika menambah jam pelajaran, nilai siswa banyak yang meningkat.",
                "B": "Guru matematika menambahkan jam pelajaran di hari Rabu jika siswa tidak mengikuti kegiatan ekstrakurikuler.",
                "C": "Jika guru matematika menambah jam pelajaran di hari Rabu, ekstrakurikuler dibatalkan.",
                "D": "Siswa dapat mengikuti kegiatan ekstrakurikuler jika guru matematika menambah jam pelajaran di hari Rabu.",
                "E": "Nilai siswa banyak yang meningkat jika tidak mengikuti kegiatan ekstrakurikuler."
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua warga negara yang berumur di atas 17 tahun memiliki hak pilih. Semua mahasiswa S-1 berumur di atas 17 tahun. Simpulan yang tepat adalah ...",
            "pilihan": {
                "A": "Semua mahasiswa S-1 memiliki hak pilih.",
                "B": "Semua warga negara memiliki hak pilih.",
                "C": "Semua mahasiswa S-1 tidak memiliki hak pilih.",
                "D": "Tidak ada mahasiswa S-1 yang memiliki hak pilih.",
                "E": "Tidak ada warga negara yang memiliki hak pilih menjadi mahasiswa S-1."
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Jika saya memiliki uang, saya membuat garasi dan membeli mobil. Saat ini saya memiliki uang. Simpulan yang tepat adalah ...",
            "pilihan": {
                "A": "Saya membeli mobil karena sudah membuat garasi.",
                "B": "Saya membuat garasi dan membeli mobil.",
                "C": "Saya membuat garasi karena membeli mobil.",
                "D": "Saya memiliki uang untuk membeli mobil.",
                "E": "Saya membuat garasi untuk menyimpan mobil."
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua sabun menghasilkan busa. Sebagian sabun adalah deterjen. Simpulan yang tepat adalah ...",
            "pilihan": {
                "A": "Semua yang menghasilkan busa adalah deterjen.",
                "B": "Semua yang menghasilkan busa adalah sabun.",
                "C": "Sebagian yang menghasilkan busa adalah deterjen.",
                "D": "Semua deterjen adalah bahan sabun.",
                "E": "Bukan deterjen menghasilkan busa."
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Yoga menyukai pelajaran Bahasa. Ia sering mengikuti lomba debat menggunakan bahasa Inggris di sekolah. Duta, teman sekolah Yoga, menyukai pelajaran Bahasa, tetapi tidak suka mengikuti lomba berdebat. Kesimpulannya adalah ...",
            "pilihan": {
                "A": "Yoga dan Duta sering mengikuti lomba.",
                "B": "Yoga dan Duta pernah mengikuti lomba berdebat.",
                "C": "Yoga dan Duta mengikuti lomba debat menggunakan bahasa Inggris di sekolah.",
                "D": "Yoga dan Duta belajar bahasa Inggris di sekolah.",
                "E": "Yoga dan Duta menyukai pelajaran Bahasa."
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Semua isi buku Doel merupakan catatan harian dan materi kuliah. Tidak ada cerita fiksi pada catatan dan materi kuliah. Berdasarkan dua pernyataan di atas, simpulan yang tepat adalah ...",
            "pilihan": {
                "A": "Tidak ada cerita fiksi yang menjadi isi dari buku Doel.",
                "B": "Tidak ada isi dari buku Doel yang bukan cerita fiksi.",
                "C": "Ada cerita fiksi yang bukan merupakan isi dari buku Doel.",
                "D": "Semua catatan harian dan materi kuliah adalah isi buku Doel.",
                "E": "Ada cerita fiksi yang merupakan isi buku Doel."
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Sementara, beberapa pejabat adalah orang jujur. Semua orang jujur adalah pejabat. Simpulan yang tepat adalah ...",
            "pilihan": {
                "A": "Sementara orang jujur adalah pejabat.",
                "B": "Sementara orang jujur bukan pejabat.",
                "C": "Sementara pejabat bukan orang jujur.",
                "D": "Semua pejabat adalah orang jujur.",
                "E": "Semua orang jujur bukan pejabat."
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Tidak seorang pun pengunjung museum Ulen Sentalu diizinkan untuk memotret apa yang ada di dalamnya. Sebagian siswa mengisi liburan dengan mengunjungi museum Ulen Sentalu. Simpulan yang tepat adalah ....",
            "pilihan": {
                "A": "Sebagian siswa pengunjung museum Ulen Sentalu tidak diizinkan memotret isi museum.",
                "B": "Sebagian siswa pengunjung museum Ulen Sentalu diizinkan memotret isi museum.",
                "C": "Semua siswa pengunjung museum Ulen Sentalu tidak diizinkan memotret isi museum.",
                "D": "Hanya siswa pengunjung museum Ulen Sentalu yang tidak dilarang memotret isi museum.",
                "E": "Sebagian pengunjung museum Ulen Sentalu yang bukan siswa diizinkan memotret isi museum."
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Jika perusahaan berhasil efisiensi proses produksi, keuntungan perusahaan di akhir tahun akan meningkat. Jika karyawan melaksanakan prosedur operasi standar dengan benar, tidak terjadi kecelakaan kerja yang serius. Saat ini keuntungan perusahaan di akhir tahun tidak meningkat atau terjadi kecelakaan kerja yang serius. Simpulan yang tepat adalah ....",
            "pilihan": {
                "A": "Perusahaan tidak berhasil melakukan efisiensi proses produksi atau karyawan tidak melakukan prosedur operasi standar dengan benar.",
                "B": "Perusahaan tidak berhasil melakukan efisiensi proses produksi dan karyawan tidak melakukan prosedur operasi standar dengan benar.",
                "C": "Perusahaan tidak berhasil melakukan efisiensi proses produksi, tetapi karyawan melaksanakan prosedur operasi standar dengan benar.",
                "D": "Perusahaan berhasil melakukan efisiensi proses produksi, tetapi karyawan tidak melakukan prosedur operasi standar dengan benar.",
                "E": "Perusahaan berhasil melakukan efisiensi proses produksi atau karyawan melakukan prosedur operasi standar dengan benar."
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Jika tubuh sehat maka jiwa akan sehat pula. Jika jiwa sehat maka proses hidup akan dijalani dengan sehat. Dedi memiliki tubuh yang tidak sehat. Simpulan yang tepat adalah ...",
            "pilihan": {
                "A": "Proses hidup Dedi dijalani dengan tidak sehat.",
                "B": "Proses hidup Dedi dijalani dengan sehat.",
                "C": "Dedi memiliki jiwa yang tidak sehat.",
                "D": "Dedi memiliki jiwa yang sehat.",
                "E": "Tidak dapat disimpulkan."
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Lima tahun yang lalu, usia Ana adalah sepertiga dari usia Lina sekarang. Lima belas tahun yang akan datang, perbandingan antara usia Ana dan usia Lina adalah 3:4. Usia Ana 8 tahun yang akan datang adalah...",
            "pilihan": {
                "A": "8 tahun",
                "B": "12 tahun",
                "C": "16 tahun",
                "D": "20 tahun",
                "E": "24 tahun"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Rehan berusia 7 tahun lebih muda dari Richie. Richie beusia 2 tahun lebih tua dari Dita. Selisih usia Rehan dan Dita adalah adalah ....",
            "pilihan": {
                "A": "12 tahun",
                "B": "7 tahun",
                "C": "5 tahun",
                "D": "2 tahun",
                "E": "1 tahun"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Sebuah komik disewakan dengan harga Rp. 2.000,00 untuk 3 hari pertama dan untuk hari selanjutnya Rp. 500,00 per harinya. Jika penyewa komik tersebut membayar Rp. 9.500,00 untuk sebuah buku maka penyewa tersebut menyewa komik selama .... hari.",
            "pilihan": {
                "A": "12 hari",
                "B": "15 hari",
                "C": "18 hari",
                "D": "20 hari",
                "E": "21 hari"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Pipa air di suatu tempat mempunyai 354 cabang saluran untuk keperluan sehari-hari. Setiap rumah terpasang 1 saluran air. Dalam satu hari pemakaian mencapai 61.950 liter air. Rata-rata tiap keluarga menggunakan ... liter air per hari.",
            "pilihan": {
                "A": "125",
                "B": "145",
                "C": "175",
                "D": "185",
                "E": "195"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Biasanya, Baron bekerja 8 jam dalam sehari. Ia bekerja dari pukul 07.30 dan hari ini ia berkerja sampai pukul 16.15. kelebihan waktu kerja hari ini adalah ...",
            "pilihan": {
                "A": "55 menit",
                "B": "45 menit",
                "C": "35 menit",
                "D": "25 menit",
                "E": "10 menit"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Rumah Amir berjarak 3,6 km dari kantornya. Jika Amir naik sepeda dengan kecepatan rata-rata 6 km/jam, lamanya waktu yang dibutuhkan untuk pergi-pulang dari rumah ke kantor selama enam hari kerja adalah ... jam.",
            "pilihan": {
                "A": "7,22",
                "B": "7,20",
                "C": "7,12",
                "D": "4,32",
                "E": "4,2"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Naila mendapat nilai 78, 87, 82, dan 93 untuk empat mata pelajaran. Nilai yang harus diperoleh untuk mata pelajaran yang kelima agar nilai rata-rata Naila 86 adalah ....",
            "pilihan": {
                "A": "93",
                "B": "90",
                "C": "89",
                "D": "87",
                "E": "86"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Sebuah modiste merencanakan membuat kebaya dan kemeja. Jumlah kedua macam barang tersebut adalah 30 buah dan jumlah kemeja adalah 5 kali lebih banyak dari jumlah kebaya. Jumlah kebaya yang dibuat adalah ....",
            "pilihan": {
                "A": "4 buah",
                "B": "5 buah",
                "C": "6 buah",
                "D": "24 buah",
                "E": "25 buah"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Seseorang menabung di sebuah bank sebanyak Rp. 450.000,00. Setelah 1 tahun menabung dan mendapat bunga, jumlah uang tabungannya menjadi Rp. 525.000,00. Bunga yang diterima dalam 1 tahun adalah ....",
            "pilihan": {
                "A": "15,33%",
                "B": "15,67%",
                "C": "16,33%",
                "D": "16,67%",
                "E": "17,67%"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "Sebuah segitiga siku-siku, sisi siku-sikunya 15 cm dan 36 cm. Sisi miring segitiga siku-siku adalah ....cm.",
            "pilihan": {
                "A": "29",
                "B": "31",
                "C": "33",
                "D": "39",
                "E": "41"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "KUNING : BIRU : HIJAU = .... : .... : ....",
            "pilihan": {
                "A": "Putih : Hitam : Abu-abu",
                "B": "Kapur : Penghapus : Papan Tulis",
                "C": "Cat : Kaleng : Rumah",
                "D": "Pulas : Arang : Kertas Gambar",
                "E": "Mobil : Bensin : Jalan"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "KEMEJA : KANCING = RUMAH : ....",
            "pilihan": {
                "A": "Atap",
                "B": "Pintu",
                "C": "Kamar",
                "D": "Tirai",
                "E": "Dapur"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "1 MINGGU : 7 HARI = 1 HARI : ....",
            "pilihan": {
                "A": "1.440 menit",
                "B": "3.600 menit",
                "C": "60 detik",
                "D": "68.400 detik",
                "E": "365 hari"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "BUGIL : PAKAIAN = .... : ....",
            "pilihan": {
                "A": "Kepala : Botak",
                "B": "Rambut : Cukur",
                "C": "Gundul : Rambut",
                "D": "Basah : Pakaian",
                "E": "Rambut : Kepala"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "BINTANG : GALAKSI : ALAM SEMESTA = ....",
            "pilihan": {
                "A": "Buah : Kilo : Karung",
                "B": "Saya : Kita : Mereka",
                "C": "Lapar : Makan : Minum",
                "D": "Huruf : Kata : Cerita",
                "E": "Jarang : Sering : Selalu"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "TINGGI : DALAM = AWAN : ....",
            "pilihan": {
                "A": "Matahari",
                "B": "Minyak tanah",
                "C": "Batu-batuan",
                "D": "Pohon",
                "E": "Tiang listrik"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "LAMPU : GELAP : TERANG = ....",
            "pilihan": {
                "A": "Makanan : Kenyang : Lapar",
                "B": "Minuman : Dahaga : Haus",
                "C": "Bulan : Bintang : Malam",
                "D": "Siang : Terang : Matahari",
                "E": "Makanan : Lapar : Kenyang"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "BELAJAR : KELAS = .... : ....",
            "pilihan": {
                "A": "Kuda : Rintangan",
                "B": "Ikan : Berenang",
                "C": "Balap motor : Sirkuit",
                "D": "Jalan : Hambatan",
                "E": "Telur : Lilin"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "CIUM : HIDUNG = .... : ....",
            "pilihan": {
                "A": "Panas : Keringat",
                "B": "Dahaga : Haus",
                "C": "Kaki : Sepatu",
                "D": "Lihat : Mata",
                "E": "Raba : Tangan"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "RUMAH : GENTENG = KEPALA : ....",
            "pilihan": {
                "A": "Otak",
                "B": "Tubuh",
                "C": "Telinga",
                "D": "Mata",
                "E": "Rambut"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "oven : .... ≈ .... : foto",
            "pilihan": {
                "A": "roti - kamera",
                "B": "pemanggang - album",
                "C": "panas - lensa",
                "D": "gosong - model",
                "E": "matang - fotografer"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "hijau : .... ≈ .... : laut",
            "pilihan": {
                "A": "lumut - ikan",
                "B": "klorofil - ombak",
                "C": "rumput - pantai",
                "D": "daun - asin",
                "E": "hutan - kapal"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "harta : .... ≈ banyak akal : ....",
            "pilihan": {
                "A": "kikir - banyak berpikir",
                "B": "modal - banyak bertanya",
                "C": "boros - banyak tahu",
                "D": "kaya - cerdik",
                "E": "investasi - banyak pendapat"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "demam : .... ≈ menggigil : ....",
            "pilihan": {
                "A": "panas - beku",
                "B": "dokter - takut",
                "C": "sakit - dingin",
                "D": "puskesmas - hujan",
                "E": "obat - panas"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "agresif : .... ≈ manipulatif : ....",
            "pilihan": {
                "A": "kekerasan - korupsi",
                "B": "berkelahi - penipuan",
                "C": "mencibir - menyimpang",
                "D": "membunuh - pembohong",
                "E": "menyakiti - penyelewengan"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": ".... : berjalan ≈ pagi : ....",
            "pilihan": {
                "A": "berlari - fajar",
                "B": "sepatu - sarapan",
                "C": "merangkak - siang",
                "D": "bergerak - lari",
                "E": "sehat - segar"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": ".... : berhenti ≈ berlayar : ....",
            "pilihan": {
                "A": "rem - jangkar",
                "B": "berjalan - berlabuh",
                "C": "terminal - pelabuhan",
                "D": "mulai - mendayung",
                "E": "sopir - nahkoda"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "asin : .... ≈ .... : duri",
            "pilihan": {
                "A": "laut - jarum",
                "B": "rasa - mawar",
                "C": "garam - tajam",
                "D": "masakan - runcing",
                "E": "ikan - landak"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "mendung : .... ≈ .... : malam",
            "pilihan": {
                "A": "awan - bulan",
                "B": "kelabu - gelap",
                "C": "hujan - senja",
                "D": "cuaca - waktu",
                "E": "matahari - bintang"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "TIU",
            "pertanyaan": "musyawarah : .... ≈ .... : lulus",
            "pilihan": {
                "A": "rapat - tamat",
                "B": "berembuk - kuliah",
                "C": "diskusi - tugas",
                "D": "mufakat - ujian",
                "E": "debat - kompetisi"
            },
            "kunci": "D",
            "bobotTKP": null
        }
    ],

    // 4. TKP Only (Tes Karakteristik Pribadi)
    tkp_only: [
        {
            "kategori": "TKP",
            "pertanyaan": "Seorang ASN di bagian pelayanan publik mendapati seorang warga yang ingin mengurus administrasi namun berkasnya tidak lengkap. Warga tersebut mencoba menyelipkan sejumlah uang ke dalam map dengan harapan prosesnya tetap bisa berjalan karena ia sangat membutuhkannya untuk urusan mendesak. Tindakan paling tepat yang mencerminkan integritas tinggi adalah ...",
            "pilihan": {
                "A": "Menerima uang tersebut dengan niat membantu warga, namun tetap meminta warga melengkapi berkas di kemudian hari",
                "B": "Menolak uang tersebut dengan tegas dan meminta warga pulang untuk melengkapi berkas sesuai prosedur yang berlaku",
                "C": "Menolak uang tersebut, menjelaskan prosedur secara santun, serta memberikan arahan atau solusi bagaimana warga bisa melengkapi berkas dengan cepat",
                "D": "Melaporkan warga tersebut kepada pihak berwajib atas upaya gratifikasi tanpa memberikan penjelasan lebih lanjut",
                "E": "Mengabaikan uang tersebut dan memproses berkas seadanya agar tidak terjadi perdebatan di ruang publik"
            },
            "kunci": null,
            "bobotTKP": { "A": 1, "B": 4, "C": 5, "D": 3, "E": 2 }
        },
        {
            "kategori": "TKP",
            "pertanyaan": "Anda adalah seorang ASN di bagian pelayanan perizinan. Suatu hari, sistem server nasional mengalami down sehingga proses perizinan terhenti total sejak pagi. Antrean warga sudah sangat panjang dan beberapa warga mulai marah-marah, berteriak, dan menggebrak meja karena mereka sudah mengambil cuti kerja hanya untuk mengurus izin ini. Atasan anda sedang rapat di luar kota dan rekan kerja anda memilih untuk masuk ke ruang istirahat karena ketakutan. Tindakan anda...",
            "pilihan": {
                "A": "Mengumumkan kepada warga bahwa server sedang rusak dari pusat dan meminta mereka pulang lalu kembali lagi esok hari untuk menghindari keributan lebih lanjut.",
                "B": "Mencetak form manual sebanyak mungkin, membagikannya kepada warga untuk diisi, dan berjanji akan menginputnya ke sistem segera setelah server kembali normal, lalu meminta kontak mereka.",
                "C": "Menghubungi teknisi IT pusat secara terus-menerus sambil meminta petugas keamanan untuk menenangkan warga yang marah.",
                "D": "Menghadapi warga dengan tenang, meminta maaf atas ketidaknyamanan, menjelaskan situasi secara transparan, dan menyediakan minuman ringan sambil mendata berkas mereka secara manual.",
                "E": "Bersembunyi di ruangan belakang bersama rekan kerja karena keselamatan kerja adalah hal utama saat warga mulai bertindak anarkis."
            },
            "kunci": null,
            "bobotTKP": { "A": 2, "B": 4, "C": 3, "D": 5, "E": 1 }
        },
        {
            "kategori": "TKP",
            "pertanyaan": "Anda ditugaskan memimpin tim lintas divisi untuk sebuah proyek digitalisasi layanan publik yang harus selesai dalam 2 bulan. Salah satu anggota tim anda adalah pegawai senior (mendekati masa pensiun) yang sangat gagap teknologi dan menolak menggunakan aplikasi manajemen proyek yang anda terapkan, ia bersikeras menggunakan kertas dan koordinasi tatap muka yang sangat menghambat kecepatan tim. Di sisi lain, ia memiliki relasi yang sangat kuat dengan pejabat daerah yang krusial untuk proyek ini. Sikap anda...",
            "pilihan": {
                "A": "Mengeluarkan pegawai senior tersebut dari tim agar tidak menghambat progres, lalu mencari pengganti yang lebih milenial dan melek IT.",
                "B": "Membiarkan ia menggunakan metode konvensional asal pekerjaannya selesai, demi menjaga hubungan baik dan memanfaatkan relasinya.",
                "C": "Menugaskan satu anggota tim junior untuk menjadi 'asisten' khusus bagi pegawai senior tersebut dalam hal input digital, sehingga relasinya tetap terpakai dan sistem tetap berjalan.",
                "D": "Melaporkan kendala ini kepada atasan dan meminta saran bagaimana cara menghadapi pegawai senior yang keras kepala.",
                "E": "Memaksa pegawai senior tersebut untuk ikut pelatihan IT intensif selama seminggu agar ia bisa mengikuti ritme kerja tim."
            },
            "kunci": null,
            "bobotTKP": { "A": 1, "B": 3, "C": 5, "D": 2, "E": 4 }
        },
        {
            "kategori": "TKP",
            "pertanyaan": "Anda memergoki atasan langsung anda menerima sebuah amplop tebal dari seorang vendor setelah memenangkan tender pengadaan barang di kantor. Atasan anda menyadari bahwa anda melihatnya, lalu ia mendatangi anda, memberikan setengah isi amplop tersebut, dan berkata, 'Ini rezeki kantor, ambil saja buat tambah-tambah biaya sekolah anakmu, toh vendor ini kerjanya bagus dan tidak merugikan negara.' Anda sedang sangat membutuhkan uang untuk biaya rumah sakit istri anda. Sikap anda...",
            "pilihan": {
                "A": "Menerima uang tersebut karena sedang butuh mendesak, namun berjanji dalam hati ini adalah yang pertama dan terakhir kalinya.",
                "B": "Menolak dengan sangat halus sambil beralasan bahwa anda sudah mendapat rezeki dari tempat lain, agar tidak menyinggung perasaan atasan.",
                "C": "Menolak dengan tegas pemberian tersebut, lalu secara anonim melaporkan kejadian ini melalui sistem Whistleblowing System (WBS) instansi.",
                "D": "Menerima uang tersebut sebagai barang bukti, lalu melaporkan atasan anda ke aparat penegak hukum secepatnya.",
                "E": "Menolak pemberian tersebut secara sopan namun tegas, dan mengingatkan atasan bahwa hal tersebut melanggar kode etik ASN dan berpotensi pidana."
            },
            "kunci": null,
            "bobotTKP": { "A": 1, "B": 2, "C": 5, "D": 4, "E": 3 }
        },
        {
            "kategori": "TKP",
            "pertanyaan": "Anda diminta oleh atasan anda untuk menyiapkan sebuah presentasi untuk bertemu dengan client besok pagi. Presentasi anda besok pagi akan menjadi penentu bagi kelanjutan kerja sama perusahaan dengan si client, atasan anda meminta anda untuk membuat presentasi yang bagus dan membuat client antusias untuk tau lebih jauh, sikap anda",
            "pilihan": {
                "A": "Saya akan membuat presentasi yang sangat detail agar bisa tersampaikan pada intinya",
                "B": "Saya akan menggunakan bahasa santai dan sedikit candaan ketika presentasi berlangsung",
                "C": "Membuat presentasi yang memuat penjelasan secara terperinci",
                "D": "Membuat presentasi dengan sedikit tulisan dan beberapa gambar",
                "E": "Membuat presentasi yang memuat inti dari setiap poin yang saya sampaikan"
            },
            "kunci": null,
            "bobotTKP": { "A": 3, "B": 1, "C": 2, "D": 4, "E": 5 }
        },
        {
            "kategori": "TKP",
            "pertanyaan": "Di kantor anda beredar kabar bahwa salah seorang rekan kerja anda menggelapkan uang penjualan bulanan untuk keperluan pribadinya. Dan sudah beberapa hari ini rekan tersebut tidak masuk bekerja. Kabar ini sangat cepat menyebar keseluruh karyawan, sehingga menjadi buah bibir dikantor anda, menurut anda",
            "pilihan": {
                "A": "Pihak perusahaan harus memberikan sanksi yang tegas terhadap pelaku",
                "B": "Sifat teman tersebut sudah diluar batas dan dapat menyebabkan kerugian besar pada perusahaan",
                "C": "Kabar tersebut belum pasti jadi saya tidak mau berkomentar lebih jauh",
                "D": "Saya akan mencari kebenaran informasi tersebut sebelum memberikan pendapat",
                "E": "Saya tanyakan kepada teman teman yang lainnya apakah informasi tersebut benar adanya"
            },
            "kunci": null,
            "bobotTKP": { "A": 3, "B": 2, "C": 5, "D": 4, "E": 1 }
        },
        {
            "kategori": "TKP",
            "pertanyaan": "Siang ini semua karyawan dikumpulkan oleh atasan anda untuk membicarakan permasalahan kantor. Kemudian pada saat anda diminta atasan anda untuk memberikan tanggapan terhadap sebuah permasalahan yang ada di kantor anda tersebut, tiba tiba rekan kerja anda menyanggah penjelasan anda pada saat anda berbicara, menurut anda",
            "pilihan": {
                "A": "Wajar saja, karena dalam diskusi komunikasi harus berlangsung dua arah",
                "B": "Mungkin apa yang saya jelaskan barusan tidak sesuai dengan gagasannya, namun ini adalah hal yang wajar di dalam sebuah duskusi",
                "C": "Harusnya dia mendengarkan saya dulu, lalu baru berbicara",
                "D": "Seharusnya rekan saya bisa angkat tangan jika ingin menyampaikan gagasannya dalam diskusi",
                "E": "Teman saya ingin menyampaikan gagasannya juga pada saat saya berbicara"
            },
            "kunci": null,
            "bobotTKP": { "A": 4, "B": 5, "C": 2, "D": 3, "E": 1 }
        },
        {
            "kategori": "TKP",
            "pertanyaan": "Beberapa minggu yang lalu atasan anda pernah memberitahu anda bahwa dia mempunyai jadwal untuk bisa menandatangani kontrak dengan beberapa orang klien baru dalam beberapa minggu ke depan untuk pengembangan perusahaan, namun tampaknya atasan anda lupa akan hal tersebut karena terlalu sibuk mengurusi banyak hal dan sering tidak berada dikantor karena pergi ke luar kota, sebagai seorang asisten yang akan anda lakukan adalah",
            "pilihan": {
                "A": "Mengingatkan atasan bahwa punya rencana untuk bertemu klien",
                "B": "Membuat rencana pertemuan dan memberitahu atasan untuk disetujui",
                "C": "Membuat rencana pertemuan dengan klien atasan dan memberitahukannya",
                "D": "Memberitahu atasan bahwa dia harus bertemu klien untuk urusan bisnis dalam waktu dekat",
                "E": "Menunggu atasan membicarakannya lagi, lalu baru melakukan persiapan pertemuan"
            },
            "kunci": null,
            "bobotTKP": { "A": 4, "B": 5, "C": 3, "D": 2, "E": 1 }
        },
        {
            "kategori": "TKP",
            "pertanyaan": "Dosen anda meminta anda untuk ikut dalam sebuah perlombaan yang dalam waktu dekat akan diselenggarakan oleh universitas tempat anda berkuliah. Dosen anda melihat bahwa anda memiliki talenta sesuai dengan diskripsi dari perlombaan, akan tetapi anda tidak menyadarinya, sikap anda",
            "pilihan": {
                "A": "Berterimakasih kepada Dosen tersebut karena telah memuji anda sebagai seseorang yang bertalenta",
                "B": "Menerima dan mengembangkan lebih dalam talenta yang anda miliki",
                "C": "Bersedia mengikuti perlombaan tersebut dan meminta bantuan dosen untuk membantu dan membimbing anda",
                "D": "Bersedia asalkan dosen anda selalu mau memberikan bimbingan jika nanti menemui permasalahan",
                "E": "Menerima dan mengikuti perlombaan tersebut sebisanya"
            },
            "kunci": null,
            "bobotTKP": { "A": 1, "B": 5, "C": 4, "D": 3, "E": 2 }
        },
        {
            "kategori": "TKP",
            "pertanyaan": "Hampir setiap minggu anda selalu menjalankan dinas ke luar kota. Pekerjaan anda menuntut anda untuk selalu mempersiapkan segala kebutuhan yang diperlukan ketika bertugas, mulai darang barang barang pribadi sampai ke dokumen penting yang harus dibawa. Kendala yang sering terjadi adalah anda agak sedikit pelupa, terkadang barang bawaan anda bisa tertinggal, belum lagi resiko kerusakan selama perjalanan atau hilang, sikap anda..",
            "pilihan": {
                "A": "Menyiapkannya jauh jauh hari agar tidak lupa",
                "B": "Selalu membawa dokumen cadangan di tempat berbeda",
                "C": "Menyimpan dengan sistem online agar bisa diakses dimana saja",
                "D": "Menyimpan dokumen di dalam hard disk",
                "E": "Tetap mempersiapkan seperti biasa yang anda lakukan"
            },
            "kunci": null,
            "bobotTKP": { "A": 3, "B": 4, "C": 5, "D": 2, "E": 1 }
        },
        {
            "kategori": "TKP",
            "pertanyaan": "Anda merupakan seorang front office di sebuah perusahaan di instansi pemerintah. Tugas anda adalah melayani setiap tamu yang datang ke instansi pemerintah tempat anda mengabdi. Suatu hari anda kedatangan seorang tamu dan ingin bertemu dengan pimpinan anda untuk suatu urusan yang harus diputuskan pada saat itu juga. Sedangkan pimpinan anda baru saja pagi tadi harus keluar kota untuk urusan lain yang juga tidak bisa ditinggalkannya. Tamu tersebut terus mendesak anda untuk mencoba menghubungi atasan anda tapi setelah beberapa kali anda coba, nomer atasan anda tetap tidak dapat dihubungi, kemudian tamu tersebut meminta anda memberikan keputusan sikap anda",
            "pilihan": {
                "A": "Mengambil keputusan tanpa petunjuk atasan selama tidak bertentangan dengan kebijakan yang ada diperusahaan",
                "B": "Tidak berani mengambil keputusan tanpa petunjuk atasan saya, dan meminta tamu tersebut datang besok",
                "C": "Ragu – ragu dalam mengambil keputusan tanpa petunjuk atasan saya, karena takut melakukan kesalahan",
                "D": "Menunda – nunda pengambilan keputusan tanpa petunjuk atasan saya karena takut melakukan kesalahan",
                "E": "Mengambil keputusan tanpa petunjuk atasan karena sangat mendesak atasan pasti memakluminya asal benar"
            },
            "kunci": null,
            "bobotTKP": { "A": 5, "B": 4, "C": 2, "D": 1, "E": 3 }
        },
        {
            "kategori": "TKP",
            "pertanyaan": "Karena kekurangan sumber daya manusia di sebuah kantor cabang perusahaan tempat anda bekerja, Atasan anda memutuskan hendak memindahkan anda ke cabang yang sama sekali tidak pernah anda kunjungi disebuah pulau terpencil, padahal anda adalah karyawan yang sudah lama mengabdi dan berprestasi dan anda cukup dekat dengan atasan, sikap anda",
            "pilihan": {
                "A": "Menolak dengan halus dan mengusulkan yang lain saja, Karena anda merupakan karyawan lama yang seharusnya tetap bekerja di kantor pusat",
                "B": "Berdiskusi dengan atasan anda terkait proses pemindahan anda ke kantor cabang yang baru tersebut",
                "C": "Bersedia di pindah tanpa membantah sedikit pun perintah dari atasan dan kebijakan perusahaan",
                "D": "Menerima tapi berusaha mengusulkan karyawan yang lain saja karna anda merasa senior dan disegani di kantor",
                "E": "Berangkat mengikuti keputusan perusahaan tentang pemindahan anda ke kantor cabang baru tersebut"
            },
            "kunci": null,
            "bobotTKP": { "A": 1, "B": 4, "C": 5, "D": 2, "E": 3 }
        },
        {
            "kategori": "TKP",
            "pertanyaan": "Anda seorang karyawan yang memiliki dedikasi yang tinggi terhadap pekerjaan. Suatu hari anda dihadapkan dengan pekerjaan yang sangat banyak dan semuanya memiliki deadline yang sama. Sebagai karyawan yang profesional apa yang anda lakukan",
            "pilihan": {
                "A": "Menyelesaikan pekerjaan sesuai deadline dengan hasil sebisanya",
                "B": "Memilih lembur dengan harapan mendapat tambahan gaji berupa uang lembur",
                "C": "Pulang sesuai jadwal dengan meninggalkan setumpuk pekerjaan di meja untuk dikerjakan besok",
                "D": "Melapor pada atasan bahwa anda butuh bantuan karyawan lain dalam menyelesaikan tugas yang banyak",
                "E": "Membawa tugas tersebut ke rumah dan mengerjakannya dirumah sampai larut malam"
            },
            "kunci": null,
            "bobotTKP": { "A": 3, "B": 4, "C": 1, "D": 5, "E": 2 }
        },
        {
            "kategori": "TKP",
            "pertanyaan": "Karena terjadinya beberapa permasalahan di perusahaan anda yang mengakibatkan terjadinya penurunan financial. Hal ini tentu saja berdampak bagi kelangsungan seluruh komponen perusahaan termasuk karyawan, apa yang akan anda lakukan",
            "pilihan": {
                "A": "Tetap bekerja dengan baik seperti hari hari sebelumnya",
                "B": "Membuat strategi baru untuk meningkatkan hasil kinerja",
                "C": "Mempelajari hal yang mungkin jadi penyebab penurunan tersebut",
                "D": "Sebagai karyawan saya akan mengikuti arahan dari atasan dan kebijakan perusahaan",
                "E": "Tetap bertahan di perusahaan dan miminta perusahaan mencari jalan keluar"
            },
            "kunci": null,
            "bobotTKP": { "A": 3, "B": 5, "C": 4, "D": 2, "E": 1 }
        }
    ],

    // 5. Bahasa Indonesia
    bahasa_indonesia: [
        {
            "kategori": "Bahasa Indonesia",
            "pertanyaan": "Kalimat yang menggunakan ragam bahasa baku dengan tepat adalah...",
            "pilihan": {
                "A": "Dia bilang kalau hari ini nggak bisa hadir rapat.",
                "B": "Peserta rapat dihimbau untuk mematikan telepon genggam.",
                "C": "Banyak karyawan-karyawan yang mengeluhkan kebijakan baru tersebut.",
                "D": "Direktur menugaskan stafnya untuk menyusun laporan pertanggungjawaban.",
                "E": "Silahkan mengambil formulir pendaftaran di meja resepsionis."
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Indonesia",
            "pertanyaan": "Sejumlah pengusaha sepatu kecil menengah di Kabupaten Mojokerto mengalami kesulitan menghadapi aturan perdagangan bebas atau free trade agreement (FTA) ASEAN-China. Mereka mengaku merugi sejak isu itu digulirkan pada awal Januari lalu. Para pedagang mengalami dampak negatif aturan itu. Pada sektor usaha kecil sepatu, misalnya, pengusaha merugi sampai 50%. \"Orderan berkurang 50%. Artinya, produksi kami juga berkurang sebesar itu,\" kata Budi Utomo, anggota Gabungan Pengusaha Sepatu (GPS) Kabupaten Mojokerto. Sepinya order terjadi karena sebagian besar pelanggan tidak melakukan pemesanan karena menunggu masuknya produk impor lebih murah dari pada harga produk lokal.\n\nPernyataan berikut yang tidak sesuai dengan isi paragraf di atas adalah ....",
            "pilihan": {
                "A": "FTA ASEAN-China membuat panik sejumlah pengusaha sepatu kecil menengah di Kabupaten Mojokerto.",
                "B": "Para pelanggan pengusaha sepatu di Kabupaten Mojokerto lebih memilih produk sepatu impor dari pada membeli sepatu lokal.",
                "C": "Sejak Januari lalu, kerugian akibat FTA ASEAN-China dirasakan para pengusaha sepatu kecil menengah di Kabupaten Mojokerto.",
                "D": "Akibat FTA ASEAN-China kerugian para pengusaha kecil di Kabupaten Mojokerto mencapai sekitar 50%.",
                "E": "Banyak pelanggan pengusaha sepatu di Kabupaten Mojokerto menghentikan permintaan pesanan karena menunggu pelaksanaan FTA ASEAN-China."
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Indonesia",
            "pertanyaan": "Lidah lalat buah ternyata membantu memberikan jawaban atas pertanyaan mengenai kebiasaan makan manusia. Sebuah studi yang dilakukan tim dari Texas A&M University mengungkap bahwa lidah lalat itu juga menawarkan jalan baru untuk menangani obesitas. Paul Hardin dkk, meneliti organ perasa pada lidah drosophila yang memicu hasrat lalat buah untuk makan atau sebaliknya. Mereka menemukan bahwa jam tubuh harian serangga itu menemukan perilaku makan dan sensitivitas rasa. Ini kemungkinan juga berlaku pada manusia. Riset menunjukkan bahwa sensitivitas tinggi terhadap gula terjadi pada siang hari dan berkurang pada malam hari. Jika jam itu dihilangkan, lalat akan melahap lebih banyak makanan. Jadi, jam makan ini tampaknya menekan keinginan untuk makan pada waktu tertentu.\n\nRangkuman yang tepat untuk paragraf di atas adalah ...",
            "pilihan": {
                "A": "Riset tim dari Texas A&M University menunjukkan sel sensor lidah lalat buah bisa mengendalikan waktu makan dan jumlah makanan serta sangat berdampak terhadap nafsu makan serangga.",
                "B": "Penelitian tim dari Texas A&M University menunjukkan bahwa lidah lalat buah ternyata memberikan jawaban besar atas pertanyaan mengenai perilaku kebiasaan makan hewan tersebut yang mungkin juga berlaku bagi manusia.",
                "C": "Studi yang dilakukan tim dari Texas A&M University mengungkap bahwa penelitian terhadap lidah lalat buah dapat menjadi solusi untuk mengendalikan nafsu makan pada serangga.",
                "D": "Penelitian yang dilakukan oleh tim dari Texas A&M University menunjukkan bahwa lidah lalat buah dan jam tubuh hewan tersebut menjadi salah satu faktor pengendali perilaku makan hewan tersebut yang mungkin juga berlaku pada manusia.",
                "E": "Hasil penelitian terhadap lidah lalat buah yang terkait dengan pengendalian waktu makan dan jumlah makanan yang dikonsumsi dapat menawarkan jalan baru untuk menangani obesitas pada manusia."
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Indonesia",
            "pertanyaan": "Fisika plasma merupakan salah satu bidang fisika yang ... gas terionisasi, yang terkenal sebagai plasma. Dalam fisika dan kimia, plasma adalah ... fase gas berenergi, yang sering ditunjuk sebagai \"keadaan benda keempat\", yang beberapa atau semua elektron di orbit atom terluar telah ... dari atom atau molekul. Hasilnya adalah sebuah koleksi ion dan elektron yang tidak lagi ... satu dengan yang lain.\n\nUrutan kata yang tepat untuk melengkapi teks di atas adalah ...",
            "pilihan": {
                "A": "mempelajari, keadaan, terpisah, terkait.",
                "B": "membahas, keadaan, terdiri, terpisah.",
                "C": "menyangkut, sifat, terpisah, menyatu.",
                "D": "menguraikan, sifat, terikat, terpisah.",
                "E": "meliputi, keadaan, terurai, terpadu."
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Indonesia",
            "pertanyaan": "Peningkatan kesejahteraan masyarakat merupakan tanggung jawab bersama antara pemerintah dan masyarakat. Baik pria maupun wanita, hendaknya selalu meningkatkan rasa tanggung jawab mereka terhadap kesejahteraan bersama. Kader-kader wanita diharapkan juga peduli terhadap kesejahteraan masyarakat pada umumnya. Banyak kaum wanita yang dipaksa bekerja karena suami mereka terkena PHK. Untuk itu, pemerintah perlu memperhatikan nasib kaum wanita yang suami mereka terkena PHK.\n\nIde pokok paragraf di atas adalah ...",
            "pilihan": {
                "A": "Peningkatan kesejahteraan masyarakat perlu dilakukan secara bersama, antara pria dan wanita.",
                "B": "Kesejahteraan keluarga korban PHK menjadi tanggung jawab pemerintah.",
                "C": "Kader-kader wanita diharapkan juga peduli terhadap kesejahteraan masyarakat pada umumnya.",
                "D": "Pemerintah dan masyarakat bertanggung jawab terhadap kesejahteraan masyarakat.",
                "E": "Demi kesejahteraan keluarga, kaum wanita yang suami mereka di-PHK terpaksa bekerja."
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Indonesia",
            "pertanyaan": "(1) Para peneliti mengemukakan bahwa area otak untuk bernyanyi berbeda dengan area otak untuk berbicara. (2) Mereka menyajikan temuan mereka tersebut pada pertemuan American Association for the Advancement of Science di San Diego. (3) Jika pusat bicara seseorang rusak oleh stroke, ia dapat belajar menggunakan pusat bernyanyinya. (4) Dalam uji coba klinis, para peneliti menunjukkan cara otak merespons terapi intonasi melodi. (5) Gottfried Schlaug, profesor neurologi Beth Israel Deaconess Medical Center dan Harvard Medical School di Boston Amerika Serikat memimpin uji coba tersebut. (6) Penelitian itu menemukan bahwa pasien stroke dengan kerusakan otak membuat pasien tidak bisa bicara tetapi bisa bernyanyi.\n\nKalimat utama paragraf di atas adalah ...",
            "pilihan": {
                "A": "kalimat 1",
                "B": "kalimat 3",
                "C": "kalimat 4",
                "D": "kalimat 5",
                "E": "kalimat 6"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Indonesia",
            "pertanyaan": "Affandi adalah putra R. Koesoema, seorang mantri ukur di pabrik gula Ciledug, Cirebon. Affandi memiliki pendidikan formal yang cukup tinggi. Bagi orang-orang segenerasinya, hanya segelintir anak negeri saja yang memperoleh pendidikan HIS, MULO, dan AMS. Akan tetapi, bakat seni lukisnya yang sangat kuat mengalahkan disiplin ilmu lain dalam kehidupannya. Bakat itu menjadikan nama Affandi tenar, sama dengan nama-nama tokoh atau pemuka bidang lainnya. Sebelum menjadi pelukis, Affandi pernah menjadi guru, tukang sobek karcis, dan pembuat gambar reklame bioskop di salah satu gedung bioskop di Bandung. Pekerjaan tersebut tidak lama ia geluti karena Affandi lebih tertarik pada seni lukis. Sekitar tahun 30-an, Affandi bergabung dalam Kelompok Lima Bandung, yaitu kelompok lima pelukis Bandung. Kelompok ini memiliki andil besar dalam perkembangan seni rupa Indonesia.\n\nPernyataan berikut yang sesuai dengan isi teks di atas adalah ...",
            "pilihan": {
                "A": "Pendidikan informal Affandi (di HIS, MULO, dan AMS) cukup tinggi pada masa generasinya.",
                "B": "Kelompok Lima Bandung didirikan Affandi untuk mengembangkan seni rupa Indonesia.",
                "C": "Melukis menjadi pekerjaan paling lama digeluti Affandi dalam hidupnya.",
                "D": "Profesi Affandi dirintis sejak awal memulai pendidikan formalnya di HIS, MULO, dan AMS.",
                "E": "Affandi menjadi pelukis bersama pelukis terkenal, yaitu R. Koesoema."
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Indonesia",
            "pertanyaan": "Dalam ilmu ekonomi, inflasi adalah suatu proses meningkatnya harga-harga secara umum dan terus-menerus berkaitan dengan mekanisme pasar. Istilah inflasi juga berarti peningkatan persediaan uang yang menyebabkan kenaikan harga. Inflasi terjadi jika proses kenaikan harga berlangsung secara terus-menerus dan saling memengaruhi.\n\nAgar menjadi paragraf yang baik, kalimat penutup yang sesuai adalah ...",
            "pilihan": {
                "A": "Dengan demikian, ada dua cara untuk mengukur tingkat inflasi, yaitu CPI dan GDP deflator.",
                "B": "Akibatnya, untuk mengukur tingkat inflasi diperlukan dua cara, yaitu CPI dan GDP deflator.",
                "C": "Jadi, ada dua cara untuk mengukur tingkat inflasi, yaitu CPI dan GDP deflator.",
                "D": "Dalam hal ini, ada dua cara untuk mengukur tingkat inflasi, yaitu CPI dan GDP deflator.",
                "E": "Oleh karena itu, ada dua cara untuk mengukur tingkat inflasi, yaitu CPI dan GDP deflator."
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Indonesia",
            "pertanyaan": "Pertumbuhan penggunaan internet yang pesat sekali di Indonesia telah diakui membawa pengaruh positif dalam berbagai macam hal. Namun, masih banyak yang terlupakan, di sisi lain internet juga berpotensi memberi dampak buruk, khususnya kepada golongan usia anak-anak. Anak-anak dan remaja menjadi golongan yang rentan terhadap praktik kejahatan siber, seperti pencabulan.\n\nParagraf di atas dapat diperbaiki dengan cara berikut, kecuali ...",
            "pilihan": {
                "A": "Kata diakui dan macam dihilangkan.",
                "B": "Tanda koma sebelum kata seperti dihilangkan",
                "C": "Tanda titik diletakkan setelah kata terlupakan.",
                "D": "Kata namun diganti akan tetapi.",
                "E": "Kata kepada dihilangkan."
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Indonesia",
            "pertanyaan": "Prof. DR. Muhammad Nuh, Menteri Pendidikan Nasional mengatakan, hasil Ujian Nasional tahun ini belum dapat digunakan sebagai penentu penerimaan mahasiswa baru melalui SNMPTN.\n\nKalimat tidak efektif di atas dapat diperbaiki dengan cara berikut, kecuali ...",
            "pilihan": {
                "A": "Huruf R pada singkatan DR. dituliskan dengan huruf kecil.",
                "B": "Kata bahwa ditambahkan setelah kata mengatakan.",
                "C": "Koma setelah kata mengatakan dihilangkan.",
                "D": "Kata Ujian Nasional ditulis ujian nasional.",
                "E": "Koma setelah kata Nuh dihilangkan."
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Indonesia",
            "pertanyaan": "Walaupun wajib belajar pendidikan dasar 9 tahun sudah dicanangkan dalam kurun waktu yang relatif lama, penuntasannya masih belum tercapai. Banyak masalah yang timbul dalam pelaksanaan wajib belajar 9 tahun, terutama di daerah pedesaan dan daerah pegunungan atau terpencil. Penyebab ketidaktuntasan wajib belajar dapat diidentifikasi sesuai dengan kondisi wilayah dan masyarakatnya. Dari sejumlah hasil penelitian ditemukan bahwa penyebabnya adalah (1) masyarakat memiliki kondisi ekonomi yang lemah, (2) sosial budaya masyarakat yang kurang mendukung, (3) kurangnya sarana pendidikan, (4) rendahnya kualitas dan dedikasi guru, (5) letak geografis yang sulit dijangkau, (6) keterbatasan informasi, (7) persepsi masyarakat yang menganggap kurang pentingnya pendidikan bagi dirinya sendiri. Kenyataan *itu* diperkuat oleh hasil penelitian pada awal dicanangkannya wajib belajar 6 tahun.\n\nKata *itu* yang dicetak miring pada teks di atas merujuk pada...",
            "pilihan": {
                "A": "Banyaknya masalah di daerah terpencil.",
                "B": "Penuntasan wajib belajar belum tercapai.",
                "C": "Banyaknya masalah pelaksanaan wajib belajar.",
                "D": "Ketidaktuntasan wajib belajar.",
                "E": "Penyebab ketidaktuntasan wajib belajar."
            },
            "kunci": "E",
            "bobotTKP": null
        }
    ],

    // 6. Bahasa Inggris
    bahasa_inggris: [
        {
            "kategori": "Bahasa Inggris",
            "pertanyaan": "If the weather _____ better, we would go to the beach.",
            "pilihan": {
                "A": "is",
                "B": "was",
                "C": "were",
                "D": "will be",
                "E": "had been"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Inggris",
            "pertanyaan": "Scientist are as obsessed with the question of why the superold survive and thrive as Ponce de Leon was to find the Fountain of Youth. They want to understand why the Japanese islands of Okinawa are home to the world's largest population of centenarians, with almost 60 or its 1.3 million inhabitants living into their second century-many of them active and looking decades younger than their actual years. Like weekend visitors on the summer ferry to Martha's vineyard, scientists and sociologists block the boats to Sardinia and Nova Scotia, Canada, to see why those craggy locales hide vast clusters of the superold.\n\nAs well as studying these populations intensively to unlock their secrets. Scientist have also taken a hard look at the very old in the U.S., most notably in the New England Centenarian Study, led by Dr. Thomas their longevity. \"I never took a drink\". \"I drank a shot of whiskey every day,\" experts are trying to unravel and understand the biological factors that allow some people to reach 100 while others drop off in their 70s or 80s Reseachers are particularly interested in determining which factors allow up to 30% of those who reach 100 to do so in sufficient mental and physical health: a whopping 90% of centenarians, according to Perls, remain functionally independent up to age 92.\n\nIt is pretty obvious even non-scientists that how you get their depends partly on the genes you are born with and partly on lifestyle-what and how much you eat, where you live and what types of stress and trauma you experience. How much depends on each factor, through, was unknown until Swedish scientists tackled the problem in 1998. They did it by looking at the only set of people who share genes but not lifestyle : identical twins who were separated at birth and reared apart. If genes were most important, you would expect the twins to die at about the same age. In fact, they do not, and the average difference convinced the scientists that only about 20% to 30% of how long we live is genetically deter-mined. The dominant factor is lifestyle.\n\nWhat is the topic of text above ?",
            "pilihan": {
                "A": "Long-life span",
                "B": "Survival",
                "C": "Youth",
                "D": "Old age",
                "E": "Health secrets"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Inggris",
            "pertanyaan": "Based on the previous text about the superold and centenarians, according to the information in the passage, people may .......",
            "pilihan": {
                "A": "Reach an old age if their parents do so",
                "B": "Not reach old age unless they live in areas where it is prevalent",
                "C": "Reach old age if they are brought up separately fron their siblings",
                "D": "Fail to reach an old age unless they are mentally healthy",
                "E": "Reach old age if they keep a healthy lifestyle"
            },
            "kunci": "E",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Inggris",
            "pertanyaan": "Based on the previous text about the superold and centenarians, which of the following is true about the information in the text ?",
            "pilihan": {
                "A": "Gene quality contributes much more to life span",
                "B": "Okinawa people look younger at their actual age",
                "C": "All alcoholic drinks decrease life expectation",
                "D": "All of Dr. Perls' subjects are self-reliant",
                "E": "Superold people normally can exceed 100"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Inggris",
            "pertanyaan": "Based on the previous text about the superold and centenarians, which of the following best expresses the main idea of the text ?",
            "pilihan": {
                "A": "Several biological factors are at work affecting life span",
                "B": "Genes and lifestyles are essential for a long-life span",
                "C": "Eldery people cluster in particular part of the world",
                "D": "Biological factors influence mental and physical health",
                "E": "The population of the eldery people is increasing"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Inggris",
            "pertanyaan": "Many modern educational experts claim that teaching facts and academic skill is less important than achieving other social objectives. For some liberals, the school must first change attitudes or provide nurturing in place of failed families or help establish equality and social justice. For some conservatives, the schools must first prepare kids for the workplace by molding them into supple corporate citizens, while other want the focus to be on family values, a competitive spirit, or other social or behavioral objectives. But the idea of simply educating kids seems to have taken a backseat to most educational expert and administrators. They miss the point that kids with real academic skills, especially skills in reading, writing, and mathematics, are more likely to overcome social barriers, more likely to have genuine self esteem, and likely to be genuinely prepared for the challenges of life and the workplace . By emphasizing so many things besides a genuine, classical education, the educational establishment tends to sell our kids short and bring about many or the problems they claim to be solving.\n\nConsider the case of Wesley Elementary School in Houston. According to Richard Nadler in article, \"Failing Grade\", Wesley has all the demographic markers of a school bound for failure. Over 80 % of the students quality for subsidized lunches, and nearly all are minorities (92 % black, 7 % Hispanic). Yet it ranks among the best school of Houston, with first-graders placing at the 82nd percentile level in reading test which is 50 points higher than the expected level for similar at-risk schools.\n\nWhat has made Wesley so successful? The answer is classical education in the form of Direct Instruction curriculum design by Siegfried Engelmann, an example of the much ridiculed \"Sage-on-the-stag\" approach. The Direct Instruction system boosts reading, writing, and math scores by 30 to 40 percentile points in at-risk schools. Sadly, Engelmann like others who successfully challenge popular fads in educational reform, has been rejected by much of the educational establishment. His success is in embarrassment to them.\n\nWhich of the following best reflects the author's opinion about schools?",
            "pilihan": {
                "A": "Consider the case of Wesley Elementary School in Houston",
                "B": "Teaching social skills is more important than academic skills",
                "C": "Teaching academic skills is somehow contemporary",
                "D": "Teaching academic skills is more important than social skills",
                "E": "Teaching social skills should use conventional methods"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Inggris",
            "pertanyaan": "Based on the text about Wesley Elementary School, ......... paragraph in which the second paragraph presents",
            "pilihan": {
                "A": "an elaboration of purposes of an effective school",
                "B": "a discussion on the requirements for the good school",
                "C": "a real example rather than an opinion of good schooling",
                "D": "an illustration to support the opinions on school subjects",
                "E": "evidence in favor of the value of social objectives"
            },
            "kunci": "C",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Inggris",
            "pertanyaan": "Based on the text about Wesley Elementary School, from the second paragraph, it can be inferred that",
            "pilihan": {
                "A": "the students at Wesley are mostly colored",
                "B": "the students at Wesley are from the haves",
                "C": "the colored student usually perform better",
                "D": "Wesley is a successful prestigious school",
                "E": "Wesley curriculum is adopted by other school"
            },
            "kunci": "A",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Inggris",
            "pertanyaan": "It is common knowledge that as women get older, pregnancy becomes a riskier enterprise. Advanced maternal ages is linked to a number of developmental disorders in children, such as Down's syndrome. Now , a study has confirmed that older mothers are more likely to give birth to a child with autism, too. The authors of the epidemiological study, published February 8 in Autism Research, examined the parental age of more than 12.000 children with autism and nearly five million \"control\" children between 1990 and 1999, all living in California. The researchers found that mother over 40 had a 51 percent higher risk of having a child with autism than mother 25 to 29, and a 77 percent higher risk than mothers under 25.\n\nAutism ___ a developmental disorder characterized by impaired social interaction and communication ___ appears to be on the rise. The U.S. centers for Disease Control and Prevention now estimates that as many as one in 110 children in the U.S. has an autistic spectrum disorder ___ a group of developmental disorders including autism, Asperger's syndrome and pervasive developmental disorder. The prevalence of autistic spectrum disorders in California in 2007 was 12 times that from 1987, representing in average annual growth of 13 percent, according to a report from the California Department of Developmental Services. Only a fraction of these extra cases can be explained by changes to diagnostic criteria and earlier diagnoses .\n\nMaternal age is also increasing in the U.S.A. California-based study reported a three-fold increase in the number of births to woman ages 40 to 44 between 1982 and 2004. But this trend toward delayed childbearing accounted for less than 5 percent of the total increase in autism diagnose in California over the decade. According to the study ___ a finding that surprised Janie Shelton, a doctoral student in University of California Davis's Department of Public Health Sciences and the study's lead author. \"I would have expected to see more of a contribution, because age is a risk factor and woman are having kids later,\" she says. Earlier work had suggested that both maternal and paternal ages are independently associated with autism risk. But the current study found that paternal ages is only a risk factor when the mother is under 30.\n\nIn the text above the writer deals with a topic on ......",
            "pilihan": {
                "A": "Prevalence of autism among children",
                "B": "Possible biological causes of autism",
                "C": "Research findings on mental disorders",
                "D": "Maternal age and autism in children",
                "E": "Negative effects of delayed pregnancy"
            },
            "kunci": "D",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Inggris",
            "pertanyaan": "Based on the text about autism and maternal age, which of the following according to the text is implied about autism in children?",
            "pilihan": {
                "A": "It is genetically transmitted",
                "B": "It makes children antisocial",
                "C": "It is getting more infectious",
                "D": "It was among Californian children",
                "E": "It was not detected until recently"
            },
            "kunci": "B",
            "bobotTKP": null
        },
        {
            "kategori": "Bahasa Inggris",
            "pertanyaan": "Based on the text about autism and maternal age, it can be concluded from the text that .......",
            "pilihan": {
                "A": "A big age difference of parents of 40 years or beyond may result in autism.",
                "B": "Several mental disorders can be prevented by having kids earlier",
                "C": "Woman today show a general trend in delaying pregnancy",
                "D": "The paternal age only partly explains the case of mental disorders among children",
                "E": "The case of autism among children remains a mystery among scientists"
            },
            "kunci": "C",
            "bobotTKP": null
        }
    ]
};

// Menggabungkan seluruh soal TWK, TIU, dan TKP ke dalam skd_full agar sistem bisa mengambilnya secara proporsional.
BANK_REFERENSI.skd_full = [
    ...BANK_REFERENSI.twk_only,
    ...BANK_REFERENSI.tiu_only,
    ...BANK_REFERENSI.tkp_only
];
