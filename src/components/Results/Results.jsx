import React from 'react';
import "./Results.css"
const Results = (props) => {
    return (
        <div className="results-container">
            <table>
                <thead>
                    <tr>
                        <th>
                            Calories
                            <br></br>
                            <br></br>
                            <span className="mobile-results">
                                {`${props.data.tdee } Kcal`}
                                </span>
                        </th>
                        <th>
                            Protein
                            <br></br>
                            <br></br>
                            <span className="mobile-results">
                                {`${props.data.proteinRequirment}  g`}
                                </span>
                        </th>
                        <th>
                            Carbs
                            <br></br>
                            <br></br>
                            <span className="mobile-results">
                                {`${props.data.carbRequirement} g`}
                            </span>
                        </th>
                        <th>
                            Fats
                            <br></br>
                            <br></br>
                            <span className="mobile-results">
                                {`${props.data.fatRequirment} g`}
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{`${props.data.tdee} Kcal`}</td>
                        <td>{`${props.data.proteinRequirment} g`}</td>
                        <td>{`${props.data.carbRequirement} g`}</td>
                        <td>{`${props.data.fatRequirment} g`}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Results;
