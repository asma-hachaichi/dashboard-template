import logo from "./../img/population.png"


export const Population = () => {
    return (
        <div>
            <img src={logo} alt="Population" />
            <h2 className="pourcentage">11 850 232</h2>
            <h3 className="tit">Population</h3>
            <h5 className="date">Janvier 2023</h5>
        </div>
    );
  }