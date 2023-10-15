import React from 'react';

const Headline = (props) => {
// console.log(props)
const {author,publishedAt,title,url}=props.news;
const {name}=props.news.source
console.log(props)
    return (
        <>
            <div data-theme="light" className="    w-96  my-5 border-2 rounded-md">
                <img src={url} alt="img" />
                <div className='my-5'>
                <h1 className='text-[22px] text-red-400 font-mono my-2'>{author}</h1>
                <p className='text-[16px] text-blue-400 font-serif '>{name}</p>
                <p>{title}</p>
                <p  className='mt-3 text-gray-400'>{publishedAt}</p>
                </div>
            </div>

         
        </>
    );
};

export default Headline;


