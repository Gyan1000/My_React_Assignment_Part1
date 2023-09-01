import  "./List.css";

function List(props)
{    
    
  const listItems=props.items.map((item)=>
      <li className="design" key={item}>{item}</li>
  );
    return (<ul>{listItems}</ul>);
}
export default List;
