/* ══════════════════════════════════════════
   SANGGAR SENI KINANTI SEKAR — SCRIPT.JS
   v2.0 — 3 Language: ID / EN / FR
   Multilingual Chatbot
══════════════════════════════════════════ */
'use strict';

// ══════════════════════════════════════════
// 1. UI TRANSLATIONS  (ID / EN / FR)
// ══════════════════════════════════════════
const translations = {

  id: {
    lang_select:"Pilih Bahasa",
    nav_home:"Beranda",nav_programs:"Program",nav_about:"Tentang",nav_contact:"Kontak",nav_cta:"Bergabung",
    hero_eyebrow:"Studio Seni Budaya Indonesia",
    hero_title1:"Tempat Budaya",hero_title2:"Hidup & Bernapas",
    hero_desc:"Melestarikan dan mengembangkan keindahan seni tradisional Indonesia melalui pelatihan berdedikasi, pertunjukan, dan program budaya untuk semua usia.",
    hero_cta1:"Jelajahi Program",hero_cta2:"Kisah Kami",
    stat_programs:"Program",stat_students:"Siswa",stat_years:"Tahun",
    hero_visual_label:"Sanggar Seni",scroll_hint:"Gulir untuk jelajahi",
    prog_tag:"Program Kami",prog_title:"Program Sanggar",
    prog_sub:"Temukan pilihan program seni budaya kami yang kaya, dirancang untuk menghormati tradisi sekaligus menyambut semua tingkat kemampuan.",
    filter_all:"Semua Program",filter_dance:"Tari",filter_music:"Musik",filter_theatre:"Teater",filter_craft:"Kerajinan",
    badge_dance:"Tari",badge_music:"Musik",badge_theatre:"Teater",badge_craft:"Kerajinan",
    prog1_name:"Tari Klasik Jawa",prog1_short:"Tari Klasik Jawa yang berakar dari tradisi istana Kraton — anggun, meditatif, dan sarat makna spiritual mendalam.",prog1_sched:"Sen, Rab, Jum · 15:00–17:00",prog1_level:"Semua level · Usia 7+",
    prog2_name:"Tari Kontemporer",prog2_short:"Tari kontemporer yang memadukan gerakan modern dengan ekspresi seni Indonesia untuk generasi kreatif masa kini.",prog2_sched:"Sel, Kam · 16:00–18:00",prog2_level:"Menengah · Usia 12+",
    prog3_name:"Orkestra Gamelan",prog3_short:"Kuasai seni gamelan — orkestra perkusi perunggu ikonik yang menjadi jantung kebudayaan Jawa selama berabad-abad.",prog3_sched:"Sab, Min · 09:00–11:00",prog3_level:"Semua level · Usia 10+",
    prog4_name:"Sendratari",prog4_short:"Seni pertunjukan drama tari yang menceritakan kisah-kisah epik — memadukan musik, kostum, dan gerak dalam satu sajian spektakuler.",prog4_sched:"Sab · 13:00–16:00",prog4_level:"Lanjutan · Usia 15+",
    prog5_name:"Ensemble Angklung",prog5_short:"Pelajari instrumen bambu dari Jawa Barat yang diakui UNESCO — menyenangkan, komunal, dan cocok untuk semua usia.",prog5_sched:"Min · 10:00–12:00",prog5_level:"Semua level · Usia 5+",
    prog6_name:"Workshop Batik Tulis",prog6_short:"Batik tulis tangan — seni tekstil Indonesia yang mengagumkan menggunakan teknik celup lilin. Ciptakan mahakarya Anda sendiri.",prog6_sched:"Rab, Jum · 10:00–13:00",prog6_level:"Semua level · Usia 10+",
    btn_detail:"Lihat Detail",btn_wa:"WhatsApp",
    about_tag:"Tentang Kami",about_title:"Berdedikasi pada Tradisi yang Hidup",
    about_p1:"Sanggar Seni Kinanti Sekar didirikan dengan satu misi: melestarikan, mewariskan, dan merayakan kekayaan seni tradisional Indonesia di tengah perubahan dunia yang begitu cepat.",
    about_p2:"Sanggar kami menjadi rumah bagi para instruktur ahli dengan pengalaman puluhan tahun di bidang seni Jawa, Sunda, dan Bali. Kami menyambut siswa dari seluruh dunia — pemula, penggemar, maupun seniman profesional.",
    hl1_title:"Sanggar Berprestasi",hl1_desc:"Diakui oleh Kementerian Kebudayaan Indonesia",
    hl2_title:"Jangkauan Internasional",hl2_desc:"Program dirancang untuk wisatawan budaya mancanegara",
    hl3_title:"Instruktur Ahli",hl3_desc:"Lebih dari 30 tahun pengalaman mengajar gabungan",
    about_card1:"Seni Jawa",about_card2:"Seni Sunda",about_card3:"Seni Bali",
    cta_title:"Siap Memulai Perjalanan Anda?",
    cta_sub:"Hubungi kami melalui WhatsApp atau Email dan tim kami akan memandu Anda menuju program yang tepat.",
    cta_wa:"Chat di WhatsApp",cta_email:"Kirim Email",
    cta_address:"Yogyakarta, Indonesia",cta_hours:"Sen–Min, 08:00–20:00",
    footer_tagline:"Menjaga Jiwa Budaya Indonesia",footer_rights:"Hak Cipta Dilindungi.",
    trailer_watch:"Tonton Trailer",
    tab_desc:"Deskripsi",tab_sched:"Jadwal",tab_detail:"Detail",
    chat_online:"Online · Siap membantu",chat_placeholder:"Ketik pertanyaan Anda…",
  },

  en: {
    lang_select:"Select Language",
    nav_home:"Home",nav_programs:"Programs",nav_about:"About",nav_contact:"Contact",nav_cta:"Join Us",
    hero_eyebrow:"Indonesian Cultural Arts Studio",
    hero_title1:"Where Culture",hero_title2:"Comes Alive",
    hero_desc:"Preserving and nurturing the beauty of Indonesian traditional arts through dedicated training, performances, and cultural programs for all ages.",
    hero_cta1:"Explore Programs",hero_cta2:"Our Story",
    stat_programs:"Programs",stat_students:"Students",stat_years:"Years",
    hero_visual_label:"Sanggar Seni",scroll_hint:"Scroll to explore",
    prog_tag:"Our Programs",prog_title:"Program Sanggar",
    prog_sub:"Discover our rich selection of cultural arts programs, each carefully crafted to honor tradition while welcoming every level of learner.",
    filter_all:"All Programs",filter_dance:"Dance",filter_music:"Music",filter_theatre:"Theatre",filter_craft:"Craft",
    badge_dance:"Dance",badge_music:"Music",badge_theatre:"Theatre",badge_craft:"Craft",
    prog1_name:"Tari Klasik Jawa",prog1_short:"Classical Javanese Dance rooted in Kraton palace traditions — graceful, meditative, and deeply spiritual.",prog1_sched:"Mon, Wed, Fri · 15:00–17:00",prog1_level:"All levels · Age 7+",
    prog2_name:"Tari Kontemporer",prog2_short:"Contemporary dance blending modern movement with Indonesian artistic expressions for the creative generation.",prog2_sched:"Tue, Thu · 16:00–18:00",prog2_level:"Intermediate · Age 12+",
    prog3_name:"Gamelan Orchestra",prog3_short:"Master the ancient art of Gamelan — the iconic bronze percussion orchestra at the heart of Javanese culture.",prog3_sched:"Sat, Sun · 09:00–11:00",prog3_level:"All levels · Age 10+",
    prog4_name:"Sendratari",prog4_short:"Dance-drama performance art that tells epic stories — combining music, costume, and movement into one unified spectacle.",prog4_sched:"Sat · 13:00–16:00",prog4_level:"Advanced · Age 15+",
    prog5_name:"Angklung Ensemble",prog5_short:"Learn the UNESCO-recognized bamboo instrument of West Java — joyful, communal, and perfect for all ages.",prog5_sched:"Sun · 10:00–12:00",prog5_level:"All levels · Age 5+",
    prog6_name:"Batik Tulis Workshop",prog6_short:"Hand-drawn Batik — the revered Indonesian textile art using wax-resist dyeing. Create your own masterpiece.",prog6_sched:"Wed, Fri · 10:00–13:00",prog6_level:"All levels · Age 10+",
    btn_detail:"View Details",btn_wa:"WhatsApp",
    about_tag:"About Us",about_title:"Dedicated to the Living Tradition",
    about_p1:"Sanggar Seni Kinanti Sekar was founded with a singular mission: to preserve, transmit, and celebrate the richness of Indonesian traditional arts in a world that is rapidly changing.",
    about_p2:"Our studio is home to master instructors with decades of experience in Javanese, Sundanese, and Balinese arts. We welcome students from across the world — beginners, enthusiasts, and professional artists alike.",
    hl1_title:"Award-Winning Studio",hl1_desc:"Recognized by Indonesia's Ministry of Culture",
    hl2_title:"International Outreach",hl2_desc:"Programs designed for global cultural tourists",
    hl3_title:"Master Instructors",hl3_desc:"30+ years of combined teaching experience",
    about_card1:"Javanese Arts",about_card2:"Sundanese Arts",about_card3:"Balinese Arts",
    cta_title:"Ready to Begin Your Journey?",
    cta_sub:"Contact us via WhatsApp or Email and our team will guide you to the perfect program.",
    cta_wa:"Chat on WhatsApp",cta_email:"Send an Email",
    cta_address:"Yogyakarta, Indonesia",cta_hours:"Mon–Sun, 08:00–20:00",
    footer_tagline:"Preserving the Soul of Indonesian Culture",footer_rights:"All Rights Reserved.",
    trailer_watch:"Watch Trailer",
    tab_desc:"Description",tab_sched:"Schedule",tab_detail:"Details",
    chat_online:"Online · Ready to help",chat_placeholder:"Type your question…",
  },

  fr: {
    lang_select:"Choisir la langue",
    nav_home:"Accueil",nav_programs:"Programmes",nav_about:"À propos",nav_contact:"Contact",nav_cta:"Rejoignez-nous",
    hero_eyebrow:"Studio des Arts Culturels Indonésiens",
    hero_title1:"Là où la Culture",hero_title2:"Prend Vie",
    hero_desc:"Préserver et cultiver la beauté des arts traditionnels indonésiens à travers une formation dédiée, des spectacles et des programmes culturels pour tous les âges.",
    hero_cta1:"Explorer les programmes",hero_cta2:"Notre histoire",
    stat_programs:"Programmes",stat_students:"Étudiants",stat_years:"Années",
    hero_visual_label:"Sanggar Seni",scroll_hint:"Défiler pour explorer",
    prog_tag:"Nos Programmes",prog_title:"Programme du Sanggar",
    prog_sub:"Découvrez notre riche sélection de programmes d'arts culturels, soigneusement conçus pour honorer la tradition tout en accueillant tous les niveaux.",
    filter_all:"Tous",filter_dance:"Danse",filter_music:"Musique",filter_theatre:"Théâtre",filter_craft:"Artisanat",
    badge_dance:"Danse",badge_music:"Musique",badge_theatre:"Théâtre",badge_craft:"Artisanat",
    prog1_name:"Tari Klasik Jawa",prog1_short:"Danse classique javanaise enracinée dans les traditions du palais Kraton — gracieuse, méditative et profondément spirituelle.",prog1_sched:"Lun, Mer, Ven · 15:00–17:00",prog1_level:"Tous niveaux · Dès 7 ans",
    prog2_name:"Tari Kontemporer",prog2_short:"Danse contemporaine mêlant mouvements modernes et expressions artistiques indonésiennes pour la génération créative.",prog2_sched:"Mar, Jeu · 16:00–18:00",prog2_level:"Intermédiaire · Dès 12 ans",
    prog3_name:"Orchestre Gamelan",prog3_short:"Maîtrisez l'art ancien du Gamelan — l'orchestre de percussions en bronze au cœur de la culture javanaise.",prog3_sched:"Sam, Dim · 09:00–11:00",prog3_level:"Tous niveaux · Dès 10 ans",
    prog4_name:"Sendratari",prog4_short:"Art du spectacle dansé-dramatique qui raconte des épopées — alliant musique, costumes et mouvement en un seul spectacle.",prog4_sched:"Sam · 13:00–16:00",prog4_level:"Avancé · Dès 15 ans",
    prog5_name:"Ensemble Angklung",prog5_short:"Apprenez l'instrument en bambou reconnu par l'UNESCO — joyeux, communautaire et parfait pour tous les âges.",prog5_sched:"Dim · 10:00–12:00",prog5_level:"Tous niveaux · Dès 5 ans",
    prog6_name:"Atelier Batik Tulis",prog6_short:"Batik dessiné à la main — l'art textile indonésien vénéré utilisant la teinture à la cire. Créez votre chef-d'œuvre.",prog6_sched:"Mer, Ven · 10:00–13:00",prog6_level:"Tous niveaux · Dès 10 ans",
    btn_detail:"Voir les détails",btn_wa:"WhatsApp",
    about_tag:"À propos de nous",about_title:"Dédiés à la Tradition Vivante",
    about_p1:"Sanggar Seni Kinanti Sekar a été fondé avec une mission singulière : préserver, transmettre et célébrer la richesse des arts traditionnels indonésiens dans un monde en rapide mutation.",
    about_p2:"Notre studio accueille des maîtres instructeurs avec des décennies d'expérience dans les arts javanais, soundanais et balinais. Nous accueillons des étudiants du monde entier.",
    hl1_title:"Studio Primé",hl1_desc:"Reconnu par le Ministère indonésien de la Culture",
    hl2_title:"Rayonnement International",hl2_desc:"Programmes conçus pour les touristes culturels mondiaux",
    hl3_title:"Maîtres Instructeurs",hl3_desc:"Plus de 30 ans d'expérience pédagogique combinée",
    about_card1:"Arts Javanais",about_card2:"Arts Soundanais",about_card3:"Arts Balinais",
    cta_title:"Prêt à Commencer Votre Voyage?",
    cta_sub:"Contactez-nous via WhatsApp ou e-mail et notre équipe vous guidera vers le programme idéal.",
    cta_wa:"Chatter sur WhatsApp",cta_email:"Envoyer un e-mail",
    cta_address:"Yogyakarta, Indonésie",cta_hours:"Lun–Dim, 08:00–20:00",
    footer_tagline:"Préserver l'Âme de la Culture Indonésienne",footer_rights:"Tous droits réservés.",
    trailer_watch:"Voir la bande-annonce",
    tab_desc:"Description",tab_sched:"Horaires",tab_detail:"Détails",
    chat_online:"En ligne · Prêt à vous aider",chat_placeholder:"Tapez votre question…",
  }
};

