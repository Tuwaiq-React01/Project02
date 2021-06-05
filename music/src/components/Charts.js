import React, { Component } from 'react'
import axios from "axios";

export default class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charts: [],
            cenCharts: []
        };
    }
    componentDidMount() {
        this.callApi();
    }

    callApi() {
        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/charts/track',
            params: {locale: 'en-US', pageSize: '20', startFrom: '0'},
            headers: {
              'x-rapidapi-key': 'f7f1da0299mshb6e8069126675b5p14e502jsn3f66eae4ec4f',
              'x-rapidapi-host': 'shazam.p.rapidapi.com'
            }
        };
        axios.request(options).then((response) => {
            this.setState({
                charts: response.data.tracks
            });
            console.log(this.state.charts);
        }).catch(function (error) {
            console.error(error);
        });
    }
    getDate() {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth();
        let year = newDate.getFullYear();
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return `${monthNames[month]} ${date}, ${year}`;
    }

    render() {
        let tracks = this.state.charts.filter((track,i)=> i<19);
        let cards = tracks.map((track, i) => (

            <div key={i} className="cards">
                <div className="filter blur-sm cards-img relative" style={{
                    backgroundImage: "url(" + track.images.coverart + ")"
                }}>
                </div>
                <div className="p-2">
                    <div className="h-4 filter blur-md z-0 bg-cover"
                        style={{ backgroundImage: "url(" + track.images.coverart + ")" }}>
                    </div>
                    <div className="flex my-auto gap-4 z-10 -mt-2">
                        <div className="text-2xl font-extrabold pl-2">{i + 1}</div>
                        <div className="cards-info z-10">
                            <h1><a href={track.url}>{track.title}</a></h1>
                            <h5>{track.subtitle}</h5>
                        </div>
                    </div>
                </div>
            </div>
        ));

        return (
            <div className="pl-2">
                <div className="mx-2 mt-4 sm:mx-4 sm:mb-16 mb-8 flex items-baseline justify-between">
                    <div>
                        <h1 className="text-3xl font-extrabold ">Charts</h1>
                    </div>
                    <div className="font-semibold">
                        Week of <span className="underline text-indigo-600">{this.getDate()}</span>
                    </div>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-2 gap-8 sm:gap-12">
                    {cards}
                </div>
            </div>
        )
    }
}
