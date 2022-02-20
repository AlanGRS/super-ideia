import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Página Inicial</h1>

            <link href='/sobre'>
                <a>Acessar página sobre</a>
            </link>

        </div>
    )
}

export default Home