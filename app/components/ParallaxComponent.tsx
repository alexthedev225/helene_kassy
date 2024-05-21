

const ParallaxComponent = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/bgHeader.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute text-center">
        <p className="text-lg text-white mb-4">L'AMBITION EST LA PREMIÈRE ÉTAPE VERS LE</p>
        <p className=" text-9xl text-white font-extrabold tracking-widest mb-4">SUCCES</p>
        <button className="parallax-button mt-4">Réserver</button>
      </div>
    </div>
  );
};

export default ParallaxComponent;
