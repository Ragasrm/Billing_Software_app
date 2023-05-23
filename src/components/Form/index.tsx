import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Button, Grid, FormHelperText } from '@mui/material';

interface FormFields {
  item_name: string;
  serial_number: string;
  hsn_sac: string;
  purchase_rate: string;
  gst: string;
  supplier_name: string;
}

type MyFormProps = {
    /* other props here */
    cancel: () => void;
  }

const MyForm: React.FC<MyFormProps> = (props) => {
    const {cancel} = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit = (data: FormFields) => console.log(data);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField {...register("item_name", { required: "Item Name is required" })} fullWidth label="Item Name" variant="outlined" />
          {errors.item_name && <FormHelperText error>{errors.item_name.message}</FormHelperText>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField {...register("serial_number", { required: "Serial Number is required" })} fullWidth label="Serial Number" variant="outlined" />
          {errors.serial_number && <FormHelperText error>{errors.serial_number.message}</FormHelperText>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField {...register("hsn_sac", { required: "HSN/SAC is required" })} fullWidth label="HSN/SAC" variant="outlined" />
          {errors.hsn_sac && <FormHelperText error>{errors.hsn_sac.message}</FormHelperText>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField {...register("purchase_rate", { required: "Purchase Rate is required" })} fullWidth label="Purchase Rate" variant="outlined" />
          {errors.purchase_rate && <FormHelperText error>{errors.purchase_rate.message}</FormHelperText>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField {...register("gst", { required: "GST is required" })} fullWidth label="GST" variant="outlined" />
          {errors.gst && <FormHelperText error>{errors.gst.message}</FormHelperText>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField {...register("supplier_name", { required: "Supplier Name is required" })} fullWidth label="Supplier Name" variant="outlined" />
          {errors.supplier_name && <FormHelperText error>{errors.supplier_name.message}</FormHelperText>}
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" style={{ marginRight:10}}>Submit</Button>
          <Button variant="contained" color="secondary" onClick={()=>cancel()}>Cancel</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyForm;
