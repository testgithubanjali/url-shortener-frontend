import URLForm from "../components/URLForm";
import URLList from "../components/URLList";

function Dashboard() {

    return(

        <div className="min-h-screen bg-slate-100">

            <div className="max-w-6xl mx-auto py-10">

                <h1 className="text-4xl font-bold">

                    Dashboard

                </h1>

                <p className="text-gray-500 mt-2">

                    Manage your shortened URLs

                </p>

                <div className="mt-8">

                    <URLForm/>

                </div>

                <URLList/>

            </div>

        </div>

    )

}

export default Dashboard;