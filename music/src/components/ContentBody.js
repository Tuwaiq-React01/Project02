import React, { Component } from 'react'
import Navigation from './Navigation'
import Charts from './Charts'

export default class ContentBody extends Component {
    render() {
        return (
            <div className="bg-white grid grid-cols-3 mx-auto w-5/6 mt-4 shadow-lg border border-gray-100 rounded-2xl p-4">
                <Navigation/>
                <div className="border-l border-gray-100 col-span-2">
                <Charts/>
                </div>
            </div>
        )
    }
}
