import LocalTaxi from "@/components/sabarimala/LocalTaxiHead"


const PAGE_DATA:any = {
    'kochi-airport-to-calicut-taxi': {
        'title': "Kochi Airport to Calicut Taxi",
        'subtext': 'Kochi to Calicut cabs',
        'sedan': 4700,
        'lodgy': 5500,
        'innova': 6200
    },
    'kochi-airport-to-kannur-taxi':{
        'title': "Kochi Airport to Kannur Taxi",
        'subtext': 'Kochi to Kannur cabs',
        'sedan': 4700,
        'lodgy': 5500,
        'innova': 6200
    },
}


export default function Page({ params }: any) {
    const { id }:any = params;
    const {title} = id ? PAGE_DATA[id] : '';
    return (<>
       <LocalTaxi title={title}/>
    </>)
}