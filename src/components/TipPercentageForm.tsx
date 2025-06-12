import { Dispatch } from 'react';
import { OrderAction } from '../reducers/order-reducer';

// This array allows us to avoid repeating the radio input code multiple times.
// We can iterate over it to dynamically render the options in the form.
const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPercentageFormProps = {
  dispatch: Dispatch<OrderAction>,
  tip: number

}

export default function TipPercentageForm({dispatch, tip}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>

      <form action="">
        {tipOptions.map(tipOption => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={e => dispatch({ type: 'set-tip', payload: { tip: +e.target.value}})}
              // Marks the radio button as checked if its value matches the selected tip amount
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