// ══════════════════════════════════════════
// 2. PROGRAM DATA  (ID / EN / FR per field)
// ══════════════════════════════════════════
const programs = [
  {
    id:0, icon:"💃", colorClass:"prog-color-1", badgeClass:"prog-badge-dance",
    youtubeId:"KqIYBJGEZx8",
    name_id:"Tari Klasik Jawa", name_en:"Tari Klasik Jawa", name_fr:"Tari Klasik Jawa",
    badge_id:"Tari", badge_en:"Dance", badge_fr:"Danse",
    desc_id:"Tari Klasik Jawa adalah bentuk seni yang anggun dan penuh makna yang berkembang di keraton Yogyakarta dan Surakarta. Berakar dari tradisi istana berusia berabad-abad, setiap gerakan membawa makna filosofis mendalam — dari anggukan kepala yang lembut hingga posisi jari yang presisi. Siswa akan mempelajari pose dasar, pola langkah kaki, gestur tangan (mudra), dan fokus spiritual yang menjadikan tari ini sebuah meditasi hidup. Kostum sangat ornamentik, musik menggunakan gamelan live, dan setiap penampilan menceritakan kisah dari epos Mahabharata atau Ramayana.",
    desc_en:"Tari Klasik Jawa (Classical Javanese Dance) is a refined and elegant art form developed in the royal courts of Yogyakarta and Surakarta. Rooted in centuries-old palace tradition, each movement carries deep philosophical meaning — from the gentle tilt of the head to the precise positioning of the fingers. Students will study foundational poses, footwork patterns, hand gestures (mudra), and the spiritual focus that makes this dance form a living meditation. Every performance tells a story from the Mahabharata or Ramayana epics.",
    desc_fr:"La Tari Klasik Jawa est une forme d'art raffinée et élégante développée dans les cours royales de Yogyakarta et Surakarta. Enraciné dans une tradition palatiale vieille de plusieurs siècles, chaque mouvement porte une signification philosophique profonde. Les élèves étudieront les poses fondamentales, les patterns de pas, les gestes des mains (mudra) et la concentration spirituelle qui fait de cette forme de danse une méditation vivante.",
    schedule:[
      {day_id:"Senin",   day_en:"Monday",    day_fr:"Lundi",    time:"15:00–17:00", loc:"Studio A"},
      {day_id:"Rabu",    day_en:"Wednesday", day_fr:"Mercredi", time:"15:00–17:00", loc:"Studio A"},
      {day_id:"Jumat",   day_en:"Friday",    day_fr:"Vendredi", time:"15:00–17:00", loc:"Studio B"}
    ],
    details:{
      duration_id:"2 jam/sesi", duration_en:"2 hours/session", duration_fr:"2h/séance",
      level_id:"Semua Level", level_en:"All Levels", level_fr:"Tous niveaux",
      age_id:"Usia 7+", age_en:"Age 7+", age_fr:"Dès 7 ans",
      fee_id:"Rp 350.000/bln", fee_en:"Rp 350.000/mo", fee_fr:"Rp 350.000/mois",
      size_id:"Maks 15 siswa", size_en:"Max 15 students", size_fr:"Max 15 élèves",
      cert_id:"Sertifikat tersedia", cert_en:"Certificate available", cert_fr:"Certificat disponible"
    },
    waText_id:"Saya ingin bergabung dengan program Tari Klasik Jawa",
    waText_en:"I want to join Tari Klasik Jawa program",
    waText_fr:"Je veux rejoindre le programme Tari Klasik Jawa"
  },
  {
    id:1, icon:"🌀", colorClass:"prog-color-2", badgeClass:"prog-badge-dance",
    youtubeId:"VvlmCCR4WK8",
    name_id:"Tari Kontemporer", name_en:"Tari Kontemporer", name_fr:"Tari Kontemporer",
    badge_id:"Tari", badge_en:"Dance", badge_fr:"Danse",
    desc_id:"Tari Kontemporer menjembatani ruang antara kosakata artistik Indonesia kuno dan bahasa pergerakan kontemporer yang dinamis. Program ini menantang penari untuk mengeksplorasi ekspresi pribadi sambil tetap berakar pada identitas budaya. Tugas koreografi mendorong siswa mengembangkan karya orisinal yang mencerminkan tema modern melalui lensa estetika Indonesia yang mendalam. Cocok bagi yang punya latar belakang tari dan ingin mendorong batas kreativitas.",
    desc_en:"Tari Kontemporer bridges the space between ancient Indonesian artistic vocabulary and the dynamic language of contemporary movement. This program challenges dancers to explore personal expression while remaining grounded in cultural identity. Choreography assignments encourage students to develop original works that reflect modern themes through a deeply Indonesian aesthetic lens.",
    desc_fr:"Tari Kontemporer crée un pont entre le vocabulaire artistique indonésien ancien et le langage dynamique du mouvement contemporain. Ce programme défie les danseurs d'explorer l'expression personnelle tout en restant ancrés dans l'identité culturelle. Les travaux de chorégraphie encouragent les élèves à développer des œuvres originales.",
    schedule:[
      {day_id:"Selasa", day_en:"Tuesday",  day_fr:"Mardi", time:"16:00–18:00", loc:"Main Stage"},
      {day_id:"Kamis",  day_en:"Thursday", day_fr:"Jeudi", time:"16:00–18:00", loc:"Main Stage"}
    ],
    details:{
      duration_id:"2 jam/sesi", duration_en:"2 hours/session", duration_fr:"2h/séance",
      level_id:"Menengah", level_en:"Intermediate", level_fr:"Intermédiaire",
      age_id:"Usia 12+", age_en:"Age 12+", age_fr:"Dès 12 ans",
      fee_id:"Rp 400.000/bln", fee_en:"Rp 400.000/mo", fee_fr:"Rp 400.000/mois",
      size_id:"Maks 12 siswa", size_en:"Max 12 students", size_fr:"Max 12 élèves",
      cert_id:"Sertifikat tersedia", cert_en:"Certificate available", cert_fr:"Certificat disponible"
    },
    waText_id:"Saya ingin bergabung dengan program Tari Kontemporer",
    waText_en:"I want to join Tari Kontemporer program",
    waText_fr:"Je veux rejoindre le programme Tari Kontemporer"
  },
  {
    id:2, icon:"🪘", colorClass:"prog-color-3", badgeClass:"prog-badge-music",
    youtubeId:"UEWCCSuHsuQ",
    name_id:"Orkestra Gamelan", name_en:"Gamelan Orchestra", name_fr:"Orchestre Gamelan",
    badge_id:"Musik", badge_en:"Music", badge_fr:"Musique",
    desc_id:"Program Orkestra Gamelan menawarkan perjalanan mendalam ke salah satu tradisi musik ansambel paling unik di dunia. Siswa belajar memainkan berbagai instrumen perunggu — gong, metallophone, kendang — yang bersama-sama menciptakan permadani suara khas musik keraton Jawa. Studio kami dilengkapi dengan satu set instrumen perunggu asli yang lengkap.",
    desc_en:"The Gamelan Orchestra program offers an immersive journey into one of the world's most unique ensemble music traditions. Students learn to play multiple bronze instruments — gongs, metallophones, drums — that together create the shimmering sonic tapestry characteristic of Javanese court music. Our studio is equipped with a full set of authentic bronze instruments.",
    desc_fr:"Le programme d'Orchestre Gamelan offre un voyage immersif dans l'une des traditions musicales d'ensemble les plus uniques au monde. Les élèves apprennent à jouer de multiples instruments en bronze qui créent ensemble la tapisserie sonore caractéristique de la musique de cour javanaise.",
    schedule:[
      {day_id:"Sabtu",  day_en:"Saturday", day_fr:"Samedi",   time:"09:00–11:00", loc:"Music Hall"},
      {day_id:"Minggu", day_en:"Sunday",   day_fr:"Dimanche", time:"09:00–11:00", loc:"Music Hall"}
    ],
    details:{
      duration_id:"2 jam/sesi", duration_en:"2 hours/session", duration_fr:"2h/séance",
      level_id:"Semua Level", level_en:"All Levels", level_fr:"Tous niveaux",
      age_id:"Usia 10+", age_en:"Age 10+", age_fr:"Dès 10 ans",
      fee_id:"Rp 380.000/bln", fee_en:"Rp 380.000/mo", fee_fr:"Rp 380.000/mois",
      size_id:"Maks 20 siswa", size_en:"Max 20 students", size_fr:"Max 20 élèves",
      cert_id:"Sertifikat tersedia", cert_en:"Certificate available", cert_fr:"Certificat disponible"
    },
    waText_id:"Saya ingin bergabung dengan program Orkestra Gamelan",
    waText_en:"I want to join Gamelan Orchestra program",
    waText_fr:"Je veux rejoindre le programme Orchestre Gamelan"
  },
  {
    id:3, icon:"🎭", colorClass:"prog-color-4", badgeClass:"prog-badge-theatre",
    youtubeId:"UgHKb_7884o",
    name_id:"Sendratari", name_en:"Sendratari", name_fr:"Sendratari",
    badge_id:"Teater", badge_en:"Theatre", badge_fr:"Théâtre",
    desc_id:"Sendratari — gabungan kata 'seni', 'drama', dan 'tari' — adalah bentuk seni pertunjukan Indonesia yang paling spektakuler. Program lanjutan ini melatih siswa dalam produksi drama tari berskala besar: berakting melalui gerakan, seni panggung, apresiasi desain kostum, dan orkestrasi ensemble. Setiap semester berakhir dengan penampilan publik penuh. Alumni telah tampil di festival internasional dari Jepang hingga Prancis.",
    desc_en:"Sendratari — a portmanteau of 'seni' (art), 'drama', and 'tari' (dance) — is Indonesia's most spectacular performance art form. This advanced program trains students in large-scale dance-drama production. Each semester culminates in a full public performance. Alumni have performed at international festivals from Japan to France.",
    desc_fr:"Sendratari — un mot-valise de 'seni', 'drama' et 'tari' — est la forme d'art la plus spectaculaire d'Indonésie. Ce programme avancé forme les étudiants à la production complète de théâtre-danse. Chaque semestre se termine par une performance publique complète.",
    schedule:[
      {day_id:"Sabtu", day_en:"Saturday", day_fr:"Samedi", time:"13:00–16:00", loc:"Main Stage"}
    ],
    details:{
      duration_id:"3 jam/sesi", duration_en:"3 hours/session", duration_fr:"3h/séance",
      level_id:"Lanjutan", level_en:"Advanced", level_fr:"Avancé",
      age_id:"Usia 15+", age_en:"Age 15+", age_fr:"Dès 15 ans",
      fee_id:"Rp 450.000/bln", fee_en:"Rp 450.000/mo", fee_fr:"Rp 450.000/mois",
      size_id:"Maks 25 siswa", size_en:"Max 25 students", size_fr:"Max 25 élèves",
      cert_id:"Sertifikat + Penampilan", cert_en:"Certificate + Performance", cert_fr:"Certificat + Performance"
    },
    waText_id:"Saya ingin bergabung dengan program Sendratari",
    waText_en:"I want to join Sendratari program",
    waText_fr:"Je veux rejoindre le programme Sendratari"
  },
  {
    id:4, icon:"🎵", colorClass:"prog-color-5", badgeClass:"prog-badge-music",
    youtubeId:"WkVkIekPBkI",
    name_id:"Ensemble Angklung", name_en:"Angklung Ensemble", name_fr:"Ensemble Angklung",
    badge_id:"Musik", badge_en:"Music", badge_fr:"Musique",
    desc_id:"Angklung adalah instrumen bambu dari Jawa Barat yang diakui UNESCO sebagai Warisan Budaya Tak Benda Kemanusiaan. Program ensemble kami bersifat sosial — setiap peserta memainkan tabung bambu bernada, dan musik hanya muncul ketika seluruh kelompok bermain bersama. Ini adalah pengalaman dalam kebersamaan, ritme, dan harmoni. Sempurna untuk keluarga, kelompok sekolah, dan wisatawan mancanegara.",
    desc_en:"The Angklung is a bamboo instrument from West Java, recognized by UNESCO as an Intangible Cultural Heritage of Humanity. Our ensemble program is uniquely social — music only emerges when the whole group plays together. An experience in community, rhythm, and harmony. Perfect for families, school groups, and international visitors.",
    desc_fr:"L'Angklung est un instrument en bambou du Java Occidental, reconnu par l'UNESCO comme Patrimoine Culturel Immatériel. Notre programme d'ensemble est uniquement social — la musique n'émerge que lorsque tout le groupe joue ensemble. Parfait pour les familles et les visiteurs internationaux.",
    schedule:[
      {day_id:"Minggu", day_en:"Sunday", day_fr:"Dimanche", time:"10:00–12:00", loc:"Garden Stage"}
    ],
    details:{
      duration_id:"2 jam/sesi", duration_en:"2 hours/session", duration_fr:"2h/séance",
      level_id:"Semua Level", level_en:"All Levels", level_fr:"Tous niveaux",
      age_id:"Usia 5+", age_en:"Age 5+", age_fr:"Dès 5 ans",
      fee_id:"Rp 280.000/bln", fee_en:"Rp 280.000/mo", fee_fr:"Rp 280.000/mois",
      size_id:"Maks 30 siswa", size_en:"Max 30 students", size_fr:"Max 30 élèves",
      cert_id:"Sertifikat partisipasi", cert_en:"Participation certificate", cert_fr:"Certificat de participation"
    },
    waText_id:"Saya ingin bergabung dengan program Ensemble Angklung",
    waText_en:"I want to join Angklung Ensemble program",
    waText_fr:"Je veux rejoindre le programme Ensemble Angklung"
  },
  {
    id:5, icon:"🎨", colorClass:"prog-color-6", badgeClass:"prog-badge-craft",
    youtubeId:"8dGOQgd8Nkk",
    name_id:"Workshop Batik Tulis", name_en:"Batik Tulis Workshop", name_fr:"Atelier Batik Tulis",
    badge_id:"Kerajinan", badge_en:"Craft", badge_fr:"Artisanat",
    desc_id:"Batik Tulis adalah batik yang digambar tangan — setiap motif digoreskan dengan lilin cair menggunakan alat canting pada kain katun, kemudian dicelup dengan warna alami yang kaya. Kerajinan Indonesia yang diakui UNESCO ini membutuhkan kesabaran, kreativitas, dan tangan yang stabil. Workshop kami memperkenalkan motif Jawa tradisional (parang, kawung, truntum). Setiap siswa pulang membawa karya batik buatan tangan mereka sendiri.",
    desc_en:"Batik Tulis is hand-drawn batik — each design traced with liquid wax using a canting tool onto cotton fabric, then dyed in rich natural hues. This UNESCO-recognized craft requires patience, creativity, and a steady hand. Students learn traditional Javanese motifs and leave with a completed batik piece they crafted themselves.",
    desc_fr:"Le Batik Tulis est un batik dessiné à la main — chaque motif tracé avec de la cire liquide à l'aide d'un outil canting. Cet artisanat reconnu par l'UNESCO demande de la patience, de la créativité et une main ferme. Les élèves repartent avec leur propre œuvre.",
    schedule:[
      {day_id:"Rabu",  day_en:"Wednesday", day_fr:"Mercredi", time:"10:00–13:00", loc:"Craft Studio"},
      {day_id:"Jumat", day_en:"Friday",    day_fr:"Vendredi", time:"10:00–13:00", loc:"Craft Studio"}
    ],
    details:{
      duration_id:"3 jam/sesi", duration_en:"3 hours/session", duration_fr:"3h/séance",
      level_id:"Semua Level", level_en:"All Levels", level_fr:"Tous niveaux",
      age_id:"Usia 10+", age_en:"Age 10+", age_fr:"Dès 10 ans",
      fee_id:"Rp 320.000/bln", fee_en:"Rp 320.000/mo", fee_fr:"Rp 320.000/mois",
      size_id:"Maks 10 siswa", size_en:"Max 10 students", size_fr:"Max 10 élèves",
      cert_id:"Karya bisa dibawa pulang", cert_en:"Artwork to take home", cert_fr:"Œuvre à emporter"
    },
    waText_id:"Saya ingin bergabung dengan program Workshop Batik Tulis",
    waText_en:"I want to join Batik Tulis Workshop",
    waText_fr:"Je veux rejoindre l'Atelier Batik Tulis"
  }
];

