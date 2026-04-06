

const placeholderImg = (name) =>
  `https://via.placeholder.com/600x600/0f0f0f/FFD700?text=${encodeURIComponent(name)}`;

const allProducts = [
 
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A56 5G 256GB/8RAM', price: 3199.99, pix: 3199.99, img: 'images/samsung_a56_5g.jpg', badge: '🆕 NOVO' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A26 5G 256GB/8RAM', price: 2099.99, pix: 1899.99, img: 'images/samsung_a26_5g.jpg', badge: '🔥🔥🔥 OFERTA PIX' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A17 4G 256GB/8RAM', price: 1899.99, pix: 1899.99, img: 'images/galaxy a17.webp', badge: '' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A56 5G 256GB/8RAM', price: 3199.99, pix: 3199.99, img: 'images/samsung_a56_5g.jpg', badge: '🆕 NOVO' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A26 5G 256GB/8RAM', price: 2099.99, pix: 1899.99, img: 'images/samsung_a26_5g.jpg', badge: '🔥 OFERTA' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A17 4G 256GB/8RAM', price: 1899.99, pix: 1899.99, img: 'images/samsung_a16_5g.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A16 5G 128GB/4RAM', price: 1799.99, pix: 1799.99, img: 'images/samsung_a16_5g.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A17 4G 128GB/4RAM', price: 1599.99, pix: 1599.99, img: 'images/galaxy a17.webp', badge: '' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A16 128GB/4RAM', price: 1499.99, pix: 1499.99, img: 'images/samsung_a16_5g.jpg', badge: '⬇️ BAIXOU 🔥🔥' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A07 128GB/4RAM', price: 1199.99, pix: 1199.99, img: 'images/samsung_a07.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Samsung', name: 'Galaxy A06 128GB/4RAM', price: 999.99, pix: 799.99, img: 'images/samsung_a06.jpg', badge: '🔥🔥🔥 OFERTA PIX' },

  // =========================
  // APPLE
  // =========================
  { category: 'Smartphone', brand: 'Apple', name: 'iPhone 16 128GB', price: 6999.99, pix: 5999.99, img: 'images/iphone_16.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Apple', name: 'iPhone 17 256GB', price: 8999.99, pix: 7999.99, img: 'images/iphone_17.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Apple', name: 'iPhone 17 Pro Max 256GB', price: 12499.99, pix: 10999.99, img: 'images/iphone_17_pro_max.jpg', badge: '' },

  // =========================
  // XIAOMI (linha padrão)
  // =========================
  { category: 'Smartphone', brand: 'Xiaomi', name: 'POCO X7 PRO IRON MAN EDITION 512GB/12RAM', price: 5499.99, pix: 5499.99, img: 'images/poco_x7_pro_iron_man.jpg', badge: '⬇️ BAIXOU 🔥🔥🔥' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'POCO X7 PRO (5G) 512GB/12RAM', price: 3999.99, pix: 3999.99, img: 'images/poco_x7_pro.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'POCO X7 PRO (5G) 256GB/8RAM', price: 3299.99, pix: 3299.99, img:'images/POCO X7 PRO (5G) 256GB.webp', badge: '' },

  { category: 'Smartphone', brand: 'Xiaomi', name: 'NOTE 14 PRO 4G 256GB/8RAM', price: 2699.99, pix: 2699.99, img:'images/NOTE 14 PRO 4G 256GB.webp', badge: '' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'NOTE 14 256GB/8RAM', price: 2299.99, pix: 2299.99, img:'images/NOTE 14 128GB.webp', badge: '⬇️ BAIXOU 🔥🔥🔥' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'NOTE 14 128GB/6RAM', price: 1999.99, pix: 1999.99, img: 'images/NOTE 14 128GB.webp', badge: '⬇️ BAIXOU 🔥🔥🔥' },

  { category: 'Smartphone', brand: 'Xiaomi', name: 'REDMI 14C 256GB/8RAM', price: 1699.99, pix: 1499.99, img: 'images/redmi_14c.jpg', badge: '🔥🔥🔥 OFERTA PIX' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'REDMI 14C 128GB/4RAM', price: 1399.99, pix: 1399.99, img: 'images/redmi_14c.jpg', badge: '' },

  { category: 'Smartphone', brand: 'Xiaomi', name: 'REDMI A5 128GB/4RAM', price: 1199.99, pix: 1199.99, img:'images/Redmi_a5 128.webp', badge: '' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'REDMI A5 64GB/3RAM', price: 999.99, pix: 799.99, img: 'images/Redmi_a5 128.webp',badge: '🔥🔥🔥 OFERTA PIX' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'REDMI A3 128GB/4RAM', price: 799.99, pix: 799.99, img: 'images/redmi_a3.jpg', badge: '🔥🔥🔥' },

  // =========================
  // XIAOMI — HOMOLOGADOS ANATEL
  // (coloquei badge ANATEL para diferenciar)
  // =========================
  { category: 'Smartphone', brand: 'Xiaomi', name: 'REDMI 15C (ANATEL) 256GB/8RAM', price: 2999.99, pix: 2999.99, img:'images/REDMI 15C (ANATEL) 256GB.webp', badge: '🇧🇷 ANATEL' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'REDMI NOTE 14 (ANATEL) 256GB/8RAM', price: 2499.99, pix: 2499.99, img:'images/redmi_note14_pro.jpg', badge: '🇧🇷 ANATEL' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'REDMI 14C (ANATEL) 256GB/8RAM', price: 2299.99, pix: 2299.99, img:'images/REDMI NOTE 14 (ANATEL) 256GB.webp', badge: '🇧🇷 ANATEL' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'REDMI 14C (ANATEL) 128GB/4RAM', price: 1999.99, pix: 1999.99, img: 'images/REDMI NOTE 14 (ANATEL) 256GB.webp', badge: '🇧🇷 ANATEL' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'REDMI A5 (ANATEL) 64GB/3RAM', price: 999.99, pix: 999.99, img: 'images/Redmi_a5 128.webp', badge: '🇧🇷 ANATEL ⬇️ BAIXOU 🔥🔥' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'REDMI 13C (ANATEL) 128GB/6RAM', price: 1799.99, pix: 1799.99, img: 'images/redmi_13c.jpg', badge: '🇧🇷 ANATEL ⬇️ BAIXOU 🔥🔥🔥' },
  { category: 'Smartphone', brand: 'Xiaomi', name: 'REDMI A3 (ANATEL) 128GB/4RAM', price: 1499.99, pix: 1499.99, img: 'images/redmi_a3.jpg', badge: '🇧🇷 ANATEL ⬇️ BAIXOU 🔥🔥' },

  // =========================
  // MOTOROLA
  // =========================
  { category: 'Smartphone', brand: 'Motorola', name: 'Moto G15 256GB/4RAM', price: 1699.99, pix: 1499.99, img: 'images/Motorola_g15.webp', badge: '🔥🔥🔥 OFERTA PIX' },
  { category: 'Smartphone', brand: 'Motorola', name: 'Moto G06 128GB/4RAM', price: 1199.99, pix: 1199.99, img: 'images/moto_g06.jpg', badge: '🆕' },
  { category: 'Smartphone', brand: 'Motorola', name: 'Moto G05 128GB/4RAM', price: 1099.99, pix: 1099.99, img: 'images/moto_g05.jpg', badge: '' },

  // =========================
  // TECNO
  // =========================
  { category: 'Smartphone', brand: 'Tecno', name: 'Spark Go 1 128GB/4RAM', price: 1099.99, pix: 999.99, img: 'images/tecno_spark_go1.jpg', badge: '🔥🔥🔥 OFERTA PIX' },
  { category: 'Smartphone', brand: 'Tecno', name: 'Spark 30C 128GB/4RAM', price: 1499.99, pix: 1499.99, img: 'images/tecno_spark_30c.jpg', badge: '🆕' },
  { category: 'Smartphone', brand: 'Tecno', name: 'Spark 30C / 30 Pro 256GB/8RAM', price: 2199.99, pix: 1999.99, img: 'images/tecno_spark_30c.jpg', badge: '🆕 🔥🔥🔥 OFERTA PIX' },
  { category: 'Smartphone', brand: 'Tecno', name: 'Camon 30S 4G 256GB/8RAM', price: 2299.99, pix: 2299.99, img: 'images/Camon 30s 5G 256GB.webp', badge: '🆕' },
  { category: 'Smartphone', brand: 'Tecno', name: 'Pova 7 4G 256GB/8RAM', price: 2499.99, pix: 2499.99, img: 'images/Spark Go 1 128GB.webp', badge: '🆕' },
  { category: 'Smartphone', brand: 'Tecno', name: 'Camon 30 5G 256GB/8RAM', price: 2999.99, pix: 2999.99, img: 'images/camon 30s tecno.avif', badge: '🆕' },

  // =========================
  // HONOR
  // =========================
  { category: 'Smartphone', brand: 'Honor', name: 'X5B 128GB/4RAM', price: 1299.99, pix: 999.99, img: 'images/X5B 128GB.webp', badge: '🆕 🔥🔥🔥 OFERTA PIX' },
  { category: 'Smartphone', brand: 'Honor', name: 'X5B Plus 256GB/4RAM', price: 1699.99, pix: 1499.99, img: 'images/X5B 128GB.webp', badge: '🆕 🔥🔥🔥 OFERTA PIX' },

  // =========================
  // REALME
  // =========================
  { category: 'Smartphone', brand: 'Realme', name: 'Realme 14 Pro+ (5G) 512GB/12RAM', price: 4499.99, pix: 4499.99, img: 'images/realme_14_pro_plus.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Realme', name: 'Realme 14 Pro+ (5G) 256GB/12RAM', price: 3999.99, pix: 3999.99, img: 'images/realme_14_pro_plus.jpg', badge: '⬇️ BAIXOU 🔥🔥🔥' },
  { category: 'Smartphone', brand: 'Realme', name: 'Realme 14 Pro (5G) 256GB/12RAM', price: 2999.99, pix: 2999.99, img: 'images/realme_14_pro.jpg', badge: '⬇️ BAIXOU 🔥🔥🔥' },

  { category: 'Smartphone', brand: 'Realme', name: 'Realme 14 (5G) 512GB/12RAM', price: 3499.99, pix: 3499.99, img:'images/realme_14_5g.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Realme', name: 'Realme 14 (5G) 256GB/12RAM', price: 3299.99, pix: 2499.99, img: 'images/realme_14_5g.jpg', badge: '' },

  { category: 'Smartphone', brand: 'Realme', name: 'Realme C85 Pro 256GB/8RAM', price: 2599.99, pix: 2599.99, img: 'images/realme_c85_pro.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Realme', name: 'Realme C85 NFC 256GB/8RAM', price: 2399.99, pix: 2399.99, img: 'images/realme_c85_pro.jpg', badge: '' },

  { category: 'Smartphone', brand: 'Realme', name: 'Realme C75 NFC 256GB/8RAM', price: 1999.99, pix: 1899.99, img: 'images/realme_c75.jpg', badge: '🔥🔥🔥 OFERTA PIX' },
  { category: 'Smartphone', brand: 'Realme', name: 'Realme C75X NFC 256GB/8RAM', price: 1899.99, pix: 1799.99, img: 'images/realme_c75.jpg', badge: '🔥🔥🔥 OFERTA PIX' },

  { category: 'Smartphone', brand: 'Realme', name: 'Realme C71 128GB/4RAM', price: 1499.99, pix: 1499.99, img: 'images/realme_c71.jpg', badge: '' },

  { category: 'Smartphone', brand: 'Realme', name: 'Realme C61 256GB/8RAM', price: 1999.99, pix: 1699.99, img: 'images/realme_c61.jpg', badge: '🔥🔥🔥 OFERTA PIX' },

  { category: 'Smartphone', brand: 'Realme', name: 'Realme Note 70S 128GB/4RAM', price: 1499.99, pix: 1499.99, img: 'images/Realme Note 70S 128GB.webp', badge: '' },
  { category: 'Smartphone', brand: 'Realme', name: 'Realme Note 60S 256GB/8RAM', price: 1399.99, pix: 1399.99, img: 'images/realme_note60.jpg', badge: '' },

  { category: 'Smartphone', brand: 'Realme', name: 'Realme C61 128GB/4RAM', price: 1299.99, pix: 1299.99, img:'images/realme_c61.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Realme', name: 'Realme Note 70 128GB/4RAM', price: 1299.99, pix: 1299.99, img: 'images/Realme Note 70 128GB.webp', badge: '' },

  { category: 'Smartphone', brand: 'Realme', name: 'Realme Note 60 / 60X 128GB/4RAM', price: 999.99, pix: 899.99, img:'images/realme_note60.jpg', badge: '🔥🔥🔥 OFERTA PIX' },
  { category: 'Smartphone', brand: 'Realme', name: 'Realme Note 60X 64GB/3RAM', price: 799.99, pix: 799.99, img: 'images/realme_note60s.jpg', badge: '' },

  // =========================
  // INFINIX
  // =========================
  { category: 'Smartphone', brand: 'Infinix', name: 'Smart 10 128GB/4+4RAM', price: 1199.99, pix: 1099.99, img:'images/Smart 10 128GB.webp', badge: '🔥🔥🔥 OFERTA PIX' },
  { category: 'Smartphone', brand: 'Infinix', name: 'Hot 60i 256GB/4+4RAM', price: 1999.99, pix: 1999.99, img: 'images/Hot 60i 256GB.webp', badge: '' },
  { category: 'Smartphone', brand: 'Infinix', name: 'Hot 50i 256GB/4+4RAM', price: 1799.99, pix: 1699.99, img: 'images/Hot 50i 256GB.webp', badge: '🔥🔥🔥 OFERTA PIX' },

  // =========================
  // OPPO
  // =========================
  { category: 'Smartphone', brand: 'Oppo', name: 'OPPO A40 256GB/4RAM', price: 1799.99, pix: 1799.99, img: 'images/oppo_a40.jpg', badge: '' },
  { category: 'Smartphone', brand: 'Oppo', name: 'OPPO A60 256GB/8RAM', price: 2299.99, pix: 1999.99, img: 'images/oppo_a60.jpg', badge: '🔥🔥🔥 OFERTA PIX' },

  // =========================
  // POSITIVO
  // =========================
  { category: 'Smartphone', brand: 'Positivo', name: 'P41 Dual Chip 4G', price: 399.99, pix: 399.99, img: 'images/P41 Dual Chip 4G.webp', badge: '' },
  //==========================
  //ITEL
  //===========================
  { category: 'Smartphone', brand: 'Itel', name: 'A90 4G 128GB/4RAM', price: 999.99, pix: 999.99, img: 'images/A90 4G 128GB.png', badge: '' },
  { category: 'Smartphone', brand: 'Itel', name: 'CITY 100 4G 128GB/4RAM', price: 1499.99, pix: 1499.99, img: 'images/CITY 100 4G 128GB.webp', badge: '' },

  
  { category: 'Som', brand: 'JBL', name: 'PARTYBOX ULTIMATE 1.100', price: 8999.99, pix: 8999.99, img: 'images/jbl_partybox_ultimate1000.jpg.jpeg', badge: '🔸🔊' },
  { category: 'Som', brand: 'JBL', name: 'PARTYBOX JBL 720', price: 6999.99, pix: 6499.99, img: 'images/jbl_partybox_ultimate.jpg', badge: '🆕 🔥🔥🔥' },
  { category: 'Som', brand: 'JBL', name: 'PARTYBOX 710', price: 5499.99, pix: 5499.99, img: 'images/jbl_partybox_710.jpeg', badge: '' },
  { category: 'Som', brand: 'JBL', name: 'PARTYBOX 520', price: 5999.99, pix: 5499.99, img: 'images/Partybox 520.webp', badge: '🆕 🔥🔥🔥' },
  { category: 'Som', brand: 'JBL', name: 'PARTYBOX STAGE 320', price: 4499.99, pix: 4499.99, img: 'images/jbl_partybox_stage320.jpg', badge: '' },
  { category: 'Som', brand: 'JBL', name: 'BOOMBOX 3 WI-FI', price: 3499.99, pix: 3499.99, img: 'images/jbl_boombox wifi_3.jpeg', badge: '' },
  { category: 'Som', brand: 'JBL', name: 'AUTHENTICS 500', price: 3499.99, pix: 3499.99, img: 'images/authentics 500.webp', badge: '' },
  { category: 'Som', brand: 'JBL', name: 'BOOMBOX 4', price: 3499.99, pix: 3199.99, img: 'images/boombox4.webp', badge: '🆕 🔥🔥🔥' },
  { category: 'Som', brand: 'JBL', name: 'BOOMBOX 3', price: 2799.99, pix: 2499.99, img: 'images/boombox3.webp', badge: '🔥🔥' },
  { category: 'Som', brand: 'JBL', name: 'PARTYBOX ENCORE 2 (c/ 2 microfones)', price: 2799.99, pix: 2499.99, img: 'images/encore_ 2_com_microfone.webp', badge: '🆕 🔥🔥🔥' },
  { category: 'Som', brand: 'JBL', name: 'PARTYBOX ENCORE ESSENTIAL 2', price: 2199.99, pix: 1999.99, img: 'images/encore_essencial2.webp', badge: '🆕 🔥🔥🔥' },
  { category: 'Som', brand: 'JBL', name: 'XTREME 4', price: 2199.99, pix: 1999.99, img: 'images/XTREME_4.webp', badge: '🆕 🔥🔥🔥' },
  { category: 'Som', brand: 'JBL', name: 'FLIP 7', price: 899.99, pix: 899.99, img: 'images/flip7.webp', badge: '' },

  { category: 'Som', brand: 'Amvox', name: 'AMVOX ACA 1900 - 1900W', price: 2799.99, pix: 2799.99, img: 'images/amvox_aca1900.png', badge: '🔸🔊' },
  { category: 'Som', brand: 'Amvox', name: 'AMVOX ACA 1101 - 1000W', price: 1599.99, pix: 1599.99, img: 'images/amvox_aca1101.jpg', badge: '' },
  { category: 'Som', brand: 'Amvox', name: 'AMVOX ACA BAGVOX - 600W', price: 1099.99, pix: 1099.99, img: 'images/amvox_aca_600.webp', badge: '' },

  { category: 'Som', brand: 'Sumay', name: 'SUMAY LIGHT BOX FULL LED - 800W', price: 1599.99, pix: 1599.99, img: 'images/amvox_aca_800.webp', badge: '🔸🔊' },
  { category: 'Som', brand: 'Sumay', name: 'SUMAY GOLDBOX - 120W', price: 1499.99, pix: 1499.99, img: 'images/sumay_gold_box.webp', badge: '' },

  { category: 'Som', brand: 'Aiwa', name: 'AIWA BOOMBOX LIGHTS PLUS - 200W', price: 2399.99, pix: 2399.99, img: 'images/aiwa_boombox120.png', badge: '🔸🔊' },
  { category: 'Som', brand: 'Aiwa', name: 'AIWA BOOMBOX PLUS + FONE BRINDE', price: 2299.99, pix: 2299.99, img: 'images/aiwa_boombox120.png', badge: '💥 BRINDE' },

  { category: 'Som', brand: 'Imenso', name: 'CAIXA DE SOM IMENSO X73 - 200W', price: 2199.99, pix: 2199.99, img: 'images/imenso_x73.webp', badge: '🔸🔉' },
  { category: 'Som', brand: 'Imenso', name: 'CAIXA DE SOM IMENSO X69 - 80W', price: 1799.99, pix: 1799.99, img: 'images/imenso_x69.webp', badge: '' },

  { category: 'Som', brand: 'FAM', name: 'CAIXA DE SOM FAM A046 IP67 - 40W', price: 399.99, pix: 399.99, img: 'images/fam_046a.webp', badge: '⬇️ BAIXOU 🔥🔥🔥' },

  // =========================
  // TABLETS — ATUALIZAÇÃO
  // =========================
  { category: 'Tablet', brand: 'Samsung', name: 'Galaxy Tab A9+ 64GB/4RAM', price: 999.99, pix: 999.99, img: 'images/Galaxy Tab A9+ 64GB.webp', badge: '' },
  { category: 'Tablet', brand: 'Xiaomi', name: 'Redmi Pad 2 256GB/8RAM', price: 2099.99, pix: 2099.99, img:'images/redmi_pad2.jpg', badge: '⬇️' },
  { category: 'Tablet', brand: 'Vision', name: 'Vision Tab 7 Spidey 64GB/3RAM', price: 699.99, pix: 699.99, img:'images/Vision_Tab_7_Spidey 64GB.webp', badge: '' },
  { category: 'Tablet', brand: 'Vision', name: 'Vision Tab 7 Minions 64GB/3RAM', price: 699.99, pix: 699.99, img:'images/Vision_Tab_7_minions 64GB.webp', badge: '' },

];

