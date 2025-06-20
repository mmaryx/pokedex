import { useRouter } from "next/router";

function Home() {
    const router = useRouter();

    return (
        <>
            <div>
                <h1>Home</h1>
                <button onClick={() => router.push('/pokedex')}>Pokédex</button>
            </div>
        </>
    )
}

export default Home;