import * as React from 'react';
//import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');
  const { id } = useParams();
  const [product, setProduct] = React.useState([]);
  //const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await axios.get(`https://admin.juciparo.com/api/v1/product/${id}`)
    .then(function(response) {
      setProduct(response?.data?.data);
    })
    };
    React.useEffect(() => {
      getProducts();
    }, [id]);


 
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>NOT SPECIFIED</em>
          </MenuItem>
          <MenuItem value={10}>10{product?.size}</MenuItem>
          <MenuItem value={20}>20{product?.size}</MenuItem>
          <MenuItem value={30}>30{product?.size}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}