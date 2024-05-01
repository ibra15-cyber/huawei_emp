const test = [
  {
    name: "karim",
    age: 13,
    tel: "33431212133",
  },
  {
    name: "aks",
    age: 14,
    tel: "33431212133",
  },
  {
    name: "tw",
    age: 13,
    tel: "33431212133",
  },
  {
    name: "32r",
    age: 13,
    tel: "33431212133",
  },
  {
    name: "003433",
    age: 13,
    tel: "33431212133",
  },
  {
    name: "karim",
    age: 13,
    tel: "33431212133",
  },
  {
    name: "karim",
    age: 12,
    tel: "33431212133",
  },
];

const tr = test.map((e) => e.age + 3);
console.log(tr);

const tr2 = test.map((e) => (e.age === 13 ? e : "not 13"));

console.log(tr2);
