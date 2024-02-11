import logo from "./../img/croissance.png"

export const Croissance = () => {
    return (
        <div>
            <img src={logo} alt="Croissance" />
            <h2 className="pourcentage">-0,2%</h2>
            <h3 className="tit">Croissance</h3>
            <h5 className="date">T3 2023</h5>
        </div>
    );
  }