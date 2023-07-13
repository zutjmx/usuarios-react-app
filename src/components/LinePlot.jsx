import * as d3 from "d3";
import PropTypes from 'prop-types';
import { getDatos } from '../services/servicioUsuarios';

const datos = getDatos();

export const LinePlot = ({
    width = 640,
    height = 400,
    marginTop = 20,
    marginRight = 20,
    marginBottom = 20,
    marginLeft = 20
}) => {

    console.log('Datos: ', datos);
    const x = d3.scaleLinear([0, datos.length - 1], [marginLeft, width - marginRight]);
    const y = d3.scaleLinear(d3.extent(datos), [height - marginBottom, marginTop]);
    const line = d3.line((d, i) => x(i), y);

    return (
        <>
            <svg width={width} height={height}>
                <path fill="none" stroke="currentColor" strokeWidth="1.5" d={line(datos)} />
                <g fill="white" stroke="currentColor" strokeWidth="1.5">
                    {datos.map((d, i) => (<circle key={i} cx={x(i)} cy={y(d)} r="2.5" />))}
                </g>
            </svg>
        </>
    );
}

LinePlot.propTypes = {
    data: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
    marginTop: PropTypes.number,
    marginRight: PropTypes.number,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number
}
