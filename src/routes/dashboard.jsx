import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { faker } from '@faker-js/faker';
import { Card, Stack } from 'react-bootstrap';


export default function Dashboard(){

    
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
    return (
        <>
            <h1>Dashboard</h1>
            <hr></hr>

            <div className='border m-1'>
              <Bar height = "500px" options={options} data={data} />
            </div>
            <hr></hr>
            <div>
              <Stack direction='horizontal' gap = {3}>

                <Card style={{width: '250px'}}>
                  <Card.Body>
                    <h3>Total Views</h3>
                    <p>1.29 Million</p>
                  </Card.Body>
                </Card>

                <Card style={{width: '250px'}}>
                  <Card.Body>
                    <h3>Total Sales</h3>
                    <p>$512 Million</p>
                  </Card.Body>
                </Card>

                <Card style={{width: '250px'}}>
                  <Card.Body>
                    <h3>Total Cost</h3>
                    <p>$234 Million</p>
                  </Card.Body>
                </Card>

                <Card style={{width: '250px'}}>
                  <Card.Body>
                    <h3>Total Profit</h3>
                    <p>$765 Million</p>
                  </Card.Body>
                </Card>


              </Stack>

              
            </div>
            
        </>
    )
}