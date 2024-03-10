import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles.css"


const socialMedia = [
    {
        icon:"fa-facebook",
        href:"https://www.facebook.com/diaz.rezqi.9/"
    },
    {
        icon:"fa-instagram",
        href:"https://www.instagram.com/diaz_rezqi/"
    },
    {
        icon:"fa-twitter",
        href:"https://twitter.com/diaz_rezqi"
    },
    {
        icon:"fa-linkedin",
        href:"https://www.linkedin.com/in/diaz-rezqi/"
    },
    {
        icon:"fa-github",
        href:"https://www.instagram.com/diaz_rezqi/"
    },

]


function App() {
    return(
        <div className="card">
            <div className="top">
                <Header/>
                <Identity/>
            </div>
            <div className="bottom">
                <Biodata/>
                <Highlight/>
            </div>
        </div>

    )
}

function SocialButton({icon,link}){
    return(
        <button onClick={()=>window.open(link,"_blank")} >
            <i className={`fa ${icon}`}></i>
        </button>
    )
}
function Header() {
    const middleIndex = Math.floor(socialMedia.length/2)
    const socialLeft = socialMedia.slice(0,middleIndex);
    const socialRight = socialMedia.slice(middleIndex);

    return (
        <>
            <div className="social-buttons">
                {socialLeft.map((data,index) =>
                <SocialButton icon={data.icon} link={data.href}/>)}
            </div>
            <div className="social-buttons right">
                {socialRight.map((data,index) =>
                    <SocialButton icon={data.icon} link={data.href}/>)}
            </div>
        </>
    )
}

function Identity() {
    return (
        <div className="text">
            <div className="name-wrapper">
                <div className='name'>Black Cat</div>
            </div>
            <div className="title">Meow Engineer</div>
        </div>
    )

}

function Biodata() {
    return(
        <div className="desc">
            <p>My name ist <b>Black Cat</b> im Ceo from CatDev</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci at consequatur enim error inventore nihil quae quisquam,
                recusandae reiciendis unde! Expedita ipsam maxime pariatur perferendis reiciendis!
                Ab delectus dicta officiis.</p>
        </div>
    )
}

function Badge({text}) {
    return(
        <button>
            <div className="height">{text}</div>
        </button>
    )

}

function Highlight() {
    return (
        <div className="buttons">
        <Badge text="👩‍🚀 Phd"/>
            <Badge text="🎮 Streamer"/>
            <Badge text="👨‍⚖️ Scientist"/>
        </div>
    )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
