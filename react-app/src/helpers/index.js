export const checkMimeType = file =>
  ["text/plain"].every(type => file.type === type);
