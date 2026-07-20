export default function Preloader() {
  return (
    <div id="preloader">
      <div className="preloader-inner">
        <h1 className="preloader-title">
          <span>LumaDent</span>
          <small>Studio</small>
        </h1>

        <p>Cosmetic Dentistry &amp; Smile Design</p>

        <div className="preloader-smile">
          <img
            src="/images/preloader/smile.webp"
            alt="Bright white smile"
          />

          <span className="preloader-sparkle sparkle-one" />
          <span className="preloader-sparkle sparkle-two" />
          <span className="preloader-sparkle sparkle-three" />
          <span className="preloader-sparkle sparkle-four" />
        </div>
      </div>
    </div>
  );
}