// ── Hardcoded fallback data ──
const HARDCODED_INFO = [
  ['name','description','location','logo','banner','cafeteria number','rider number','track url','name_ar','description_ar'],
  [
   'Rukan Al Shawarma Cafateria','A Syrian restaurant with a Levantine flavor','https://maps.app.goo.gl/76SU9e2fiS7TMJj88','https://drive.google.com/file/d/1Sk2Qf2hDd0E77LLzYRLVYADuct_PlLHB/view?usp=sharing',
   'https://drive.google.com/file/d/1HGhOIVtjOYnhQC-XrwQBR_Nh697qTRG1/view?usp=sharing','971509517012','971522847006','https://wa.me/971522847006',
   'كافتيريا المشاهير','مطعم سوري بنكهة الشامية'
  ]
];

const HARDCODED_ITEMS = [
// [cat_en, name_en, desc_en, price, offer_price, cat_icon, image_url, tags, cat_ar, name_ar, desc_ar]
['Arabic Food','Falafel Plate','Crispy deep-fried chickpea balls served with pita and dips','10','8','','https://drive.google.com/thumbnail?id=1vkyB4XjIAS8abFiLjGyuA8SlRSLc70YE&sz=w1000','veg','أكلات عربية','طبق فلافل','كرات حمص مقلية مقرمشة تقدم مع الخبز والصلصات'],
['Breakfast','Egg Sandwich','Fresh sandwich filled with seasoned eggs','6','','','https://drive.google.com/thumbnail?id=1vkyB4XjIAS8abFiLjGyuA8SlRSLc70YE&sz=w1000','','فطور','ساندويتش بيض','ساندويتش طازج محشو بالبيض المتبل'],
['Arabic Food','Foul Medames','Slow-cooked fava beans with olive oil and spices','8','','','https://drive.google.com/thumbnail?id=1vkyB4XjIAS8abFiLjGyuA8SlRSLc70YE&sz=w1000','veg','أكلات عربية','فول مدمس','فول مطبوخ ببطء مع زيت الزيتون والتوابل'],
['Rice Meals','Chicken Biryani','Spiced rice with tender chicken and aromatic herbs','18','15','','https://drive.google.com/thumbnail?id=1vkyB4XjIAS8abFiLjGyuA8SlRSLc70YE&sz=w1000','popular','وجبات أرز','برياني دجاج','أرز متبل مع دجاج طري وأعشاب عطرية'],
['Rice Meals','Lamb Mandi','Traditional rice dish with slow-cooked lamb','25','20','','https://drive.google.com/thumbnail?id=1vkyB4XjIAS8abFiLjGyuA8SlRSLc70YE&sz=w1000','','وجبات أرز','مندي لحم','طبق أرز تقليدي مع لحم مطهو ببطء'],
['Grills','Mixed Grill Platter','Assorted grilled meats served with rice or bread','30','25','','https://lh3.googleusercontent.com/gps-cs-s/APNQkAFC-jDYV1-sbL3YSqER3tJ7phN6UEl0c_rUYQoNZx50OZviHQlpDmW86cvHjjSRjh8ADwtJPDONuOApbtsv1Rt_e3sXmYzFfcLBIm-fPZ2dmt4tGS0rodbquiaT-eYmHTMaa4ATeT4KJcvk=s1360-w1360-h1020-rw','popular','مشاوي','طبق مشاوي مشكل','تشكيلة من اللحوم المشوية تقدم مع الأرز أو الخبز'],
['Grills','Grilled Chicken Meal','Juicy grilled chicken served with sides','20','10','','https://lh3.googleusercontent.com/gps-cs-s/APNQkAHZEXNiNDA_Yat627QcoX-hAX2Z1trgsZh3-_TUUvOEgbedqmL-Z-2JGSFygZhVyqWmjXfa3G_xj8i3pQJ5jFUjp9FumckZkdWP1rrjyjbcM9UCrrjRLt0AH24Hhw5FAVV2J7af=s1360-w1360-h1020-rw','popular,veg,spicy','مشاوي','وجبة دجاج مشوي','دجاج مشوي طري يقدم مع المقبلات'],
['Grills','Beef Steak Meal','Grilled beef steak served with sides','35','','','https://lh3.googleusercontent.com/p/AF1QipPEOdK7OW7XSjrnbCMLM_svgaexE_jgm_thxlY8=s1360-w1360-h1020-rw','','مشاوي','وجبة ستيك لحم','شريحة لحم مشوية تقدم مع أطباق جانبية'],
['Hot Drinks','Cappuccino','Coffee with steamed milk foam','10','','','https://drive.google.com/thumbnail?id=1vkyB4XjIAS8abFiLjGyuA8SlRSLc70YE&sz=w1000','','مشروبات ساخنة','كابتشينو','قهوة بالحليب مع رغوة كثيفة']
];
