import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function chunkObjectValues(obj:object, n:number) {
  const values = Object.values(obj); 
  const result = [];
  const chunkSize = Math.ceil(values.length / n); 

  for (let i = 0; i < n; i++) {
    const start = i * chunkSize;
    const end = start + chunkSize;
    result.push(values.slice(start, end)); 
  }

  return result;
}