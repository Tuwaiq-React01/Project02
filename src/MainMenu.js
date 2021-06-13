import {Component} from 'react'

class MainMenu extends Component {
    render(){
        return(
            <header>
                <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
                    <img src="images/logo.png" alt="logo" width="150" height="50"/>
                </a>

                <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <a class="me-3 py-2 text-dark text-decoration-none" href="#">Characters</a>
                    <a class="py-2 text-dark text-decoration-none" href="#">Search</a>
                </nav>
                </div>

                <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal">Rick and Morty</h1>
                <p class="fs-5 text-muted">The television show Rick and Morty</p>
                </div>
            </header>
        )
    }
}

export default MainMenu