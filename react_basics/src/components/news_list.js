import React from 'react';
import NewsItem from './news_list_item'; 

const NewsList = (props) => {

    const item = props.news.map((item) => {
        return (
            <NewsItem key={item.id} item={item}/>
        )
    });

    return (
        <div>
            {item}
        </div>
    )
}



export default NewsList; 