// ══════════════════════════════════════════
// 3. CHATBOT DATA — FULL 3-LANGUAGE
// ══════════════════════════════════════════
const chatbotData = {

  id: {
    welcome:"👋 Halo! Saya <strong>Sekar</strong>, asisten seni budaya Anda. Ada yang bisa saya bantu hari ini?",
    quickReplies:["Program","Jadwal","Biaya","Lokasi","Kontak","Cara Daftar"],
    keywords:{
      "program":"program","kelas":"program","kegiatan":"program","kursus":"program",
      "jadwal":"jadwal","waktu":"jadwal","hari":"jadwal","jam":"jadwal","kapan":"jadwal",
      "biaya":"biaya","harga":"biaya","bayar":"biaya","tarif":"biaya","iuran":"biaya","berapa":"biaya",
      "lokasi":"lokasi","alamat":"lokasi","tempat":"lokasi","dimana":"lokasi","di mana":"lokasi",
      "kontak":"kontak","telepon":"kontak","whatsapp":"kontak","email":"kontak","hubungi":"kontak","wa":"kontak",
      "daftar":"daftar","mendaftar":"daftar","bergabung":"daftar","gabung":"daftar","ikut":"daftar","cara":"daftar",
      "tari":"tari","menari":"tari","dance":"tari",
      "gamelan":"gamelan","gong":"gamelan",
      "batik":"batik","kain":"batik","tulis":"batik",
      "angklung":"angklung","bambu":"angklung",
      "sendratari":"sendratari","drama":"sendratari","teater":"sendratari",
    },
    responses:{
      program:"🎭 Kami memiliki <strong>6 program unggulan</strong>:<br><br>💃 <strong>Tari Klasik Jawa</strong> — Tari keraton Yogyakarta & Surakarta<br>🌀 <strong>Tari Kontemporer</strong> — Ekspresi modern bernuansa Indonesia<br>🪘 <strong>Orkestra Gamelan</strong> — Ansambel perkusi perunggu tradisional<br>🎭 <strong>Sendratari</strong> — Drama tari epos berskala besar<br>🎵 <strong>Ensemble Angklung</strong> — Instrumen bambu UNESCO<br>🎨 <strong>Workshop Batik Tulis</strong> — Kerajinan tekstil tangan<br><br>Klik 'Lihat Detail' pada kartu program untuk info lengkap & trailer! 🎬",
      jadwal:"📅 <strong>Jadwal Mingguan:</strong><br><br>• Sen/Rab/Jum → Tari Klasik Jawa (15:00–17:00)<br>• Sel/Kam → Tari Kontemporer (16:00–18:00)<br>• Sab/Min → Orkestra Gamelan (09:00–11:00)<br>• Sabtu → Sendratari (13:00–16:00)<br>• Minggu → Ensemble Angklung (10:00–12:00)<br>• Rab/Jum → Workshop Batik (10:00–13:00)",
      biaya:"💰 <strong>Biaya Program per Bulan:</strong><br><br>• Tari Klasik Jawa: Rp 350.000<br>• Tari Kontemporer: Rp 400.000<br>• Orkestra Gamelan: Rp 380.000<br>• Sendratari: Rp 450.000<br>• Ensemble Angklung: Rp 280.000<br>• Workshop Batik: Rp 320.000<br><br>Semua termasuk materi & sertifikat. Diskon kelompok tersedia! 🎉",
      lokasi:"📍 <strong>Lokasi Kami:</strong><br><br>Jl. Seni Budaya No. 17, Yogyakarta<br>Dekat kompleks Candi Prambanan<br><br>🕐 Buka: Senin–Minggu, 08:00–20:00<br>🚗 Parkir luas tersedia",
      kontak:"📞 <strong>Hubungi Kami:</strong><br><br>WhatsApp: +62 811 2688 000<br>Email: info@kinantisekar.id<br><br>Atau klik tombol 💬 WhatsApp di kartu program mana pun untuk langsung terhubung!",
      daftar:"✅ <strong>Cara Mendaftar:</strong><br><br>1️⃣ Pilih program yang Anda minati<br>2️⃣ Klik 'Lihat Detail' untuk info lengkap<br>3️⃣ Klik tombol WhatsApp 💬 atau Email ✉️<br>4️⃣ Tim kami merespons dalam 1×24 jam<br><br>Bisa juga datang langsung ke sanggar kami! 🎭",
      tari:"💃 <strong>Program Tari:</strong><br><br>🌟 <strong>Tari Klasik Jawa</strong> (Sen/Rab/Jum 15:00) — Tari keraton yang anggun & spiritual<br>🌀 <strong>Tari Kontemporer</strong> (Sel/Kam 16:00) — Ekspresi modern bernuansa Indonesia<br><br>Klik 'Lihat Detail' untuk trailer & info lengkap! 🎬",
      gamelan:"🪘 <strong>Orkestra Gamelan</strong><br><br>Jadwal: Sabtu & Minggu, 09:00–11:00<br>Level: Semua level, usia 10+<br>Biaya: Rp 380.000/bulan<br><br>Pelajari instrumen perunggu tradisional Jawa! Klik kartu program untuk tonton trailernya 🎬",
      batik:"🎨 <strong>Workshop Batik Tulis</strong><br><br>Jadwal: Rabu & Jumat, 10:00–13:00<br>Level: Semua level, usia 10+<br>Biaya: Rp 320.000/bulan<br><br>Ciptakan karya batik tangan Anda & bawa pulang! 🎁",
      angklung:"🎵 <strong>Ensemble Angklung</strong><br><br>Jadwal: Minggu, 10:00–12:00<br>Level: Semua level, cocok usia 5+<br>Biaya: Rp 280.000/bulan<br><br>Instrumen bambu warisan UNESCO — seru untuk keluarga! 👨‍👩‍👧‍👦",
      sendratari:"🎭 <strong>Sendratari</strong><br><br>Jadwal: Sabtu, 13:00–16:00<br>Level: Lanjutan, usia 15+<br>Biaya: Rp 450.000/bulan<br><br>Drama tari spektakuler. Alumni tampil di festival internasional! 🌏",
      default:"Hmm, saya kurang mengerti 😊<br>Anda bisa tanya tentang: <strong>program, jadwal, biaya, lokasi, cara daftar</strong><br><br>Atau gunakan tombol cepat di atas! 👆"
    }
  },

  en: {
    welcome:"👋 Hello! I'm <strong>Sekar</strong>, your cultural arts guide. How can I help you today?",
    quickReplies:["Programs","Schedule","Pricing","Location","Contact","Enroll"],
    keywords:{
      "program":"programs","class":"programs","course":"programs","art":"programs","what do":"programs",
      "schedule":"schedule","time":"schedule","day":"schedule","when":"schedule","hour":"schedule",
      "price":"pricing","cost":"pricing","fee":"pricing","pay":"pricing","pricing":"pricing","how much":"pricing",
      "location":"location","address":"location","where":"location","place":"location","find":"location",
      "contact":"contact","phone":"contact","whatsapp":"contact","email":"contact","call":"contact","reach":"contact",
      "enroll":"enroll","register":"enroll","join":"enroll","sign up":"enroll","how to":"enroll",
      "dance":"dance","tari":"dance","classical":"dance",
      "gamelan":"gamelan","bronze":"gamelan",
      "batik":"batik","textile":"batik","fabric":"batik",
      "angklung":"angklung","bamboo":"angklung",
      "sendratari":"sendratari","drama":"sendratari","theatre":"sendratari","theater":"sendratari",
    },
    responses:{
      programs:"🎭 We offer <strong>6 amazing programs</strong>:<br><br>💃 <strong>Tari Klasik Jawa</strong> — Classical Javanese court dance<br>🌀 <strong>Tari Kontemporer</strong> — Modern-Indonesian contemporary dance<br>🪘 <strong>Gamelan Orchestra</strong> — Traditional bronze percussion ensemble<br>🎭 <strong>Sendratari</strong> — Large-scale epic dance-drama<br>🎵 <strong>Angklung Ensemble</strong> — UNESCO bamboo instrument<br>🎨 <strong>Batik Tulis Workshop</strong> — Traditional hand-drawn textile art<br><br>Click 'View Details' on any program card for full info & trailer! 🎬",
      schedule:"📅 <strong>Weekly Schedule:</strong><br><br>• Mon/Wed/Fri → Tari Klasik Jawa (15:00–17:00)<br>• Tue/Thu → Tari Kontemporer (16:00–18:00)<br>• Sat/Sun → Gamelan Orchestra (09:00–11:00)<br>• Saturday → Sendratari (13:00–16:00)<br>• Sunday → Angklung Ensemble (10:00–12:00)<br>• Wed/Fri → Batik Workshop (10:00–13:00)",
      pricing:"💰 <strong>Monthly Program Fees:</strong><br><br>• Tari Klasik Jawa: Rp 350,000<br>• Tari Kontemporer: Rp 400,000<br>• Gamelan Orchestra: Rp 380,000<br>• Sendratari: Rp 450,000<br>• Angklung Ensemble: Rp 280,000<br>• Batik Workshop: Rp 320,000<br><br>All programs include materials & certificate. Group discounts available! 🎉",
      location:"📍 <strong>Our Location:</strong><br><br>Jl. Seni Budaya No. 17, Yogyakarta<br>Near the Prambanan Temple complex<br><br>🕐 Open: Mon–Sun, 08:00–20:00<br>🚗 Ample parking available",
      contact:"📞 <strong>Get in Touch:</strong><br><br>WhatsApp: +62 811 2688 000<br>Email: info@kinantisekar.id<br><br>Or click the green 💬 WhatsApp button on any program card to reach us directly!",
      enroll:"✅ <strong>How to Enroll:</strong><br><br>1️⃣ Choose your desired program<br>2️⃣ Click 'View Details' for full information<br>3️⃣ Click the WhatsApp 💬 or Email ✉️ button<br>4️⃣ Our team will respond within 24 hours<br><br>You can also visit us directly at the studio! 🎭",
      dance:"💃 <strong>Our Dance Programs:</strong><br><br>🌟 <strong>Tari Klasik Jawa</strong> (Mon/Wed/Fri 15:00) — Elegant, spiritual Javanese court dance<br>🌀 <strong>Tari Kontemporer</strong> (Tue/Thu 16:00) — Creative modern-Indonesian expression<br><br>Click 'View Details' for trailer & full info! 🎬",
      gamelan:"🪘 <strong>Gamelan Orchestra</strong><br><br>Schedule: Sat & Sun, 09:00–11:00<br>Level: All levels, age 10+<br>Fee: Rp 380,000/month<br><br>Master the iconic bronze instruments of Javanese tradition! Click the card for the trailer 🎬",
      batik:"🎨 <strong>Batik Tulis Workshop</strong><br><br>Schedule: Wed & Fri, 10:00–13:00<br>Level: All levels, age 10+<br>Fee: Rp 320,000/month<br><br>Create your own handcrafted batik to take home! 🎁",
      angklung:"🎵 <strong>Angklung Ensemble</strong><br><br>Schedule: Sunday, 10:00–12:00<br>Level: All levels, age 5+<br>Fee: Rp 280,000/month<br><br>UNESCO-recognized bamboo instrument — joyful and communal! Great for families 👨‍👩‍👧‍👦",
      sendratari:"🎭 <strong>Sendratari</strong><br><br>Schedule: Saturday, 13:00–16:00<br>Level: Advanced, age 15+<br>Fee: Rp 450,000/month<br><br>Spectacular dance-drama combining music, costume & movement. Alumni perform internationally! 🌏",
      default:"Hmm, I'm not sure about that 😊<br>You can ask me about: <strong>programs, schedule, pricing, location, how to enroll</strong><br><br>Or use the quick reply buttons above! 👆"
    }
  },

  fr: {
    welcome:"👋 Bonjour ! Je suis <strong>Sekar</strong>, votre guide des arts culturels. Comment puis-je vous aider ?",
    quickReplies:["Programmes","Horaires","Tarifs","Localisation","Contact","S'inscrire"],
    keywords:{
      "programme":"programmes","cours":"programmes","classe":"programmes","art":"programmes",
      "horaire":"horaires","heure":"horaires","jour":"horaires","quand":"horaires","temps":"horaires",
      "prix":"tarifs","tarif":"tarifs","coût":"tarifs","payer":"tarifs","frais":"tarifs","combien":"tarifs",
      "localisation":"localisation","adresse":"localisation","où":"localisation","lieu":"localisation",
      "contact":"contact","téléphone":"contact","whatsapp":"contact","email":"contact","appel":"contact","joindre":"contact",
      "inscrire":"inscrire","inscription":"inscrire","rejoindre":"inscrire","comment":"inscrire","s'inscrire":"inscrire",
      "danse":"danse","tari":"danse","danser":"danse",
      "gamelan":"gamelan","bronze":"gamelan",
      "batik":"batik","textile":"batik","tissu":"batik",
      "angklung":"angklung","bambou":"angklung",
      "sendratari":"sendratari","drame":"sendratari","théâtre":"sendratari",
    },
    responses:{
      programmes:"🎭 Nous proposons <strong>6 programmes</strong> :<br><br>💃 <strong>Tari Klasik Jawa</strong> — Danse classique de cour javanaise<br>🌀 <strong>Tari Kontemporer</strong> — Danse contemporaine indonésienne<br>🪘 <strong>Orchestre Gamelan</strong> — Ensemble de percussions en bronze<br>🎭 <strong>Sendratari</strong> — Théâtre-danse épique à grande échelle<br>🎵 <strong>Ensemble Angklung</strong> — Instrument en bambou UNESCO<br>🎨 <strong>Atelier Batik Tulis</strong> — Art textile traditionnel<br><br>Cliquez sur 'Voir les détails' pour les informations complètes & la bande-annonce ! 🎬",
      horaires:"📅 <strong>Programme hebdomadaire :</strong><br><br>• Lun/Mer/Ven → Tari Klasik Jawa (15:00–17:00)<br>• Mar/Jeu → Tari Kontemporer (16:00–18:00)<br>• Sam/Dim → Orchestre Gamelan (09:00–11:00)<br>• Samedi → Sendratari (13:00–16:00)<br>• Dimanche → Ensemble Angklung (10:00–12:00)<br>• Mer/Ven → Atelier Batik (10:00–13:00)",
      tarifs:"💰 <strong>Frais mensuels :</strong><br><br>• Tari Klasik Jawa : Rp 350 000<br>• Tari Kontemporer : Rp 400 000<br>• Orchestre Gamelan : Rp 380 000<br>• Sendratari : Rp 450 000<br>• Ensemble Angklung : Rp 280 000<br>• Atelier Batik : Rp 320 000<br><br>Tous incluent matériaux & certificat. Tarifs de groupe disponibles ! 🎉",
      localisation:"📍 <strong>Notre emplacement :</strong><br><br>Jl. Seni Budaya No. 17, Yogyakarta<br>Près du Temple de Prambanan<br><br>🕐 Ouvert : Lun–Dim, 08:00–20:00<br>🚗 Grand parking disponible",
      contact:"📞 <strong>Contactez-nous :</strong><br><br>WhatsApp : +62 811 2688 000<br>Email : info@kinantisekar.id<br><br>Ou cliquez sur le bouton vert 💬 WhatsApp de n'importe quelle carte programme !",
      inscrire:"✅ <strong>Comment s'inscrire :</strong><br><br>1️⃣ Choisissez votre programme<br>2️⃣ Cliquez sur 'Voir les détails'<br>3️⃣ Cliquez sur WhatsApp 💬 ou Email ✉️<br>4️⃣ Notre équipe vous répondra sous 24h<br><br>Vous pouvez aussi nous visiter directement ! 🎭",
      danse:"💃 <strong>Nos programmes de danse :</strong><br><br>🌟 <strong>Tari Klasik Jawa</strong> (Lun/Mer/Ven 15:00) — Danse gracieuse de cour javanaise<br>🌀 <strong>Tari Kontemporer</strong> (Mar/Jeu 16:00) — Expression créative indonésienne<br><br>Cliquez sur 'Voir les détails' pour la bande-annonce ! 🎬",
      gamelan:"🪘 <strong>Orchestre Gamelan</strong><br><br>Horaires : Sam & Dim, 09:00–11:00<br>Niveau : Tous niveaux, dès 10 ans<br>Frais : Rp 380 000/mois<br><br>Maîtrisez les instruments en bronze iconiques ! Cliquez la carte pour la bande-annonce 🎬",
      batik:"🎨 <strong>Atelier Batik Tulis</strong><br><br>Horaires : Mer & Ven, 10:00–13:00<br>Niveau : Tous niveaux, dès 10 ans<br>Frais : Rp 320 000/mois<br><br>Créez votre propre œuvre en batik à emporter ! 🎁",
      angklung:"🎵 <strong>Ensemble Angklung</strong><br><br>Horaires : Dimanche, 10:00–12:00<br>Niveau : Tous niveaux, dès 5 ans<br>Frais : Rp 280 000/mois<br><br>Instrument en bambou UNESCO — joyeux et communautaire ! 👨‍👩‍👧‍👦",
      sendratari:"🎭 <strong>Sendratari</strong><br><br>Horaires : Samedi, 13:00–16:00<br>Niveau : Avancé, dès 15 ans<br>Frais : Rp 450 000/mois<br><br>Théâtre-danse spectaculaire. Anciens élèves à l'international ! 🌏",
      default:"Hmm, je ne suis pas sûr de comprendre 😊<br>Vous pouvez me demander : <strong>programmes, horaires, tarifs, localisation, inscription</strong><br><br>Ou utilisez les boutons de réponse rapide ! 👆"
    }
  }
};

