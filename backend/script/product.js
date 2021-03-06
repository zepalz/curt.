const axios = require('axios')
const config = require('../config')

const mocks = [
  {
    thumbnails: [
      'https://firebasestorage.googleapis.com/v0/b/kkz-blog.appspot.com/o/-LQ_pokng5L5aXFvCFb5-1.png?alt=media&token=c78460a2-6900-4411-94ed-f991377f4e83',
      'https://firebasestorage.googleapis.com/v0/b/kkz-blog.appspot.com/o/-LQ_pokng5L5aXFvCFb5-2.png?alt=media&token=45bfa9ce-67c7-4772-845f-81561d02f11d',
      'https://firebasestorage.googleapis.com/v0/b/kkz-blog.appspot.com/o/-LQ_pokng5L5aXFvCFb5-3.png?alt=media&token=db6a15a0-d798-40aa-b1d0-0650f8b8b17f',
      'https://firebasestorage.googleapis.com/v0/b/kkz-blog.appspot.com/o/-LQ_pokng5L5aXFvCFb5-4.png?alt=media&token=42ee2a8f-e587-45e2-a54a-8446244224e2',
      'https://firebasestorage.googleapis.com/v0/b/kkz-blog.appspot.com/o/-LQ_pokng5L5aXFvCFb5-5.png?alt=media&token=27d1beda-f085-4aca-bf3f-8c2eb19256d2',
      'https://firebasestorage.googleapis.com/v0/b/kkz-blog.appspot.com/o/-LQ_pokng5L5aXFvCFb5-6.png?alt=media&token=56463740-1c1f-4445-83d3-eead7de79617',
      'https://firebasestorage.googleapis.com/v0/b/kkz-blog.appspot.com/o/-LQ_pokng5L5aXFvCFb5-7.png?alt=media&token=94123e7e-84da-4025-b3bb-093c46825e46',
      'https://firebasestorage.googleapis.com/v0/b/kkz-blog.appspot.com/o/-LQ_pokng5L5aXFvCFb5-8.png?alt=media&token=747e8caa-7961-47be-b526-01770e879679',
    ],
    name: 'curt. x Van rose edition.',
    slug: 'curt. x van rose edition.-men',
    base: null,
    price: 2300,
    brand: 'Vans',
    gender: 'men',
    size: 6.5,
    imageUrl: `${config.FRONTEND_URL}/mocks/slip-on-white-1.jpeg`,
  },
  {
    name: 'Slip On White',
    slug: 'slip-on-white-men',
    base: null,
    imageUrl: `${config.FRONTEND_URL}/mocks/slip-on-white-1.jpeg`,
    price: 2300,
    brand: 'Vans',
    size: 6.5,
    thumbnails: [
      `${config.FRONTEND_URL}/mocks/slip-on-white-1.jpeg`,
      `${config.FRONTEND_URL}/mocks/slip-on-white-2.jpeg`,
      `${config.FRONTEND_URL}/mocks/slip-on-white-3.jpeg`,
      `${config.FRONTEND_URL}/mocks/slip-on-white-4.jpeg`,
      `${config.FRONTEND_URL}/mocks/slip-on-white-5.jpeg`,
      `${config.FRONTEND_URL}/mocks/slip-on-white-6.jpeg`,
      `${config.FRONTEND_URL}/mocks/slip-on-white-7.jpeg`,
      `${config.FRONTEND_URL}/mocks/slip-on-white-8.jpeg`,
    ],
    gender: 'men',
  },
  {
    name: 'Old Skool',
    slug: 'old-skool-men',
    base: null,
    imageUrl: `${config.FRONTEND_URL}/mocks/old-skool-thumbnails-1.jpeg`,
    price: 2300,
    brand: 'Vans',
    size: 6.5,
    thumbnails: [
      `${config.FRONTEND_URL}/mocks/old-skool-thumbnails-1.jpeg`,
      `${config.FRONTEND_URL}/mocks/old-skool-thumbnails-2.jpeg`,
      `${config.FRONTEND_URL}/mocks/old-skool-thumbnails-3.jpeg`,
      `${config.FRONTEND_URL}/mocks/old-skool-thumbnails-4.jpeg`,
      `${config.FRONTEND_URL}/mocks/old-skool-thumbnails-5.jpeg`,
      `${config.FRONTEND_URL}/mocks/old-skool-thumbnails-6.jpeg`,
      `${config.FRONTEND_URL}/mocks/old-skool-thumbnails-7.jpeg`,
    ],
    gender: 'men',
  },
  {
    name: 'Air Max 97',
    slug: 'air-max-97-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/tjcpz9pilxbhupaerwwf/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-max-97-M2vYej.jpg',
    price: 4800,
    brand: 'Nike',
    size: 6.5,
    gender: 'men',
  },
  {
    name: 'REDBULL RBR EVO CAT II',
    slug: 'redbull-rbr-evo-cat-ii-men',
    base: null,
    imageUrl:
      'https://www.pumaonlinethailand.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/3/0/30618801.jpg',
    price: 4499,
    brand: 'Puma',
    size: 10,
    gender: 'men',
  },
  {
    name: 'Air Max 97',
    slug: 'air-max-97-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/tjcpz9pilxbhupaerwwf/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-max-97-M2vYej.jpg',
    price: 4800,
    brand: 'Nike',
    size: 7,
    gender: 'men',
  },
  {
    name: 'Air Max 97',
    slug: 'air-max-97-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/tjcpz9pilxbhupaerwwf/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-max-97-M2vYej.jpg',
    price: 4800,
    brand: 'Nike',
    size: 7.5,
    gender: 'men',
  },
  {
    name: 'Air Max 97',
    slug: 'air-max-97-women',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/tjcpz9pilxbhupaerwwf/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-max-97-M2vYej.jpg',
    price: 4800,
    brand: 'Nike',
    size: 8.5,
    gender: 'women',
  },
  {
    name: 'Air Max 97',
    slug: 'air-max-97-women',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/tjcpz9pilxbhupaerwwf/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-max-97-M2vYej.jpg',
    price: 4800,
    brand: 'Nike',
    size: 10,
    gender: 'women',
  },
  {
    name: 'Air Max 97',
    slug: 'air-max-97-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/tjcpz9pilxbhupaerwwf/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-max-97-M2vYej.jpg',
    price: 4800,
    brand: 'Nike',
    size: 12,
    gender: 'men',
  },
  {
    name: 'Cortez Basic SL',
    slug: 'cortez-basic-sl-women',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/mksnzvsllmy8pej7qm2b/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-cortez-basic-sl-8kwrrB.jpg',
    price: 2000,
    brand: 'Nike',
    size: 9,
    gender: 'women',
  },
  {
    name: 'Huarache Extreme X',
    slug: 'huarache-extreme-x-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/hrqddqgfm9og2k4hddrh/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-huarache-extreme-4LNhnF.jpg',
    price: 2900,
    brand: 'Nike',
    size: 7,
    gender: 'men',
  },
  {
    name: 'Air Jordan 1 Mid Alt',
    slug: 'air-jordan-1-mid-alt-men',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/sgjkztp9xmgx1ur5alfs/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-jordan-1-mid-alt-FKKgKz.jpg',
    price: 2200,
    brand: 'Nike',
    size: 7,
    gender: 'men',
  },
  {
    name: 'Huarache Extreme',
    slug: 'huarache-extreme-women',
    base: null,
    imageUrl:
      'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/hrqddqgfm9og2k4hddrh/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-huarache-extreme-4LNhnF.jpg',
    price: 2900,
    brand: 'Nike',
    size: 7,
    gender: 'women',
  },
  {
    name: 'EQT SUPPORT SOCK PRIMEKNIT',
    slug: 'eqt-support-sock-primeknit-men',
    base: null,
    imageUrl:
      'https://www.adidas.co.th/dis/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dwa5d5b464/zoom/B37529_01_standard.jpg?sh=840&strip=false&sw=840',
    price: 5200,
    brand: 'Adidas',
    size: 7,
    gender: 'men',
  },
  {
    name: 'NMD CS2 PRIMEKNIT',
    slug: 'nmd-cs2-primeknit-men',
    base: null,
    imageUrl:
      'https://www.adidas.co.th/dis/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dw8bb6ec96/zoom/D96743_01_standard.jpg?sh=840&strip=false&sw=840',
    price: 7000,
    brand: 'Adidas',
    size: 7,
    gender: 'men',
  },
  {
    name: 'X TANGO 18.1',
    slug: 'x-tango-18-1-women',
    base: null,
    imageUrl:
      'https://www.adidas.co.th/dis/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dwc0f47a27/zoom/DB2281_01_standard.jpg?sh=840&strip=false&sw=840',
    price: 4700,
    brand: 'Adidas',
    size: 7,
    gender: 'women',
  },
  {
    name: 'ULTRABOOST X ALL TERRAIN',
    slug: 'ultraboost-x-all-terrain-men',
    base: null,
    imageUrl:
      'https://www.adidas.co.th/dis/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dwf6b30512/zoom/BB6519_01_standard.jpg?sh=840&strip=false&sw=840',
    price: 8000,
    brand: 'Adidas',
    size: 7,
    gender: 'men',
  },
  {
    name: 'NMD TS1 PRIMEKNIT GTX',
    slug: 'nmd-ts1-primeknit-gtx-women',
    base: null,
    imageUrl:
      'https://www.adidas.co.th/dis/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dwd1fea9c6/zoom/AQ0927_01_standard.jpg?sh=840&strip=false&sw=840',
    price: 9000,
    brand: 'Adidas',
    size: 7,
    gender: 'women',
  },
  {
    name: 'IGNITE LIMITLESS 2',
    slug: 'ignite-limitless-2-men',
    base: null,
    imageUrl:
      'https://www.pumaonlinethailand.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/1/9/19129301-03.jpg',
    price: 4999,
    brand: 'Puma',
    size: 10,
    gender: 'men',
  },
  {
    name: 'SUEDE CLASSIC X THE WEEKND',
    slug: 'suede-classic-x-the-weekend-men',
    base: null,
    imageUrl:
      'https://www.pumaonlinethailand.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/3/0/30618801.jpg',
    price: 6999,
    brand: 'Puma',
    size: 10,
    gender: 'men',
  },
  {
    name: 'ABYSS DIAMOND',
    slug: 'abyss-diamond-men',
    base: null,
    imageUrl:
      'https://www.pumaonlinethailand.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/3/6/365655_01-01_1.jpg',
    price: 5499,
    brand: 'Puma',
    size: 10,
    gender: 'men',
  },
  {
    name: 'PUMA XO PARALLEL',
    slug: 'puma-xo-parallel-men',
    base: null,
    imageUrl:
      'https://www.pumaonlinethailand.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/1/0/10481201.jpg',
    price: 7999,
    brand: 'Puma',
    size: 10,
    gender: 'men',
  },
  {
    name: 'Evan Smith Hi Zero',
    slug: 'evan-smith-hi-zero-men',
    base: null,
    imageUrl:
      'https://ssl.quiksilver.com/www/store.quiksilver.eu/html/images/catalogs/global/dcshoes-products/all/default/xlarge/adys300423_evansmithhizero,p_nc5_frt2.jpg',
    price: 2460,
    brand: 'DC',
    size: 10,
    gender: 'men',
  },
  {
    name: 'Pure SE',
    slug: 'pure-se-women',
    base: null,
    imageUrl:
      'https://ssl.quiksilver.com/www/store.quiksilver.eu/html/images/catalogs/global/dcshoes-products/all/default/xlarge/adys400043_purehightopwc,p_xkwb_frt2.jpg',
    price: 2790,
    brand: 'DC',
    size: 10,
    gender: 'women',
  },
  {
    name: 'Kalis Lite',
    slug: 'kalis-lite-men',
    base: null,
    imageUrl:
      'https://ssl.quiksilver.com/www/store.quiksilver.eu/html/images/catalogs/global/dcshoes-products/all/default/xlarge/adys100291_kalislite,p_wrd_frt2.jpg',
    price: 2460,
    brand: 'DC',
    size: 10,
    gender: 'men',
  },
  {
    name: 'Court Graffik SE',
    slug: 'court-graffik-se-men',
    base: null,
    imageUrl:
      'https://ssl.quiksilver.com/www/store.quiksilver.eu/html/images/catalogs/global/dcshoes-products/all/default/xlarge/300927_courtgraffikse,p_xbwk_frt2.jpg',
    price: 2300,
    brand: 'DC',
    size: 10,
    gender: 'men',
  },
  {
    name: 'Pensford',
    slug: 'pensford-women',
    base: null,
    imageUrl:
      'https://ssl.quiksilver.com/www/store.quiksilver.eu/html/images/catalogs/global/dcshoes-products/all/default/xlarge/adys400038_pensford,p_wht_frt2.jpg',
    price: 2950,
    brand: 'DC',
    size: 10,
    gender: 'women',
  },
  {
    name: 'ELITE FLEX WASICK',
    slug: 'elite-flex-wasick-women',
    base: null,
    imageUrl:
      'https://image.skechers.com/img/productimages/xlarge/52649_BKW.jpg',
    price: 2300,
    brand: 'Skechers',
    size: 10,
    gender: 'women',
  },
  {
    name: 'BOUNDER WOLFSTON',
    slug: 'bounder-wolfston-women',
    base: null,
    imageUrl:
      'https://image.skechers.com/img/productimages/xlarge/52506_BBK.jpg',
    price: 2130,
    brand: 'Skechers',
    size: 10,
    gender: 'women',
  },
  {
    name: 'SKECHERS ONE CHAMP ULTRA',
    slug: 'skeschers-one-champ-ultra-women',
    base: null,
    imageUrl:
      'https://image.skechers.com/img/productimages/xlarge/18566_WHT.jpg',
    price: 2300,
    brand: 'Skechers',
    size: 10,
    gender: 'women',
  },
  {
    name: 'REEBOK ROYAL BB4500 HI2',
    slug: 'reebok-royal-bb4500-hi2-women',
    base: null,
    imageUrl:
      'https://www.reebok.com/dihihiis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dw7d900817/zoom/CN4107_01_standard.jpg?sh=840&strip=false&sw=840',
    price: 2130,
    brand: 'Reebok',
    size: 10,
    gender: 'women',
  },
  {
    name: 'DMX SERIES 1600',
    slug: 'dmk-series-1600-women',
    base: null,
    imageUrl:
      'https://www.reebok.com/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dwa575d7e6/zoom/CN7738_01_standard.jpg?sh=840&strip=false&sw=840',
    price: 3960,
    brand: 'Reebok',
    size: 10,
    gender: 'women',
  },
]

console.log(mocks.length)
for (let i = 0; i < mocks.length; i++) {
  axios
    .post('http://localhost:8000/products/add', mocks[i])
    .then(({ data }) => {
      console.log(data)
    })
    .catch(err => console.log(err))
}
