
export function isArray(obj: number | number[]): boolean {
    return Object.prototype.toString.call(obj) === "[object Array]";
    }
  
export function verifyGpio(sck: number, cs: number, so: number[]) {
    const set = new Set(so);
    set.add(sck);
    set.add(cs);
    return set.size === so.length + 2;
    }