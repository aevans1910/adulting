import React from 'react'

export default function Home() {
    return (
        <div className="container">
            <div className="categories">
                <button>Health</button>
                <button>Fitness</button>
                <button>Finances</button>
                <button>Home</button>
                <button>Food</button>
                <button>Repairs</button>
            </div>
            <div className="trending-post">
                <div className="image"></div>
                <div className="description">
                    <h2>Trending Post of the Day</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor lorem at mauris posuere, non pharetra elit suscipit. In aliquet gravida vestibulum. Fusce rhoncus sit amet odio nec tempor. Maecenas vestibulum imperdiet ligula, nec elementum massa fringilla et. Praesent lectus arcu, suscipit ut elit ut, tincidunt porta ante.</p>
                </div>
            </div>
            <div className="bottom">
                <div className="latest-news">
                    <h2>Latest News</h2>
                    <div className="article">
                        <div className="image"></div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor lorem at mauris posuere, non pharetra elit suscipit. In aliquet gravida vestibulum. Fusce rhoncus sit amet odio nec tempor. Maecenas vestibulum imperdiet ligula, nec elementum massa fringilla et. Praesent lectus arcu, suscipit ut elit ut, tincidunt porta ante.</p>
                        </div>
                    </div>
                    <div className="article">
                        <div className="image"></div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor lorem at mauris posuere, non pharetra elit suscipit. In aliquet gravida vestibulum. Fusce rhoncus sit amet odio nec tempor. Maecenas vestibulum imperdiet ligula, nec elementum massa fringilla et. Praesent lectus arcu, suscipit ut elit ut, tincidunt porta ante.</p>
                        </div>
                    </div>
                </div>
                <div className="communities">
                    <h2>Communities</h2>
                </div>
            </div>
        </div>
    )
}