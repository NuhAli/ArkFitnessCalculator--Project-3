import React from 'react';
import "./Results.css"
const Results = (props) => {
    return (
        <div className="results-container">
            <table>
                <thead>
                    <tr>
                    <th>Calories</th>
                    <th>Protein</th>
                    <th>Carbohydrates</th>
                    <th>Fats</th>
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
