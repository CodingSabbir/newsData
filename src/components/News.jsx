import { useEffect, useState } from "react";
import Headline from "./Headline";
const News = () => {
const [articles,setArticles]= useState([])
useEffect(()=>{
fetch(' https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=1f89688fdef441f2865f42079531669e')
.then(res=>res.json())
.then(data=>setArticles(data.articles))
},[])
return (
<>
  
    <div className="card card-side bg-base-100 shadow-xl rounded-none">
        <figure><img
                src="https://tds-images.thedailystar.net/sites/default/files/styles/medium_201/public/images/2023/10/13/2023-10-05t144949z_1286539124_up1eja51570it_rtrmadp_3_cricket-worldcup-eng-nzl.jpg"
                alt="Movie" /></figure>
        <div className="card-body">
            <h2 className="card-title">New Zealand took on Bangladesh </h2>
            <p>New Zealand took on Bangladesh last month as part of their preparations for the 50-overs showpiece in
                India</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
            </div>
        </div>
    </div>

    {
    articles.map((data,i)=>(
        <Headline  news={data} key={i} />

        ))
    }

</>
);
};

export default News;





