import { useSelector } from "react-redux";

function Favorites() {
    const art = useSelector(state => state.art);

    return (
        <>
            <h3>Favorites</h3>
                <div className="border shadow m-3 bg-light">
                    {
                    art.map(
                        artItem => {
                            return (
                                <div key={`{artItem.id}`} className="d-flex border m-3">
                                    <p><strong>{artItem.title}</strong></p>
                                    <p> {artItem.artist_display}</p>
                                    <button>Remove</button>
                                </div>
                            );
                        }
                    )
                }
            </div>
        </>
    );
}

export default Favorites;
