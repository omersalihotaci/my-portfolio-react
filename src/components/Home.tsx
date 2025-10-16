import Foto from "../assets/foto2.png"
function Home() {
    return (
        <div className="md:pt-30 pt-7">
            <img
                src={Foto}
                className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto "
            />
            <section className="py-10">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-2xl sm:text-xl  font-bold uppercase tracking-wider text-indigo-400 mb-4">
                        Hello, I'm Ömer
                    </p>
                    <h1 className="text-4xl sm:text-2xl font-extrabold leading-tight mb-4">
                        I code, learn, and improve every day
                    </h1>
                    <p className="text-lg text-slate-300 mb-8">
                        I have a huge passion for building and creating things
                        with code. I'm training myself to become a future
                        Full-Stack Developer.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Home;
