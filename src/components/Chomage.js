import logo from "./../img/chomage.png"

export const Chomage = () => {
    return (
        <div>
            <img src={logo} alt="Chômage" />
            <h2 className="pourcentage">15.8%</h2>
            <h3 className="tit">Chômage</h3>
            <h5 className="date">T3 2023</h5>
        </div>
    );
  }