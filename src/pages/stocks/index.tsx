import MyTable from '@/components/Table';
import React, { useState } from 'react';
import style from '../../styles/Stock.module.css'
import MyForm from '@/components/Form';

type Props = {
};





function Stocks({}: Props) {

  const [PageHeading, setPageHeading] = useState(false)

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

  const cancel = () => {
    alert('cancel')
    setPageHeading(!PageHeading)
  }

  return (
    <div className={style.stokeHome}>
      <div className={style.title_section}>
        <h1>{!PageHeading ? "Stocks":"Add New Item" }</h1>
        { !PageHeading && <div>
          <button className={style.addBtn} onClick={()=>setPageHeading(!PageHeading)}>Add</button>
        </div>}
      </div>

      {
        !PageHeading ? 
            <MyTable data={data} onDelete={handleDelete} />
        :
        <MyForm cancel={()=>cancel}/>
      }

     

      
    </div>
  );
}

export default Stocks