import { useData } from "../../DataProvider";

function BrandLogosSection() {
  const { socialProfLogos } = useData();
  return (
    <div className="brand-logo-section">
      <h2 className="brand-logo-section__title">
        Trusted by nearly 500K paying customers
      </h2>
      <div className="brand-logos-carosel">
        {socialProfLogos.map((brand, index) => (
          <div key={index} className="brand-logo-box">
            <img
              src={`/assets/${brand}.svg`}
              alt=""
              className="brand-logo-box__logo"
            />
          </div>
        ))}
        {socialProfLogos.map((brand, index) => (
          <div key={index + 200} className="brand-logo-box">
            <img
              src={`/assets/${brand}.svg`}
              alt=""
              className="brand-logo-box__logo"
            />
          </div>
        ))}
      </div>
      <div className="brand-logos-carosel brand-logos-carosel--mobile">
        {socialProfLogos.map((brand, index) => (
          <div key={index + 400} className="brand-logo-box">
            <img
              src={`/assets/${brand}.svg`}
              alt=""
              className="brand-logo-box__logo"
            />
          </div>
        ))}
        {socialProfLogos.map((brand, index) => (
          <div key={index + 600} className="brand-logo-box">
            <img
              src={`/assets/${brand}.svg`}
              alt=""
              className="brand-logo-box__logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandLogosSection;
