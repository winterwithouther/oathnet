import React from "react";
import "../css/Homepage.css"

function Homepage() {
    return <div id="homepage-container">
        <section id="section-1">
            <div className="title-container">
                <h1>Find anyone that left a trace on the Internet</h1>
            </div>
            <div id="selection-container">
                <div className="selection-containers" id="selection-container-1">
                    <button>Domain</button>
                    <button>Discord ID</button>
                    <button>Roblox</button>
                </div>
                <div className="selection-containers" id="selection-container-2">
                    <button>Email</button>
                    <button>IP Address</button>
                    <button>Username</button>
                    <button>Password</button>
                </div>
            </div>
            <div id="search-container">
                <form>
                    <div id="search">
                        <span class="material-symbols-outlined">search</span>
                        <input type="search" placeholder="Search"></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div id="results-container">
                <span>Results</span>
            </div>
        </section>

        <section id="section-2">
            <div className="title-container">
                <h1>Pricing Plans</h1>
                <h6>Pricing tiers that work for all business sizes.</h6>
            </div>
            <div id="pricing-container">
                <div className="pricing-section">
                    <span>Bruh</span>
                </div>
                <div className="pricing-section">
                    <span>Hello</span>
                </div>
                <div className="pricing-section">
                    <span>hello</span>
                </div>
            </div>
        </section>
    </div>
}

export default Homepage