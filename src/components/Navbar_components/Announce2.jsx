import download from '../../assets/SVG/download.svg'
export default function Announce2 () {


    return (
        <nav className="Announce2">
            <section>
                <div>
                    <div>
                        <span>Stardew Valley</span>
                    </div>

                    <div className="download-button">
                            <img src={download} alt='download'></img>
                            <div>Digital $14.99</div>
                            <button>Direct Download</button>
                    </div>
                </div>
            </section>
        </nav>
    )
}