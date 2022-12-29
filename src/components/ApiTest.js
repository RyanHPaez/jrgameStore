import axios from "axios";
import { useEffect, useState } from "react";


const options = {
    method: 'GET',
    url: 'https://motorcycle-specs-database.p.rapidapi.com/article/2012/BMW/F%20800%20GS%20Trophy',
    headers: {
        'X-RapidAPI-Key': '0cad2368e9msh95f4fabb4b67d62p1c2b24jsnf9d5ace85b52',
        'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com'
    }
};

function ApiTest() {

    const [search, setSearch] = useState("");

    const [specs, setSpecs] = useState("");

    useEffect(() => {
        // getMotos();

    }, [search]);


    const handleSearch = async (e) => {
        e.preventDefault();
        const make = await axios.get(`https://motorcycle-specs-database.p.rapidapi.com/model/make-name/${search}`, {
            method: ['GET'],
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '0cad2368e9msh95f4fabb4b67d62p1c2b24jsnf9d5ace85b52',
                'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com'
            }
        });
        console.log("Make id", make.data[0].id);

        // const specsData = await axios.get(`https://motorcycle-specs-database.p.rapidapi.com/article/${make.data[0].id}`, {
        //     method: ['GET'],
        //     headers: {
        //         'content-type': 'application/json',
        //         'X-RapidAPI-Key': '0cad2368e9msh95f4fabb4b67d62p1c2b24jsnf9d5ace85b52',
        //         'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com'
        //     }
        // });

        console.log("response", make);
        // console.log("specs data", specsData);
        
        setSpecs(make.data);
    }

    const getMotos = async () => {

    }

    return (
        <div>
            API test
            <form onSubmit={handleSearch}>
                <input
                type="text"
                name='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            < button>Search</button>
            </form>
            

            {JSON.stringify(specs)}
        </div>
    )
}

export default ApiTest;