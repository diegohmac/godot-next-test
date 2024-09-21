import Script from 'next/script';

export default function Game() {
  return (
    <>
      <canvas id="gameCanvas" />
      <Script src="/test.js" />
    </>
  );
}
