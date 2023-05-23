import MyTable from '@/components/Table';
import React, { useState } from 'react';
import style from '../../styles/Stock.module.css'

type Props = {};





function Stocks({}: Props) {

  const [data, setData] = useState([
    { 
      id: 1,
      item_name: 'Hikvision 2mb', 
      serial_number:"",
      hsn_sac:'842',
      purchase_rate: 100,
      gst:'18',
      supplier_name:'Hikvision',
    },
    { 
      id: 2,
      item_name: 'Crucial RAM LT', 
      serial_number:"",
      hsn_sac:'84212122',
      purchase_rate: 500,
      gst:'18',
      supplier_name:'Hikvision',
    },

    // Add more rows as needed
  ]);

  const handleDelete = (id:any) => {
    setData(data.filter(row => row.id !== id));
  };
  return (
    <div className={style.stokeHome}>
      <div className={style.title_section}>
        <h1>Stocks</h1>
        <div>
          <button>Add</button>
        </div>
      </div>
      <MyTable data={data} onDelete={handleDelete} />
    </div>
  );
}

export default Stocks