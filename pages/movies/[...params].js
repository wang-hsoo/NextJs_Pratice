import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({params}){
    const router = useRouter();
    const [title, id] = params || [];
    
    return (
        <div>
            <Seo title={title} />
            <h4>{title}</h4>
        </div>
    );
}


export async function getServerSideProps({params:{params}}){
    const results = await( await fetch(`http://localhost:3000/api/movies/${params[1]}`)).json();
    console.log(results);
    return{
        props:{
            params
        },
    }
}