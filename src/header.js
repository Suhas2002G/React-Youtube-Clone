import './header.css';

function Header(props){
    return(
        <>
            <nav class="navbar">
        <div class="navbar-left">
            <img src="ylogo.png" alt="YouTube Logo" class="logo"/>
        </div>
        
        <div class="navbar-center">
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Trending</a></li>
                <li><a href="#">Subscriptions</a></li>
                <li><a href="#">Library</a></li>
                <li><a href="#">History</a></li>
            </ul>
        </div>

        <div class="navbar-right">
            <div class="search-bar">
                <input type="text" placeholder="Search"/>
                <button class="search-button">🔍</button>
            </div>
            <div class="icons">
                {/* <div class="icon">🔔</div>
                <div class="icon">👤</div> */}
            </div>
        </div>
    </nav>
        </>
    );
}
export default Header;