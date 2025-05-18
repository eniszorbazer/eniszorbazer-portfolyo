import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Adres</span>Balıkesir, Türkiye
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Mail</span>{" "}
        <a href="mailto:eniszorbazer@gmail.com">eniszorbazer@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
