declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css';

declare module '*.svg' {
  const ref: string;
  export default ref;
}
declare module '*.webp' {
  const ref: string;
  export default ref;
}
