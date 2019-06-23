class chrono {
  constructor(autostart = true) {
    this.start;
    this.enlapsed;
    this.end;
    autostart && this.start();
  }
  start() {
    this.start = new Date();
  }
  stop() {
    this.end = new Date();
    return this.getEnlapsed();
  }
  getEnlapsed() {
    // https://stackoverflow.com/questions/643782/how-to-check-whether-an-object-is-a-date
    if (this.end instanceof Date) {
      return this.end - this.start;
    } else {
      this.enlapsed = new Date();
      return this.enlapsed - this.start;
    }
  }
}

function resolverLuegoDe2Segundos(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function sumar1(x) {
  const a = await resolverLuegoDe2Segundos(20);
  const b = await resolverLuegoDe2Segundos(30);
  return x + a + b;
}

let timer1 = new chrono();
sumar1(10).then(v => {
  console.log('Sumar 1:', v);
  console.log("tiempo sumar1 ", timer1.stop());
  // imprime 60 luego de 4 segundos.
});

async function sumar2(x) {
  const p_a = resolverLuegoDe2Segundos(20);
  const p_b = resolverLuegoDe2Segundos(30);
  return x + await p_a + await p_b;
}

let timer2 = new chrono();
sumar2(10).then(v => {
  console.log('Sumar 2:',v);
  console.log("tiempo sumar2 ", timer2.stop());
  // imprime 60 luego de 2 segundos.
});
