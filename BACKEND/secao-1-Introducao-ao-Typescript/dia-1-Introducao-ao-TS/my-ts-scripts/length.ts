export function convert(value: number, baseUnit: string, convertionUnit: string): number {
  const UNITS: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  
  const fromIndex: number = UNITS.indexOf(baseUnit); 
  const toIndex: number = UNITS.indexOf(convertionUnit); 
  const exponent: number = toIndex - fromIndex; 

  return value * Math.pow(10, exponent);
}