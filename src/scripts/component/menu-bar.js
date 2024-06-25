class MenuBar extends HTMLElement{
    _shadowRoot = null;
    _style = null;

    constructor(){
        super();

        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._style = document.createElement('style');
    }
    
    _updateStyle(){
        this._style.textContent = `
        :host {
            display: block;
            width: 100%;

        }

        div {
            padding: 30px 30px;
        }

        .brand-name {
            margin: 0;

            font-size: 44px;
        }

        header.navbar-container{
            width: 100%;
            padding-block: 0.8rem;
            min-height:80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            z-index: 9999;
        }

        nav.nav-list{
            padding: 0 10px;
            margin: 0;
        }

        header.navbar-container .nav-list ul{
            padding-left: 0;
            
            display: flex;
            justify-content: center;
            gap: 4rem 2rem;
        }
        
        header.navbar-container .nav-list li{
            list-style-type: none;
        }
        
        nav a{
            padding: 0.5rem 1.7rem;
            border-radius: 999px;
            
            font-size: 1.4rem;
            text-decoration: none;
            min-height: 44px;
            min-width: 44px;
            color: #D17C44;

        
            transition: all 0.2 ease-in-out;
        }
        
        nav a:hover{
            background-color: #D17C44;
            color: #F5F4F4;
        }
        `;
    }

    _emptyContent(){
        this._shadowRoot.innerHTML = '';
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
        <header class="navbar-container">
            <div>
                <h1 class="brand-name">Restaurant</h1>
            </div>

            <a id="hamburger" href="#">☰</a>

            <nav class="nav-list" id="drawer">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a href="https://www.linkedin.com/in/joni-satrio-sembiring-576854279" target="_blank">About Us</a></li>
                </ul>
            </nav>
        </header>
        `;
    }
}

customElements.define('menu-bar', MenuBar);