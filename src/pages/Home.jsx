import { useEffect } from "react"

function Home() {
    useEffect(() => {
        document.title = 'Home'
    }, [])

    return (
        <>
            <h1>This is my Home Page!</h1>
        </>
    )
}

export default Home