import { OrderItem } from "../types"

type OrderContentProps = {
    order: OrderItem[]
}

export default function orderContent({order}: OrderContentProps) {
  return (
    <div>
        <h2 className='font-black text-4xl'>Consumo</h2>

        <div className="space-y-3 mt-5">
            {order.length === 0 ? 
                <p className="text-center">La orden esta vacia</p> :
                <p className="text-center">La orden </p>
            }
        </div>
    </div>
  )
}
