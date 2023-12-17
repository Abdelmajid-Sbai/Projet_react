

const INITIAL_STATE={

    prods:[
        {nom:"Tablet",categorie:'Tablet',price:'$20',image:process.env.PUBLIC_URL+`/imagee/tab2.jpg`},
        {nom:"Tablet",categorie:'Tablet',price:'$20',image:process.env.PUBLIC_URL+`/imagee/tab3.jpg`},
        {nom:"TV",categorie:'TV',price:'$20',image:process.env.PUBLIC_URL+`/imagee/tv.jpg`},
        {nom:"Laptop",categorie:'Ordinateures',price:'$20',image:process.env.PUBLIC_URL+`/imagee/pc.jfif`},
       
      
           ]
}



function Prodprofilestorereducer(state=INITIAL_STATE,action)
{
 
    if(action.type==='ADD')
    {
        let nprod={};       
        nprod.nom=action.payload.nom;
        nprod.categorie=action.payload.categorie;
        nprod.price=action.payload.price;
        nprod.image=action.payload.image;
        let nproduts=[...state.prods];
        nproduts.push(nprod);
        return {prods:nproduts}
    } 
       
    if(action.type==='DEL')
    {        
        let nprods=state.prods.filter((p)=>{
            return p.id!=action.payload.id
        })
        return {prods:nprods}
    }


    return state
}
export default Prodprofilestorereducer;