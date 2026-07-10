import { useState } from "react";

function URLForm() {

    const [url, setUrl] = useState("");

    const [days, setDays] = useState(7);

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log({
            original_url: url,
            expires_in_days: Number(days),
        });

    };

    return (

        <div className="bg-white rounded-xl shadow p-8">

            <h2 className="text-2xl font-bold">

                Shorten URL

            </h2>

            <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-5"
            >

                <div>

                    <label className="font-medium">

                        Original URL

                    </label>

                    <input

                        type="url"

                        value={url}

                        onChange={(e)=>setUrl(e.target.value)}

                        className="mt-2 w-full border rounded-lg p-3"

                        placeholder="https://example.com"

                    />

                </div>

                <div>

                    <label>

                        Expiration (Days)

                    </label>

                    <input

                        type="number"

                        value={days}

                        onChange={(e)=>setDays(e.target.value)}

                        className="mt-2 w-full border rounded-lg p-3"

                    />

                </div>

                <button

                    className="w-full bg-blue-600 text-white py-3 rounded-lg"

                >

                    Generate Short URL

                </button>

            </form>

        </div>

    );

}

export default URLForm;