// ══════════════════════════════════════════
// 4. STATE
// ══════════════════════════════════════════
let currentLang = 'id';
let chatbotOpen = false;
let chatbotInitialized = false;
let currentModalProgram = null;

// ══════════════════════════════════════════
// 5. LANGUAGE SYSTEM
// ══════════════════════════════════════════
function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('btn-' + lang);
  if (btn) btn.classList.add('active');

  if (chatbotInitialized) refreshChatbotLang();
  if (currentModalProgram !== null) populateModal(currentModalProgram);
}
window.setLang = setLang;

// ══════════════════════════════════════════
// 6. NAVBAR
// ══════════════════════════════════════════
function initNavbar() {
  const nav = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// ══════════════════════════════════════════
// 7. SCROLL REVEAL
// ══════════════════════════════════════════
function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), parseInt(entry.target.dataset.revealDelay || 0));
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((el, i) => { el.dataset.revealDelay = i * 80; obs.observe(el); });
}

// ══════════════════════════════════════════
// 8. FILTER
// ══════════════════════════════════════════
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.prog-card').forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
        if (match) { card.classList.remove('visible'); setTimeout(() => card.classList.add('visible'), 60); }
      });
    });
  });
}

// ══════════════════════════════════════════
// 9. MODAL
// ══════════════════════════════════════════
function openModal(idx) {
  currentModalProgram = idx;
  populateModal(idx);
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  switchModalTab('desc');
}
function populateModal(idx) {
  const prog = programs[idx];
  const lang = currentLang;
  const t = translations[lang];

  document.getElementById('modal-icon').textContent = prog.icon;
  document.getElementById('modal-icon-wrap').className = `modal-icon-wrap ${prog.colorClass}`;
  const badge = document.getElementById('modal-badge');
  badge.textContent = prog[`badge_${lang}`];
  badge.className = `modal-badge ${prog.badgeClass}`;
  document.getElementById('modal-title').textContent = prog[`name_${lang}`];
  document.getElementById('trailer-title-overlay').textContent = prog[`name_${lang}`];
  document.getElementById('trailer-placeholder').classList.remove('hidden');
  document.getElementById('trailer-video-wrap').classList.add('hidden');
  document.getElementById('trailer-iframe').src = '';
  document.getElementById('trailer-play-btn').onclick = () => loadTrailer(prog.youtubeId);

  const trailerSpan = document.querySelector('.trailer-label span');
  if (trailerSpan) trailerSpan.textContent = t.trailer_watch || 'Tonton Trailer';

  document.getElementById('modal-desc').textContent = prog[`desc_${lang}`];

  // Schedule
  document.getElementById('modal-sched-table').innerHTML = prog.schedule.map(s =>
    `<div class="sched-row"><span class="sched-day">${s[`day_${lang}`]}</span><span class="sched-time">⏰ ${s.time}</span><span class="sched-loc">📍 ${s.loc}</span></div>`
  ).join('');

  // Details
  const dLabels = {
    id:['Durasi','Level','Usia','Biaya/Bulan','Kapasitas','Sertifikat'],
    en:['Duration','Level','Age','Monthly Fee','Class Size','Certificate'],
    fr:['Durée','Niveau','Âge','Frais/mois','Capacité','Certificat']
  };
  const d = prog.details;
  const vals = [d[`duration_${lang}`],d[`level_${lang}`],d[`age_${lang}`],d[`fee_${lang}`],d[`size_${lang}`],d[`cert_${lang}`]];
  document.getElementById('modal-details').innerHTML = vals.map((v,i) =>
    `<div class="detail-item"><div class="detail-item-label">${dLabels[lang][i]}</div><div class="detail-item-val">${v}</div></div>`
  ).join('');

  // CTA
  const wa = encodeURIComponent(prog[`waText_${lang}`]);
  const emailSubject = { id:`Pendaftaran: ${prog.name_id}`, en:`Inquiry: ${prog.name_en}`, fr:`Demande: ${prog.name_fr}` };
  document.getElementById('modal-wa-btn').href = `https://wa.me/628112688000?text=${wa}`;
  document.getElementById('modal-email-btn').href = `mailto:info@kinantisekar.id?subject=${encodeURIComponent(emailSubject[lang])}`;

  // Tab labels
  const modalTabs = document.querySelectorAll('.modal-tab');
  const tabKeys = ['tab_desc','tab_sched','tab_detail'];
  modalTabs.forEach((tab, i) => { if (t[tabKeys[i]]) tab.textContent = t[tabKeys[i]]; });
  const modalCTA = document.querySelectorAll('.modal-cta .cta-btn span[data-i18n]');
  modalCTA.forEach(el => { const k = el.getAttribute('data-i18n'); if (t[k]) el.textContent = t[k]; });
}
function loadTrailer(id) {
  document.getElementById('trailer-placeholder').classList.add('hidden');
  document.getElementById('trailer-video-wrap').classList.remove('hidden');
  document.getElementById('trailer-iframe').src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  currentModalProgram = null;
  document.getElementById('trailer-iframe').src = '';
  document.getElementById('trailer-placeholder').classList.remove('hidden');
  document.getElementById('trailer-video-wrap').classList.add('hidden');
}
function switchModalTab(tabId) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
  document.querySelectorAll('.modal-tab-content').forEach(c => c.classList.toggle('hidden', c.id !== `tab-${tabId}`));
}
function initModalTabs() {
  document.querySelectorAll('.modal-tab').forEach(tab => tab.addEventListener('click', () => switchModalTab(tab.dataset.tab)));
}
window.openModal = openModal;
window.closeModal = closeModal;

