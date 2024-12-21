export default function NetflixHeaderComponent()
{
    return(
        <>
            <div className="d-flex justify-content-between p-3 m-3">
            <div>
                <h2 className="text-danger">NETFLIX</h2>
            </div>
            <div className="input-group w-25">
                <select className="form-select">
                    <option>Language</option>
                    <option>Hindi</option>
                    <option>English</option>
                </select>
                <button className="btn btn-danger">Signin</button>
            </div>
            </div>
        </>
    )
}