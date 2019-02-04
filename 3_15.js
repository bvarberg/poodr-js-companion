class Gear {
  constructor(chainring, cog, rim, tire) {
    this._chainring = chainring;
    this._cog = cog;
    this._wheel = new Wheel(rim, tire);
  }

  get chainring() { return this._chainring; }
  get cog() { return this._cog; }
  get wheel() { return this._wheel; }

  gear_inches() {
    return this.ratio() * this.wheel.diameter();
  }

  ratio() {
    return this.chainring / this.cog;
  }
}

class Wheel {
  constructor(rim, tire) {
    this._rim = rim;
    this._tire = tire;
  }

  get rim() { return this._rim; }
  get tire() { return this._tire; }

  diameter() {
    return this.rim + (this.tire * 2);
  }
}

console.log(new Gear(52, 11, 26, 1.5).gear_inches());
// => 137.0909090909091

