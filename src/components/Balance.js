import logo from "./../img/balance.png"


export const Balance = () => {
    return (
      <div>
        <img src={logo} alt="Balance" />
          <h2 className="pourcentage">-526 MD</h2>
          <h3 className="tit">Balance Commerciale</h3>
          <h5 className="date">Décembre 2023</h5>
      </div>
    );
  }