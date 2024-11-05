import Image from 'next/image';

export default function Home() {
    return (
        <div id="wrap">
            <header id="header">header</header>
            <div className="intro">intro</div>
            <main id="container">
                <section className="sec-g">
                    <div className="inner">
                        <h2 className="sec-g__title">section title</h2>
                        <p className="sec-g__desc">section subtitle</p>
                        <div className="sec=g al">section content</div>
                        <a href="#" className="more">
                            more section
                        </a>
                        SORRY
                    </div>
                </section>
                <section className="sec-g">
                    <div className="inner">
                        <h2 className="sec-g__title">section title</h2>
                        <p className="sec-g__desc">section subtitle</p>
                        <div className="sec=g al">section content</div>
                        <a href="#" className="more">
                            more section
                        </a>
                        SORRY
                    </div>
                </section>
                <section className="sec-g">
                    <div className="inner">
                        <h2 className="sec-g__title">section title</h2>
                        <p className="sec-g__desc">section subtitle</p>
                        <div className="sec=g al">section content</div>
                        <a href="#" className="more">
                            more section
                        </a>
                        SORRY
                    </div>
                </section>
                main
            </main>
            <footer id="footer">footer</footer>
        </div>
    );
}
