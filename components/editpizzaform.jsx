import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import {data, toppings, deletePizza} from '../data';

function EditPizzaForm() {

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { id } = useParams();
  const oldPizza = data.filter(pizza => pizza.id == id)[0];
  console.log('oldPizza', oldPizza);

  const onDelete = () => {
    deletePizza(id);
    navigate('/');
  }

  const onSubmit = (newPizza) => {
    deletePizza(id);
    newPizza['id'] = parseInt(id);  //Convert id from string to int
    data.push(newPizza);
    navigate('/');
  };

  return (
    <React.Fragment>
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>ID:</label>
      <input type="number" value={oldPizza.id} disabled />

      <br/>

      <label>Pizza Name:</label>
      <input type="text" defaultValue={oldPizza.pizza} {...register('pizza', { required: true })} />

      <br/>

      <label>Toppings:</label>
      {toppings.map((topping) => (
        <label>
          <input type="checkbox" name="toppings" value={topping} defaultChecked={oldPizza.toppings.includes(topping)} {...register('toppings')}/>
          {topping}
        </label>
      ))}

      <br/>

      <label>Fan Favourite?</label>
      <label>
        <input type="radio" name="fanFavourite" value="yes" defaultChecked={oldPizza.fanFavourite=="yes"} {...register('fanFavourite')}/>
        Yes
      </label>
      <label>
        <input type="radio" name="fanFavourite" value="no" defaultChecked={oldPizza.fanFavourite=="no"} {...register('fanFavourite')}/>
        No
      </label>

      <br/>

      <label>Available for Delivery?</label>
      <label>
        <input type="radio" name="delivery" value="yes" defaultChecked={oldPizza.delivery=="yes"} {...register('delivery')}/>
        Yes
      </label>
      <label>
        <input type="radio" name="delivery" value="no" defaultChecked={oldPizza.delivery=="no"} {...register('delivery')}/>
        No
      </label>

      <br/>


      {errors.firstName && <span>This field is required</span>}
      <input type="submit" value="Update"/>
    </form>
    <button onClick={onDelete}>Delete</button>
    </React.Fragment>
  );
}

export default EditPizzaForm;
