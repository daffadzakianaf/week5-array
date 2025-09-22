const hpList = [
  { brand: "iPhone 16 Pro Max", harga: 24999000, ramrom: "8/256" },
  { brand: "Xiaomi 14T", harga: 5650000, ramrom: "12/512" },
  { brand: "iPhone 15 Plus", harga: 15999000, ramrom: "6/128" },
  { brand: "Infinix HOT 60 Pro", harga: 1999000, ramrom: "8/128" },
  { brand: "Infinix GT 30 Pro", harga: 4399000, ramrom: "12/512" },
  { brand: "Samsung Galaxy Z Fold7", harga: 31499000, ramrom: "16/1T" },
  { brand: "iPhone 12", harga: 8999000, ramrom: "4/128" },
  { brand: "Xiaomi 15 Ultra", harga: 16999000, ramrom: "16/512" },
  { brand: "Samsung Galaxy Z Fold6", harga: 19598000, ramrom: "12/256" },
  { brand: "Huawei Pura 70 Ultra", harga: 16999000, ramrom: "16/512" },
  { brand: "OPPO A58", harga: 2399000, ramrom: "8/128" },
  { brand: "OPPO Reno12 5G", harga: 5299000, ramrom: "12/256" }
];

const brandAndPrice = hpList.map(hp => `${hp.brand} - Rp${hp.harga.toLocaleString()}`);
console.log("=== map() ===");
console.log(brandAndPrice);

const under10jt = hpList.filter(hp => hp.harga < 10000000);
console.log("\n=== filter() harga < 10.000.000 ===");
console.log(under10jt);

const totalHarga = hpList.reduce((total, hp) => total + hp.harga, 0);
console.log("\n=== reduce() total harga semua HP ===");
console.log("Rp" + totalHarga.toLocaleString());

const samsung = hpList.find(hp => hp.brand.toLowerCase().includes("samsung"));
console.log("\n=== find() brand Samsung ===");
console.log(samsung);

const adaAsus = hpList.some(hp => hp.brand.toLowerCase().includes("asus"));
console.log("\n=== some() ada brand Asus? ===");
console.log(adaAsus);

const semuaDiAtas1Jt = hpList.every(hp => hp.harga > 1000000);
console.log("\n=== every() semua HP > 1 juta? ===");
console.log(semuaDiAtas1Jt);
