import download from '../../assets/SVG/download.svg'
export default function Announce2 () {


    return (
        <nav className="Announce2">
            <section>
                <div>
                    <div>
                        <span><b>Stardew Valley</b></span>
                    </div>

                    <div className="download-button">
                            <img src={download} alt='download'></img>
                            <div><b><span className='announce2-span'>Digital</span>$14.99</b></div>
                            <button>Direct Download</button>
                    </div>
                </div>
            </section>
        </nav>
    )
}