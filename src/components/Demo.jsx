import { useState, useEffect } from "react"
import { copy, linkIcon, loader, tick } from '../assets'
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {

    const [article, setArticle] = useState({
        url: '',
        summary: '',
    });

    const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();

    const handleSubmit = async (e) => {

        // to prevent reloading
        e.preventDefault();

        const {data} = await getSummary({articleUrl: article.url});

        if(data?.summary){
            const newArticle = { ...article, summary:data.summary };

            setArticle(newArticle);

            console.log(newArticle);
        }
    }
    return (
        <section className="mt-16 w-full max-w-xl">
            {/* Search */}

            <div className="flex flex-col w-full gap-2">
                <form className="relative flex justify-center items-center" onSubmit={handleSubmit}>
                    <img src={linkIcon} alt="link_icon" className="absolute left-0 ml-3 w-5 my-2" />
                    {/* Setting the input in such a way that it only accepts the url with https://xyz.com */}
                    <input
                        type="url"
                        placeholder="Enter a URL"
                        value={article.url}
                        onChange={(e) => setArticle({
                            ...article, url: e.target.value
                        })}
                        required
                        className="url_input peer"
                    />

                    {/* Our button will also get focused with this peer input tag */}

                    <button
                        type="submit"
                        className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
                    >
                        →
                    </button>
                </form>
                {/* Browse URL History */}
            </div>
            {/* Display Results */}
        </section>
    )
}

export default Demo
