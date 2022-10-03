import { Select } from 'antd';
import React from 'react';
import '../../App.css';


const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Selectlocation = () => (
  <>
    <Select
      defaultValue="Bangalore"
    
      onChange={handleChange}
    >
      <Option value="Bangalore">Bangalore</Option>
      <Option value="lucy">Mysore</Option>
      <Option value="disabled" disabled>
        Delhi
      </Option>
     
    </Select>

  </>
);

export default Selectlocation;
