import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <div className="mx-auto h-screen mt-16">
                <div className="circle-img"></div>
                <h1 className="text-2xl font-bold text-center my-4 ">user</h1>
                <hr></hr>
                <h2 className="mt-4 font-semibold text-center">Mood</h2>
                <div className="flex gap-4 mt-6">
                    <div className="px-1 bg-purple-200 rounded-full border border-transparent text-center text-4xl shadow-lg">😃</div>
                    <div className="px-1 bg-indigo-200 rounded-full border border-transparent text-center text-4xl shadow-lg">😎</div>
                    <div className="px-1 bg-pink-200 rounded-full border border-transparent text-center text-4xl shadow-lg">🥳</div>
                </div>
            </div>
        )
    }
}
