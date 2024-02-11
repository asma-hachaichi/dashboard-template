import logo from "./../img/INFLATION.png"

export const Inflation = () => {
  return (
    <div>
        <img src={logo} alt="Inflation" />
        <h2 className="pourcentage">7.8%</h2>
        <h3 className="tit">Inflation</h3>
        <h5 className="date">Janvier 2024</h5>
    </div>
  );
}