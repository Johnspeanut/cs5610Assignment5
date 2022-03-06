import Square from "./Square";
import "../App.css";


const FourSquare = () => {
    return (
        <div class="FourSquares">
            <div class="fourSquares">
                <Square name="come from parent"/><Square name="come from parent"/>
                <Square name="come from parent"/><Square name="come from parent"/>
            </div>
        </div>
    )
};

export default FourSquare;