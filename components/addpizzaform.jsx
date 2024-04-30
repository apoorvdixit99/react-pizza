import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {data, toppings} from '../data';

function AddPizzaForm() {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (newPizza) => {
    newPizza['id'] = parseInt(newPizza['id']);  //Convert id from string to int
    data.push(newPizza);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>ID:</label>
      <input type="number" {...register('id', { required: true })} />

      <br/>

      <label>Pizza Name:</label>
      <input type="text" {...register('pizza', { required: true })} />

      <br/>

      <label>Toppings:</label>
      {toppings.map((topping) => (
        <label>
          <input type="checkbox" name="toppings" value={topping} {...register('toppings')}/>
          {topping}
        </label>
      ))}

      <br/>

      <label>Fan Favourite?</label>
      <label>
        <input type="radio" name="fanFavourite" value="yes" {...register('fanFavourite')}/>
        Yes
      </label>
      <label>
        <input type="radio" name="fanFavourite" value="no" {...register('fanFavourite')}/>
        No
      </label>

      <br/>

      <label>Available for Delivery?</label>
      <label>
        <input type="radio" name="delivery" value="yes" {...register('delivery')}/>
        Yes
      </label>
      <label>
        <input type="radio" name="delivery" value="no" {...register('delivery')}/>
        No
      </label>

      <br/>


      {errors.firstName && <span>This field is required</span>}
      <input type="submit" />
    </form>
    
  );
}

export default AddPizzaForm;
