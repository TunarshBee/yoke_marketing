import { City } from "../../types/City";

function TableLayout({id,name, country, lat, lng}:City) {
  return (
    <>
      
        <tr>

          <td>{name}</td>
          <td>{country}</td>
          <td>{lat}</td>
          <td>{lng}</td>
        </tr>
   
    </>
    
  );
}

export default TableLayout;
