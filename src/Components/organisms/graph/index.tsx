
import {
    AreaChart,
    YAxis,
    XAxis,
    CartesianGrid,
    Tooltip,
    Area,
  } from "recharts";

  
  export interface GraphProps {
    data: any[];
    height: number;
    width: number;
  }
  
  const Graph = ({ data, height, width}: GraphProps) => {
    const keys = Object.keys(data[0]);
  
    return (
      <div data-testid="area-chart">
          <AreaChart
            width={width}
            height={height}
            data={data}
            data-testid="area-chart"
          >
            <YAxis hide={true} />
            <XAxis hide={true} />
            <CartesianGrid vertical={false} horizontal={false}/>
            <Tooltip />
            {keys.map((key, index) => {
              return (
                <Area
                key={key}
                type="monotone"
                dataKey={key}
                fill="#cde8d3"
                stroke="#a6e7b4"
                />
              );
            })}
          </AreaChart>
          </div>
    );
  };
  
  export default Graph;