module.exports = {
  add,
  sub,
  mul,
  div,
  abs,
  pow,
  exp,
  reduce
};

function add(r1, r2) {
  const result = {
    num: 0,
    den: 1
  };

  result.num = r1.num * r2.den + r2.num * r1.den;
  result.den = r1.den * r2.den;

  return reduce(result);
}

function sub(r1, r2) {
  const result = {
    num: 0,
    den: 1
  };

  result.num = r1.num * r2.den - r2.num * r1.den;
  result.den = r1.den * r2.den;

  return reduce(result);
}

function mul(r1, r2) {
  return reduce({
    num: r1.num * r2.num,
    den: r1.den * r2.den
  });
}

function div(r1, r2) {
  return reduce({
    num: r1.num * r2.den,
    den: r1.den * r2.num
  });
}

function abs(r) {
  return reduce({
    num: Math.abs(r.num),
    den: Math.abs(r.den)
  });
}

function pow(r, x) {
  if (x % 1 === 0) {
    return reduce({
      num: Math.pow(r.num, x),
      den: Math.pow(r.den, x)
    });
  }
  return Math.pow(r.num, x) / Math.pow(r.den, x);
}

function exp(x, r) {
  return Math.pow(Math.pow(x, r.num), 1 / r.den);
}

function reduce(r) {
  const _gcd = gcd(r.num, r.den);

  return {
    num: r.num / _gcd,
    den: r.den / _gcd
  };
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
