export function convert(value: number, baseUnit: string, convertToUnit: string): number {

  const UNITS: string[] = [ 'kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg' ];

  const fromUnit: number = UNITS.indexOf(baseUnit);
  const toUnit: number = UNITS.indexOf(convertToUnit);
  const exponent: number = Math.abs(fromUnit - toUnit);

  return value * Math.pow(10, exponent);
};