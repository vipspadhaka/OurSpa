const Marquee1 = () => {
  return (
    <>
      <section className="marquee-section">
        <div className="marquee">
          <div className="marquee-group">
            <div className="text" data-text="Relaxation ">
              Relaxation
            </div>
            <div className="text" data-text="Luxury Amenities">
              Luxury Amenities
            </div>
            <div className="text" data-text="Personalized Care">
              Personalized Care
            </div>
            <div className="text" data-text="Couples' Spa">
              Couples' Spa
            </div>
          </div>
          <div aria-hidden="true" className="marquee-group">
            <div className="text" data-text="Mesotherapy">
              Mesotherapy
            </div>
            <div className="text" data-text="Treatments">
              Treatments
            </div>
            <div className="text" data-text="Aromatherapy">
              Aromatherapy
            </div>
            <div className="text" data-text="Stress Relief">
              Stress Relief
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Marquee1;
