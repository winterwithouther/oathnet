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
                    <span className="pricing-option">Free</span>
                    <div className="pricing-display">
                        <span className="actual-price">$0</span>
                        <span className="per-month">per month</span>
                    </div>
                    <div className="availability-container">
                        <div className="availables">
                            <span class="material-symbols-outlined">check</span>
                            <span>10 searches</span>
                        </div>
                        <div className="availables">
                            <span class="material-symbols-outlined">check</span>
                            <span>Email lookup</span>
                        </div>
                        <div className="availables">
                            <span class="material-symbols-outlined">close</span>
                            <span>View Results</span>
                        </div>
                        <div className="availables">
                            <span class="material-symbols-outlined">close</span>
                            <span>API access</span>
                        </div>
                    </div>
                    <div className="get-started-container">
                        <button>Get Started</button>
                    </div>
                </div>
                <div className="pricing-section">
                    <span className="pricing-option">Pro</span>
                    <div className="pricing-display">
                        <span className="actual-price">$19.99</span>
                        <span className="per-month">per month</span>
                    </div>
                    <div className="availability-container">
                        <div className="availables">
                            <span class="material-symbols-outlined">check</span>
                            <span>10 searches</span>
                        </div>
                        <div className="availables">
                            <span class="material-symbols-outlined">check</span>
                            <span>Email lookup</span>
                        </div>
                        <div className="availables">
                            <span class="material-symbols-outlined">close</span>
                            <span>View Results</span>
                        </div>
                        <div className="availables">
                            <span class="material-symbols-outlined">close</span>
                            <span>API access</span>
                        </div>
                    </div>
                    <div className="get-started-container">
                        <button>Get Started</button>
                    </div>
                </div>
                <div className="pricing-section">
                    <span className="pricing-option">Enterprise</span>
                    <div className="pricing-display">
                        <span className="actual-price">$189.99</span>
                        <span className="per-month">per month</span>
                    </div>
                    <div className="availability-container">
                        <div className="availables">
                            <span class="material-symbols-outlined">check</span>
                            <span>10 searches</span>
                        </div>
                        <div className="availables">
                            <span class="material-symbols-outlined">check</span>
                            <span>Email lookup</span>
                        </div>
                        <div className="availables">
                            <span class="material-symbols-outlined">close</span>
                            <span>View Results</span>
                        </div>
                        <div className="availables">
                            <span class="material-symbols-outlined">close</span>
                            <span>API access</span>
                        </div>
                    </div>
                    <div className="get-started-container">
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Homepage