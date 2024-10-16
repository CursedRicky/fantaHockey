function Classifica () {
    return (
        <div className="table-responsive container rounded-3">
            <table className="table table-striped table-warning border rounded-5">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">Team</th>
                    <th scope="col">P</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr>
                    <th scope="row">1</th>
                    <td>TEAM0</td>
                    <td>23</td>
                    </tr>

                    <tr>
                    <th scope="row">2</th>
                    <td>TEAM1</td>
                    <td>18</td>
                    </tr>

                    <tr>
                    <th scope="row">3</th>
                    <td>TEAM2</td>
                    <td>15</td>
                    </tr>

                    <tr>
                    <th scope="row">4</th>
                    <td>TEAM3</td>
                    <td>10</td>
                    </tr>

                    
                </tbody>
            </table>
        </div>
    );
}

export default Classifica;