import Table from 'react-bootstrap/Table';

export const Tableau = () => {
  return (
    <div className='tab'>
        <br/>
        <h5>Nombre d'élèves inscrits au 1er cycle de l'enseignement</h5>
        <br/><br/>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>2010</th>
            <th>2012</th>
            <th>2014</th>
            <th>2016</th>
            <th>2018</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Masculin</td>
                <td>520 884</td>
                <td>534 674</td>
                <td>552 522</td>
                <td>570 894</td>
                <td>596 727</td>
            </tr>
            <tr>
                <td>Féminin</td>
                <td>482 133</td>
                <td>494 885</td>
                <td>513 971</td>
                <td>529 896</td>
                <td>552 518</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>1 003 017</td>
                <td>1 029 559</td>
                <td>1 066 493</td>
                <td>1 100 790</td>
                <td>1 149 245</td>
            </tr>
        </tbody>
        </Table>
    </div>
  );
}