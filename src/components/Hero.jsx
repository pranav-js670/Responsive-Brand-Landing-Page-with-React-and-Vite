import '../App.css';
const Herosection = () =>
{
    return(
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST!</h1>
                <p>WE'RE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-button">
                    <button>Shop Now</button>
                    <button className='category'>Category</button>
                </div>
                <div className="hero-available">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img src="/images/hero-image.png" alt="" />
            </div>
        </main>
    );
};
export default Herosection;