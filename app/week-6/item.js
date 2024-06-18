const Item = ({name, quantity, category}) =>{
  return (
      <li className="bg-slate-900 m-3 p-2 w-1/4">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p>Buy {quantity} in {category}</p>
      </li>
  )
}

export default Item