// ══════════════════════════════════════════
// 10. CHATBOT — FULL MULTILINGUAL ENGINE
// ══════════════════════════════════════════
function toggleChatbot() {
  const win = document.getElementById('chatbot-window');
  chatbotOpen = !chatbotOpen;
  win.classList.toggle('hidden', !chatbotOpen);
  document.getElementById('fab-icon').textContent = chatbotOpen ? '✕' : '💬';
  if (chatbotOpen && !chatbotInitialized) initChatbot();
}
window.toggleChatbot = toggleChatbot;

function initChatbot() {
  chatbotInitialized = true;
  const data = chatbotData[currentLang] || chatbotData.id;
  addBotMessage(data.welcome, true);
  setTimeout(() => renderQuickReplies(data.quickReplies), 900);
}

function refreshChatbotLang() {
  const data = chatbotData[currentLang] || chatbotData.id;
  const t = translations[currentLang];
  renderQuickReplies(data.quickReplies);
  const input = document.getElementById('chat-input');
  if (input && t.chat_placeholder) input.placeholder = t.chat_placeholder;
  const statusEl = document.querySelector('.chat-status');
  if (statusEl && t.chat_online) statusEl.textContent = t.chat_online;
}

function addBotMessage(html, isHtml = false) {
  const container = document.getElementById('chat-messages');
  const typingEl = document.createElement('div');
  typingEl.className = 'chat-msg bot';
  typingEl.innerHTML = `<div class="typing-dots"><span></span><span></span><span></span></div>`;
  container.appendChild(typingEl);
  container.scrollTop = container.scrollHeight;
  setTimeout(() => {
    if (container.contains(typingEl)) container.removeChild(typingEl);
    const msg = document.createElement('div');
    msg.className = 'chat-msg bot';
    msg.innerHTML = isHtml ? html : html.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\n/g,'<br>');
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  }, 700 + Math.random() * 400);
}

