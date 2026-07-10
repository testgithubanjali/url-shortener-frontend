function URLList() {

    const urls = [

        {

            short:"Abc123",

            original:"https://google.com",

            clicks:12

        },

        {

            short:"XYZ456",

            original:"https://github.com",

            clicks:4

        }

    ];

    return(

        <div className="bg-white rounded-xl shadow p-8 mt-8">

            <h2 className="text-2xl font-bold mb-5">

                Recent URLs

            </h2>

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="text-left py-3">

                            Short URL

                        </th>

                        <th>

                            Original URL

                        </th>

                        <th>

                            Clicks

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        urls.map((url,index)=>(

                            <tr
                                key={index}
                                className="border-b"
                            >

                                <td className="py-3">

                                    {url.short}

                                </td>

                                <td>

                                    {url.original}

                                </td>

                                <td>

                                    {url.clicks}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    )

}

export default URLList;