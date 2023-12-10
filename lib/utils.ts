import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function encodeFilePathToUrl(filePath: string) {
  const parts = filePath.split('/');
  const encodedParts = parts.map((part) => encodeURIComponent(part));
  return encodedParts.join('/');
}

export function getUrl() {
  if (process.env.NODE_ENV === 'development') {
    return process.env.DEV_URL;
  } else {
    return process.env.PROD_URL;
  }
}