function addUserMessage(text) {
  const container = document.getElementById('chat-messages');
  const msg = document.createElement('div');
  msg.className = 'chat-msg user';
  msg.textContent = text;
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

function renderQuickReplies(replies) {
  document.getElementById('chat-quick').innerHTML = replies.map(r =>
    `<button class="quick-btn" onclick="handleQuickReply('${r}')">${r}</button>`
  ).join('');
}

function handleQuickReply(text) {
  addUserMessage(text);
  document.getElementById('chat-quick').innerHTML = '';
  processChatInput(text);
}
window.handleQuickReply = handleQuickReply;

function sendChat() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  addUserMessage(text);
  processChatInput(text);
}
window.sendChat = sendChat;

function processChatInput(text) {
  const lang = currentLang;
  const data = chatbotData[lang] || chatbotData.id;
  const { keywords, responses } = data;

  // normalize: lowercase + strip diacritics
  const normalize = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const lower = normalize(text);

  // Find matching response key
  let matchedKey = null;
  for (const [kw, rKey] of Object.entries(keywords)) {
    if (lower.includes(normalize(kw)) && responses[rKey]) {
      matchedKey = rKey;
      break;
    }
  }

  // Universal fallback: program names work in any language
  if (!matchedKey) {
    const universalMap = [
      ['gamelan', ['gamelan','gamelan','gamelan']],
      ['batik',   ['batik','batik','batik']],
      ['angklung',['angklung','angklung','angklung']],
      ['sendratari',['sendratari','sendratari','sendratari']],
      ['tari',    ['tari','dance','danse']],
    ];
    for (const [kw, keys] of universalMap) {
      const langIdx = {id:0,en:1,fr:2}[lang] || 0;
      if (lower.includes(kw) && responses[keys[langIdx]]) {
        matchedKey = keys[langIdx];
        break;
      }
    }
  }

  addBotMessage(responses[matchedKey] || responses['default'], true);
}

// ══════════════════════════════════════════
// 11. INIT
// ══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initFilters();
  initModalTabs();

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }
    });
  });

  // Default: Bahasa Indonesia
  setLang('id');
});
