import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from '@ant-design/charts';

const URL_FETCH = 'http://localhost:5000/records/piechart';

const PieChart = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const { data } = await axios.get(URL_FETCH);
          setData(data);
        }
  
        fetchData();
    }, []);

    // Pie Chart's config
    const config = {
        appendPadding: 10, 
        autoFit: true,
        data: data,
        angleField: 'value',
        colorField: 'type',
        color: ['#002EB8', '#1F1F1F', '#663300', '#B8002E'],
        radius: 0.9,
        label: {
        type: 'inner',
        offset: '-30%',
        content: function content(_ref) {
            var percent = _ref.percent;
            return ''.concat(Math.floor(percent * 100), '%');
        },
        style: {
            fontSize: 14,
            textAlign: 'center',
        },
        },
        interactions: [{ type: 'element-active' }],
    };

    return <Pie {...config} />;
};
  
export default PieChart;