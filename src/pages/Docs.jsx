import { Outlet, useParams } from "react-router-dom";
import DocsMain from "./DocsMain";
import { useEffect } from "react";

const Docs = ({ fish }) => {
  
  const param = useParams();
  console.log(param);
  {
    return (
      param && Object.keys(param).length === 0 && param.constructor === Object
        ?
        <DocsMain fish={fish} />
        :
        <Outlet fish={fish} />
    )
  }
}
export default Docs