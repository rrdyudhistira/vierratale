import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function NFTGame() {
  return (
    <div className="page-wrapper">
      <Head>
        <title>NFT Game</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">

            <h1 className="title">NFT Game</h1>
            <p className="description">DNA (Digital NFT Agriculture) adalah dunia Pertanian Digital (Digital Farm) yang digabungan dengan Defi (Decentralize Finace). Yang dimana dalam pelaksanaannya dibentuk dalam sebuah Platform Game Pertanian dengan konsep “P2E“ (Mainkan & Menghasilkan) dengan pengalaman baru yang bisa bersosialisasi sambil menghasilkan.</p>
            <Link href="/contact"><a className="cta">Unlock Wallet</a></Link>
          </div>
        </div>
        {/* <div id="overlay"><h1>WELCOME 2 DA FUTURE</h1></div>
        <div id="hey"><div id="layer-up"></div></div>
        <div id="layer-0">

          <div id="layer-1">
            <div id="layer-2">
              <div id="lines">
                <div id="layer-corner"></div>
              </div>
            </div>
          </div>
        </div> */}

        <div id="mtnZZZ"></div>
      </section>
    </div>
  );
}

export default NFTGame;