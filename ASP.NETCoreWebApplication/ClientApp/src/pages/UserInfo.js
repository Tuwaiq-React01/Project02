import React, { Component } from 'react'

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
      }

    render() {return (
            <div>
                <div className="container m-t5 p-3 text-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQup5Ftt0rmCYYHYmrdZGC8BcoBvL7PmWhLHQ&usqp=CAU" />
                    <div className="conainer m-5 d-flex justify-content-between">
                        <h4>email : sultan.whatever@whatever.com</h4>
                        <h4>Password : **************</h4>
                    </div>
                        <h4>UserName : SSSmmm123</h4>
                </div>
            </div>
        )
    }
}