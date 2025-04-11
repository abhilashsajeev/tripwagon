import LocalTaxi, { TaxiData } from "@/components/sabarimala/LocalTaxiHead"
import { PAGE_DATA } from "@/components/sabarimala/pageData";








export default function Page({ params }: any) {
    const { id }:any = params;
    const  data:TaxiData =  PAGE_DATA[id] ;

   
    return (<>
       <LocalTaxi data={data} id={id}/>
    </>)
}