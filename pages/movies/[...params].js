import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({params, results}){
    const router = useRouter();
    const [title, id] = params || [];
    console.log(results);
    
    return (
        <div className="container">
            <Seo title={title} />
            <h4>{title}</h4>
            <div className="movieBox">
                <img src={`https://image.tmdb.org/t/p/w500${results.poster_path}`} />
                <div className="movieInfo">
                    <div>play time : {results.runtime}</div>
                    <div>average: {results.vote_average}</div>
                    <div>count: {results.vote_count}</div>
                    <div>genres: {results.genres[0].name || null} / {results.genres[1].name || null} / {results.genres[2].name || null}</div>
                    <div className="overview">{results.overview}</div>
                </div>
            </div>
            
            <Link href={results.homepage}>
                <a>homepage</a>
            </Link>
            <style jsx>{`
                .container{
                    display: flex;
                    flex-direction: column;
                }
                h4{
                    font-size: 24px;
                    font-weight: 700;
                    margin: 10px 10px;
                }
                img{
                    width: 50%;
                }
                .movieBox{
                    display: flex;
                }
                .movieInfo{
                    font-size: 16px;
                    padding: 11px;
                }
                .movieInfo div{
                    margin-bottom: 5px
                }
                .overview{
                    text-align: justify;
                }
                a{
                    font-size: 20px;
                    font-weight: 700;
                    text-align: center;
                    margin-top: 30px;
                    background-color: #d5d5d5;
                    padding: 20px 0;
                    border-radius: 20px
                }
            `}</style>
        </div>
    );
}


export async function getServerSideProps({params:{params}}){
    const results = await( await fetch(`http://localhost:3000/api/movies/${params[1]}`)).json();
    
    return{
        props:{
            params,
            results
        },
        
    }
}